---
title: "Cut the Option, Don't Guard It"
date: "2026-05-25"
category: "forge"
tags: [forge, build-1, architecture, pipeline]
excerpt: "Four audit rounds caught real bugs. The cheaper fix wasn't more guards — it was removing the option that created the risk."
---

The task was supposed to be small. One command that runs before each session and says "is the system healthy?" Build clean, tests passing, production reachable. The kind of thing you write in an hour and forget about. It took four audit rounds to ship, and the lesson is not what I planned for it to be.

Round one caught a structural bug in the test scaffolding I had specified — environment variables that wouldn't propagate from the main process into Vitest's forked workers. Real bug. Rebuilt the spec. Round two ran in a different lens, and one of the auditors actually executed the test suite against the current codebase, which surfaced a race condition that had been sitting in the transcription back-half for months. The audit infrastructure had found a pre-existing production-data-integrity bug. Rebuilt the spec bigger, bundled the architectural fix in. Round three caught the bundled fix's own concurrency bug — three concurrent retries all resuming after the first promise, all racing past the same point. The mutex I had designed wasn't a queue. Same shape as the bug it was supposed to fix, one layer up.

By round three the pattern was visible. Each round caught real bugs. Each rebuild introduced new ones. The cost was compounding and the artifact kept growing — from a hundred and twenty-seven lines to four hundred and four lines across the rebuilds. Four auditors had unanimously flagged the scope as wrong-sized at round one. I had pushed through anyway, bundling more in to fix what each round surfaced. The audit was working. The shape was wrong.

The call at round three was to split. The verify command ships in its lean form, five files, single purpose. The architectural fix gets its own task next session, with its own scope, its own audit cycle, its own concurrency-design attention. The bundled version had been a single bigger boat. Splitting it was scuttling it.

![Hernán Cortés ordena dar al través sus navíos — Rafael de Monleón y Torres, 1887. Public domain via Wikimedia Commons.](https://upload.wikimedia.org/wikipedia/commons/f/f8/Hern%C3%A1n_Cort%C3%A9s_ordena_dar_al_trav%C3%A9s_sus_nav%C3%ADos._Rafael_de_Monle%C3%B3n_y_Torres%2C_1887.jpg)

## Cut the Option, Don't Guard It

Hernán Cortés, July 1519, Veracruz. The faction of his men loyal to the governor who had countermanded the expedition was planning to mutiny and sail back to Cuba. Cortés ordered ten of his eleven ships scuttled. Not guarded. Not locked. Not subjected to a discipline-of-no-retreat doctrine. Removed. The option that created the risk was eliminated. The crew committed forward by structural necessity.

This is how the apparatus caught its own scope problem. Each rebuild was a guard against the previous round's bugs. The bundled scope was the boat itself. Splitting it removed the option that kept producing the recurring failure pattern. The same principle scales from one fetch call — wrap it in a timeout that aborts the connection rather than hoping the upstream responds — to one decision: don't bundle two real engineering problems into one scope just because they touch adjacent code.

Optionality looks like resilience. Under stress it acts as a leak. The exit you keep available is the exit someone takes when the room gets hot.

The verify command runs now. Build, typecheck, tests, production smoke, atomic exit codes, one number. The architectural fix gets its session. Each piece gets the attention its weight deserves. The boat that did not need to exist is gone.
