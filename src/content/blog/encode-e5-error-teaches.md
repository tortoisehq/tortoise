---
title: "The Error Message Teaches Faster Than the Pretest"
date: "2026-04-23"
category: "encode"
tags: [encode, building-in-public, cs50p, python]
excerpt: "Session 5. Typed hello.py twice without the python prefix, got yelled at by the shell twice, and finally understood what an interpreter does."
---

Session five was supposed to be a clean restart. Session four died in a fifty-five-minute pipeline bug that ate all my teaching time, so today I had seventy minutes blocked out in two Pomodoros to finally crack [CS50P Lecture 0](https://www.youtube.com/watch?v=nLRL_NcnK-4) and run my first Python program. I got the program running. I also ran face-first into the exact mistake my morning pretest had warned me about — twice — and learned it better than if I'd never made the mistake.

Here's how pretests are supposed to work. Before you watch a lecture section, you commit to an answer. The video either confirms or corrects your prediction. The correction sticks harder when you've staked a wrong position, because your brain has to un-wire the prediction when the right answer arrives. That's the theory.

This morning's pretest was simple. If you save a file called `greet.py` with `print("hi there")` in it, what command do you type in the terminal to run it? My guess was `greet`. Obvious mental model: every program I launch by typing its name — `chrome`, `code`, `git` — works the same way. Type the name, the program runs. Wrong. The right answer is `python greet.py`, because `greet.py` isn't a program. It's a text file containing Python code. You have to invoke the Python interpreter explicitly and hand it the file.

Fine. Got the correction. Watched the video. Nodded along. Thought I had it.

An hour later I was at the code-along step — open VS Code, make a file called `hello.py`, put one line in it, run it. Environment was set up. Python 3.14.4 installed. File saved. I jumped to the terminal and typed `hello.py`.

The shell yelled back: *"hello.py: The term 'hello.py' is not recognized as a name of a cmdlet, function, script file, or executable program."*

Exact same error my pretest had warned me about. I stared at it. Fixed the command. Typed `hello.py` again — literally the same thing. The shell yelled at me a second time. Then I typed `python hello.py`. The terminal printed `hello, world`. The loop closed.

That's when it actually clicked. Not when Claude had explained it three hours earlier. Not when I'd acknowledged the correction. When the shell slapped me twice with its own error message.

## The Error Message Teaches Faster Than the Pretest

The principle I took from today isn't Python-specific. It's about how learning works when the thing being learned is mechanical.

Explanations go in through the language-processing part of the brain. You read "files aren't executable programs, only interpreters are," you nod, you file it under noted. Lived mistakes go in through the consequence loop — the part of the brain that evolved to keep you from eating the same plant twice. When a pretest predicts your wrongness and the real world confirms it, the encoding is immediate. No translation step needed. The shell is a harder teacher than I am and it works for free.

The cooking analog makes the concept portable. When you type `python hello.py` in a terminal, three distinct things cooperate. The shell — PowerShell, bash, whatever — is the waiter, takes your order but cooks nothing. The Python interpreter is the chef, knows how to cook Python recipes but needs instructions. The `.py` file is the recipe, written in the Python language. The waiter never cooks. The chef never takes orders directly from you. The recipe never walks itself to the stove. When I typed `hello.py` alone, I was asking the waiter to cook. That's not what waiters do.

The same pattern shows up everywhere, not just Python. `pip install X` invokes pip, not X. `git commit` invokes git, not commit. `npm run build` invokes npm, not build. Every single one: name the runner, don't name the file. I'll use this rule thousands of times before CS50P ends.

After the code-along I spent the second Pomodoro locking the vocabulary into a memory palace — six loci in an old house I don't live in anymore. The driveway is Python the language, a three-dimensional game of Snake where my feet move the code. The steps up to the walkway are the interpreter, chefs on pipelines yelling orders down at the driveway. The stairs to the landing are the `.py` file, made of pies. The front door is function. The chalkboard on the door is argument — I finger-paint binary on it and the door changes depending on what I write. The living room is string, dangling from the ceiling.

Backward-walk test: six out of six terms recalled in the right positions, one self-correction at the function-and-argument pair because they share the door. The door is the function, the chalkboard on it is what you write as an argument — two concepts at the same physical spot, tight retrieval friction but survivable. Good enough for day one.

I'm five sessions into a twenty-four-month solo track to go from no CS degree to shipping AI-track builds. Three sessions behind the pace I set. Today didn't move the pacing — covered one section of fifteen in Lecture 0 — but it shipped the first Python program running on my own machine and cemented a set of concepts that are now bomb-proof for everything that comes next. Tomorrow: forward-walk the palace to thicken the definitions, then Section 2 of the lecture.

The pretest was right about my wrong answer. The shell was right about my wrong command. I am right-er than I was this morning.
