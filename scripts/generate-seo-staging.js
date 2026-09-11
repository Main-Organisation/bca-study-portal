#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
// default staging out dir
const DEFAULT_STAGING_OUT = path.join(ROOT, 'seo-staging');
const DEFAULT_PROD_OUT = path.join(ROOT, 'seo-production-dry-run');

// CLI args parsing (no external deps)
const rawArgs = process.argv.slice(2);
const argv = {};
rawArgs.forEach(arg => {
  if (!arg) return;
  if (arg.startsWith('--')) {
    const [k,v] = arg.slice(2).split('='); argv[k]= v===undefined? true : v;
  } else if (arg.startsWith('-')) {
    const [k,v] = arg.slice(1).split('='); argv[k]= v===undefined? true : v;
  }
});
const MODE = argv.mode || argv.m || 'staging'; // 'staging' or 'production'
const OUT_DIR = MODE === 'production' ? (argv.out || DEFAULT_PROD_OUT) : (argv.out || DEFAULT_STAGING_OUT);


// Determine site origin from repository files (CNAME or known meta references)
let SITE_ORIGIN = 'https://bcastudyportal.in';
try {
  const cnamePath = path.join(ROOT, 'CNAME');
  if (fs.existsSync(cnamePath)) {
    const cname = fs.readFileSync(cnamePath, 'utf8').trim();
    if (cname) SITE_ORIGIN = `https://${cname}`;
  } else {
    // fallback: check index.html meta tags for a canonical site reference
    const indexPath = path.join(ROOT, 'index.html');
    if (fs.existsSync(indexPath)) {
      const idx = fs.readFileSync(indexPath, 'utf8');
      const m = idx.match(/content="https?:\/\/([^\"]+)\/images\//i);
      if (m && m[1]) SITE_ORIGIN = 'https://' + m[1];
    }
  }
} catch (e) {
  // ignore and keep default
}

// Production canonical base (no trailing slash)
const CANONICAL_BASE = argv.canonicalBase || SITE_ORIGIN;

const FILES_TO_LOAD = [
  'js/syllabus.js',
  'js/solution-syllabus.js',
  'js/subject-catalog.js',
  'js/notes.js',
  'js/c-solutions.js',
  'js/time-series-notes.js',
  'js/time-series-practical-syllabus.js',
  'js/time-series-practical.js',
  'js/subjects.js',
];

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function siteName() {
  // Try to read site name from package or fallback
  try {
    const pkgPath = path.join(ROOT, 'package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      if (pkg && pkg.name) return pkg.name;
    }
  } catch (e) {}
  return 'BCA Study Portal';
}

function slugify(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\-_\s]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function isPlaceholderHtml(raw) {
  if (!raw || typeof raw !== 'string') {
    return true;
  }

  const text = raw.trim();
  if (!text) {
    return true;
  }

  return (
    /NOTES PLACEHOLDER/i.test(text) ||
    /will be added later/i.test(text) ||
    /placeholder-note/i.test(text) ||
    /This topic has no content/i.test(text)
  );
}

function sanitizeContentForHtml(raw) {
  if (Array.isArray(raw)) {
    return raw
      .map(item => sanitizeContentForHtml(item))
      .filter(Boolean)
      .join('\n');
  }

  if (typeof raw !== 'string') {
    return '';
  }

  return raw.trim();
}

function getTopicLink(subjectId, topicId) {
  return `./${slugify(topicId)}/`;
}

function normalizeEmbeddedH1s(contentHtml) {
  if (!contentHtml || typeof contentHtml !== 'string') {
    return '';
  }

  return contentHtml
    .replace(/<h1\b/gi, '<h2')
    .replace(/<\/h1>/gi, '</h2>');
}

function rewriteLocalAssetPaths(contentHtml, context = 'topic') {
  if (!contentHtml || typeof contentHtml !== 'string') {
    return '';
  }

  function resolveImageName(actualName) {
    if (!actualName) return actualName;
    const imagesDir = path.join(ROOT, 'images');
    if (!fs.existsSync(imagesDir)) return actualName;
    const entries = fs.readdirSync(imagesDir, { withFileTypes: true })
      .filter(entry => entry.isFile())
      .map(entry => entry.name);
    const target = actualName.split('/').pop();
    const match = entries.find(name => name.toLowerCase() === String(target).toLowerCase());
    return match ? actualName.replace(/[^/]+$/, match) : actualName;
  }

  return contentHtml.replace(/(src|href)=(['"])([^'"\s]+)(\2)/gi, (match, attr, quote, value) => {
    if (!value || /^(?:[a-z]+:|\/\/|#)/i.test(value)) {
      return match;
    }

    // Image paths: rewrite to repo-root-relative path from topic page: ../../images/...
    if (/^(?:\.\/|\.\.\/)?images\//i.test(value) || /^images\//i.test(value)) {
      const cleanedValue = value.replace(/^(?:\.\/|\.\.\/)+/, '').replace(/^\//, '');
      const normalizedValue = resolveImageName(cleanedValue.replace(/^images\//i, 'images/'));
      const prefix = context === 'topic' ? '../../' : '../';
      const rewrittenValue = `${prefix}${normalizedValue.replace(/^images\//i, 'images/')}`;
      return `${attr}=${quote}${rewrittenValue}${quote}`;
    }

    // Topic links (slug-like) - do not touch fully-qualified or hash or external
    // Detect probable topic slugs (starts with ./ or ../ or directly a-slug and contains hyphen)
    if (/^(?:\.\/|\.\.\/)?[a-z0-9\-]+\/?$/i.test(value) && !/images\//i.test(value)) {
      const slug = value.replace(/^(?:\.\/|\.\.\/)+/, '').replace(/\/$/, '');
      if (context === 'topic') {
        // from a topic page, to reach sibling topic folder: ../slug/
        return `${attr}=${quote}../${slug}/${quote}`;
      }
      // from a subject landing page (or other): ./slug/
      return `${attr}=${quote}./${slug}/${quote}`;
    }

    return match;
  });
}

function getCanonicalPlaceholder(subjectId, topicId, mode) {
  // mode: 'staging' or 'production'
  if (mode === 'production') {
    const topicPart = topicId ? `/${slugify(topicId)}` : '';
    return `${CANONICAL_BASE}/${subjectId}${topicPart}/`;
  }
  const topicPart = topicId ? `/${slugify(topicId)}` : '';
  return `${SITE_ORIGIN}/seo-staging/${subjectId}${topicPart}/`;
}

function loadRuntime() {
  const context = {
    console,
    process,
    setTimeout,
    clearTimeout,
    module: { exports: {} },
    exports: {},
  };

  vm.createContext(context);

  FILES_TO_LOAD.forEach(relativePath => {
    const fullPath = path.join(ROOT, relativePath);
    const source = fs.readFileSync(fullPath, 'utf8');
    vm.runInContext(source, context, { filename: fullPath });
  });

  return context;
}

function getSubjectData() {
  const runtime = loadRuntime();
  const subjects = vm.runInContext('SUBJECTS', runtime) || [];
  return { subjects, runtime };
}

function extractFirstParagraph(html) {
  if (!html || typeof html !== 'string') return '';
  const m = html.replace(/\n/g,' ').match(/<p[^>]*>(.*?)<\/p>/i);
  if (m && m[1]) return m[1].replace(/<[^>]+>/g, '').trim();
  // fallback: first 160 chars of text
  const txt = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g,' ').trim();
  return txt.length > 0 ? txt.slice(0, 200) : '';
}

function pickFirstImage(html) {
  if (!html || typeof html !== 'string') return null;
  const m = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (m && m[1]) return m[1];
  return null;
}

function buildSubjectLandingHtml(subject, noteEntries, practicalEntries, subjectTopicRecords, mode) {
  const subjectId = subject.id;
  const subjectTitle = subject.title || 'Subject';
  const subjectDescription = subject.description || 'Study notes and practicals';

  // Build a set of generated topic IDs for this subject
  const generatedTopicIds = new Set((subjectTopicRecords || []).map(t => t.id));

  // Merge modules for display similar to buildPages
  const syllabus = Array.isArray(subject.syllabus) ? subject.syllabus : [];
  const practicalSyllabus = Array.isArray(subject.practicalSyllabus) ? subject.practicalSyllabus : [];
  const modulesOrdered = [];
  const findModuleByNumber = num => modulesOrdered.find(m => m.number === num);

  syllabus.forEach(m => {
    modulesOrdered.push({ number: m.number || null, title: m.title || '', topics: (Array.isArray(m.topics) ? m.topics.map(t => ({ id: t.id, title: t.title })) : []) });
  });
  practicalSyllabus.forEach(m => {
    const existing = findModuleByNumber(m.number);
    if (existing) {
      existing.topics.push(...(Array.isArray(m.topics) ? m.topics.map(t => ({ id: t.id, title: t.title })) : []));
    } else {
      modulesOrdered.push({ number: m.number || null, title: m.title || '', topics: (Array.isArray(m.topics) ? m.topics.map(t => ({ id: t.id, title: t.title })) : []) });
    }
  });

  const modulesHtml = modulesOrdered.map(mod => {
    const topicsInModule = (mod.topics || []).filter(t => generatedTopicIds.has(t.id));
    if (!topicsInModule.length) return '';
    const list = topicsInModule.map(t => {
      const title = (subjectTopicRecords || []).find(x => x.id === t.id)?.title || t.title || t.id;
      return `<li><a href="${getTopicLink(subjectId, t.id)}">${title}</a></li>`;
    }).join('\n');
    return `
      <section class="module">
        <h2>${mod.title || (mod.number ? 'Module ' + mod.number : 'Module')}</h2>
        <ul>
          ${list}
        </ul>
      </section>
    `;
  }).filter(Boolean).join('\n');

  const introCount = (subjectTopicRecords || []).length;

  const desc = extractFirstParagraph(subjectDescription) || subjectDescription || `Notes and practicals for ${subjectTitle}`;
  const canonicalUrl = getCanonicalPlaceholder(subjectId, '', mode);
  // pick first image and ensure it's absolute to the chosen base
  let ogImage = pickFirstImage(subjectDescription) || `/images/cover.png`;
  if (ogImage && !/^[a-zA-Z]+:|^\/\//.test(ogImage)) {
    const base = mode === 'production' ? CANONICAL_BASE : SITE_ORIGIN;
    ogImage = ogImage.replace(/^\//, '');
    ogImage = `${base}/${ogImage}`;
  } else if (ogImage && ogImage.startsWith('/')) {
    const base = mode === 'production' ? CANONICAL_BASE : SITE_ORIGIN;
    ogImage = `${base}${ogImage}`;
  }

  const head = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subjectTitle)} | ${escapeHtml(siteName())}</title>
  <meta name="description" content="${escapeHtml(desc)}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:title" content="${escapeHtml(subjectTitle)}" />
  <meta property="og:description" content="${escapeHtml(desc)}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${escapeHtml(siteName())}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(subjectTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(desc)}" />
  ${ogImage ? `<meta property="og:image" content="${ogImage}" />` : ''}
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": canonicalUrl,
    "name": subjectTitle,
    "description": desc
  })}</script>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 2rem; color: #1f2937; }
    a { color: #0f766e; }
    .container { max-width: 1100px; margin: 0 auto; }
    .breadcrumb { color: #475569; font-size: 0.95rem; margin-bottom: 1rem; }
    .section { margin-top: 2rem; }
    ul { padding-left: 1.25rem; }
  </style>
</head>
<body>
  <div class="container">
    <nav class="breadcrumb"><a href="${SITE_ORIGIN}/">Home</a> › <span>${escapeHtml(subjectTitle)}</span></nav>
    <h1>${escapeHtml(subjectTitle)}</h1>
    <p>${escapeHtml(desc)} This subject contains ${introCount} generated topic pages organised by module/unit below.</p>
    ${modulesHtml}
  </div>
</body>
</html>`;

  return head;
}

function buildTopicPageHtml(subject, doc, prevTopicId, nextTopicId, mode) {
  const { topic, moduleTitle, moduleNumber, contentHtml, contentType } = doc;
  const subjectId = subject.id;
  const subjectTitle = subject.title || 'Subject';
  const topicTitle = topic.title || 'Topic';
  const canonical = getCanonicalPlaceholder(subjectId, topic.id);

 const normalizedNote = contentHtml && contentHtml.note ? rewriteLocalAssetPaths(normalizeEmbeddedH1s(contentHtml.note), 'topic') : '';
 const normalizedPractical = contentHtml && contentHtml.practical ? rewriteLocalAssetPaths(normalizeEmbeddedH1s(contentHtml.practical), 'topic') : '';

 const noteSection = normalizedNote
   ? `<section><h2>${contentType === 'practical' ? 'Practical / Solution' : 'Notes'}</h2>${normalizedNote}</section>`
   : '';

 const practicalSection = normalizedPractical
   ? `<section><h2>Practical / Solution</h2>${normalizedPractical}</section>`
   : '';

 const variantLabel = contentType === 'combined' ? 'Notes and Practical' : contentType === 'notes' ? 'Notes' : 'Practical';

 const prevLink = prevTopicId ? `<a href="../${slugify(prevTopicId)}/" rel="prev">&larr; Previous</a>` : '';
 const nextLink = nextTopicId ? `<a href="../${slugify(nextTopicId)}/" rel="next">Next &rarr;</a>` : '';
 const navHtml = (prevLink || nextLink) ? `<nav class="topic-nav" aria-label="Topic navigation">${prevLink ? `<span class="prev">${prevLink}</span>` : ''}${nextLink ? `<span class="next">${nextLink}</span>` : ''}</nav>` : '';

 const descSource = normalizedNote || normalizedPractical || '';
 const metaDesc = extractFirstParagraph(descSource) || `${topicTitle} - ${subjectTitle}`;
 const canonicalUrl = getCanonicalPlaceholder(subjectId, topic.id, mode);
 // make og image absolute to chosen base
 let ogImage = pickFirstImage(descSource) || `/images/cover.png`;
 if (ogImage && !/^[a-zA-Z]+:|^\/\//.test(ogImage)) {
   const base = mode === 'production' ? CANONICAL_BASE : SITE_ORIGIN;
   ogImage = ogImage.replace(/^\//, '');
   ogImage = `${base}/${ogImage}`;
 } else if (ogImage && ogImage.startsWith('/')) {
   const base = mode === 'production' ? CANONICAL_BASE : SITE_ORIGIN;
   ogImage = `${base}${ogImage}`;
 }

 const breadcrumbList = {
   "@context": "https://schema.org",
   "@type": "BreadcrumbList",
   "itemListElement": [
     { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_ORIGIN}/` },
     { "@type": "ListItem", "position": 2, "name": subjectTitle, "item": getCanonicalPlaceholder(subjectId, '', mode) },
     { "@type": "ListItem", "position": 3, "name": topicTitle, "item": canonicalUrl }
   ]
 };

 const pageLd = {
   "@context": "https://schema.org",
   "@type": "WebPage",
   "url": canonicalUrl,
   "name": topicTitle,
   "description": metaDesc,
   "mainEntity": {
     "@type": "CreativeWork",
     "name": topicTitle,
     "about": subjectTitle
   }
 };

 return `<!doctype html>
<html lang="en">
<head>
 <meta charset="utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <title>${escapeHtml(topicTitle)} | ${escapeHtml(subjectTitle)}</title>
 <meta name="description" content="${escapeHtml(metaDesc)}" />
 <link rel="canonical" href="${canonicalUrl}" />
 <meta property="og:title" content="${escapeHtml(topicTitle)}" />
 <meta property="og:description" content="${escapeHtml(metaDesc)}" />
 <meta property="og:url" content="${canonicalUrl}" />
 <meta property="og:type" content="article" />
 <meta property="og:site_name" content="${escapeHtml(siteName())}" />
 <meta name="twitter:card" content="summary_large_image" />
 <meta name="twitter:title" content="${escapeHtml(topicTitle)}" />
 <meta name="twitter:description" content="${escapeHtml(metaDesc)}" />
 ${ogImage ? `<meta property="og:image" content="${ogImage}" />` : ''}
 <script type="application/ld+json">${JSON.stringify(breadcrumbList)}</script>
 <script type="application/ld+json">${JSON.stringify(pageLd)}</script>
 <style>
  body { font-family: Arial, sans-serif; line-height: 1.6; margin: 2rem; color: #1f2937; }
  a { color: #0f766e; }
  .container { max-width: 1100px; margin: 0 auto; }
  .breadcrumb { color: #475569; font-size: 0.95rem; margin-bottom: 1rem; }
  .meta { margin-bottom: 1rem; color: #475569; }
  .topic-content { margin-top: 1.5rem; }
  .topic-content h1, .topic-content h2, .topic-content h3 { color: #111827; }
  .topic-content pre, .topic-content code { overflow-x: auto; }
  .topic-content img { max-width: 100%; height: auto; }
  .topic-content table { border-collapse: collapse; width: 100%; }
  .topic-content th, .topic-content td { border: 1px solid #d1d5db; padding: 0.5rem; }
  .topic-nav { display:flex; justify-content:space-between; gap:1rem; margin-top:1.5rem; }
 </style>
</head>
<body>
 <div class="container">
  <div class="breadcrumb"><a href="${getCanonicalPlaceholder(subjectId, '', mode)}">${escapeHtml(subjectTitle)}</a> / ${escapeHtml(topicTitle)}</div>
  <div class="meta">Subject: ${escapeHtml(subjectTitle)} • Module: ${escapeHtml(moduleNumber || '')} ${escapeHtml(moduleTitle || '')} • Type: ${escapeHtml(variantLabel)}</div>
  <h1>${escapeHtml(topicTitle)}</h1>
  <div class="topic-content">
    ${noteSection}
    ${practicalSection}
    ${navHtml}
  </div>
 </div>
</body>
</html>`;
}

function stripInvalidPlaceholderArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(item => typeof item === 'string' && !isPlaceholderHtml(item));
}

function buildPages() {
  const { subjects } = getSubjectData();

  const generatedSubjectPages = [];
  const generatedTopicPages = [];
  const skipped = [];

  // We'll collect planned files first, run collision checks, then write to disk
  const plannedFiles = []; // { rel, abs, content, canonical }

  // keep previous behavior: ensure OUT_DIR is prepared only when writing
  // but remove old output for the target OUT_DIR
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  subjects.forEach(subject => {
    const subjectId = subject.id;
    const subjectDir = path.join(OUT_DIR, subjectId);
    fs.mkdirSync(subjectDir, { recursive: true });

    const syllabus = Array.isArray(subject.syllabus) ? subject.syllabus : [];
    const practicalSyllabus = Array.isArray(subject.practicalSyllabus) ? subject.practicalSyllabus : [];
    const notesMap = subject.notes || {};
    const practicalMap = subject.practicalSolutions || {};

    const validNoteEntries = [];
    const validPracticalEntries = [];

    syllabus.forEach(module => {
      if (!module || !Array.isArray(module.topics)) {
        return;
      }

      module.topics.forEach(topic => {
        if (!topic || !topic.id) {
          return;
        }

        const rawNotes = notesMap[topic.id];
        const cleanedNotes = stripInvalidPlaceholderArray(rawNotes);

        if (cleanedNotes.length === 0) {
          skipped.push({
            subject: subjectId,
            topicId: topic.id,
            reason: 'No substantive notes content in source mapping',
          });
          return;
        }

        validNoteEntries.push({
          id: topic.id,
          title: topic.title || topic.id,
          moduleTitle: module.title || '',
          moduleNumber: module.number || '',
          rawHtml: cleanedNotes.join('\n'),
        });
      });
    });

    practicalSyllabus.forEach(module => {
      if (!module || !Array.isArray(module.topics)) {
        return;
      }

      module.topics.forEach(topic => {
        if (!topic || !topic.id) {
          return;
        }

        const rawPractical = practicalMap[topic.id];
        const cleanedPractical = Array.isArray(rawPractical)
          ? rawPractical.filter(item => typeof item === 'string' && !isPlaceholderHtml(item))
          : [];

        if (cleanedPractical.length === 0) {
          skipped.push({
            subject: subjectId,
            topicId: topic.id,
            reason: 'No substantive practical content in source mapping',
          });
          return;
        }

        validPracticalEntries.push({
          id: topic.id,
          title: topic.title || topic.id,
          moduleTitle: module.title || '',
          moduleNumber: module.number || '',
          rawHtml: cleanedPractical.join('\n'),
        });
      });
    });

    const mergedTopicIds = [];
    const noteIdMap = new Map(validNoteEntries.map(item => [item.id, item]));
    const practicalIdMap = new Map(validPracticalEntries.map(item => [item.id, item]));

    // Merge modules from notes syllabus and practical syllabus by module number when possible
    const modulesOrdered = [];
    const findModuleByNumber = num => modulesOrdered.find(m => m.number === num);

    syllabus.forEach(m => {
      modulesOrdered.push({ number: m.number || null, title: m.title || '', topics: (Array.isArray(m.topics) ? m.topics.map(t => ({ id: t.id, title: t.title })) : []) });
    });

    practicalSyllabus.forEach(m => {
      const existing = findModuleByNumber(m.number);
      if (existing) {
        // append practical topics to same module's topics list
        (existing.topics = existing.topics || []).push(...(Array.isArray(m.topics) ? m.topics.map(t => ({ id: t.id, title: t.title })) : []));
      } else {
        modulesOrdered.push({ number: m.number || null, title: m.title || '', topics: (Array.isArray(m.topics) ? m.topics.map(t => ({ id: t.id, title: t.title })) : []) });
      }
    });

    // Collect topic docs in merged modules order
    const topicDocs = [];
    modulesOrdered.forEach(module => {
      if (!module || !Array.isArray(module.topics)) return;
      module.topics.forEach(topic => {
        const tId = topic && topic.id;
        if (!tId) return;
        const noteDoc = noteIdMap.get(tId);
        const practicalDoc = practicalIdMap.get(tId);
        const noteHtml = noteDoc ? sanitizeContentForHtml(noteDoc.rawHtml) : '';
        const practicalHtml = practicalDoc ? sanitizeContentForHtml(practicalDoc.rawHtml) : '';
        if (!noteHtml && !practicalHtml) return; // not generated
        mergedTopicIds.push(tId);
        const sourceDoc = noteDoc || practicalDoc;
        topicDocs.push({
          topicId: tId,
          title: sourceDoc.title,
          moduleTitle: module.title || '',
          moduleNumber: module.number || '',
          noteHtml,
          practicalHtml,
          kind: (noteHtml && practicalHtml) ? 'combined' : noteHtml ? 'notes' : 'practical',
        });
      });
    });

    // Build subjectTopicRecords for landing page
    const subjectTopicRecords = topicDocs.map(td => ({ id: td.topicId, title: td.title, kind: td.kind, moduleTitle: td.moduleTitle, moduleNumber: td.moduleNumber }));

    // Create landing page (grouped by module)
      // prepare landing page write
      const landingHtml = buildSubjectLandingHtml(subject, validNoteEntries, validPracticalEntries, subjectTopicRecords, MODE);
      const landingRel = path.join(subjectId, 'index.html');
      plannedFiles.push({ rel: landingRel, abs: path.join(OUT_DIR, landingRel), content: landingHtml, canonical: getCanonicalPlaceholder(subjectId, '', MODE) });
      generatedSubjectPages.push({
        subjectId,
        relPath: landingRel,
        noteCount: validNoteEntries.length,
        practicalCount: validPracticalEntries.length,
        topicCount: subjectTopicRecords.length,
      });

      // Now prepare topic pages in order and include prev/next navigation
      for (let i = 0; i < topicDocs.length; i++) {
        const td = topicDocs[i];
        const topicRelDir = path.join(subjectId, slugify(td.topicId));
        const topicRel = path.join(topicRelDir, 'index.html');

        const page = buildTopicPageHtml(subject, {
          topic: { id: td.topicId, title: td.title },
          moduleTitle: td.moduleTitle,
          moduleNumber: td.moduleNumber,
          contentHtml: { note: td.noteHtml, practical: td.practicalHtml },
          contentType: td.kind,
        }, i > 0 ? topicDocs[i-1].topicId : null, i < topicDocs.length - 1 ? topicDocs[i+1].topicId : null, MODE);

        plannedFiles.push({ rel: topicRel, abs: path.join(OUT_DIR, topicRel), content: page, canonical: getCanonicalPlaceholder(subjectId, td.topicId, MODE) });
        generatedTopicPages.push({ subjectId, topicId: td.topicId, relPath: topicRel, type: td.kind });
      }
  });

  return {
    generatedSubjectPages,
    generatedTopicPages,
    skipped,
    plannedFiles, // array of {rel, abs, content, canonical}
  };
}

function safeWritePlannedFiles(plannedFiles) {
  // Collision and validation checks
  const protectedFiles = new Set([
    'index.html','home.html','about.html','contact.html','privacy.html','disclaimer.html','CNAME','robots.txt','sitemap.xml'
  ]);
  const protectedDirs = new Set(['css','js','images']);

  const collisions = [];
  const invalidSlugs = [];
  const duplicateRels = [];
  const relSet = new Set();
  const canonicalMap = new Map();

  plannedFiles.forEach(p => {
    // top-level entry
    const parts = p.rel.split(path.sep).filter(Boolean);
    if (parts.length === 0) {
      invalidSlugs.push({ rel: p.rel, reason: 'empty path' });
      return;
    }
    const top = parts[0];
    if (protectedFiles.has(p.rel) || protectedFiles.has(top)) {
      collisions.push({ type: 'protected', rel: p.rel, top });
    }

    if (protectedDirs.has(top)) {
      collisions.push({ type: 'protected_dir', rel: p.rel, top });
    }

    // repo-root collision: if a file exists at ROOT/<rel>
    const possibleCollisionPath = path.join(ROOT, p.rel);
    if (fs.existsSync(possibleCollisionPath)) {
      collisions.push({ type: 'exists_in_repo', rel: p.rel, path: possibleCollisionPath });
    }

    // slug validity: ensure last segment is not empty and slugify(last) equals last or at least non-empty
    const last = parts[parts.length - (p.rel.endsWith('index.html')?2:1)];
    const candidate = slugify(last || '');
    if (!candidate) {
      invalidSlugs.push({ rel: p.rel, last });
    }

    if (relSet.has(p.rel)) duplicateRels.push(p.rel);
    relSet.add(p.rel);

    const c = p.canonical || '';
    canonicalMap.set(c, (canonicalMap.get(c) || 0) + 1);
  });

  const duplicateCanonicals = [...canonicalMap.entries()].filter(([k,v]) => v>1).map(([k,v])=>({url:k,count:v}));

  return { collisions, invalidSlugs, duplicateRels, duplicateCanonicals };
}

function formatSummary(summary) {
  const { generatedSubjectPages, generatedTopicPages, skipped } = summary;

  const output = [];
  output.push(`Generated subject pages: ${generatedSubjectPages.length}`);
  output.push(`Generated topic pages: ${generatedTopicPages.length}`);
  output.push(`Skipped source topics: ${skipped.length}`);

  if (skipped.length) {
    output.push('Skipped details:');
    skipped.slice(0, 15).forEach(item => {
      output.push(`- ${item.subject} :: ${item.topicId} :: ${item.reason}`);
    });
    if (skipped.length > 15) {
      output.push(`- ... and ${skipped.length - 15} additional skipped topics`);
    }
  }

  return output.join('\n');
}

function walkDirectory(dir, collector) {
  if (!fs.existsSync(dir)) {
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collector.push(fullPath.replace(ROOT + path.sep, ''));
      walkDirectory(fullPath, collector);
    } else {
      collector.push(fullPath.replace(ROOT + path.sep, ''));
    }
  });
}

function main() {
  try {
    const result = buildPages();
    const { plannedFiles, generatedSubjectPages, generatedTopicPages, skipped } = result;

    // Dry-run report: what WOULD be created
    console.log(`\nMODE: ${MODE}`);
    console.log(`Out dir (target): ${OUT_DIR}`);
    console.log('\nDry-run: files that WOULD be created:');
    plannedFiles.forEach(p => console.log(`- ${p.rel}`));

    // Run collision/slug/duplication checks
    const checks = safeWritePlannedFiles(plannedFiles);

    let blocked = false;
    if (checks.collisions.length) {
      console.log('\nCollision report:');
      checks.collisions.slice(0,50).forEach(c => console.log(JSON.stringify(c)));
      blocked = true;
    }
    if (checks.invalidSlugs.length) {
      console.log('\nInvalid slug report:');
      checks.invalidSlugs.forEach(s => console.log(JSON.stringify(s)));
      blocked = true;
    }
    if (checks.duplicateRels.length) {
      console.log('\nDuplicate relative paths:');
      checks.duplicateRels.forEach(r => console.log(r));
      blocked = true;
    }
    if (checks.duplicateCanonicals && checks.duplicateCanonicals.length) {
      console.log('\nDuplicate canonical URLs:');
      checks.duplicateCanonicals.forEach(d => console.log(JSON.stringify(d)));
      blocked = true;
    }

    if (blocked) {
      console.log('\nDRY-RUN ABORTED: collisions or invalid inputs detected. No files written.');
      console.log('\nSummary (planned):');
      console.log(`Generated subject pages: ${generatedSubjectPages.length}`);
      console.log(`Generated topic pages: ${generatedTopicPages.length}`);
      console.log(`Skipped source topics: ${skipped.length}`);
      process.exitCode = 2;
      return;
    }

    // If we reach here, write planned files to OUT_DIR (safe separate folder)
    plannedFiles.forEach(p => {
      const absDir = path.dirname(p.abs);
      fs.mkdirSync(absDir, { recursive: true });
      fs.writeFileSync(p.abs, p.content, 'utf8');
    });

    console.log('\nWrite completed. Files created:');
    const allFiles = [];
    walkDirectory(OUT_DIR, allFiles);
    allFiles.slice(0, 25).forEach(file => console.log(file));
    if (allFiles.length > 25) console.log(`... and ${allFiles.length - 25} additional generated files`);

    console.log('\nSummary:');
    console.log(`Generated subject pages: ${generatedSubjectPages.length}`);
    console.log(`Generated topic pages: ${generatedTopicPages.length}`);
    console.log(`Skipped source topics: ${skipped.length}`);

  } catch (error) {
    console.error('SEO staging generation failed:');
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

main();
