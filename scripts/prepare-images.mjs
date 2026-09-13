import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
const target = 'public/images';
await mkdir(target, { recursive: true });
const [hero, care] = process.argv.slice(2);
if (!hero || !care) throw new Error('Provide the generated hero and care image paths.');
await Promise.all([
  sharp(hero).resize({ width: 960 }).webp({ quality: 82 }).toFile(`${target}/hero-960.webp`),
  sharp(hero).resize({ width: 640 }).webp({ quality: 80 }).toFile(`${target}/hero-640.webp`),
  sharp(care).resize({ width: 960 }).webp({ quality: 80 }).toFile(`${target}/care-960.webp`),
  sharp('assets/doggie-favicon.png').resize(96, 96, { fit: 'cover' }).webp({ quality: 85 }).toFile(`${target}/brand-icon.webp`),
  sharp('assets/doggie-favicon.png').resize(64, 64, { fit: 'cover' }).png().toFile('public/favicon.png'),
]);
console.log('Responsive images and brand icon optimized.');
