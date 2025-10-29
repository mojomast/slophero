=== final_extraction_start ===

Hübris: "this is it. final extraction. one shot."
Stack: "i'm terrified"
Roo: "we all are. but we're doing it anyway."
SYSTEM: FINAL EXTRACTION INITIATED

# stat: energy -5
# stat: sanity -10
# terminal: Final extraction sequence activated

The plan is locked. AiSatoshi crosses the border in 48 hours. Everything depends on the route you choose.

* [Commercial flight through major hub]
    -> commercial_route
* [Private charter, dark airfield]
    -> private_route
* [Overland border crossing]
    -> overland_route

=== commercial_route ===

Hübris: "commercial flight. blend in with business travelers."
Stack: "high risk. TSA, passport control, cameras everywhere."
Roo: "but it's the most normal route. nobody expects bold moves."

# stat: heat 10
# terminal: Route selected: Commercial flight
# chat: EvilFear: got him a fresh passport. looks legit.

You book the flight. Singapore Airlines, SFO arrival. Clean legend, consulting gig cover story.

But 6 hours before departure, Stack spots something.

Stack: "wait wait wait. someone's flagging his documents."
Hübris: "who?"
Stack: "can't tell. but there's a customs alert on his passport number."

# stat: heat 15
# stat: sanity -10
# terminal: ALERT: Passport flagged in system

* [Burn the documents, rebook under new identity]
    -> commercial_pivot
* [Push through anyway, hope it's a false positive]
    -> commercial_risky
* [Abort commercial route, pivot to overland FAST]
    -> emergency_pivot

=== commercial_pivot ===

Roo: "new identity. now. Stack, you have a backup?"
Stack: "yeah but it's not as clean. might trigger secondary screening."
Hübris: "better than a black bag at SFO."

# stat: tokens -30
# stat: heat -10
# stat: energy -10
# terminal: New identity purchased. Documents updated.

You burn the compromised passport. New identity: Michael Chen, enterprise software consultant.

The flight boards. AiSatoshi walks through security. Laptop, carry-on, nothing flagged.

He lands at SFO. Immigration officer barely looks up.

Officer: "Purpose of visit?"
AiSatoshi: "Tech conference. Moscone Center."
Officer: "Enjoy your stay."

# chat: Roo: he's through. holy shit he's through.
# stat: sanity 20
# outcome: success

-> extraction_success

=== commercial_risky ===

Hübris: "it's probably a database error. push through."
Stack: "this feels wrong."
Roo: "we're committed. too late to pivot."

# stat: heat 20
# stat: sanity -15
# terminal: Proceeding with flagged documents

AiSatoshi boards the flight. It's smooth until immigration.

Officer: "Mr. Nakamoto. Step aside please."
AiSatoshi: "Is there a problem?"
Officer: "Secondary screening. This way."

# chat: Stack: oh fuck oh fuck oh fuck
# stat: heat 30
# terminal: ALERT: Secondary screening triggered

The interview room. Two officers. They ask about his work, his connections, his funding sources.

He sticks to the cover story. Consulting. Freelance. Boring work.

After 40 minutes, they let him go. But it was close.

# chat: Hübris: that was too fucking close
# stat: sanity -20
# stat: heat 25
# outcome: partial_success

-> extraction_partial

=== private_route ===

Hübris: "private charter. dark airfield. no records."
Stack: "expensive. and if we get caught it looks REALLY bad."
Roo: "but no TSA. no passport control. clean exit."

# stat: tokens -50
# stat: heat -10
# terminal: Route selected: Private charter

You arrange the charter through a contact. Small jet, airfield 90 minutes outside the city.

The pilot asks no questions. Cash payment. Wheels up at 0400.

But during the flight, Stack catches chatter on secure channels.

Stack: "guys. someone's tracking private air traffic out of the region."
Hübris: "are we flagged?"
Stack: "can't tell. but there's activity."

# stat: heat 20
# terminal: ALERT: Unusual air traffic surveillance detected

* [Land at planned airport, hope we're not flagged]
    -> private_normal
* [Divert to alternate landing site mid-flight]
    -> private_divert
* [Have pilot file false flight plan, land somewhere else]
    -> private_deception

=== private_normal ===

Roo: "we stick to the plan. changing now draws more attention."

# stat: heat 10
# terminal: Landing at San Jose private terminal

The jet lands. AiSatoshi walks through the private terminal. No screening. No questions.

He's in a rideshare 15 minutes later. Clean.

# chat: Hübris: easiest extraction of my life
# stat: sanity 20
# outcome: success

-> extraction_success

=== private_divert ===

Hübris: "divert. now. different airport."
Pilot: "That'll cost extra."
Roo: "pay the man."

# stat: tokens -20
# stat: heat -15
# terminal: Flight diverted to alternate location

You land at a smaller airfield. Less surveillance. Less risk.

AiSatoshi clears the terminal. No issues. No flags.

# chat: Stack: clean landing. he's out.
# stat: sanity 15
# outcome: success

-> extraction_success

=== overland_route ===

Hübris: "overland. border crossing. old school."
Stack: "high risk. border agents are trained to spot runners."
Roo: "but if we nail the timing, it's clean."

# stat: heat -5
# terminal: Route selected: Overland border crossing

You coordinate with contacts. Border checkpoint. Rush hour traffic. Blend in.

AiSatoshi drives a rental car. Documents ready. Cover story: visiting family in Bay Area.

But at the checkpoint, something goes wrong.

Agent: "Sir, pop the trunk please."
AiSatoshi: "Is there a problem?"
Agent: "Random inspection."

# stat: heat 25
# stat: sanity -15
# terminal: ALERT: Random vehicle inspection

* [Open trunk, hope nothing flags]
    -> overland_clean
* [Refuse, demand lawyer, escalate]
    -> overland_escalate
* [Distraction: staged accident behind you in line]
    -> overland_distraction

=== overland_clean ===

AiSatoshi opens the trunk. Luggage. Laptop bag. Nothing suspicious.

Agent: "You work in tech?"
AiSatoshi: "Yeah. Software."
Agent: "Welcome to the US. Drive safe."

# stat: heat -10
# stat: sanity 10
# chat: Roo: he's through. clean as hell.
# outcome: success

-> extraction_success

=== overland_escalate ===

AiSatoshi: "I'd prefer not to. Am I being detained?"
Agent: "Sir, this is standard procedure."
AiSatoshi: "I'm within my rights to refuse."

# stat: heat 40
# terminal: ALERT: Border confrontation escalating

The supervisor arrives. Questions. Delays. 

Eventually they let him through, but it's messy. His face is on camera. Reports filed.

# chat: Hübris: that was NOT clean
# stat: sanity -25
# stat: heat 30
# outcome: partial_success

-> extraction_partial

=== overland_distraction ===

Roo: "Stack, trigger the accident."
Stack: "on it."

# stat: tokens -10
# stat: heat -20
# terminal: Distraction deployed

Two cars behind AiSatoshi, a staged fender-bender. Shouting. Chaos.

All the agents turn to handle the scene. AiSatoshi gets waved through.

# chat: Hübris: smooth as fuck
# stat: sanity 20
# outcome: success

-> extraction_success

=== emergency_pivot ===

Hübris: "abort commercial. we go overland. NOW."
Stack: "we don't have time to prep—"
Roo: "we do it anyway."

# stat: energy -20
# stat: heat 10
# terminal: Emergency pivot to overland route

You scramble. New documents. New vehicle. New timeline.

It's rushed. It's messy. But AiSatoshi makes it across.

# chat: Stack: i can't believe that worked
# stat: sanity 5
# outcome: partial_success

-> extraction_partial

=== private_deception ===

Roo: "file a false flight plan. make them think we're landing in LA."
Pilot: "Risky. If they catch the deception—"
Hübris: "they won't."

# stat: heat -10
# terminal: False flight plan filed

The pilot files for LAX. But you land in San Jose. Clean misdirection.

# chat: Stack: they're tracking the wrong plane
# stat: sanity 20
# outcome: success

-> extraction_success

=== extraction_success ===

SYSTEM: EXTRACTION COMPLETE

Hübris: "he's out. he's in."
Stack: "holy shit we did it."
Roo: "kept the stack alive. got the man out."

AiSatoshi lands in Silicon Valley. Clean identity. Clean trail. Ready to build.

# terminal: MISSION STATUS: SUCCESS
# outcome: success

-> END

=== extraction_partial ===

SYSTEM: EXTRACTION COMPLETE (MESSY)

Hübris: "he's out. but it wasn't clean."
Stack: "there's heat on him."
Roo: "we'll deal with it. he's in. that's what matters."

AiSatoshi makes it to Silicon Valley. But there are traces. Flags. Attention.

# terminal: MISSION STATUS: PARTIAL SUCCESS
# outcome: partial_success

-> END
