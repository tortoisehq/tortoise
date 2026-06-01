// Pre-build script — emits src/data/skills.json from Miles's live skill system.
//
// Twin of build-completion.mjs. Two sources, both in the workhorse repo:
//   C:\TortoiseHQ\workhorse\.forge\metaskills\NN-slug.md   (codified metaskills)
//   C:\TortoiseHQ\workhorse\.forge\forge-learning.md        (30-pillar level table)
//
// "Unlocking a new skill" = a new metaskill file appears, OR a pillar's level
// increments / hits GRADUATED. This script just re-reads current state; the new
// entry shows up on the resume the next time the site is synced + pushed.
//
// NOTE (S35): the pillar table is currently frozen — the teaching layer is
// suppressed S35->S99 (state.json teaching_suppressed_until_session: 100), so
// pillar levels won't move until S100. Metaskills still fire live. Both are wired
// here regardless; pillars light up automatically the moment suppression lifts.
//
// FLOW (mirrors the calendar):
//   1. Miles codifies a metaskill / a pillar levels up.
//   2. Locally: `npm run sync` (or `npm run dev` / `npm run build`) re-reads the
//      sources and rewrites src/data/skills.json.
//   3. Commit + push the tortoise repo. Vercel rebuilds. The committed
//      skills.json is the source of truth on the live site.
//
// CI GUARD: in CI (Vercel, GitHub Actions) the workhorse repo doesn't exist, so
// the script would clobber the committed file with empty data. We detect CI and
// skip the write. The committed file IS the deploy artifact.

import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const METASKILLS_DIR = 'C:/TortoiseHQ/workhorse/.forge/metaskills';
const LEARNING_FILE = 'C:/TortoiseHQ/workhorse/.forge/forge-learning.md';
const OUT_DIR = path.join(__dirname, '..', 'src', 'data');
const OUT_FILE = path.join(OUT_DIR, 'skills.json');

// CI guard — Vercel sets VERCEL=1, GitHub Actions sets CI=true, etc.
const IS_CI = !!(process.env.CI || process.env.VERCEL || process.env.GITHUB_ACTIONS);
if (IS_CI) {
  console.log('[skills] CI environment detected — skipping regen, using committed skills.json');
  process.exit(0);
}

// If neither source exists locally (e.g. running on a machine without the
// pipeline repo), preserve the committed file.
if (!existsSync(METASKILLS_DIR) && !existsSync(LEARNING_FILE)) {
  console.warn('[skills] no source files found locally — leaving committed skills.json untouched');
  process.exit(0);
}

// ---- Metaskills -----------------------------------------------------------
// Filename: NN-slug.md   H1: "# Metaskill NN — Title (parenthetical)"
async function readMetaskills() {
  if (!existsSync(METASKILLS_DIR)) {
    console.warn(`[skills] metaskills dir missing, skipping: ${METASKILLS_DIR}`);
    return [];
  }
  const files = (await readdir(METASKILLS_DIR))
    .filter((f) => /^\d+-.*\.md$/.test(f))
    .sort();
  const out = [];
  for (const f of files) {
    const raw = await readFile(path.join(METASKILLS_DIR, f), 'utf8');
    const fm = f.match(/^(\d+)-(.+)\.md$/);
    const id = fm ? fm[1] : f.replace(/\.md$/, '');
    const slug = fm ? fm[2] : id;
    // H1 — accept em-dash or hyphen as the separator.
    const h1 = raw.match(/^#\s+Metaskill\s+\d+\s*[—-]\s*(.+?)\s*$/m);
    const title = h1 ? h1[1].trim() : slug.replace(/-/g, ' ');
    // Status — explicit **Status:** token, else infer CODIFIED if the doc says so.
    const st = raw.match(/\*\*Status:\*\*\s*([A-Z][A-Z_]+)/);
    let status = st ? st[1] : '';
    if (!status && /codified/i.test(raw.slice(0, 900))) status = 'CODIFIED';
    // One-liner — prefer a "## ONE SENTENCE" section; else the first line under
    // the first H2 (e.g. "## WHAT"). Strip markdown emphasis for clean display.
    let oneM = raw.match(/##\s*ONE[ -]SENTENCE\s*\n+([^\n]+)/i);
    if (!oneM) oneM = raw.match(/^##\s+[^\n]+\n+([^\n]+)/m);
    const oneSentence = (oneM ? oneM[1] : '').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
    out.push({ id, slug, title, status, oneSentence });
  }
  return out;
}

// ---- Pillars --------------------------------------------------------------
// Table rows: | P6 | Name | 4 | S3 | From X -> to Y |
async function readPillars() {
  if (!existsSync(LEARNING_FILE)) {
    console.warn(`[skills] learning file missing, skipping: ${LEARNING_FILE}`);
    return [];
  }
  const raw = await readFile(LEARNING_FILE, 'utf8');
  const RE = /^\|\s*(P\d{1,2})\s*\|\s*([^|]+?)\s*\|\s*(GRADUATED|\d+)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|?\s*$/gm;
  const seen = new Set();
  const rows = [];
  let m;
  while ((m = RE.exec(raw)) !== null) {
    if (seen.has(m[1])) continue; // first occurrence wins if the table repeats
    seen.add(m[1]);
    rows.push({
      id: m[1],
      name: m[2].trim(),
      level: m[3] === 'GRADUATED' ? 'GRADUATED' : Number(m[3]),
      lastSession: m[4].trim(),
      arc: m[5].trim(),
    });
  }
  // Stable order by pillar number.
  rows.sort((a, b) => Number(a.id.slice(1)) - Number(b.id.slice(1)));
  return rows;
}

const metaskills = await readMetaskills();
const pillars = await readPillars();

await mkdir(OUT_DIR, { recursive: true });
await writeFile(OUT_FILE, JSON.stringify({ metaskills, pillars }, null, 2));

const proven = pillars.filter((p) => p.level === 'GRADUATED' || p.level >= 3).length;
console.log(`[skills] ${metaskills.length} metaskill(s), ${pillars.length} pillar(s) (${proven} at level 3+)`);
console.log(`[skills] wrote ${OUT_FILE}`);
