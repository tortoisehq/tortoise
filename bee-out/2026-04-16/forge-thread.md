# Forge Thread — S2 Regression Detector
## Post to X / Threads

---

**1/**
S2 started with 5 tasks on the board.

Mid-session I asked: "how does this hold up after 1000 tasks?"

The answer cut the plan in half. Shipped 2. Cancelled 3. S2 became a durability session.

**2/**
T2-1: Express API scaffold.

createApp() for tests, startServer() for the listener. One CORS policy, one error handler that never leaks err.message, one request logger that records metadata only. Next task mounts /api/journal and only worries about journal.

**3/**
T2-2 is where the session earned its name.

25 tests. Each one asserts today's correct behavior.

Then I broke each invariant at the source and ran the tests.

**4/**
Flipped fs.appendFile → fs.writeFile in the vault writer.
Test went red. Reverted.

Deleted the anti-injection line from the Whisper prompt.
Test went red. Reverted.

Inverted the kill-switch polarity.
Test went red. Reverted.

**5/**
The principle I didn't have language for before:

A safety check is only a safety check if something you can test confirms it fires.

**6/**
Most "we had a check for that" post-mortems are the second layer failing silently while the first layer looks intact.

The guard exists. The assumption it depends on rotted. The test that would catch the rot was cosmetic or missing.

**7/**
Railway analog (my day job):

Track circuits self-test before every shift. The signal system deliberately breaks the circuit and confirms the signal goes red.

Green-when-broken = running on luck.

**8/**
A test that passes when the invariant is intact AND passes when the invariant is broken is a green light you can't trust.

The regression detector is what makes the invariant real.

**9/**
Template set. Every new guard in Workhorse now gets paired with a test that:
- flips the source
- runs red
- reverts

If flipping the source doesn't trip the test, the test is cosmetic. Rewrite or delete.

**10/**
Next up: T2-3. INDEX.jsonl for the shipped folder with auto-append at ship time.

The shipped/ folder is at 3 entries. At 30 it's unsearchable. At 300 it's useless. Build the index before it crosses the legibility threshold.

Building in public. Full post → tortoise.io
