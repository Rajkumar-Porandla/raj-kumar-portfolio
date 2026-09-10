import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const required = [
  'Raj Kumar Porandla',
  '95.55',
  '0.9625',
  'FocusGuard',
  'G-Maps Route Visualizer',
  'rajkumarporandla07@gmail.com',
];

const absent = required.filter((item) => !html.includes(item));
if (absent.length) {
  throw new Error(`Required portfolio content is missing: ${absent.join(', ')}`);
}

console.log('Static site checks passed.');
