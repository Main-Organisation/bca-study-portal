const fs = require('fs');
const path = require('path');

const argvRaw = process.argv.slice(2);
const argv = {};
argvRaw.forEach(a => { if (a.startsWith('--')) { const [k,v]=a.slice(2).split('='); argv[k]=v===undefined?true:v; } });
const TARGET = argv.dir || argv.d || path.join(__dirname, '..', 'seo-staging');
const MODE = argv.mode || 'staging'; // staging or production
const CANONICAL_BASE = argv.canonicalBase || 'https://bcastudyportal.in';

function walk(dir) {
  const acc = [];
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) acc.push(...walk(full)); else acc.push(full);
  }
  return acc;
}

const htmlFiles = walk(TARGET).filter(f => f.endsWith('.html'));

let missingTitle=0, missingMeta=0, missingCanonical=0, missingOg=0, missingJsonLd=0, jsonLdErrors=0;
let duplicateTitleCount=0; const titles = new Map();
let multipleH1=0, emptyH1=0;
let brokenRefs=0, missingImages=0; const brokenList=[];
let duplicateCanonicals = new Map();

for (const file of htmlFiles) {
  const raw = fs.readFileSync(file,'utf8');
  const titleMatch = raw.match(/<title>([^<]+)<\/title>/i);
  const metaMatch = raw.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']\s*\/?/i);
  const canonMatch = raw.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']\s*\/?/i);
  const ogTitle = raw.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']\s*\/?/i);
  const ogDesc = raw.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']\s*\/?/i);
  const ogUrl = raw.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']\s*\/?/i);
  const jsonLdMatches = raw.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];

  if (!titleMatch) missingTitle++; else { const t = titleMatch[1].trim(); titles.set(t,(titles.get(t)||0)+1); }
  if (!metaMatch) missingMeta++;
  if (!canonMatch) missingCanonical++;
  if (!(ogTitle && ogDesc && ogUrl)) missingOg++;
  if (!jsonLdMatches.length) missingJsonLd++; else {
    for (const m of jsonLdMatches) {
      const inner = m.replace(/<script[^>]*>/i,'').replace(/<\/script>/i,'');
      try { JSON.parse(inner); } catch(e) { jsonLdErrors++; }
    }
  }

  // H1 checks
  const h1Matches = [...raw.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length === 0) emptyH1++; 
  if (h1Matches.length > 1) multipleH1++;

  // canonical validations for production mode
  if (MODE === 'production' && canonMatch) {
    const c = canonMatch[1];
    if (c.includes('/seo-staging/') || c.includes('?') || c.includes('#')) {
      console.log(`Invalid canonical in ${file}: ${c}`);
    }
    duplicateCanonicals.set(c, (duplicateCanonicals.get(c)||0)+1);
  }
  if (MODE === 'staging' && canonMatch) {
    const c = canonMatch[1];
    if (!c.includes('/seo-staging/')) {
      console.log(`Warning: staging page without /seo-staging/ in canonical: ${file} -> ${c}`);
    }
  }

  // check local refs
  const matches = [...raw.matchAll(/(?:src|href)=["']([^"']+)["']/gi)].map(m=>m[1]);
  for (const rel of matches) {
    if (/^(?:https?:|\/\/|#)/i.test(rel)) continue;
    const resolved = path.resolve(path.dirname(file), rel);
    if (!fs.existsSync(resolved)) {
      brokenRefs++; if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(rel)) missingImages++; brokenList.push({file,ref:rel,resolved});
    }
  }
}

for (const [t,c] of titles) if (c>1) duplicateTitleCount += c-1;

console.log('Validation for', TARGET);
console.log('Total HTML pages:', htmlFiles.length);
console.log('Missing <title> count:', missingTitle);
console.log('Missing meta description count:', missingMeta);
console.log('Missing canonical count:', missingCanonical);
console.log('Pages missing OG tags (title/desc/url):', missingOg);
console.log('Pages missing JSON-LD script:', missingJsonLd);
console.log('JSON-LD parse errors:', jsonLdErrors);
console.log('Duplicate titles (extra occurrences):', duplicateTitleCount);
console.log('Multiple H1 count:', multipleH1);
console.log('Empty H1 count:', emptyH1);
console.log('Broken local href/src refs:', brokenRefs);
console.log('Missing local images count:', missingImages);
if (brokenList.length) {
  console.log('\nSample broken refs:');
  brokenList.slice(0,30).forEach(b => console.log(`- ${b.file} -> ${b.ref} (resolved: ${b.resolved})`));
}

const dupCanonicalsList = [...duplicateCanonicals.entries()].filter(([k,v])=>v>1);
console.log('Duplicate canonical URLs count:', dupCanonicalsList.length);
if (dupCanonicalsList.length) console.log(dupCanonicalsList.slice(0,20));

if (MODE === 'production') {
  // extra checks: ensure canonical starts with canonical base
  const htmls = htmlFiles.map(f=>fs.readFileSync(f,'utf8'));
  const wrong = [];
  htmlFiles.forEach((file, idx) => {
    const raw = htmls[idx];
    const cm = raw.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']\s*\/?/i);
    if (cm) {
      const c = cm[1];
      if (!c.startsWith(CANONICAL_BASE)) wrong.push({file,c});
      if (c.includes('/seo-staging/') || c.includes('?') || c.includes('#')) wrong.push({file,c,reason:'contains forbidden token'});
    } else {
      wrong.push({file,reason:'missing canonical'});
    }
    const ogUrl = raw.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']\s*\/?/i);
    if (ogUrl) {
      const o = ogUrl[1];
      const cm2 = raw.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']\s*\/?/i);
      if (cm2 && cm2[1] !== o) wrong.push({file,reason:'og:url mismatch',og:o,canonical:cm2[1]});
    }
  });
  if (wrong.length) {
    console.log('\nProduction canonical/OG checks failed (sample):');
    console.log(wrong.slice(0,30));
  } else {
    console.log('All production canonical/OG checks passed.');
  }
}

if (missingTitle+missingMeta+missingCanonical+missingOg+missingJsonLd+jsonLdErrors+duplicateTitleCount+multipleH1+brokenRefs>0) {
  console.log('\nVALIDATION FAILED');
  process.exitCode = 2;
} else {
  console.log('\nVALIDATION OK: All checks passed');
  process.exitCode = 0;
}
