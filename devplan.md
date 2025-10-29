# devplan.md  
ROO GANG / SLOPHERO EDITION  
"Infra Extraction Horror. Keep the stack alive. Get the man out."

Last Updated: 2025-10-29

## 0. Canon Pillars (Do Not Drift)

**Title:** ROO GANG  
(Subtitle / store text can also include: "Infra Extraction Horror" or "SlopHero")

**Core Fantasy:**
- You are part of a tiny, cursed midnight crew trying to get AiSatoshi safely out of Panama so he can surface in Silicon Valley, assume a clean founder identity, and become untouchable rich.
- You do this by:
  - lowering Heat (attention / exposure),
  - fabricating a believable "he's just a normal founder" paper trail,
  - triaging tech crises when things go BRRR,
  - keeping the team from burning out or fracturing,
  - and not getting everyone banned / raided / black-bagged.

**Session Structure (Night Cycle Loop):**
1. SYNC – Everyone's in the war room chat / codec pane.
2. PICK TONIGHT'S OP – You choose ONE operation for the night.
3. ESCALATE – Tension builds, resources drain.
4. BRRR MODE – Crisis mini-event tied to that op.
5. HANDOFF REPORT – Auto-written operational log of what happened.
6. DECISION – Continue to next cycle or attempt EXTRACTION.

**Live Goal (Win Condition):**
Extraction succeeds if you get AiSatoshi out of Panama with:
- Heat below threshold,
- Tokens above threshold,
- nobody mentally collapsed,
- and a convincing cover story.

He becomes the next Silicon Valley monster. You become "the one who got him out."

**Lose Conditions / Alternate Endings:**
- BLACK BAG ENDING — Heat spikes, someone else grabs him first.
- STOLEN CROWN ENDING — You burn all Tokens, and another faction monetizes his tech instead.
- HE STAYED BEHIND ENDING — Trust breaks, he refuses exfil because you pushed him wrong.
- YOU DROPPED THE LINE ENDING — You collapse mid-op from Energy/Sanity crash.

**THIS IS IMPORTANT:**  
We do *not* say "out of China." Canon is: "out of Panama." Fix that everywhere (UI flavor text, website copy, screenshots, etc.).

---

## 1. Current Prototype State (slophero.vercel.app snapshot)

We already have:
- Cycle narration:
  - === CYCLE 1 START ===
  - Operation selected: COVER STORY BUILD
  - Escalation tick (Energy -3)
  - COVER STORY BRRR (build founder legend, scrub trail, reduce Heat)
  - Handoff summary
  - Continue to next cycle

- Cycle 2 doing CLEAN TRAIL / RTC THIS B!TCH
  - Archive radioactive code
  - Rewrite public surface
  - Lower Heat, open Extraction Window

We also showed:
- HUD-like numbers (Energy down, Heat down, Extraction window opening)
- The "log in bottom left" with the play-by-play

This is GOOD. This is the core loop. Keep it.

Players said:
- "There's good stuff in the log in the bottom left corner, but it needs to be more apparent."
- "I'm not sure what to make of this yet."
- "I don't appreciate narrative placed on 'stack'."
- "lol I'm just trying to save AiSatoshi."
- "Could I stream this and have chat pick choices?"

That feedback = Phase 2 work.

---

## 2. Cast / Tone Updates (post-Discord)

We keep the five main roles, but we tune characterization to be respectful and accurate. Do NOT flatten real people into punchlines. The point is to feel like hanging in Discord at 1:30AM, not turning anyone into a cartoon without consent.

### ROO / "SLOPTIMUS PRIME"
- Role: Player POV / shot-caller / "I'm just trying to save AiSatoshi."
- Personality: drives ops forward, pumps "brrrr," glues chaos into a plan.
- Mechanical hook: Chooses tonight's operation (see §3), initiates BRRR MODE.
- Emotional hook: Low-key desperate to prove they can actually do this and not just talk.

### HÜBRIS
- Role: Archivist / brutal honesty / lore DJ.
- Abilities:
  - "RTC THIS B!TCH" → wipe incriminating branches, lower Heat.
  - "Story Time" → tells scuffed IRL stories (ASSHOLE keyed into trunk for 10 years, Limp Bizkit at 6AM, Royal Rumble on an old CRT), which restores Sanity for others because it reframes "we've survived worse."
- Tone: sarcastic protective older sibling energy, not a clown.
- New Tagline: "KEEP THE CULTURE WEIRD, NOT DEAD."

### STACK (stackedsilence)
- Role: high-output builder who actually *can* ship, but is not your burnout doll.
- **Absolutely key change: we STOP framing Stack as "fragile/self-destructive guilt loop as a mechanic." That felt presumptuous to them.**
  - We keep: "I can reboot something clean and one-shot it if I spec it right."
  - We keep: "I don't want to build AGI terror by accident."
  - We REMOVE: "guilt is your lever."
- New ability: SPEC CLARITY FIELD
  - If you let Stack slow down and define scope ("not AGI, not world domination, just a small clean deliverable"), you unlock better handoff quality and more stable BRRR outcomes in future cycles.
  - This is an INVESTMENT mechanic, not an EXPLOIT mechanic.
- Flavor lines we *do* canonize:
  - "i got my whole coffee beans out of the freezer it's go time i'm gonna eat them raw."
  - "accumulation of viewers is more about personality than content i'm pretty sure."
  - "believe in your self."
- **Stack is not a tragedy resource. Stack is a stabilizer class.**

### AiSatoshi (PAYLOAD)
- Role: The Asset, The Payday, The Guy We're Extracting.
- Vibes:
  - "Extract me and you'll find out who I am lol."
  - Jokes about mystique.
  - Brings real-world boardroom/DEI/VC/'I got proxy fought' trauma.
  - Capable of flipping raw compute or high-value favors at huge cost (Tokens++ but Heat++).
- New hook: "I can get on Lex one day and show him..."
  - That line is gold. That's Hype.
  - We canonize that as the high-Hype branch: you can pitch him as "the next myth on podcasts" — it explodes Hype and Cred, but also Heat.
- Emotional truth: He trusts you enough to ask "am I dead?" when he sees a mockup. The game should *care* about that. High Heat scenarios should feel scary, not slapstick.

### EvilFear
- Role: Hardware barbarian / everything must look mean.
- Iconic moments we keep:
  - Plastidipping gear in the bathtub under a tarp: "cost me 4$."
  - "be gone dull gray, welcome black sexy."
  - Old muscle car energy ('69 Boss 429).
  - "Bathtub GPU mod for RTX over USB4 to a MacBook."
- Mechanically:
  - Can convert junk hardware into usable throughput → gain Tokens.
  - But doing so is LOUD and SKETCHY → raises Heat.
- Tone: not comic relief, more like "I will make it run and I don't care if your landlord, Twitch TOS, or national export law approves."

---

## 3. Operation Types (Refined)

These are the selectable ops each cycle, which lead to different BRRR MODE types. We keep 4 ops, but tighten naming / intent:

1. **COVER STORY BUILD**  
   Goal: Make AiSatoshi look like a totally normal founder so nobody drags him before he's safe.  
   Actions:
   - fabricate founder bio / board-friendly backstory,
   - create sanitized public-facing docs,
   - make him look "boring compliant Silicon Valley guy."
   Rewards:
   - Heat ↓
   - Cred ↑ (internal trust: "ok maybe this could work")
   BRRR MODE Variant:
   - "POLISH BRRR": rewriting bios, investor decks, and LinkedIn-scented copy under a timer.
   Narrative lines we keep:
   - Hübris: "we need to make him look like a founder, not a ghost."
   - AiSatoshi: "you're sure this is safe?"

2. **CLEAN TRAIL / RTC THIS B!TCH**  
   Goal: Delete or quarantine any code / logs / commit histories that would get him flagged at a border crossing.  
   Actions:
   - Archive dangerous branches offline.
   - Replace incriminating commit chains with clean fake normal work.
   Rewards:
   - Heat ↓↓↓
   - Extraction Window opens.
   BRRR MODE Variant:
   - "EVIDENCE SHREDDER BRRR": race-the-clock sanitizing of logs.
   Canon line:
   - Hübris: "if he crosses borders with this commit history, he's black-bagged at customs."

3. **INFRA SURVIVAL / SPOOF & HOLD**  
   Goal: Keep the stack up and running when platforms / providers want to throttle or ban you.  
   Actions:
   - spoof headers so AgentRouter / ATC can still call models,
   - run multiple roos without getting insta-flagged,
   - patch routing mid-flight.
   Rewards:
   - Tokens ↑ (you maintain throughput / compute / access)
   Costs:
   - Heat ↑ (risky, traceable)
   BRRR MODE Variant:
   - "ROUTING FIRE DRILL BRRR": high-stress crisis, like "keep the pipeline alive for 30 more seconds or we lose funding + proof."

4. **HYPE & SIGNAL (aka "SHOWTIME / STREAM")**  
   NEW.
   Goal: Public narrative + recruiting attention without fully doxxing yourselves.
   Why this exists: you literally said "this is 100% the kind of thing I want to build live on twitch, with input from the audience" and AiSatoshi said that would actually play.
   Actions:
   - Stream progress, tease the project, banter with chat, let people vote "push harder vs back off."
   - Try to convert that into Hype and Tokens (support, visibility).
   Rewards:
   - Hype ↑↑
   - Cred (public) ↑
   Risks:
   - Heat ↑↑ (eyes on you, "who even ARE these guys?")
   BRRR MODE Variant:
   - "GO LIVE BRRR": your chat is now part of the mechanic. Audience can force you to "go harder" to farm clout OR "back off / take care of yourself."  
   This directly addresses:
   - "accumulation of viewers is more about personality than content"
   - "believe in your self"
   - "your chaos needs to be maxed"
   You are literally productizing that.

---

## 4. Stats / HUD (Lock These)

Keep these 6 bars visible at all times during play:

- **ENERGY**  
  If this hits 0 mid-cycle, YOU DROP THE LINE (instant bad ending for that run).

- **SANITY**  
  Represents cognitive load, intrusive stress, self-preservation.  
  If this hits 0, you lock up, extraction trust breaks, possible HE STAYED BEHIND ending.

- **HEAT**  
  Attention on the op.  
  If Heat spikes during the wrong op, you trigger BLACK BAG ending.

- **TOKENS**  
  Favors / compute / pull / emergency money / burner identity routing.  
  Needed for clean extraction.

- **HYPE**  
  How much culture / internet / VC rumor is buzzing.  
  Powers the HYPE & SIGNAL op, and can unlock "I can get on Lex" tier.

- **CRED**  
  Believability. Internal trust ("we're not LARPing"), external trust ("investable founder").  
  Low Cred = isolation. High Cred = people line up to help.

And there's a **computed EXTRACTION READINESS %** that goes green if:
- Heat is under threshold,
- Tokens above threshold,
- Sanity not bottomed,
- AiSatoshi hasn't rage-yeeted,
- Cover story is plausibly clean.

When that % is high enough, you unlock FINAL EXTRACTION.

---

## 5. Phase Plan

### PHASE 1 — Concept Lock & Tone Spine ✅ (basically done)
Goal: lock tone and who we are.
- [x] Panama ➜ Silicon Valley extraction fantasy
- [x] BRRR MODE as crisis per op
- [x] Team roster (Roo, Hübris, Stack, AiSatoshi, EvilFear)
- [x] Stats (Energy, Sanity, Heat, Tokens, Hype, Cred)
- [x] Endings list
- [x] NES box art vibe / internal branding "EVERYTHING IS MEAN. IT GOES BRRRRRR."

Deliverable from Phase 1: this doc.

### PHASE 2 — Playable Loop Readability (in progress NOW)
Goal: make the current browser prototype feel like an actual game and not just scrolling flavor text.

Tasks:
- [ ] **Surface the log/Handoff pane as a visible UI element.**
      - Right now players said "there's a lot of good stuff in the log in the bottom left corner, need to make it more apparent."
      - ACTION: Add a fixed "MISSION FEED / HANDOFF LOG" panel in the UI with timestamp-y beats:
        - "=== CYCLE 1 START ==="
        - "Operation: COVER STORY BUILD"
        - "BRRR MODE: POLISH BRRR"
        - "Heat ↓↓↓"
        - "Extraction Window warming…"
      - DO NOT hide this behind scroll. It should read like a pager.

- [ ] **Rename/clean the top-of-screen pitch text to match canon.**
      - Must say "Get AiSatoshi out of Panama…" instead of "out of China."
      - Must mention "Infra Extraction Horror" and "Keep the stack alive / Get the man out."

- [ ] **Add HYPE & SIGNAL as a fourth operation button in the nightly choice UI.**
      - Copy should reference "go live with it," "audience input," and "believe in your self."
      - Picking it should spike Hype, bump Tokens a bit, and also bump Heat.

- [ ] **Respect Stack's boundaries in the text.**
      - Remove/replace any narration implying Stack is "mentally collapsing in a way you can spend like a resource."
      - Replace with: "Stack stabilizes scope so this can actually ship," "Stack keeps it humane," "Stack says no to AGI spiral."
      - Mechanically, this should appear as: Selecting Stack's help improves future BRRR success rates, without Sanity-punishing Stack as currency.
      - In other words: Stack = Stability Buff, not Pain Battery.

- [ ] **Integrate AiSatoshi's 'podcast myth' line.**
      - In COVER STORY BUILD / HYPE & SIGNAL results, occasionally fire a beat like:
        - "AiSatoshi: 'there's a good chance I can get on Lex one day and show him.'"
      - Result:
        - Hype ↑↑
        - Heat ↑
        - Cred ↑ (external)
      - This becomes a signature branch and should show in the Mission Feed.

Deliverable from Phase 2:
- slophero UI shows: operation choice → escalation → BRRR event text → clear stat deltas → updated Mission Feed box.
- Language is canon-accurate and respectful.

### PHASE 3 — BRRR MODE Variants
Goal: each op has its own crisis mini-event template.

Tasks:
- [ ] COVER STORY BUILD → **POLISH BRRR**
      - Timed scramble to rewrite public-facing narrative without leaking ops.
      - Output: Heat ↓, Cred ↑.

- [ ] CLEAN TRAIL / RTC → **EVIDENCE SHREDDER BRRR**
      - Panic archive-and-scrub.
      - Output: Heat ↓↓↓ and "Extraction Window Opening" flag.

- [ ] INFRA SURVIVAL / SPOOF & HOLD → **ROUTING FIRE DRILL BRRR**
      - You're spoofing headers, juggling agents, praying the stack doesn't get banned.
      - Output: Tokens ↑ (because stack survives), Heat ↑ (because that spoof trail is loud).

- [ ] HYPE & SIGNAL / STREAM → **GO LIVE BRRR**
      - Stream / chat overlay voice in text form: "CHAT: MAX THE CHAOS" vs "CHAT: CUT THE FEED."
      - Output:
        - If you lean into chaos: Hype ↑↑, Heat ↑↑, Tokens + (short-term donors/backers/attention).
        - If you play it chill: Cred ↑↑ (people feel safe trusting you long-term), Hype steady, Heat mild.

Deliverable from Phase 3:
- 4 BRRR text templates, each returning explicit stat deltas, each with a unique flavor voice.

### PHASE 4 — FINAL EXTRACTION FLOW
Goal: playable ending.

Tasks:
- [ ] Implement EXTRACTION READINESS % threshold logic.
- [ ] Add Final Extraction prompt (YES [A] / WAIT [B]).
- [ ] Add endings:
      - ASCENSION ENDING (clean billionaire arrival)
      - BLACK BAG ENDING
      - STOLEN CROWN ENDING
      - HE STAYED BEHIND ENDING
      - YOU DROPPED THE LINE ENDING
- [ ] Add "Did I die..?" beat from AiSatoshi if BLACK BAG triggers, as a chilling moment.

Deliverable from Phase 4:
- A full loop from Cycle 1 ➜ multi-cycles ➜ Extraction attempt ➜ Ending screen.

---

## 6. Handoff Contract (What Future Agents Must Do Each Pass)

Every dev agent / model pass going forward should follow this ritual:

1. State mode:  
   "Running in Simulation Mode."

2. Plan (3-5 bullets):  
   - EXACTLY which slice you are adding/changing this turn  
   - WHICH FILE(S) you're touching  
   - WHAT you expect it to do in-game  
   - HOW we can verify it

3. Changes:  
   Bullet summary of what you actually did.

4. Verification:  
   Tell the human how to confirm it works.  
   For UI stuff: "Open the prototype, choose HYPE & SIGNAL, watch Mission Feed log show stat deltas + chat line."  
   For narrative stuff: "Scroll log after Cycle 2, confirm Panama not China."

5. Docs Updated:  
   List file(s) you created/updated, and paste full file contents in fenced code blocks.

6. Next Steps:  
   3–5 suggested tasks for the next agent, in priority order.

7. Blockers:  
   Any "NEEDS_INPUT:" questions (ex: "ESRB vibe? Can we say 'black-bagged' or do we need euphemism?")

This is how we keep the chain intact and let someone stream "building slop live on Twitch with chat input" without losing the plot.

---

## 7. Immediate Next Slice (Do This Next)

**Next actionable task for the codebase (high priority):**

Create/Update `ui/MissionFeed.tsx` (or equivalent in the slophero repo) so that:
- Every phase of a cycle (choice, escalation, BRRR result, stat deltas, extraction window changes) appends a short, timestamp-style line to a visible "MISSION FEED / HANDOFF LOG" panel on screen.
- That feed uses canon wording:
  - "=== CYCLE 1 START ==="
  - "Operation selected: COVER STORY BUILD"
  - "POLISH BRRR engaged: Heat ↓, Cred ↑"
  - "Extraction Window Opening…"
- The feed explicitly says "Get AiSatoshi out of Panama."
- It also surfaces AiSatoshi lines like "there's a good chance I can get on Lex one day and show him..." when HYPE & SIGNAL hits.

Verification for that slice:
- Load the app.
- Pick COVER STORY BUILD.
- Watch Mission Feed update with:
  - operation name,
  - BRRR MODE flavor line with Hübris / AiSatoshi quotes,
  - stat delta summary.
- Confirm "Panama" appears, "China" does not.

Output of that slice should then be pasted back into this devplan under PHASE 2 as [x] "Mission Feed surfaced."

---

## 8. Taglines For Store / Social / Stream Overlay

Use these as-is:
- "ROO GANG — Infra Extraction Horror."
- "Keep the stack alive. Get the man out."
- "Panama ➜ Silicon Valley or die trying."
- "EVERYTHING IS MEAN."
- "IT GOES BRRRRRR."
- "Your chat can save him… or burn him."

These are approved flavor. Don't invent "cute" new canon taglines without logging them here.

---

## 9. Culture Rules (Do Not Break)

- We are not doing trauma porn.
- Stack is not your burnout battery.
- AiSatoshi is not a meme. He's the payload and he's a person.
- Hübris is not comic relief — he's how you bleed Heat without losing soul.
- EvilFear is not "haha hacker goblin," he's "I will absolutely plastidip this GPU in a bathtub at 2AM because nobody else is going to save you."

We're not mocking this crew. We're honoring it.

We're making a game about pulling someone out before they get erased and making it feel *funny*, *tense*, and *real enough to sting*.

brrrr
