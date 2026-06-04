// Pre-build script — emits src/data/completion.json with one row per day:
//   { date: "YYYY-MM-DD", forge: boolean, encode: boolean, beacon: boolean }
//
// Source data lives OUTSIDE this repo:
//   C:\TortoiseHQ\workhorse\.forge\shipped\*.md   (Forge  — S<N>-YYYY-MM-DD-SESSION.md)
//   C:\TortoiseHQ\encode\.encode\shipped\*.md      (Encode — E<N>-YYYY-MM-DD-SESSION.md)
//   C:\TortoiseHQ\beacon\sessions\*.md             (Beacon — YYYY-MM-DD-session-N.md)
// We don't read content — just dates from the filenames.
//
// The daily GOAL is two of the three pillars. A day "counts" when at least two
// of { forge, encode, beacon } happened. The calendar renders all three.
//
// FLOW (how the calendar stays current):
//   1. Miles ships an Encode/Forge session (notes/press skill) or logs a Beacon
//      session. That writes a new file in the corresponding source dir.
//   2. Locally, before pushing tortoise, run `npm run sync` / `npm run build` /
//      `node scripts/build-completion.mjs`. Each rewrites src/data/completion.json
//      from the live source dirs and stages it for commit.
//   3. Commit + push tortoise. Vercel rebuilds. The committed completion.json is
//      the source of truth on the live site.
//
// CI GUARD: in CI (Vercel, GitHub Actions) the source dirs don't exist — the
// script would overwrite the committed completion.json with empty data. We detect
// CI via env vars and skip the write so the committed file is preserved.

import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FORGE_SHIPPED = 'C:/TortoiseHQ/workhorse/.forge/shipped';
const ENCODE_SHIPPED = 'C:/TortoiseHQ/encode/.encode/shipped';
const BEACON_SESSIONS = 'C:/TortoiseHQ/beacon/sessions';
const OUT_DIR = path.join(__dirname, '..', 'src', 'data');
const OUT_FILE = path.join(OUT_DIR, 'completion.json');

// CI guard — Vercel sets VERCEL=1, GitHub Actions sets CI=true, etc.
const IS_CI = !!(process.env.CI || process.env.VERCEL || process.env.GITHUB_ACTIONS);
if (IS_CI) {
  console.log('[completion] CI environment detected — skipping regen, using committed completion.json');
  process.exit(0);
}

// If none of the source dirs exist locally (e.g. a different machine without the
// pipeline repos), preserve the committed file.
if (!existsSync(FORGE_SHIPPED) && !existsSync(ENCODE_SHIPPED) && !existsSync(BEACON_SESSIONS)) {
  console.warn('[completion] no source dirs found locally — leaving committed completion.json untouched');
  process.exit(0);
}

// Forge / Encode shipped sessions: <prefix><N>-YYYY-MM-DD-SESSION.md
const SESSION_RE = /(\d{4}-\d{2}-\d{2}).*SESSION\.md$/i;
// Beacon session logs: date-led, e.g. 2026-06-04-session-2.md
const BEACON_RE = /(\d{4}-\d{2}-\d{2}).*session.*\.md$/i;

async function datesFrom(dir, re) {
  if (!existsSync(dir)) {
    console.warn(`[completion] dir missing, skipping: ${dir}`);
    return new Set();
  }
  const files = await readdir(dir);
  const dates = new Set();
  for (const f of files) {
    const m = f.match(re);
    if (m) dates.add(m[1]);
  }
  return dates;
}

const forge = await datesFrom(FORGE_SHIPPED, SESSION_RE);
const encode = await datesFrom(ENCODE_SHIPPED, SESSION_RE);
const beacon = await datesFrom(BEACON_SESSIONS, BEACON_RE);

// Union of all dates seen in any pipeline.
const allDates = new Set([...forge, ...encode, ...beacon]);
const rows = [...allDates]
  .sort()
  .map((date) => ({
    date,
    forge: forge.has(date),
    encode: encode.has(date),
    beacon: beacon.has(date),
  }));

await mkdir(OUT_DIR, { recursive: true });
await writeFile(OUT_FILE, JSON.stringify(rows, null, 2));

const goal = rows.filter((r) => [r.forge, r.encode, r.beacon].filter(Boolean).length >= 2).length;
console.log(`[completion] ${rows.length} day(s) tracked  -  2-of-3 goal met: ${goal}  (F ${forge.size} · E ${encode.size} · B ${beacon.size})`);
console.log(`[completion] wrote ${OUT_FILE}`);
