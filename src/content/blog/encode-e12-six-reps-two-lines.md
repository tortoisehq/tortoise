---
title: "Six Reps Didn't Stick. Two Lines Did."
date: "2026-05-04"
category: "encode"
tags: [encode, building-in-public, python, cs50p]
excerpt: "Drilled an f-string definition six times. Didn't stick. Typed two lines in a Python REPL — locked in one contrast."
---

The plan for E12 was clean on paper. Finish CS50P Sections 11 through 13, encode Lesson 2 of the 170-lesson memory curriculum, retest yesterday's memory work at Day 1. Sixty minutes, three blocks, one bound notebook.

What actually happened was I drilled the same eight-word phrase out loud six times across two sessions and it never landed. The phrase was "formatted string literal · variables in curly braces · NOT a function." In E11 I tried it three times — slowly, then with vocabulary anchoring, then with rhythm. Today I tried three more times. Every rep came out as "formatted strings literally," which sounds nearly identical out loud but is grammatically a different thing. "Formatted string literal" is a noun phrase naming a Python type. "Formatted strings literally" is a verb-adverb construction describing what something does. My mouth kept reaching for the second one because I was reading "literal" as the everyday adverb "literally" instead of the programming term it actually is.

Six failures of the same drill. I caught myself about to start a seventh.

Then I pivoted — opened the Python REPL and typed three lines: `name = "Miles"`, then `print(f"hello, {name}")`, then `print("hello, {name}")`. The only difference between line two and line three was the `f` prefix. Line two output `hello, Miles`. Line three output `hello, {name}` printed literally. One-character difference, completely different behavior. I could see what the `f` did because the alternative was running right next to it. The verbal label I couldn't memorize attached to a concrete production memory in one contrast.

The phrase locks now. I can say it. I can also explain it, which is the better test.

## When the Drill Fails Three Times, Change the Tool

Repetition strengthens a trace. If the trace is wrong — wrong technique, wrong substrate, wrong frame — repetition strengthens the wrongness. The brain doesn't distinguish "more of the right thing" from "more of any thing." Six reps of the wrong frame is six layers of paint on a crooked wall. The wall is still crooked.

The fix isn't more reps. The fix is changing what kind of work you're doing. I was treating a vocabulary gap as if it were a memorization gap. Memorization gaps respond to repetition. Vocabulary gaps respond to seeing the word used correctly in context — preferably by something that will not lie to you. The Python interpreter does not lie. It just runs your code and tells you what happened. When I later tried `name.lower()` and saw that the value of `name` was unchanged, I learned what immutable means in two seconds. No drill could have done that.

A locomotive engineer trains rules and procedures verbally before getting in the cab. But the actual locking happens when you are at the controls and the train moves the way the rule said it would. The rule and the cab are two different encoding paths. You need both, but you cannot substitute one for the other.

The day's other lesson came from the same shape. Strings in Python are immutable, which means once you create one you cannot change it — only replace it. `name.lower()` doesn't lowercase `name`. It returns a new lowercased string and floats it back to you, and unless you catch that return value with `name = name.lower()`, the original variable stays exactly as it was. Concrete already poured cannot be re-poured. To change a building, you frame a new pour and connect it to the structure. The old slab sits in place, immutable, and the new work happens around it. That is what the `=` is doing in `name = name.lower()` — pointing the address at the new concrete instead of the old.

I learned this in the REPL too, not by reading about immutability. Predicted that `name` would be lowercase after `name.lower()`. It was not. I was wrong by exactly one character of capitalization, and that wrongness was the entire concept of immutability made visible. Six lines of verbal definition could not have done what one inverted prediction did.

The memory side of the day had its own version of the same pattern. Lesson 2 of the 170 is "Physics-Breaking Images" — the technique of building images that defy gravity, scale, or time. The locus was the gym lobby past the entrance doors: front desk, yoga stairs, chalkboard on the wall. The image was that chalkboard producing 3D binary code falling to the ground with a splash sound, microscopic but landing with a ton's worth of weight, then climbing up my legs and packing into my muscles. The emotion was DOWNLOADED with code, Neo-style. The one-liner — "See the Matrix, AKA make the Loci loco" — turned into a triple pun the moment I built it: SEE the visual, SEE as my pre-EPIC mnemonic precursor, and SEE for "senses," the multi-sensory rubric. Three retrieval hooks on one phrase. Cold-tested thirty seconds later. Five-star image at the moment of encoding. Three-star recall on the cold pass. Lost the dimension-break, forgot the LOCO wordplay. Trial and error again — the error half is data for tomorrow's rebuild.

By the time the drill failures, the REPL wins, and the memory drift had all added up, I had burned more session minutes than I had budgeted, and my pacing was bad. So I called it — stopped trying to grind through the remaining CS sections, and spent twenty minutes designing a new session shape. Four templates, sixty minutes each, code on keyboard not voice, paper and pen for definitions and mind maps, one bound notebook for everything. The architecture is locked in the project files now.

The trial-and-error frame holds, but only because the error half is the data. Running the same trial six times is friction, not error. Switching to a different trial after the third failure — that is where the learning lives.
