# Forge IG — S2 Regression Detector
## Instagram caption

---

**Primary caption:**

A safety check is only a safety check if something you can test confirms it fires.

S2 started with 5 tasks. Mid-session I asked: "how does this hold up after 1000 tasks?" Cut the plan in half. Shipped 2 durability tasks instead.

The one that mattered: 25 tests, each asserting a real invariant. Then I flipped each invariant at the source — appendFile → writeFile, anti-injection prompt deleted, kill-switch polarity inverted — and confirmed the test went red. Reverted each.

Three invariants. Three regression detectors. Three green lights I can now trust.

Railway analog: track circuits self-test before every shift. The signal system deliberately breaks the circuit and confirms it goes red. Green-when-broken means the railway is running on luck.

Every new guard in Workhorse now gets paired with a test that fails when the guard is broken. If flipping the source doesn't trip the test, the test is cosmetic.

Full post at tortoise.io / link in bio.

---

**Hashtags (use 5-8):**
#buildinpublic #indiehacker #typescript #vitest #nodejs #softwareengineering #testing #railway

---

**Alt text for image (if using):**
Screenshot of Vitest terminal output showing 25 tests passing, with highlighted section showing three regression detectors firing red after invariant flips.
