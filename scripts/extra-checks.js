const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'seo-staging');

function walk(dir) { const out=[]; for(const e of fs.readdirSync(dir,{withFileTypes:true})){ const full=path.join(dir,e.name); if(e.isDirectory()) out.push(...walk(full)); else out.push(full);} return out; }
const html = walk(OUT_DIR).filter(f => f.endsWith('.html'));
const descs = new Map();
const canons = new Map();
for(const f of html){ const raw = fs.readFileSync(f,'utf8'); const desc = (raw.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']\s*\/>/i)||[])[1]||''; const canon = (raw.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']\s*\/>/i)||[])[1]||''; if(desc){ descs.set(desc, (descs.get(desc)||0)+1); } if(canon){ canons.set(canon, (canons.get(canon)||0)+1); } }
const dupDesc = [...descs.entries()].filter(([k,v])=>v>1).map(([k,v])=>({count:v,text:k}));
const dupCanon = [...canons.entries()].filter(([k,v])=>v>1).map(([k,v])=>({count:v,url:k}));
console.log('Duplicate meta description groups:', dupDesc.length); if(dupDesc.length) console.log(dupDesc.slice(0,10));
console.log('Duplicate canonical groups:', dupCanon.length); if(dupCanon.length) console.log(dupCanon.slice(0,10));
if(dupDesc.length+dupCanon.length===0) process.exitCode=0; else process.exitCode=2;