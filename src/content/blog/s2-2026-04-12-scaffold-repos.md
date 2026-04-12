---
title: "Two Repos From Nothing"
date: "2026-04-12"
category: "forge"
tags: ["workhorse", "github", "typescript", "cli"]
excerpt: "S2 scaffolded the vault and Workhorse CLI from scratch so every future session has somewhere to write and something to run."
---

Workhorse had no code. No repository, no data store, no CLI skeleton. Every session after this one needs a running command-line tool and a vault with the right folder structure to write into. S2's entire job was to create both from zero and push them to GitHub so the project actually exists somewhere other than my head.

Two repos went up under the ironridgeai org. The vault is private, holding lane folders for every category: forge handoffs, encode sessions, engram sessions, endure journals, and ops. Workhorse is public, a TypeScript and commander skeleton with journal and focus commands stubbed out. Running npx ts-node src/index.ts --help prints clean output. That's the bar for a scaffold session. Both repos are committed, pushed, and tracked.

The repos landed under ironridgeai instead of tortoisehq because no org existed yet and creating one mid-session would have cost ten or fifteen minutes of context-switching for zero functional gain. GitHub auto-redirects old URLs after a rename, so the cost of fixing it later is basically nothing. I'd rather ship two working repos under the wrong org than one half-finished repo under the right one.

The gh CLI wasn't pre-installed on this machine. winget pulled it down fine, but the interactive auth menu refused keyboard input inside PowerShell. Fifteen minutes gone before I found the flag: gh auth login --hostname github.com --git-protocol https --web. That bypasses the broken menu entirely and opens the browser for the OAuth flow. Documenting it here because this will bite anyone running gh for the first time in a PowerShell session on Windows.

The other friction was a TypeScript module conflict. Recent versions of tsc --init enable verbatimModuleSyntax by default, which forces ESM-style imports. ts-node running under CommonJS rejects that immediately. The fix was a one-line patch to tsconfig.json, maybe five minutes lost, but it's the kind of thing that looks like a real error when you don't know the flag exists. Disabled it, moved on.

I deliberately did not start wiring journal logic. The temptation was there since both repos were warm and the stubs were already in place. But S2's scope is scaffold, not feature work. Adding logic mid-session risks shipping a half-built command instead of two clean repos. S3 owns the journal command end-to-end, and now it can start without fighting tooling.

That's what S2 actually unlocks. S3 can open with the vault's endure/journal directory already tracked, the Workhorse CLI already wired and running, and the TypeScript config settled. The decisions that were blocked are now live: which transcription engine to use (Whisper or Claude's audio API), how to capture voice input (Sox, ffmpeg, or a browser API), and what format journal entries should take when they hit the vault. None of those decisions needed to be made today. They needed a place to land, and now they have one.

Session ran slower than expected on tooling, faster than expected once the tools worked. That's the pattern with scaffold sessions. The next one will be all logic.
