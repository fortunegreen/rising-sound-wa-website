// Shrinks big JPEGs so editors can upload straight from a camera or phone.
// Runs automatically on Cloudflare's builds only (WORKERS_CI), so it never rewrites files on your
// own computer. Run `npm run optimise-images -- --force` to do it locally on purpose.
if (!process.env.WORKERS_CI && !process.argv.includes('--force')) { console.log('optimise-images: skipped (not a Cloudflare build)'); process.exit(0); }
import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
let saved = 0;
for (const p of walk('public/assets').filter((p) => /\.jpe?g$/i.test(p))) {
  const before = statSync(p).size;
  if (before < 120 * 1024) continue;
  const out = p + '.tmp';
  await sharp(p).rotate().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toFile(out);
  if (statSync(out).size < before) { saved += before - statSync(out).size; renameSync(out, p); } else { (await import('node:fs')).unlinkSync(out); }
}
console.log('saved KB:', Math.round(saved / 1024));
