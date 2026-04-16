---
title: "Tooling Isn't Learning"
date: "2026-04-16"
category: "encode"
tags: ["cs50p", "python", "windows", "tooling"]
excerpt: "Day 2 of CS50P was supposed to be Lecture 0. Instead it was 45 minutes fighting the Windows Python shim. Zero curriculum. Streak preserved. 4/10."
---

Day 2 of CS50P. The plan was Python installed in fifteen minutes, course enrolled in ten, and the first thirty-five minutes of Lecture 0 watched. The reality was forty-five minutes on the Python install and nothing else.

<abbr title="App Execution Aliases — a Windows 10/11 feature that redirects certain command-line names (like python.exe) to Microsoft Store pages. Makes 'python' on PATH look installed when it isn't.">Windows App Execution Aliases</abbr> is the trap. Typing `python` in PowerShell opens the Microsoft Store instead of launching an interpreter. The alias intercepts the name. Real <abbr title="PATH — the list of folders Windows searches when you type a command. If python.exe is in a PATH folder, 'python' runs it. The alias pretends to be in PATH but redirects to the Store.">PATH</abbr> entries can't help because the alias resolves first. Every first-time Windows Python installer hits this exactly once and wastes an afternoon figuring it out.

The fix is two steps once you know. Install Python from python.org (not the Store, not <abbr title="winget — Windows Package Manager. Good for most tools but hides the Python install options you want to inspect on Day 1.">winget</abbr>), and check the "Add python.exe to PATH" box on the first screen. Then disable the App Execution Alias for `python.exe` and `python3.exe` under Settings → Apps → Advanced app settings. Open a new PowerShell window — old windows hold stale PATH — and verify with `python --version`, `py --version`, `pip --version`, and `where.exe python`. All four need to return real paths before you move.

I wrote the whole thing up as an evergreen reference note instead of burying it in the session log. The reasoning is simple. Solved-once problems don't belong in session logs. Grepping "python" across six months of session notes is bad. Grepping one reference note is good. Reference notes get written the moment the problem is solved, not "later." Later never comes. Today proved that.

The honest rating is 4/10. The streak stayed alive and the fix is now permanent documentation that <abbr title="Cross-pillar link — the reference note helps Tortoise builds beyond Encode. NightOwl (memory training product) and Ironridge (upstream build) both run on this Windows box and hit the same shim.">NightOwl and Ironridge</abbr> won't have to rediscover. But zero lecture watched, zero <abbr title="PSet — problem set. CS50P's hands-on coding assignments. Each pset applies the concepts from its paired lecture.">PSet</abbr> attempted, zero reading done. Tooling is not learning, and I'm not going to pretend it was.

Two rules out of this. Tooling time is capped at one session per week. If I'm two sessions deep in setup without touching the curriculum, something's wrong and I flag it. And the streak number is going to get two tracks: sessions logged, and sessions that moved curriculum forward. A streak that counts tooling at full weight lies about the pace.

Next session is curriculum only. No tooling side-quests. If something breaks, I note it and route around it. Lecture 0 is still untouched and it's been two sessions. That gap closes next, or Encode is already off pace in week one.
