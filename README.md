# Tortoise

The public hub for **tortoisehq.io** — a 24-month build program documented out loud.

The name is the thesis: slow is fine, consistent is the point. Most projects die from inconsistency long before they die from bad ideas. This site is the artifact of trying not to.

## The four categories

Every post belongs to exactly one of these:

- **Forge** — Building and shipping. Code, tools, prototypes, postmortems. The actual work.
- **Guild** — Learning in public. Books, papers, ideas, the friction of trying to use them.
- **Engram** — Memory training and encoding. Spaced repetition, retention experiments, what actually sticks.
- **Endure** — Life, health, the long game. Sleep, training, food, attention — the boring habits that make 24 months survivable.

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
category: forge       # forge | guild | engram | endure
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
- `/blog/forge`, `/blog/guild`, `/blog/engram`, `/blog/endure` — one page per category
- `/rss.xml` — global RSS feed
