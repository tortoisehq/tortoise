# Cutover checklist — tortoisehq.io → lovelearnlift.com

The brand **copy** is rebranded to Love Learn Lift and the living-resume Skills
feature is shipped. The site still **serves at tortoisehq.io** until the steps
below are done. Domain-coupled changes were deliberately held so the live site
never advertises a domain that is not resolving yet.

## You must do this (outside the repo — I can't reach your dashboards)
1. **DNS** — point `lovelearnlift.com` at Vercel (CNAME / A records per Vercel's
   "Add Domain" instructions).
2. **Vercel** — add `lovelearnlift.com` as a domain on the `tortoise` project and
   set it primary.

## Flip together with the cutover (in this repo)
3. `astro.config.mjs` → set `site: 'https://lovelearnlift.com'` (currently
   tortoisehq.io; flagged inline). Regenerates the sitemap at the new domain.
4. **(optional) GitHub org** — if you rename `tortoisehq` → `lovelearnlift` (or move
   the repo), update the links I deliberately LEFT pointing at `github.com/tortoisehq`:
   - `src/layouts/Layout.astro` footer
   - `src/pages/index.astro` footer
   - `src/pages/resume.astro` contact link + the `tortoisehq/workhorse` repo link
   - `src/pages/encode/method/index.astro` (`tortoisehq/Encode` repo link)
   If you do NOT rename the org, leave them — they resolve today.

## Brand decisions only you should make (I did not touch these)
5. `README.md` still carries the old **"the name is the thesis: slow is the point"**
   line — that argued the *Tortoise* (slow-and-steady) metaphor. "Love Learn Lift"
   needs its own one-liner. Your voice, not mine.
6. Published blog post **bodies** still mention `tortoisehq.io` / "Tortoise" as
   history (e.g. `src/content/blog/s1-foundation.md`, and the dated 2026-04-09
   "first public post on tortoisehq.io" milestone on the resume). Left as the
   historical record on purpose — rewrite only if you want the history rebranded.

## Already shipped (live at tortoisehq.io after this push)
- **Living-resume Skills section** — `// 06 — Skills (tracked, not asserted)`:
  4 metaskills + 7 capability pillars at level 3+, auto-synced from
  `.forge/metaskills/` and the `forge-learning.md` pillar table.
- **`scripts/build-skills.mjs`** — twin of the calendar sync, wired into
  `predev` / `prebuild` / `sync`; CI guard preserves the committed `skills.json`.
- **Brand copy** → Love Learn Lift in nav, titles, footers, and resume framing.

## How "update daily or on unlock" works
- **On unlock:** codify a new metaskill (or level a pillar at S100+) → next
  `npm run sync` + push regenerates `skills.json` and it appears. This rides your
  existing publish flow.
- **Daily (hands-off):** intentionally NOT automated. A daily auto-commit-and-push
  cron is an outward action with real risk (pushes whatever is in the tree). Skills
  change rarely, so the on-unlock path covers it. Say the word and I'll add a
  scheduled local `sync` if you want it.
