---
title: "Defense at every approach"
date: "2026-05-20"
category: "forge"
tags: [forge, build-1, audits, security]
excerpt: "Three LLM auditors said the verify script was solid. The fourth auditor ran it. It wasn't."
---

Three external LLMs ran the audit. Three confirmed the verify script would catch the bug class we were defending against. The fourth auditor was a different kind: repo and tool access, not prompt-only. It ran the regex against the spec's own canonical code snippet. The regex failed. The defense apparatus that was supposed to catch the bug had a bug in it.

The session shipped the backend half of password reset: atomic Postgres consume, sentinel-table mirror-I/O for timing-attack defense, stacked IP plus email rate limits, shared normalize helper at every consumer. Each defense holds independently. The bug class that would have shipped if the verify apparatus self-certified got caught only because we added a different-lens auditor.

The decision that mattered was skipping the next round. After the fourth auditor caught the structural P0, the right move wasn't another LLM pass. A third round would have asked the same lens what the same lens already missed. Three downstream defense layers had cleared. Code review, sandboxed migration test in real Postgres, runtime tests against the live server. The verification budget had bought what it could. Adding ceremony at this point trades real risk in the next task for theater here.

## Defense at every approach

France finished the Maginot Line in 1936. One hundred and fifty kilometers of reinforced bunkers, retractable artillery, underground rail. Three billion francs. The strongest defense in history at one approach. May 10, 1940, the Wehrmacht crossed through the Ardennes forest the French considered impassable. May 13, they reached the Meuse, 200 kilometers behind the Line. June 22, France surrendered. The Maginot garrisons were still at their posts when the armistice was signed. The Line was never breached. It was outflanked. The wall worked perfectly. The wall was at the wrong place.

Defense-in-depth on a critical surface means every layer holds independently. Every approach defended, not strongest at one. In the password reset shipping today, the rate limit is the Maginot Line. If that is your only defense, an attacker walks around it via timing leaks, DB-key theft, weak tokens, HTML-image fetches, vendor lock-in. Seven layers, seven approaches, each holding alone.

The same pattern runs one frame up, at the audit layer. Three same-lens auditors are three guards on the same wall. The Ardennes is the regex they cannot run. Modern rail signaling combines dispatcher reports, track-circuit detection, and visual inspection at every switch. Three lenses because each catches what the others structurally miss. Adding a fourth dispatcher does nothing for the broken track-circuit. Adding a track-circuit does. The fourth auditor this session was repo-frame, not prompt-frame. It read source files, ran commands, queried the live npm registry, inspected the SDK's TypeScript source for runtime behavior the types didn't expose. Each of those moves was structurally outside the LLM lens.

What this unlocks: the next session ships the phone half of the same flow. The same discipline applies one frame higher. When reviewers converge, add a different-lens reviewer before you add another of the same. The class of bug invisible to a lens stays invisible no matter how many same-lens reviewers stack.
