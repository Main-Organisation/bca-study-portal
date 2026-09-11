const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'seo-staging');

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const htmlFiles = walk(OUT_DIR).filter(f => f.endsWith('.html'));

let missingTitle = 0;
let missingMetaDesc = 0;
let missingCanonical = 0;
let missingOg = 0;
let missingJsonLd = 0;
let jsonLdParseErrors = 0;
let duplicateTitles = 0;

const titles = new Map();

const problems = [];

for (const file of htmlFiles) {
  const raw = fs.readFileSync(file, 'utf8');
  const titleMatch = raw.match(/<title>([^<]+)<\/title>/i);
  const metaDescMatch = raw.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']\s*\/>/i);
  const canonicalMatch = raw.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']\s*\/>/i);
  const ogTitle = raw.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']\s*\/>/i);
  const ogDesc = raw.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']\s*\/>/i);
  const ogUrl = raw.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']\s*\/>/i);

  const jsonLdMatches = raw.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);

  if (!titleMatch) { missingTitle++; problems.push({file, reason:'missing title'}); }
  else {
    const t = titleMatch[1].trim();
    const prev = titles.get(t) || 0; titles.set(t, prev+1);
  }
  if (!metaDescMatch) { missingMetaDesc++; problems.push({file, reason:'missing meta description'}); }
  if (!canonicalMatch) { missingCanonical++; problems.push({file, reason:'missing canonical'}); }
  if (!(ogTitle && ogDesc && ogUrl)) { missingOg++; problems.push({file, reason:'missing og tags'}); }

  if (!jsonLdMatches || jsonLdMatches.length === 0) { missingJsonLd++; problems.push({file, reason:'missing json-ld'}); }
  else {
    for (const m of jsonLdMatches) {
      const inner = m.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
      try {
        JSON.parse(inner);
      } catch (e) {
        jsonLdParseErrors++; problems.push({file, reason: 'json-ld parse error', error: e.message});
      }
    }
  }
}

for (const [t, count] of titles) if (count > 1) duplicateTitles += count - 1;

console.log('Total HTML pages:', htmlFiles.length);
console.log('Missing <title> count:', missingTitle);
console.log('Missing meta description count:', missingMetaDesc);
console.log('Missing canonical count:', missingCanonical);
console.log('Pages missing OG tags (title/desc/url):', missingOg);
console.log('Pages missing JSON-LD script:', missingJsonLd);
console.log('JSON-LD parse errors:', jsonLdParseErrors);
console.log('Duplicate titles (count of extra occurrences):', duplicateTitles);

if (problems.length) {
  console.log('\nSample problems (max 30):');
  problems.slice(0,30).forEach(p => console.log(`- ${p.file}: ${p.reason}${p.error ? ' :: ' + p.error : ''}`));
}

if (missingTitle + missingMetaDesc + missingCanonical + missingOg + missingJsonLd + jsonLdParseErrors + duplicateTitles === 0) {
  console.log('\nVALIDATION OK: All checks passed');
  process.exitCode = 0;
} else {
  console.log('\nVALIDATION FAILED');
  process.exitCode = 2;
}