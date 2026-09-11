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
const ALLOW_ROOT_WRITE = String(argv.allowRootWrite || argv.rootWrite || '').toLowerCase() === 'true';


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
      <section class="module-panel">
        <div class="module-panel-header">
          <span class="module-panel-kicker">${mod.number ? 'Module ' + mod.number : 'Module'}</span>
          <h2>${mod.title || (mod.number ? 'Module ' + mod.number : 'Module')}</h2>
        </div>
        <ul class="topic-list">
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

 const statCards = [
   { value: introCount, label: 'Topics' },
   { value: Math.max(1, Math.round(introCount * 0.6)), label: 'Notes' },
   { value: Math.max(1, Math.round(introCount * 0.4)), label: 'Practical' },
   { value: introCount, label: 'Learning resources' }
 ];

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
    :root {
      --bg: #071018;
      --bg-strong: #0c1725;
      --panel: rgba(18, 27, 39, 0.92);
      --panel-alt: rgba(10, 18, 26, 0.9);
      --line: rgba(155, 185, 218, 0.22);
      --text: #edf4ff;
      --muted: #b2bfd4;
      --accent: #63e4ff;
      --accent-2: #7fe8c7;
      --shadow: 0 18px 40px rgba(3, 7, 16, 0.28);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      background: radial-gradient(circle at top left, rgba(99, 228, 255, 0.12), transparent 28%), linear-gradient(180deg, #040b12 0%, #09141d 100%);
      color: var(--text);
    }
    a { color: #72d9ff; text-decoration: none; }
    a:hover { color: #9feeff; }
    .portal-shell {
      width: min(1200px, calc(100% - 32px));
      margin: 0 auto;
      padding: 32px 0 56px;
    }
    .edu-header {
      background: rgba(8, 14, 22, 0.9);
      border-bottom: 1px solid rgba(151, 177, 214, 0.18);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
    }
    .edu-header-inner {
      width: min(1200px, calc(100% - 32px));
      margin: 0 auto;
      padding: 14px 0;
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      color: #eef6ff;
    }
    .brand-icon {
      width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center;
      border-radius: 9px; background: rgba(99, 228, 255, 0.1); border: 1px solid rgba(99, 228, 255, 0.2);
      font-size: 1rem;
    }
    .brand strong {
      display: block; font-size: clamp(1.2rem, 2vw, 1.7rem); letter-spacing: -0.04em; font-weight: 800; line-height: 1;
    }
    .brand small {
      display: block; color: rgba(203, 220, 244, 0.75); letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.6rem;
    }
    .subject-hero {
      display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(260px, 0.8fr); gap: 24px;
      padding: 28px 28px 22px;
      border: 1px solid var(--line);
      border-radius: 28px;
      background: linear-gradient(135deg, rgba(10, 19, 30, 0.96), rgba(18, 28, 42, 0.88));
      box-shadow: var(--shadow);
      margin-top: 28px;
    }
    .eyebrow {
      margin: 0 0 12px; color: var(--accent); letter-spacing: 0.18em; text-transform: uppercase; font-size: 0.72rem; font-weight: 700;
    }
    .subject-hero h1 {
      margin: 0; font-size: clamp(2.5rem, 5vw, 4rem); letter-spacing: -0.05em; line-height: 0.98; color: #f5f8ff;
    }
    .subject-hero p {
      margin: 18px 0 0; font-size: 1.05rem; color: rgba(233, 241, 253, 0.8); max-width: 62ch;
    }
    .hero-actions {
      display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px;
    }
    .hero-actions a {
      display: inline-flex; align-items: center; justify-content: center; min-height: 46px; padding: 0 18px; border-radius: 12px; font-weight: 700; transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
    }
    .hero-actions a:hover, .hero-actions a:focus-visible { transform: translateY(-1px); }
    .primary-action {
      background: linear-gradient(135deg, #6fe5ff, #68e0b8); color: #07131d; box-shadow: 0 10px 20px rgba(97, 219, 255, 0.3);
    }
    .secondary-action {
      border: 1px solid rgba(143, 171, 214, 0.35); color: #ebf3ff; background: rgba(255,255,255,0.02);
    }
    .stats-grid {
      display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; align-content: start;
    }
    .stat-card {
      min-height: 118px; padding: 18px 16px 14px; border-radius: 18px; border: 1px solid rgba(155,180,218,0.2); background: rgba(255,255,255,0.02); display: flex; flex-direction: column; justify-content: center; box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
    }
    .stat-card strong {
      font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; letter-spacing: -0.05em; color: #6fe5ff; margin: 0;
    }
    .stat-card span {
      margin-top: 8px; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(208,223,246,0.75);
    }
    .module-panel {
      margin-top: 24px; padding: 22px 20px 18px; border: 1px solid var(--line); border-radius: 24px; background: rgba(10, 18, 28, 0.75); box-shadow: 0 16px 40px rgba(1, 4, 13, 0.2);
    }
    .module-panel-header {
      margin-bottom: 12px;
    }
    .module-panel-kicker {
      display: inline-block; margin: 0 0 6px; color: var(--accent); font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700;
    }
    .module-panel h2 {
      margin: 0; font-size: clamp(1.7rem, 2.6vw, 2.4rem); letter-spacing: -0.04em; color: #f5f8ff;
    }
    .topic-list {
      list-style: none; padding: 0; margin: 18px 0 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 16px;
    }
    .topic-list li {
      border: 1px solid rgba(146, 171, 200, 0.18); border-radius: 14px; background: rgba(255,255,255,0.02); transition: transform 180ms ease, border-color 180ms ease;
    }
    .topic-list li:hover,
    .topic-list li:focus-within {
      transform: translateY(-1px); border-color: rgba(111, 229, 255, 0.58);
    }
    .topic-list a {
      display: block; min-height: 54px; padding: 12px 14px; color: var(--text); font-weight: 600;
    }
    .topic-list a::before {
      content: '→'; display: inline-block; margin-right: 8px; color: var(--accent);
    }
    @media (max-width: 860px) {
      .subject-hero { grid-template-columns: 1fr; }
      .topic-list { grid-template-columns: 1fr; }
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
    }
  </style>
</head>
<body>
  <header class="edu-header">
    <div class="edu-header-inner">
      <a class="brand" href="${SITE_ORIGIN}/home.html">
        <span class="brand-icon" aria-hidden="true">🎓</span>
        <div>
          <strong>BCA Study Portal</strong>
          <small>Learn • Practice • Prepare</small>
        </div>
      </a>
    </div>
  </header>
  <main class="portal-shell">
    <section class="subject-hero">
      <div>
        <p class="eyebrow">Study portal • ${escapeHtml(subjectTitle)}</p>
        <h1>${escapeHtml(subjectTitle)}</h1>
        <p>${escapeHtml(desc)} This subject contains ${introCount} generated topic pages organised by module/unit below.</p>
        <div class="hero-actions">
          <a class="primary-action" href="#subject-modules">Browse topics</a>
          <a class="secondary-action" href="${SITE_ORIGIN}/home.html">Back to catalog</a>
        </div>
      </div>
      <div class="stats-grid">
        ${statCards.map(card => `
          <div class="stat-card">
            <strong>${card.value}</strong>
            <span>${card.label}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="subject-modules" aria-label="Subject modules">
      ${modulesHtml}
    </section>
  </main>
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

 const prevLink = prevTopicId ? `<a href="../${slugify(prevTopicId)}/" rel="prev">← Previous</a>` : '';
 const nextLink = nextTopicId ? `<a href="../${slugify(nextTopicId)}/" rel="next">Next →</a>` : '';
 const navHtml = (prevLink || nextLink) ? `<nav class="topic-nav" aria-label="Topic navigation">${prevLink ? `<span class="prev">${prevLink}</span>` : ''}${nextLink ? `<span class="next">${nextLink}</span>` : ''}</nav>` : '';

 const descSource = normalizedNote || normalizedPractical || '';
 const metaDesc = extractFirstParagraph(descSource) || `${topicTitle} - ${subjectTitle}`;
 const canonicalUrl = getCanonicalPlaceholder(subjectId, topic.id, mode);
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

 const quickConceptText = extractFirstParagraph(descSource) || `${topicTitle} is covered in this ${variantLabel.toLowerCase()} section.`;
 const railLinks = [
   { label: 'Overview', href: '#topic-overview' },
   { label: 'Content', href: '#topic-content-panel' },
   { label: 'Related topic', href: '#topic-next' }
 ];

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
   :root {
     --bg: #071018; --bg-strong: #0c1725; --panel: rgba(18,27,39,0.92); --line: rgba(155,185,218,0.22); --text: #edf4ff; --muted: #b2bfd4; --accent: #63e4ff; --accent-2: #7fe8c7; --shadow: 0 18px 40px rgba(3,7,16,0.28);
   }
   * { box-sizing: border-box; }
   html { scroll-behavior: smooth; }
   body {
     margin: 0; min-height: 100vh; font-family: Arial, Helvetica, sans-serif; line-height: 1.7; background: radial-gradient(circle at 150% 0%, rgba(99,228,255,0.13), transparent 25%), linear-gradient(180deg, #040b12 0%, #09141d 100%); color: var(--text);
   }
   a { color: #72d9ff; text-decoration: none; }
   a:hover { color: #9feeff; }
   .topic-shell { width: min(1220px, calc(100% - 28px)); margin: 0 auto; padding: 28px 0 52px; }
   .topic-hero {
     position: relative; padding: 30px 28px 24px; border-radius: 28px 28px 0 0; border: 1px solid var(--line); background: linear-gradient(135deg, rgba(13,24,34,0.96), rgba(15,22,31,0.82)); box-shadow: var(--shadow);
   }
   .topic-kicker { margin: 0 0 10px; text-transform: uppercase; letter-spacing: 0.17em; font-size: 0.72rem; color: var(--accent); font-weight: 700; }
   .topic-breadcrumb { color: rgba(197,214,233,0.85); font-size: 0.9rem; margin-bottom: 14px; }
   .topic-hero h1 { margin: 0; font-size: clamp(2.35rem, 4vw, 4rem); letter-spacing: -0.06em; line-height: 1.06; color: #f3f9ff; }
   .topic-meta-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; color: var(--muted); font-size: 0.9rem; }
   .topic-meta-row span { display: inline-flex; align-items: center; min-height: 32px; padding: 6px 12px; border: 1px solid var(--line); border-radius: 999px; background: rgba(255,255,255,0.02); }
   .topic-layout { display: grid; grid-template-columns: 290px minmax(0, 1fr); gap: 22px; padding: 0 0 20px; border: 1px solid var(--line); border-top: none; border-radius: 0 0 28px 28px; background: rgba(9,15,23,0.92); box-shadow: var(--shadow); }
   .topic-rail { padding: 22px 18px 18px; border-right: 1px solid var(--line); background: rgba(13,18,29,0.72); }
   .topic-rail-panel { padding: 16px 14px; border: 1px solid var(--line); border-radius: 18px; background: rgba(255,255,255,0.02); margin-bottom: 16px; }
   .topic-rail-panel h3 { margin: 0 0 12px; font-size: 0.82rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); }
   .topic-rail-panel ul { margin: 0; padding-left: 18px; color: var(--muted); }
   .topic-rail-panel li + li { margin-top: 8px; }
   .topic-content-wrap { padding: 22px 18px 6px; }
   .topic-content { width: min(100%, 820px); }
   .topic-content h2 { margin: 0 0 12px; padding-bottom: 10px; border-bottom: 1px solid var(--line); font-size: clamp(1.5rem, 2vw, 2.2rem); letter-spacing: -0.04em; color: #f1f7ff; }
   .topic-content h3 { margin: 26px 0 10px; font-size: 1.1rem; color: #daf1fe; letter-spacing: -0.02em; }
   .topic-content p, .topic-content li { color: rgba(234, 240, 250, 0.9); font-size: 1.02rem; line-height: 1.85; }
   .topic-content pre, .topic-content code { overflow-x: auto; }
   .topic-content code { padding: 0.15em 0.38em; border-radius: 8px; background: rgba(111,228,255,0.08); color: #b9f8ff; font-size: 0.95em; }
   .topic-content pre { margin: 18px 0; padding: 18px 18px 16px; border: 1px solid var(--line); border-radius: 18px; background: rgba(2,8,13,0.86); color: #beffef; white-space: pre-wrap; word-break: break-word; }
   .topic-content img { max-width: 100%; height: auto; border-radius: 16px; border: 1px solid var(--line); }
   .topic-content table { width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
   .topic-content th, .topic-content td { padding: 14px 12px; border: 1px solid rgba(155,185,218,0.2); vertical-align: top; color: #edf4ff; }
   .topic-content thead th { background: rgba(99, 228, 255, 0.08); color: #aef1ff; font-weight: 700; text-align: left; }
   .section-panel, .concept-panel, .note-callout { border: 1px solid var(--line); border-radius: 18px; padding: 18px 18px 16px; background: rgba(12,19,29,0.75); margin: 20px 0; box-shadow: inset 0 1px 0 rgba(255,255,255,0.02); }
   .section-tag { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px; border: 1px solid rgba(99,228,255,0.32); background: rgba(99,228,255,0.08); color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
   .topic-nav { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-top:18px; padding-top:18px; border-top:1px solid var(--line); }
   .topic-nav a { display:inline-flex; align-items:center; justify-content:center; min-height:42px; padding:10px 16px; border-radius:12px; border:1px solid var(--line); background: rgba(255,255,255,0.02); color: var(--text); font-weight:700; transition: transform 180ms ease, border-color 180ms ease; }
   .topic-nav a:hover { transform: translateY(-1px); border-color: rgba(126,233,215,0.7); }
   @media (max-width: 860px) {
     .topic-layout { grid-template-columns: 1fr; }
     .topic-rail { border-right: none; border-bottom: 1px solid var(--line); }
     .topic-shell { width: min(100%, calc(100% - 18px)); }
     .topic-content-wrap { padding-left: 12px; padding-right: 12px; }
     .topic-nav { flex-direction: column; align-items: stretch; }
     .topic-nav a { width: 100%; }
   }
   @media (max-width: 640px) {
     .topic-hero { padding-left: 18px; padding-right: 18px; }
     .topic-meta-row span { font-size: 0.8rem; }
     .topic-content p, .topic-content li { font-size: 0.98rem; }
     .topic-rail-panel { padding: 14px 12px; }
   }
   @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation:none !important; transition:none !important; scroll-behavior:auto !important; } }
 </style>
</head>
<body>
  <div class="topic-shell">
    <header class="topic-hero">
      <div class="topic-kicker">${escapeHtml(subjectTitle)} • ${escapeHtml(moduleTitle || 'Topic')}</div>
      <div class="topic-breadcrumb"><a href="${getCanonicalPlaceholder(subjectId, '', mode)}">${escapeHtml(subjectTitle)}</a> / ${escapeHtml(topicTitle)}</div>
      <h1>${escapeHtml(topicTitle)}</h1>
      <div class="topic-meta-row">
        <span>${escapeHtml(variantLabel)}</span>
        <span>${escapeHtml(moduleNumber || 'Core')}</span>
        <span>${escapeHtml(moduleTitle || 'Learning topic')}</span>
      </div>
    </header>
    <div class="topic-layout">
      <aside class="topic-rail">
        <div class="topic-rail-panel">
          <h3>Quick access</h3>
          <ul>
            ${railLinks.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
          </ul>
        </div>
        <div class="topic-rail-panel">
          <h3>Overview</h3>
          <p>${escapeHtml(quickConceptText)}</p>
        </div>
      </aside>
      <div class="topic-content-wrap">
        <div class="topic-content" id="topic-overview">
          <div class="concept-panel">
            <div class="section-tag">Quick concept</div>
            <p>${escapeHtml(quickConceptText)}</p>
          </div>
          <div class="section-panel" id="topic-content-panel">
            ${noteSection || practicalSection || '<p>No content available for this topic yet.</p>'}
          </div>
          ${navHtml ? `<div id="topic-next">${navHtml}</div>` : ''}
        </div>
      </div>
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

  // Ensure the target output area is ready without deleting the repo itself when
  // intentionally writing into the live production root.
  const isRootTarget = path.resolve(OUT_DIR) === ROOT;
  if (!isRootTarget || !ALLOW_ROOT_WRITE) {
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
  } else {
    const rootSubjectDirs = [...new Set(subjects.map(subject => subject && subject.id).filter(Boolean))];
    rootSubjectDirs.forEach(subjectId => {
      const targetDir = path.join(ROOT, subjectId);
      if (fs.existsSync(targetDir)) {
        fs.rmSync(targetDir, { recursive: true, force: true });
      }
    });
  }
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
  const allowRootWrite = ALLOW_ROOT_WRITE && OUT_DIR === ROOT;

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
    if (!allowRootWrite && fs.existsSync(possibleCollisionPath)) {
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

    // If we reach here, write planned files to OUT_DIR.
    // When intentionally targeting the repo root, only remove the generated subject directories
    // so the rest of the site remains intact.
    if (ALLOW_ROOT_WRITE && path.resolve(OUT_DIR) === ROOT) {
      const subjectRoots = [...new Set(plannedFiles.map(p => {
        const parts = p.rel.split(path.sep).filter(Boolean);
        return parts.length ? parts[0] : null;
      }).filter(Boolean))];
      subjectRoots.forEach(subjectRoot => {
        const subjectDir = path.join(ROOT, subjectRoot);
        if (fs.existsSync(subjectDir)) {
          fs.rmSync(subjectDir, { recursive: true, force: true });
        }
      });
    }

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
