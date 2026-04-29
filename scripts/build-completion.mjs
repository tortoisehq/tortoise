// Pre-build script — emits src/data/completion.json with one row per day:
//   { date: "YYYY-MM-DD", forge: boolean, encode: boolean }
// Reads from C:\TortoiseHQ\workhorse\.forge\shipped\*.md and
//          C:\TortoiseHQ\encode\.encode\shipped\*.md
// Each shipped session file has a date in the filename (S<N>-YYYY-MM-DD-SESSION.md
// or E<N>-YYYY-MM-DD-SESSION.md). We don't read content — just the dates.

import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FORGE_SHIPPED = 'C:/TortoiseHQ/workhorse/.forge/shipped';
const ENCODE_SHIPPED = 'C:/TortoiseHQ/encode/.encode/shipped';
const OUT_DIR = path.join(__dirname, '..', 'src', 'data');
const OUT_FILE = path.join(OUT_DIR, 'completion.json');

// Filename pattern: <prefix><number>-YYYY-MM-DD-SESSION.md
const DATE_RE = /(\d{4}-\d{2}-\d{2}).*SESSION\.md$/i;

async function datesFrom(dir) {
  if (!existsSync(dir)) {
    console.warn(`[completion] dir missing, skipping: ${dir}`);
    return new Set();
  }
  const files = await readdir(dir);
  const dates = new Set();
  for (const f of files) {
    const m = f.match(DATE_RE);
    if (m) dates.add(m[1]);
  }
  return dates;
}

const forge = await datesFrom(FORGE_SHIPPED);
const encode = await datesFrom(ENCODE_SHIPPED);

// Union of all dates seen in either pipeline.
const allDates = new Set([...forge, ...encode]);
const rows = [...allDates]
  .sort()
  .map((date) => ({
    date,
    forge: forge.has(date),
    encode: encode.has(date),
  }));

await mkdir(OUT_DIR, { recursive: true });
await writeFile(OUT_FILE, JSON.stringify(rows, null, 2));

const both = rows.filter((r) => r.forge && r.encode).length;
const forgeOnly = rows.filter((r) => r.forge && !r.encode).length;
const encodeOnly = rows.filter((r) => !r.forge && r.encode).length;
console.log(`[completion] ${rows.length} day(s) tracked  -  both:${both}  forge-only:${forgeOnly}  encode-only:${encodeOnly}`);
console.log(`[completion] wrote ${OUT_FILE}`);
