# Tortoise

The public hub for **tortoisehq.io** — a 24-month build program documented out loud.

The name is the thesis: slow is fine, consistent is the point. Most projects die from inconsistency long before they die from bad ideas. This site is the artifact of trying not to.

## The three pillars

Every post belongs to exactly one of these:

- **Forge** — Building and shipping projects. Code, tools, prototypes, postmortems. The actual work.
- **Encode** — The lifetime learning vault. Concepts placed, retrieved, tested — AI, systems, whatever sticks.
- **Endure** — Health and fitness. Sleep, training, food, attention — the boring habits that make 24 months survivable.

## Stack

- Astro 5 with TypeScript strict mode
- Tailwind CSS v3 (via `@astrojs/tailwind`)
- MDX, RSS, and sitemap integrations
- Markdown content collection (`src/content/blog/`)

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static build to ./dist
npm run preview   # serve the built site
```

## Adding a post

Create a `.md` file in `src/content/blog/` with this frontmatter:

```yaml
---
title: "Post title"
date: 2026-04-09
category: forge       # forge | encode | endure
tags: ["tag1", "tag2"]
excerpt: "One sentence under 160 characters."
draft: false
---
```

The filename becomes the URL slug (`my-post.md` → `/blog/my-post`). Posts with `draft: true` are excluded from every listing and the RSS feed.

## Routes

- `/` — landing with category cards and the three most recent posts
- `/blog` — all posts, newest first
- `/blog/[slug]` — a single post
- `/blog/forge`, `/blog/encode`, `/blog/endure` — one page per pillar
- `/rss.xml` — global RSS feed
