# Encode Thread — S2 Windows Python Shim
## Post to X / Threads

---

**1/**
Day 2 of CS50P.

Plan: Python in 15 min, enrolled in 10, first 35 min of Lecture 0.

Reality: 45 min on the Python install and nothing else.

Honest rating: 4/10.

**2/**
The trap: Windows App Execution Aliases.

Typing `python` in PowerShell opens the Microsoft Store instead of launching an interpreter. The alias intercepts the name before PATH resolves.

Every first-time Windows Python install hits this exactly once and loses an afternoon.

**3/**
The fix, once you know:

1. Install Python from python.org — NOT Store, NOT winget. Check "Add to PATH" on screen 1.
2. Settings → Apps → Advanced app settings → App execution aliases → disable python.exe + python3.exe.
3. NEW PowerShell window. Old ones hold stale PATH.

**4/**
Verify all four before you move:

python --version
py --version
pip --version
where.exe python

All four must return real paths. If any hits the Store, the alias is still live.

**5/**
Wrote the fix up as an evergreen reference note, not buried in the session log.

Solved-once problems don't belong in session logs.

Grepping "python" across 6 months of notes = bad. Grepping one reference note = good.

**6/**
Reference notes get written the moment a problem is solved, not "later."

Later never comes. Today proved that.

**7/**
The streak is alive but the number is about to get two tracks:

- sessions logged
- sessions that moved curriculum forward

A streak that counts tooling at full weight lies about the pace.

**8/**
Tooling time is capped at 1 session/week.

Two sessions deep in setup without touching the curriculum = something's wrong, flag it.

**9/**
Next session is curriculum only. No tooling side-quests.

Lecture 0 has been untouched for two sessions. That gap closes next, or Encode is already off pace in week one.

Full post → tortoise.io

---

**Single-post version (for X 1-tweet):**

Day 2 of CS50P. Plan: Python installed, course enrolled, Lecture 0 watched. Reality: 45 min fighting the Windows App Execution Alias that makes `python` open the Microsoft Store instead of launching an interpreter. Zero curriculum moved. 4/10. Tooling isn't learning.
