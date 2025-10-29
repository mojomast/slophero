=== special_encounters_start ===

// Random encounter selector
~ temp roll = RANDOM(1, 100)

{roll <= 15:
    -> sam_altman_encounter
}
{roll > 15 && roll <= 30:
    -> wozniak_encounter
}
{roll > 30 && roll <= 40:
    -> john_cena_encounter
}
{roll > 40 && roll <= 55:
    -> vc_pitch_chaos
}
{roll > 55 && roll <= 70:
    -> tsmc_backdoor
}
{roll > 70 && roll <= 85:
    -> podcast_interview_crisis
}
{roll > 85:
    -> dark_forest_transmission
}

=== sam_altman_encounter ===

SYSTEM: ANOMALY DETECTED

Stack: "wait wait wait. someone's DMing AiSatoshi on Twitter."
Hübris: "who?"
Stack: "it's... it's Sam Altman."

# stat: heat 15
# terminal: ALERT: High-profile contact detected

The message is simple: "Heard you're building something interesting. Coffee?"

Roo: "this is either the best thing ever or a trap."
EvilFear: "it's both. it's always both."

* [Accept the meeting, leverage OpenAI clout]
    -> sam_meeting_accept
* [Ignore it, too much heat]
    -> sam_meeting_ignore
* [Respond with a cryptic meme, test his vibe]
    -> sam_meeting_meme

=== sam_meeting_accept ===

Hübris: "we're doing it. set up the meeting."
Stack: "this feels insane."
Roo: "it IS insane. but so is everything else."

# stat: hype 25
# stat: tokens 40
# stat: heat 20
# terminal: Meeting scheduled with Sam Altman

The meeting happens at a bougie SF coffee shop. Sam shows up in a hoodie and Allbirds.

Sam: "So. What are you actually building?"
AiSatoshi: "Infrastructure for the next wave of compute."
Sam: "Interesting. We might want to invest."

# chat: Stack: holy shit we got his attention
# stat: cred 15

But there's a catch.

Sam: "We'd need you to relocate to SF. Full time. Board seat."

* [Accept the offer, join the AI mafia]
    -> sam_full_integration
* [Decline, stay independent]
    -> sam_decline_gracefully
* [Counteroffer: acquihire the team, keep AiSatoshi pseudo-anon]
    -> sam_counteroffer

=== sam_full_integration ===

AiSatoshi agrees. The extraction accelerates. OpenAI's legal team handles the visa.

You land in SF with backing from the most powerful AI company on the planet.

# stat: tokens 100
# stat: heat -30
# stat: hype 40
# chat: Roo: we just went from underground to stratosphere
# outcome: success

But you're no longer truly independent. The operation succeeded, but at what cost?

-> END

=== sam_decline_gracefully ===

AiSatoshi: "I appreciate it, but I need to stay independent for now."
Sam: "Respect. Hit me up if you change your mind."

# stat: cred 10
# stat: heat -5
# terminal: Relationship maintained, independence preserved

He leaves. The crew exhales.

Hübris: "we just turned down Sam fucking Altman."
Stack: "and we're still alive."

# stat: sanity 10
# outcome: success

-> END

=== sam_counteroffer ===

AiSatoshi: "What if you acquihire my team but I stay pseudo-anon as advisor?"
Sam: "...that's weird. But I like weird. Let me think about it."

# stat: tokens 30
# stat: heat 10
# terminal: Negotiation in progress

He ghosts you for 3 days. Then his assistant emails: "Sam's in. Send the contracts."

# chat: EvilFear: we just played 4D chess with the AI god
# stat: hype 30
# stat: tokens 60
# outcome: success

-> END

=== sam_meeting_ignore ===

Roo: "ignore it. too much risk."
Stack: "but what if—"
Hübris: "no. we stick to the plan."

# stat: heat -10
# terminal: High-profile contact ignored

You leave Sam on read. He tweets a cryptic subtweet 2 hours later: "Some people don't know how to seize opportunity."

# stat: hype -10
# chat: Stack: did we just blow it?
# outcome: partial_success

-> END

=== sam_meeting_meme ===

AiSatoshi responds with a single image: Pepe the Frog wearing a hoodie with "BRRR" written on it.

Sam replies 10 minutes later: "lmao. okay you're legit. let's talk."

# stat: hype 20
# stat: cred 15
# chat: Hübris: the meme worked. the fucking meme worked.
# terminal: Relationship established through chaos

You set up a meeting. He brings snacks.

# stat: tokens 30
# outcome: success

-> END

=== wozniak_encounter ===

SYSTEM: UNUSUAL SIGNAL DETECTED

EvilFear: "guys. someone's trying to make contact through HAM radio."
Hübris: "what?"
EvilFear: "yeah. oldschool frequencies. encrypted."

# terminal: HAM radio contact initiated
# stat: sanity -5

You decode it. The message: "This is Woz. I know what you're doing. I can help."

Stack: "Steve Wozniak? THE Woz?"
Roo: "how the hell does he know about us?"

* [Accept his help, leverage the legend]
    -> woz_help_accept
* [Decline, too weird]
    -> woz_help_decline
* [Ask him to prove it's really him]
    -> woz_proof_request

=== woz_help_accept ===

You send back: "We're listening."

Woz responds: "Meet me at the Computer History Museum. Midnight. Back entrance."

# stat: heat 10
# terminal: Rendezvous scheduled

You show up. He's there in a Hawaiian shirt, holding a soldering iron.

Woz: "You're trying to get someone across the border with a digital identity, right? I did that in the 80s. Different borders, same problem."

# stat: cred 20
# chat: Stack: we're getting mentored by a living legend

He hands you a custom-built hardware key.

Woz: "This will spoof any biometric scanner. Cost me $47 in parts. Don't lose it."

# stat: tokens -20
# stat: heat -25
# terminal: Hardware exploit obtained

You use the device. AiSatoshi walks through TSA like a ghost.

# chat: Hübris: Woz just saved our asses with Radio Shack parts
# outcome: success

-> END

=== woz_help_decline ===

Roo: "this is too weird. ignore it."
EvilFear: "but it's WOZ."
Hübris: "don't care. opsec first."

# stat: heat -5
# terminal: HAM contact ignored

You never hear from him again. Years later, you read a Wired article where Woz mentions "helping some crypto kids in the 2020s."

# chat: Stack: we turned down Steve Wozniak
# stat: sanity -10
# outcome: partial_success

-> END

=== woz_proof_request ===

You send back: "Prove you're really Woz. Show us something only you'd know."

He replies instantly: "Blue box frequency: 2600 Hz. I built one in my garage in '71. Jobs sold them for $150. I never cared about the money."

# chat: Stack: ...holy shit it's really him
# stat: cred 10

You accept his help. He guides you through a hardware backdoor.

# stat: heat -20
# terminal: Old-school hacker wisdom applied
# outcome: success

-> END

=== john_cena_encounter ===

SYSTEM: CRITICAL ANOMALY

Hübris: "okay this is the weirdest thing that's ever happened."
Stack: "what?"
Hübris: "John Cena just posted a cryptic Instagram photo. It's... it's literally our operation codename."

# stat: heat 25
# stat: sanity -15
# terminal: ALERT: Unexplained celebrity attention

The post is a blurry photo of a pineapple with the caption: "You can't see me, but I see you. 🍍"

Roo: "is he... is he threatening us or helping us?"
EvilFear: "I legitimately cannot tell."

* [DM him asking what the fuck]
    -> cena_dm
* [Ignore it, probably a coincidence]
    -> cena_ignore
* [Lean into it, reply with your own cryptic post]
    -> cena_cryptic_reply

=== cena_dm ===

You send a DM: "John. What is this?"

He replies immediately: "I'm in your corner. You need muscle at the border?"

# stat: sanity -20
# chat: Hübris: JOHN CENA JUST OFFERED TO BE OUR BODYGUARD

This is the most surreal moment of the operation.

* [Accept his help (??)]
    -> cena_bodyguard_accept
* [Politely decline]
    -> cena_bodyguard_decline

=== cena_bodyguard_accept ===

Against all logic, you say yes.

John Cena shows up at the border crossing dressed as a tourist. Fanny pack. Cargo shorts. Bucket hat.

When the border agent asks AiSatoshi to step aside, Cena intervenes.

Cena: "Excuse me officer. This man is with me. WWE Superstar John Cena. We're filming a documentary about cross-border entrepreneurship."

# stat: heat -40
# stat: hype 50
# terminal: CELEBRITY INTERVENTION SUCCESSFUL

The agent is starstruck. He waves you through.

# chat: Stack: we just got extracted by John fucking Cena
# chat: Roo: this is the dumbest timeline and I love it
# outcome: success

-> END

=== cena_bodyguard_decline ===

You reply: "Thanks but we got this."

He sends back a GIF of himself saluting.

# stat: sanity 5
# chat: Hübris: we just turned down John Cena
# outcome: partial_success

-> END

=== cena_ignore ===

You pretend you didn't see it.

The post gets 8 million likes. Nobody knows what it means.

# stat: heat 5
# terminal: Anomaly dismissed as coincidence
# outcome: partial_success

-> END

=== cena_cryptic_reply ===

You reply with a photo of Stack holding a pineapple. Caption: "The time is now."

Cena likes it.

The internet loses its mind trying to decode the interaction.

# stat: hype 30
# stat: heat 15
# chat: EvilFear: we just started a conspiracy theory
# outcome: success

-> END

=== vc_pitch_chaos ===

SYSTEM: INBOUND PITCH REQUEST

Stack: "we got invited to pitch at a stealth VC dinner."
Hübris: "where?"
Stack: "Palo Alto. Exclusive. They know AiSatoshi's building something."

# stat: tokens 20
# terminal: Pitch opportunity detected

The dinner is in a mansion. Everyone's wearing Patagonia vests.

A partner approaches: "So. What's your burn rate?"

* [Pitch the legitimate cover story]
    -> vc_pitch_legit
* [Accidentally reveal too much]
    -> vc_pitch_leak
* [Flex with buzzwords until they're confused]
    -> vc_pitch_buzzword_hell

=== vc_pitch_legit ===

AiSatoshi delivers a flawless pitch. Infrastructure. SaaS. B2B. All the keywords.

They eat it up.

# stat: tokens 60
# stat: cred 20
# chat: Roo: he just raised a seed round by lying
# outcome: success

-> END

=== vc_pitch_leak ===

AiSatoshi gets nervous and accidentally mentions "cross-border identity obfuscation."

The room goes silent.

# stat: heat 30
# stat: tokens -10
# chat: Stack: abort abort abort
# outcome: partial_success

-> END

=== vc_pitch_buzzword_hell ===

AiSatoshi: "We're building a decentralized, AI-native, zero-knowledge infrastructure layer for the next paradigm of compute."

VC: "...so it's blockchain?"

AiSatoshi: "Yes. Also no. Quantum-resistant."

# stat: tokens 40
# stat: hype 15
# chat: Hübris: they have no idea what he's talking about but they're INTO it
# outcome: success

-> END

=== tsmc_backdoor ===

SYSTEM: SUPPLY CHAIN OPPORTUNITY

EvilFear: "I found a backdoor. TSMC wafer shipment manifests."
Hübris: "and?"
EvilFear: "we can insert a ghost order. Get chips that don't officially exist."

# stat: heat 20
# terminal: Black market supply chain access

* [Use the backdoor, get the chips]
    -> tsmc_exploit
* [Too risky, decline]
    -> tsmc_decline

=== tsmc_exploit ===

You place the order. The chips arrive in unmarked packaging.

# stat: tokens 80
# stat: heat 30
# stat: hype 25
# chat: Stack: we just stole from TSMC without stealing
# outcome: success

-> END

=== tsmc_decline ===

Roo: "too hot. we don't touch supply chains."

# stat: heat -10
# outcome: partial_success

-> END

=== podcast_interview_crisis ===

SYSTEM: MEDIA EXPOSURE RISK

Stack: "Lex Fridman wants to interview AiSatoshi."
Hübris: "WHAT."
Stack: "yeah. he knows. I don't know how."

# stat: heat 20
# terminal: High-profile podcast invitation

* [Do the interview, control the narrative]
    -> podcast_accept
* [Decline, stay dark]
    -> podcast_decline

=== podcast_accept ===

The interview goes live. AiSatoshi wears a mask. Lex doesn't ask about the mask.

3 million views in 24 hours.

# stat: hype 60
# stat: tokens 50
# stat: heat 40
# chat: Roo: we just went viral
# outcome: success

-> END

=== podcast_decline ===

You ghost Lex. He tweets: "Some stories aren't ready to be told."

# stat: heat -10
# stat: hype -5
# outcome: partial_success

-> END

=== dark_forest_transmission ===

SYSTEM: UNKNOWN SIGNAL

EvilFear: "I'm picking up something weird. Encrypted transmission. Not from any known source."
Hübris: "origin?"
EvilFear: "...I can't tell. It's bouncing through satellites."

# stat: sanity -10
# terminal: Unidentified transmission detected

You decode it. The message: "We see you. Continue. You are not alone."

Stack: "who the fuck sent that?"
Roo: "...I don't know if I want to know."

# stat: heat 10
# stat: cred 20
# chat: Hübris: there are others out there doing this
# outcome: success

-> END
