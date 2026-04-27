---
title: "I Thought Python Threw the Error. PowerShell Did."
date: "2026-04-26"
category: "encode"
tags: [encode, building-in-public, python, cs50p]
excerpt: "I guessed Python threw the error. PowerShell did. The correction stuck because I'd already committed to the wrong answer."
---

Tonight's session opened with the same six terms I locked last time — Python the language, Python the interpreter, .py file, function, argument, string. They were locked at the term level. Fuzzy at the definition level. The plan was a fast forward-walk through the memory palace I'd built around an old house I know well, then forty-five minutes of new lecture material.

The forward-walk was not fast. Locus one — Python the language — I called "the code itself," which is wrong on a level I hadn't seen until my words came out. Code is what you write IN the language. The language is the thing one rung more abstract — the rulebook, the agreed-upon syntax and semantics. I needed three attempts and a chess analogy before that landed. Three more loci needed real teaching, not review. The "thickening the definitions" I thought I'd done last session was thinner than I'd believed.

Then we moved to the lecture. Section five was called "Bugs and Debugging." Two minutes of video. Before pressing play, the pretest. When you typed `hello.py` alone last week without `python` in front, and the terminal said `not recognized as a cmdlet, function, script file, or operable program` — *who threw that error?*

I guessed Python the language, because of a missing backslash, and called it a syntax error.

I was wrong on three counts. Wrong actor, wrong source, wrong error type. Python the language doesn't throw errors — rulebooks don't error. There was no missing backslash; the missing thing was the word `python` in front. And it wasn't a syntax error at all. It was PowerShell — the *shell*, not Python — saying "I don't know what `hello.py` is." The chef never even saw the recipe. The waiter rejected the order at the door.

## Wrong Answers Encode the Correction Deeper

I'd been told this in roundabout ways for two sessions now. But being told and being wrong are different events for memory. When the correction came, it stuck in a way that "let me explain who throws errors" never would have. I'd committed to a model that was wrong, and the world sent back a prediction error.

That's the principle. Memory consolidation favors prediction errors. A passive correction is just information — filed alongside everything else you've heard today. A correction following a committed wrong guess is a different signal. Your brain says: "the world differs from my model — update model, immediately." The encoding strength scales with the size of the surprise.

It's the same mechanism that locked something for me last week. I'd typed `hello.py` alone twice, in a real terminal, watched the same error appear twice, and only then did "invoke the runner, not the file" go from explanation to muscle memory. The lived mistake was the prediction error in the body. Tonight's pretest was the prediction error in the mouth. Same mechanism, smaller stakes, faster cycle.

What this means for how I run sessions: the pretest beat in my five-beat protocol — pretest, watch, mini-lesson, code-along, mini-test — is the highest-leverage beat by a mile. I'd been treating it as a warmup. It's the part that earns the rest. The bug taxonomy I learned tonight, four kinds of errors distinguished by who catches each, probably wouldn't have stuck without the wrong guess that opened the section. With the wrong guess, four levels of error catching now have somewhere to live in my head, and one of them — shell error, the kind a turtle in a fireplace cubby reminds me of — is wired directly to a real thing I lived through.

The next session's first task is to test a tighter shape. Ten minutes of palace review instead of fifteen, the full five-beat ceremony reserved for genuinely abstract concepts, watch-and-test only for concrete vocab I can derive from what's already in my head. That structure will work or it won't, and either way I'll know more next time about how this kind of learning actually moves through me.

The thing that opened up tonight is small but real. I now have a pretest mechanism I trust to do the work. Every abstract concept ahead — and Lecture 0 has plenty left, with return values and variables next, then comments, then escapes and f-strings — gets a guess before it gets an answer. The guesses will be wrong sometimes. That's not a problem with the protocol. That's the protocol working.
