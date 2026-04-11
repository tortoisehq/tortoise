---
title: "Seven Hours to a URL"
date: "2026-04-09"
category: "forge"
tags: ["infrastructure", "astro", "tortoisehq", "build-1"]
excerpt: "Tortoise existed as a plan. Session 1 turned it into a public site with a deploy pipeline."
---

Tortoise had no URL. It had a Notion doc, a category system that didn't match how the work actually flows, and a vague plan to "launch soon." The 24-month program couldn't start until tortoisehq.io was a real page that loaded when you typed it in. That was the entire job for Session 1: turn the idea into infrastructure.

The first thing that had to die was the old editorial structure. Three pillars, two blogs, no clean home for memory training or life logs. I replaced all of it with four categories that map directly to the four real work streams: Forge for building, Guild for learning, Engram for memory training, Endure for life logs. One blog collection, one Zod schema enforcing the category as a strict enum at build time. A bad category doesn't render wrong. It fails the build. That distinction matters when you're the only person reviewing your own commits.

I considered separate content collections per category. Cleaner mental model, maybe. But a single collection with a category field is simpler to query, better for cross-category indexes, and means the RSS feed works without stitching anything together. Simplicity won.

The scaffold is Astro 5, Tailwind v3, MDX, with routes for home, all posts, four category pages, single post, and RSS. Four seed posts, one per category, written in voice. The repo lives under a new `tortoisehq` GitHub org, separate from my business namespace at `ironridgeai`. Tortoise is a personal program, not a company project. Mixing them under one org muddies both brands for zero benefit.

Three hours in, I discovered I'd already built a scaffold yesterday. Different design, different categories, already deployed. I'd forgotten it existed. That's a memory failure that cost real time and produced a lesson worth keeping: future sessions start with "check what already exists" before writing a single file. The old repo got renamed to archive. Yesterday's five commits are preserved. Today's clean start became the foundation.

PowerShell 5.1 doesn't support `&&` in commands, which broke standard git workflows immediately. Had to upgrade to PowerShell 7 mid-session before anything else would move. Should have been step one. DreamHost's DNS panel hides the actual records editor behind a legacy URL that their own docs don't surface clearly. Small frictions, but they compound when you're seven hours into a build and running on focus fumes.

Vercel picked up the Astro preset automatically. First deploy went green. I added the domain, pointed an A record at DreamHost, and DNS propagated within minutes. Cloudflare would be objectively better for the long term, but switching nameservers tonight would have added its own propagation delay and turned a 15-minute improvement into a blocker. Ship on what works now, migrate next week.

tortoisehq.io loaded on the real domain before I closed the session. The whole content pipeline is live. Every future session produces a handoff, Bee converts it to a blog post, one git push triggers a Vercel rebuild, and the post is public in about 60 seconds. Adding the next build means one new folder, one new repo, one new Claude project pointing at the same Bee. None of this infrastructure gets rebuilt.

Day one of the program is in the history now. Setup days feel like friction until the thing you built actually works. Then every minute of it feels cheap.
