#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DRY_RUN_ROOT = path.join(ROOT, 'seo-production-dry-run');
const BASE = 'https://bcastudyportal.in';
const HOME_URL = `${BASE}/`;
const TRUST_FILES = ['about.html', 'contact.html', 'privacy.html', 'disclaimer.html'];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function listHtmlFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listHtmlFiles(full));
    } else if (entry.isFile() && full.toLowerCase().endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function extractCanonical(html) {
  const match = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  if (!match) return null;
  return match[1].trim();
}

function collectGeneratedCanonicalUrls() {
  const files = listHtmlFiles(DRY_RUN_ROOT);
  const urls = [];
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    const canonical = extractCanonical(html);
    if (canonical) urls.push(canonical);
  }
  return urls;
}

function getTrustPageDecision(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const canonical = extractCanonical(html);
  const certainlyIndexable = !!canonical && canonical.startsWith(`${BASE}/`) && !canonical.includes('?') && !canonical.includes('#');
  const substantive = /<h1|<h2|<main|<section/i.test(html) && html.includes('<p');
  const hasMetaDescription = /<meta\s+[^>]*name=["']description["'][^>]*content=/i.test(html) || /<meta\s+[^>]*property=["']og:description["'][^>]*content=/i.test(html);
  const hasCanonical = !!canonical;
  const shouldInclude = certainlyIndexable && substantive && hasMetaDescription && hasCanonical;
  return { filePath, canonical, shouldInclude, reasons: { certainlyIndexable, substantive, hasMetaDescription, hasCanonical } };
}

function buildXml(urls) {
  const urlset = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
  for (const url of urls) {
    urlset.push('  <url>');
    urlset.push(`    <loc>${escapeXml(url)}</loc>`);
    urlset.push('  </url>');
  }
  urlset.push('</urlset>');
  return urlset.join('\n') + '\n';
}

function validateXml(xmlPath) {
  try {
    execFileSync('python', ['-c', "import sys, xml.etree.ElementTree as ET; ET.parse(sys.argv[1]); print('XML_OK')", xmlPath], { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' });
    return { ok: true, error: null };
  } catch (err) {
    return { ok: false, error: String(err.stderr || err.stdout || err.message || err) };
  }
}

function main() {
  const generatedUrls = collectGeneratedCanonicalUrls();
  const trustResults = TRUST_FILES.map(file => getTrustPageDecision(path.join(ROOT, file)));
  const trustedIncluded = trustResults.filter(r => r.shouldInclude).map(r => r.canonical);
  const uniqueUrls = Array.from(new Set([HOME_URL, ...generatedUrls, ...trustedIncluded]));

  const xmlPath = path.join(DRY_RUN_ROOT, 'sitemap.xml');
  fs.writeFileSync(xmlPath, buildXml(uniqueUrls), 'utf8');

  const xmlCheck = validateXml(xmlPath);
  const invalidUrls = uniqueUrls.filter(url => {
    return !url.startsWith(`${BASE}/`) || url.includes('/seo-staging/') || url.includes('?subject=') || url.includes('#') || /\/index\.html(?=$|[?#])/i.test(url);
  });

  const duplicates = uniqueUrls.filter((url, index) => uniqueUrls.indexOf(url) !== index);
  const missingGeneratedFromSitemap = generatedUrls.filter(url => !uniqueUrls.includes(url));
  const extraSitemapUrls = uniqueUrls.filter(url => ![HOME_URL, ...generatedUrls, ...trustedIncluded].includes(url));
  const trustSummary = trustResults.map(r => ({ file: path.basename(r.filePath), canonical: r.canonical, include: r.shouldInclude }));

  const summary = {
    generatedHtmlPages: listHtmlFiles(DRY_RUN_ROOT).length,
    sitemapUrlCount: uniqueUrls.length,
    contentPageCount: generatedUrls.length,
    trustPageCountIncluded: trustedIncluded.length,
    trustSummary,
    homeIncluded: uniqueUrls.includes(HOME_URL),
    invalidUrlCount: invalidUrls.length,
    duplicateUrlCount: [...new Set(duplicates)].length,
    missingGeneratedFromSitemap: missingGeneratedFromSitemap.length,
    extraSitemapUrls: extraSitemapUrls.length,
    xmlValid: xmlCheck.ok,
    xmlErrors: xmlCheck.error,
    invalidUrls,
    duplicates: [...new Set(duplicates)],
    expectedGeneratedPages: 188,
    notes: 'Sitemap generated from actual dry-run canonical URLs and explicitly included public trust pages with valid canonical metadata.'
  };

  console.log(JSON.stringify(summary, null, 2));
  console.log(`Sitemap written to: ${xmlPath}`);
}

main();
