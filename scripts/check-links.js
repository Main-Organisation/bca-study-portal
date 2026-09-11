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

let brokenRefs = 0;
let missingImages = 0;
const brokenList = [];

for (const file of htmlFiles) {
  const raw = fs.readFileSync(file, 'utf8');
  const matches = [...raw.matchAll(/(?:src|href)=["']([^"']+)["']/gi)].map(m => m[1]);
  for (const rel of matches) {
    if (/^(?:https?:|\/\/|#)/i.test(rel)) continue; // external or anchor
    // resolve relative to file
    const target = path.resolve(path.dirname(file), rel);
    if (!fs.existsSync(target)) {
      brokenRefs++;
      if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(rel)) missingImages++;
      brokenList.push({file, ref: rel, resolved: target});
    }
  }
}

console.log('Checked HTML files:', htmlFiles.length);
console.log('Broken local href/src refs:', brokenRefs);
console.log('Missing local images count:', missingImages);
if (brokenList.length) {
  console.log('\nSample broken refs (max 30):');
  brokenList.slice(0,30).forEach(b => console.log(`- ${b.file} -> ${b.ref} (resolved: ${b.resolved})`));
}

if (brokenRefs === 0) process.exitCode = 0; else process.exitCode = 2;