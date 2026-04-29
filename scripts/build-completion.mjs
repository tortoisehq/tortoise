// Pre-build script — emits src/data/completion.json with one row per day:
//   { date: "YYYY-MM-DD", forge: boolean, encode: boolean }
//
// Source data lives OUTSIDE this repo:
//   C:\TortoiseHQ\workhorse\.forge\shipped\*.md
//   C:\TortoiseHQ\encode\.encode\shipped\*.md
// Each shipped session file has a date in the filename (S<N>-YYYY-MM-DD-SESSION.md
// or E<N>-YYYY-MM-DD-SESSION.md). We don't read content — just dates.
//
// FLOW (how the calendar stays current):
//   1. Miles ships an Encode session via the notes skill (or a Forge session via
//      press). That writes a new SESSION.md file in the corresponding shipped/ dir.
//   2. Locally, before pushing the tortoise repo, run `npm run sync` (alias for
//      `npm run dev` / `npm run build` / explicit `node scripts/build-completion.mjs`).
//      Each rewrites src/data/completion.json from the live shipped/ dirs and
//      stages it for commit.
//   3. Commit + push the tortoise repo. Vercel rebuilds. The committed
//      completion.json is the source of truth on the live site.
//
// CI GUARD: When this script runs in a CI environment (Vercel, GitHub Actions,
// etc.) the source dirs don't exist — the script would overwrite the committed
// completion.json with empty data. We detect CI via env vars and skip the write
// so the committed file is preserved. The committed file IS the deploy artifact.

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

// CI guard — Vercel sets VERCEL=1, GitHub Actions sets CI=true, etc.
const IS_CI = !!(process.env.CI || process.env.VERCEL || process.env.GITHUB_ACTIONS);
if (IS_CI) {
  console.log('[completion] CI environment detected — skipping regen, using committed completion.json');
  process.exit(0);
}

// If neither source dir exists locally either (e.g. running on a different
// machine without the pipeline repos), preserve the committed file too.
if (!existsSync(FORGE_SHIPPED) && !existsSync(ENCODE_SHIPPED)) {
  console.warn('[completion] no source dirs found locally — leaving committed completion.json untouched');
  process.exit(0);
}

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
