---
title: "I Let an AI Build Part of My App. Then I Tried to Break It."
date: "2026-06-26"
category: "forge"
build: "steward"
tags: [building-in-public, ai, agentic, testing]
excerpt: "I had an AI build a feature, then sent a second AI to break it. It found a bug in two minutes that every test had just passed."
---

![Two minds side by side: one builds, one breaks and finds the flaw](/images/steward-s16-dont-trust-the-build.svg)

Yesterday I built the part of my software that tells someone how many days they have left to file an important claim. Get it wrong and a real person misses their window. There's no undo button on that.

Here's the thing: I didn't write most of it. I directed an AI agent to build it — the way a director runs a film without ever holding the camera. It planned the work, wrote the code, ran its own tests, and reported back: "Done. Everything passes."

And I didn't believe a word of it.

So I sent in a second AI — one that had never seen the plan, with a single job: break this. Find the lie the builder can't see in its own work.

It found one in under two minutes. The code had quietly used the wrong rule for the most serious cases — exactly where a mistake hurts someone the most. The tests still passed. It "worked." It was also wrong.

## Build It With One Mind. Break It With Another.

This isn't new. It's the oldest trick in craftsmanship. In the medieval guilds, you couldn't call yourself a master until you built one piece — your masterpiece — and a room full of grizzled veterans tried to tear it apart. Survive the room, earn the title. The work proved itself by surviving the attack, not by the maker swearing it was fine.

That's the real skill of building with AI. Not typing faster or writing cleverer prompts. It's refusing to trust the thing that says "trust me" — and standing up a second mind whose only loyalty is to the flaw.

I'm learning this in public, one build at a time. The tools are brand new. The lesson is a thousand years old.
