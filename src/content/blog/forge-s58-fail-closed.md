---
title: "Let Go and It Stops"
date: "2026-06-21"
category: "forge"
tags: [forge, building-in-public, security, fail-closed]
excerpt: "An overnight audit graded my code B-minus. Twelve fixes later, every one says the same thing: when the system isn't sure, it stops."
---

A machine I asked to be ruthless spent the night reading my code and handed back a grade. B-minus. Not failing. Just a list, polite and damning, of all the quiet ways my own work could hurt me without ever throwing an error. The worst of them lived near the vault, the private journal I'm keeping for years. A bug there doesn't crash. It just writes the wrong thing down, forever, and smiles.

So I spent the session building twelve fixes, and every one of them is a different way of saying the same sentence: when you're not sure, stop.

![A train's emergency brake handle. The safety isn't a hero yanking a lever in a crisis. It's what happens when nobody is holding on.](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emergency_Brake_on_Bombardier_Commuter_Railcars.jpg/1280px-Emergency_Brake_on_Bombardier_Commuter_Railcars.jpg)

A train driver holds a handle. Let go for any reason, collapse or distraction or worse, and the train stops on its own. The clever part isn't the alarm. It's that the safe state is the default, and you have to actively hold the unsafe one. That's the whole design now. The spend caps refuse to spend a cent if they can't read their own ledger. The server won't start if the drawer holding my voice recordings is open to the public. The login check rejects a token the instant it has a reason to doubt it. None of them try to be smart. They just fall toward "no."

![A bank vault door. The vault is the point: twenty-four years of recordings, and the fixes all bend the same way, protect the drawer even from me.](https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Vault_Door%2C_Federal_Hall.jpg/1280px-Vault_Door%2C_Federal_Hall.jpg)

There's a watchdog too, and it's my favorite. My data syncs once a day on its own. But what if the thing that runs the sync quietly dies? No error, because nothing ran to fail. So every good sync now pings an outside service that expects to hear from it daily. If the heartbeat goes silent, I get an email. It's the watcher that watches the watcher.

![An old railway semaphore signal. Lose power and it drops to "stop." It does not guess green, and neither does any of this.](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Railway_semaphore_signal_in_TRA_Xinwuri_Station_20131117.jpg/1280px-Railway_semaphore_signal_in_TRA_Xinwuri_Station_20131117.jpg)

One honest note. There was a step I couldn't automate, and I didn't pretend otherwise. The database fix needed a credential I refuse to hold. I told the machine I give permission. It told me permission isn't a password. Fair. So I logged in myself and let it drive my own browser, and the secret never left my account.

It's v1.0 now. Hardened, and watched. Next I find out whether anyone but me can hold the handle.
