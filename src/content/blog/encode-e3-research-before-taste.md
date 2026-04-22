---
title: "Research Before Taste, When the Thing Has to Last"
date: "2026-04-21"
category: "encode"
tags: [encode, building-in-public, notion, pkm]
excerpt: "Sat down to build a learning tracker in twenty minutes. Twenty minutes of research later, the schema I would have shipped was wrong."
---

Sat down to build a simple database to track learning sessions. Gave it twenty minutes. Figured I knew what I wanted — a row per session, a rating, a topic, a streak counter maybe, a few tags, the usual.

I'm three sessions into CS50P at 35, no CS degree, trying to learn to code solo on a rotating shift-work schedule. A tracker felt like three steps sideways from what I actually needed to be doing. But I also knew the next session without one would be the third time I'd pretend to remember what I covered last week, and that's a pattern I didn't want to keep.

Before writing a single field, I slowed down. Not because I thought I needed to, but because I'd been reading that for personal-knowledge systems the thing you build in the first hour is the thing you regret for years. Evernote, Roam, HyperCard, every one of them left someone with tens of thousands of notes in a format they can no longer export. So I spent the twenty minutes the other way around — not on the build, on the reading. Seven parallel threads. Top-tier PKM operators who've lived in their systems for a decade. Cognitive-science literature on what actually predicts retention. Dashboard studies on which metrics change behavior versus which ones just look pretty. Fifty-year data-durability post-mortems. The plan was to let what had been studied inform what I built, then build.

The research came back and the schema I would have shipped was wrong.

The streak counter I was going to include — Duolingo deprioritized it internally after finding streak-chasers bail on difficult material and distort their own study choices. The total-hours-studied counter — Fitbit buried lifetime steps on their dashboards back in 2016 because it turns out monuments aren't signals. A pie chart of topics I'd been planning — Khan Academy deprioritized that one too, no behavior-change evidence for them anywhere in the QS literature. Mood and weather fields, which show up on every "Notion learning tracker" template I'd seen, have zero predictive value for a CS curriculum. And free-form tags — the single most common Notion regret according to the people who've run their systems for years.

Five specific things I would have added, all with a line of evidence saying don't. The research also pointed at three fields I wouldn't have thought of. A Session Mode field for whether I'd been generative — writing code, solving a problem — or receptive — watching a lecture, reading — because Slamecka proved back in 1978 that generation wins for retention. A Predicted Rating field so I could compare what I thought would land against what actually did, calibration being the metric for metacognitive growth per Dunlosky. And a deferred slot for unresolved confusion, routed through a separate view, because unresolved confusion is the single most leading indicator of material that quietly gets avoided.

Fourteen evidence-backed fields instead of fifteen instinct-chosen ones. Five vanity metrics vetoed with receipts. Five durability red lines locked in — no relations as primary linkage, no formulas as source of truth, no attachments, no synced blocks, no rich text carrying semantic meaning — all of which would be fine in year one and quietly break in year three when a migration came for them. The cost of that knowledge was twenty minutes of parallel reading before I wrote a single field.

## Research Before Taste, When the Thing Has to Last

Taste is pattern-matching against what you've already seen. It's fast, it's cheap, and it's usually right for things with a short half-life. For a Slack message, taste is correct. For an email draft, for a script you'll rewrite next week, for a plan for the next hour — taste is fine.

Taste fails on durable artifacts. Not because it's bad. Because the sample size it's matching against is too small. For a learning tracker I want to still be using in a decade, my taste has seen the inside of exactly two people's Notion workspaces, mine and a coworker's. The people who have been in the PKM field for twenty years have seen thousands. A foundation poured on a small sample will hold up exactly as long as that sample is representative.

Construction helps me hold the idea. You pour a foundation once. The foundation isn't pretty, it's load-bearing. Everything above it — the framing, the drywall, the paint, the cabinetry — is swappable. Nobody lives in the foundation. Everybody lives in the drywall. If the foundation is wrong, you're ripping out the house. Plain-text files on disk, committed to git — state.json, markdown reports, flat schema docs — those are the foundation. Notion, which I'd been about to treat as the foundation, is drywall. Beautiful, filterable, phone-viewable, absolutely swappable when Notion eventually gets acquired or deprecates a feature I depend on. The research session made me move the load from the drywall to the slab. If Notion dies tomorrow, I lose a view. If the state files die tomorrow, I lose the house.

What this session makes possible isn't speed. It's the ability to keep the thing for ten years without filing regret in year three. The next session is back on CS50P — finishing Lecture 0, starting Problem Set 0, the actual curriculum, the work I'd been creative about avoiding. But the tracker underneath it has evidence where the instinct was.
