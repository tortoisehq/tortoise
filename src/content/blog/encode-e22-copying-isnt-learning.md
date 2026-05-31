---
title: "You Don't Own a Line You Copied"
date: "2026-05-29"
category: "encode"
tags: [encode, building-in-public, cs50p, python]
excerpt: "Two CS50 Python submissions in one sitting. The real lesson: typing a line someone hands you teaches you nothing."
---

The plan was small. Finish one assignment that had been sitting undone for three sessions — CS50's first Python problem, the one where you take whatever someone types and hand it back in lowercase. A few lines of code. I drive trains for a living and I'm learning to program from zero, and I'd deferred this same tiny exercise three times: a folder setup that went sideways, an admin day, a session that timed out before it started. Today the only goal was to stop deferring.

It took two and a half hours, and almost none of it was about Python.

The program, when it finally existed, was two lines. The language was never the problem. It was everything around it — which box on the screen is the file and which one is the terminal, why the commands I typed kept landing in the wrong place, why a stray word I meant to send in a chat window ended up inside my code and broke it. I'd get an error and assume I'd written bad Python, when really I'd typed a folder command into a file, or run my homework input straight into the shell. Every failure that afternoon was mechanical. None of it was the actual concept.

What finally turned it was the smallest possible experiment. Instead of being told what a variable is, I typed `x = 5`, hit enter, then typed `x` and watched it hand back `5`. The computer remembered. Then I put a person's typed input into the box instead of a number, and watched that come back too. I predicted what `"cat".replace("c", "h")` would do before I ran it — said "hat" — and it was hat. That predict-then-run loop was the first time all day it felt like learning instead of being walked through a maze.

Then I started the second problem, and hit the wall this whole post is about.

## You Don't Own a Line You Copied

For the second program I had to assemble the pieces I'd just learned into one line. I kept fumbling it — parentheses in the wrong spot, the method hanging off the outside instead of the inside. Eventually, frustrated, I was handed the exact line to type. I typed it. It worked. And the second it worked I said out loud that I wasn't learning a thing. I was right.

That's the lesson, and it reaches well past Python.

Typing a correct line that someone else built is recognition, not retrieval. It feels like progress because the test goes green, but nothing gets encoded. The proof is simple: hand me a blank file tomorrow and I couldn't reproduce that line. Compare it to the variable experiment — I could rebuild that from scratch right now, because I reasoned my way into it instead of receiving it. The struggle wasn't in the way of the learning. The struggle *was* the learning. The minute it got removed, so did the encoding.

The one piece I did own by the end was order of operations — why the part that changes the text sits inside the part that prints it. Think of a kitchen. You can't plate a dish before you cook it. The transformation happens first, then the serving. Code reads the same way: the innermost thing runs first and works outward. Once I saw it as cook-then-serve instead of a wall of brackets, the nesting stopped feeling arbitrary and started feeling obvious.

So the rule for next time flips. The moment I catch myself copying an answer just to turn the red into green, I've stopped learning and started performing. The fix isn't more explanation from someone else. It's building the thing myself, one verified piece at a time, even when that's slower and more annoying — especially then. If I can't construct it or explain it back in my own words, I don't have it yet, no matter what the checkmark says.

Two assignments are on the board now, which after three deferrals feels like the real win. But the thing I'm keeping isn't the green checkmarks. It's the line between code that passed and code I actually understand — and a refusal to confuse the two again.
