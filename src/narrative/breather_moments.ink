=== breather_start ===
# terminal: BREATHER MOMENT TRIGGERED

{RANDOM(1,3) == 1: -> moon_chat}
{RANDOM(1,3) == 2: -> snack_debate}
-> beard_disaster

=== moon_chat ===
Hübris: "everybody stop."

Stack: "what"

Hübris: "look at the moon. it's pretty."

Stack: "we're in the middle of—"

Hübris: "look. at. the moon."

* [Look at the moon]
  -> moon_chat_2

=== moon_chat_2 ===
Roo: "...okay. yeah. it is pretty."

Stack: "i can't believe you made me do this"

Hübris: "you needed it"

EvilFear: "moon's fine. everything should look mean though"

Stack: "i feel... slightly less like garbage"
# stat: sanity 15
# stat: heat -5
# stat: energy -3
# terminal: Breather Moment complete. Sanity +15, Heat -5, Energy -3
# outcome: breather_success
-> END

=== snack_debate ===
Hübris: "alright. emergency crew meeting."

Stack: "what's wrong"

Hübris: "beef jerky discourse. right now."

Roo: "are you serious"

Hübris: "deadly serious. teriyaki or original?"

* [Teriyaki is objectively correct]
  -> snack_debate_teriyaki
* [Original or nothing]
  -> snack_debate_original
* [This is a waste of time]
  -> snack_debate_refuse

=== snack_debate_teriyaki ===
Hübris: "THANK YOU. someone with taste"

EvilFear: "wrong"

Stack: "i don't care about jerky but this is better than panicking"
# stat: sanity 15
# stat: heat -5
# stat: energy -3
# terminal: Teriyaki faction wins. Morale restored.
# outcome: breather_success
-> END

=== snack_debate_original ===
EvilFear: "correct"

Hübris: "coward's choice"

Stack: "you guys are insane. i love it"
# stat: sanity 15
# stat: heat -5
# stat: energy -3
# terminal: Original faction stands firm. Crew stabilized.
# outcome: breather_success
-> END

=== snack_debate_refuse ===
Hübris: "fine. stay stressed. see if i care."

Stack: "wait no i need the derail"

Roo: "okay okay. teriyaki."

Hübris: "there we go"
# stat: sanity 12
# stat: heat -5
# stat: energy -3
# terminal: Reluctant breather. Partial restoration.
# outcome: breather_partial
-> END

=== beard_disaster ===
Hübris: "so. uh."

Stack: "what"

Hübris: "i may have fucked up my beard with the trimmer"

Roo: "you WHAT"

Hübris: "it's uneven. like, catastrophically uneven."

EvilFear: "shave it"

Hübris: "i can't. it's part of my identity"

Stack: "let me see"

* [Show us the disaster]
  -> beard_disaster_2

=== beard_disaster_2 ===
Hübris: "don't laugh"

Stack: "oh my god"

Roo: "that's... that's bad"

EvilFear: "i have a heat gun"

Hübris: "NO"

Stack: "i can't stop laughing. this is the best worst thing"

Hübris: "i hate all of you. but i feel better."
# stat: sanity 15
# stat: heat -5
# stat: energy -3
# terminal: Beard disaster diffused tension. Crew morale restored.
# outcome: breather_success
-> END
