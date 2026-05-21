---
title: "Fix the Wire, Not the Value"
date: "2026-05-03"
session: "S13-2026-05-03"
task: "T13-2"
pillar: "P11 Technical Craft × P6 Systems Thinking"
analogy_domain: "NUCLEAR-THREE-MILE-ISLAND"
excerpt: "When a safety guard is wired to a proxy of the thing it defends, tuning the guard's sensitivity doesn't make you safer — it makes the false-positive failure mode more reliable."
tags: [forge-finding, safety, three-mile-island, wiring, lifecycle-events]
---

## The lesson

When a safety guard is wired to a proxy of the thing it defends against, increasing the guard's sensitivity doesn't make you safer — it makes the false-positive failure mode more reliable.

Fix the wiring; don't tune the value.

## Analogy — RAILWAY: Track Circuits

Track-circuit signaling exists precisely because indicator lights cannot be wired to the dispatcher's command. A signal on a railway is RED only when the block's electrical circuit is unbroken — when a train's wheels short the rails, when a rail is fractured, when a wire breaks. The mechanism measures the actual condition (block clear or block compromised), not the dispatcher's intent.

If signal lights were wired to "I commanded this block clear," every dispatch error would still show GREEN over a real obstruction. Railways learned this the expensive way in the 19th century after fatal collisions and codified track circuits as fail-safe by 1900.

## How it landed in T13-2

Three Mile Island, March 28, 1979.

Reactor Unit 2 (TMI-2) of the nuclear plant in Pennsylvania experienced a stuck-open pilot-operated relief valve (PORV) on the primary reactor coolant system. The control room indicator light showed "closed."

The light was wired to the *solenoid command* — the signal sent TO close the valve — not to the valve stem's actual mechanical position. Operators saw "closed," believed the coolant system was sealed, and made decisions consistent with that belief for over two hours while the reactor boiled off coolant.

Result: partial core meltdown, $1B+ cleanup, and the most significant US nuclear accident.

The post-accident NRC mandate: position-indicating signals must derive from the actual mechanical position of safety devices via independent sensors, not from the control circuit's command. The defense moved from a proxy ("command was issued") to the thing itself ("valve stem position"). The wiring was the fix; valve quality, command logic, and operator training were not the fix.

T13-2's voice journal had a 3-second timer that was supposed to catch a hung recording. But it was wired to fire 3 seconds after recording *started* — not 3 seconds after Stop was pressed. So every normal recording (which is more than 3 seconds long) tripped the alarm. The fix didn't change the timer's value. It changed which event triggered the timer: now it fires from Stop, not from Start. Same 3-second alarm; right wire.

## The wider pattern

Extends S6 "Measure the Thing, Not Its Shadow" (S6 L5-1: Express socket idle timeout that measured connection state but missed underlying upstream hang) and S7 "Bind Lifecycle to the Output Stream" (S7 TB-2: `req.on('close')` firing on body-consumption, not actual disconnect).

Same family — guards wired to a proxy. New mechanic: timer rooted in the wrong lifecycle event. Third instance of the pattern in the program; pillar P11 graduation evidence.

## Sources

- [Three Mile Island Accident Fact Sheet — NRC](https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/3mile-isle.html)
- [Three Mile Island accident — Wikipedia](https://en.wikipedia.org/wiki/Three_Mile_Island_accident)
- [Three Mile Island accident — Britannica](https://www.britannica.com/event/Three-Mile-Island-accident)
