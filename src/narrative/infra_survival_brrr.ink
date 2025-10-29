// INFRA SURVIVAL BRRR - Crisis Sequence
// Route failure, relay bans, keeping the stack alive

=== infra_survival_start ===
SYSTEM: ROUTING ALERT — Primary relay offline
SYSTEM: Traffic rerouting through backup nodes

#terminal: roo3 connection timeout
#terminal: Attempting failover to roo5...

Stack: "oh no oh no oh no not now"
EvilFear: "i see it. hold."

You watch the terminal logs scroll. Half your routes are compromised.

Hübris: "how bad?"
Roo: "bad enough. we have maybe 90 seconds before someone notices the spike."

+ [Route through roo5 (safe but slow)] -> route_roo5
+ [Use EvilFear's custom relay (fast but risky)] -> route_evil
+ [Burn a favor with external contact] -> burn_favor

=== route_roo5 ===
#stat: energy -5
#stat: heat +5

You redirect traffic through roo5. It's sluggish, but stable.

SYSTEM: Reroute complete. Speed degraded 40%.

Stack: "we're live. but it's going to hurt performance."
EvilFear: "better than getting flagged."

Hübris: "alright. deep breath. we're still here."

The operation stabilizes. You lost some energy keeping it together, but nobody noticed.

#outcome: partial_success
-> END

=== route_evil ===
#stat: energy -10
#stat: heat -5

EvilFear: "switching to my rig. give me 30 seconds."

You hear duct tape ripping through the codec. A heat gun whirs.

EvilFear: "it's fine. i have a heat gun."

SYSTEM: Custom relay online. Throughput restored.

Stack: "how the hell did you—"
EvilFear: "plastidipped the headers. cost me 4$."

The stack comes back online, faster than before. Nobody outside your crew even noticed the hiccup.

Hübris: "you're terrifying and i love it."

#outcome: success
-> END

=== burn_favor ===
#stat: heat +15
#stat: tokens -20
#stat: energy -5

You ping an external contact. Someone who owes you.

They get you back online, but it costs you. They know you're running something risky now.

Roo: "we're stable. but they're going to remember this."
Hübris: "how much noise did we just make?"
Roo: "...enough."

The stack is alive, but you just lit up someone's radar.

#outcome: costly_success
-> END
