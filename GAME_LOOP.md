# GAME LOOP
## ROO GANG – Infra Extraction Horror

Version: 2025-10-29  
Canonical loop structure for Panama → Silicon Valley extraction arc.

---

## OVERVIEW

ROO GANG is a narrative survival / ops-management game where you run a blacklist extraction operation across multiple "night cycles."

Your goal: smuggle AiSatoshi out of Panama and deliver him safely to Silicon Valley so he can spin up as a billion-dollar founder with a clean legend.

Each cycle, you:
1. **SYNC** with your crew in the war room
2. **CHOOSE** which op to run tonight
3. Ride **ESCALATION** (pressure builds, stats move)
4. Survive **BRRR MODE** (crisis mini-game)
5. **HANDOFF** results to the next cycle
6. **DECIDE** whether to continue or attempt Final Extraction

You win by lowering Heat, stockpiling Tokens, keeping everyone sane and alive, and pulling off a **CLEAN EXTRACTION**.

You lose by running out of Energy, Sanity, Tokens, or maxing Heat at the wrong time.

---

## PER-CYCLE FLOW

### 1. SYNC (War Room)

**What happens:**
- Multi-pane UI: chat window, terminal logs, codec popups with character portraits
- Crew reports damage from last cycle: paranoia vents, meltdown jokes, guilt spirals, hardware hacks
- You see current stat bars: Energy, Sanity, Heat, Tokens, Hype, Cred
- You see Extraction Readiness % meter (derived from Heat/Tokens/Sanity/trust thresholds)
- Optional: **Breather Moments** can trigger (crew derails into snack debate, moon chat, beard disaster)
  - These bleed Heat slightly, restore small Sanity bump
  - Hübris usually forces these when burnout risk is high

**Player interaction:**
- Read the room
- Decide if you need to let the crew breathe or push forward

---

### 2. CHOOSE TONIGHT'S OP (ONE ONLY)

You pick **one** operation type. This determines:
- Which BRRR MODE you'll face
- Which stats get hammered or boosted
- What story beat progresses the extraction pipeline

**Four Op Types:**

#### A. COVER STORY BUILD
**Goal:** Make AiSatoshi look like a boring, investable founder  
**Why:** Investors and border agents need plausible legend; can't extract a ghost or a war criminal  
**BRRR MODE:** COVER STORY BRRR (rewrite docs, fake legitimacy, polish handoff narrative)  
**Stat impact:**
- Success: +Cred, +Hype (moderate), -Heat (small)
- Failure: +Heat (investors smell desperation), -Cred

---

#### B. TECH PROOF
**Goal:** Ship something jaw-dropping that proves he's worth extracting  
**Why:** Need proof of concept to justify risk, unlock VC interest, feed Hype  
**BRRR MODE:** TECH PROOF BRRR (hack JUCEBox / Sun OS into doing the impossible on camera)  
**Stat impact:**
- Success: +Hype (large), +Tokens (if demo unlocks funding), Stack feels validated
- Failure: -Sanity (Stack spirals), -Cred (crew doubts the mission), wasted Energy

**Note:** Stack leads this. If Stack is mentally fragile, success chance drops.

---

#### C. INFRA SURVIVAL
**Goal:** Keep the stack online under hostile pressure  
**Why:** Can't extract if your routes are burned, hardware is bricked, or you're banned from every relay  
**BRRR MODE:** INFRA SURVIVAL BRRR (hold together routing, spoof headers, run multiple roos without getting flagged)  
**Stat impact:**
- Success: -Heat (you stay invisible), stable Tokens
- Failure: +Heat (detection spike), -Energy (crew exhaustion from firefighting)

**Note:** EvilFear's hardware mods feed into this. His plastidipped bathtub GPU rigs give you throughput but add Heat.

---

#### D. CLEAN TRAIL / RTC
**Goal:** Delete or archive incriminating work so AiSatoshi can actually cross borders  
**Why:** If he's carrying radioactive repos or unhinged commit history, he gets black-bagged at customs  
**BRRR MODE:** CLEAN TRAIL BRRR (RTC THIS BITCH — archive the cooked branch, salvage safe docs, scrub Heat)  
**Stat impact:**
- Success: -Heat (large), preserve some Tokens/Hype in safe archives
- Failure: -Tokens (lost work), crew morale drops (feels like burning the masterpiece)

**Note:** Hübris forces this when a branch is too hot to ship. It's painful but necessary.

---

### 3. ESCALATION

Between choosing the op and entering BRRR MODE, pressure builds:

- **Sleep debt accumulates** → Energy ticks down
- **Guilt spirals** (especially Stack) → Sanity ticks down
- **Hardware hacks** (EvilFear modding gear at 2AM) → Heat ticks up, Tokens bump (if you can monetize the flex)
- **Ethics panic** (AiSatoshi paranoia, "are we doing the right thing?") → Sanity pressure on whole crew
- **External pings** (mysterious DMs, border policy changes, investor cold reach-outs) → Heat or Hype moves

**Player interaction:**
- You can invoke **Brrrr Override** (force BRRR MODE early for big reward, but smash Sanity / spike Heat)
- You can attempt **Narrative Spin** (massage the story to keep Cred high, but lying costs you Sanity)

---

### 4. BRRR MODE (Crisis Mini-Game)

This is the high-pressure sequence where the op either succeeds or fails.

**Four BRRR MODE types** (matching the four ops):

#### COVER STORY BRRR
- Rewrite investor deck, scrub LinkedIn, fabricate plausible timeline
- Success: Cred +, Hype +, Heat -
- Failure: Heat spike (investors flag you as sus)

#### TECH PROOF BRRR
- Live demo under duress, Stack sprinting on whole coffee beans
- Success: Hype spike, Tokens bump, Stack validation
- Failure: Sanity crash (Stack), Cred drop (crew doubts the product)

#### INFRA SURVIVAL BRRR
- Route fails, relay bans you, EvilFear duct-tapes a fix in real-time
- Success: Heat -, stable operation
- Failure: Heat spike (detected), Energy crash (exhaustion)

#### CLEAN TRAIL BRRR
- Archive the radioactive branch, salvage docs, Hübris yelling "RTC THIS BITCH"
- Success: Heat - (large), safe handoff
- Failure: Tokens lost (burned good work), morale drop

**Mechanics:**
- Timed decisions or dialogue trees
- Crew chatter in codec windows (Stack panicking, Hübris cracking jokes, EvilFear saying "it's fine, I have a heat gun")
- Stat bars visibly moving in real-time
- Failure doesn't end the run immediately (unless Energy or Sanity hit 0), but makes next cycle harder

---

### 5. HANDOFF / LOG

After BRRR MODE resolves:

- Game auto-generates a **HANDOFF.md / devplan.md style log** summarizing:
  - What op you ran
  - Who did what
  - What broke
  - What got built
  - Current stat snapshot
  - Extraction Readiness %

This is both:
- **In-world lore** (the crew's operation journal)
- **Mechanical state** for the next cycle

**Player interaction:**
- You can optionally edit the narrative (Narrative Spin ability) to keep Cred high, but it costs Sanity if you're lying to yourself

---

### 6. DECISION POINT

You now choose:

#### A. Continue to Next Cycle
- If Energy > 0, Sanity > 0, and you're not at max Heat
- Loop back to SYNC

#### B. Attempt Final Extraction
- Only available if **Extraction Readiness %** is green:
  - Tokens >= threshold (you have budget to vanish cleanly)
  - Heat <= threshold (Panama is cool enough to move)
  - Sanity > 0 (you're mentally stable enough to execute)
  - AiSatoshi still trusts you (you haven't betrayed him or panic-leaked)

- If you attempt Final Extraction **before** you're ready:
  - You trigger a bad ending (Black Bag, Stolen Crown, etc.)

- If you're ready and trigger it:
  - You enter **FINAL EXTRACTION BRRR MODE** (see below)

---

## FINAL EXTRACTION (Endgame BRRR MODE)

**Context:**  
This is the 2-minute drill. You've lowered Heat, stockpiled Tokens, kept everyone sane. Now you execute the actual extraction.

**Flow:**
1. **Route Selection** (burn a favor, pick exfil path: commercial flight with fake docs, private charter, overland to Costa Rica then fly)
2. **Last-Minute Crisis** (border agent gets suspicious, Stack has a guilt meltdown, EvilFear's gear flags TSA, Hübris cracks a joke that almost blows cover)
3. **High-Pressure Dialogue Tree** (you talk AiSatoshi through it, manage crew panic in real-time)
4. **Extraction Resolves:**
   - **Success** → ASCENSION ENDING
   - **Partial Failure** (one stat breaks during extraction) → degraded ending or pivots to alternate ending

**Tone:**  
Sweat. Codec popups rapid-fire. Terminal logs scrolling. Stat bars in the red but holding. The whole game comes down to this sequence.

---

## ENDINGS

### ASCENSION ENDING (Win)
- Conditions: Heat low, Tokens high, Sanity > 0, Energy > 0, trust intact
- Outcome: AiSatoshi lands in Silicon Valley clean, spins the legend, becomes a billionaire founder. You (Roo) are the invisible architect. Crew disbands into legend.
- Tone: "We did it. It's brrrr. It goes forever now."

### BLACK BAG ENDING (Heat Maxed)
- Conditions: Heat maxes out before you can extract
- Outcome: AiSatoshi gets grabbed in Panama. You never see him again. The product vanishes into a black site or competitor hands.
- Tone: "You were too loud."

### STOLEN CROWN ENDING (Tokens Depleted)
- Conditions: Tokens hit 0 at endgame
- Outcome: Someone else (investor, rival crew, opportunist) steals/monetizes his stack. He makes it to SV but you're cut out. He's rich, you're broke and burned.
- Tone: "You built the road. Someone else drove it."

### HE STAYED BEHIND ENDING (Sanity Collapsed / Trust Broken)
- Conditions: Sanity hits 0, or you betray his trust (panic-leak, sell him out, lie too hard)
- Outcome: AiSatoshi refuses extraction. He'd rather stay in Panama and risk it than trust you. Op dissolves.
- Tone: "You broke the one thing that mattered."

### YOU DROPPED THE LINE ENDING (Energy Collapsed)
- Conditions: Energy hits 0 mid-op
- Outcome: You physically or mentally collapse. Crew scatters. Extraction attempt never happens.
- Tone: "You burned out before the finish line."

---

## UI NOTES

**Visual Layout (War Room / Ops Screen):**
- **No overworld walking.** You do not control a character moving through a tileset.
- Multi-pane terminal/chat interface:
  - **Top-left:** Stat HUD (Energy, Sanity, Heat, Tokens, Hype, Cred)
  - **Top-right:** Extraction Readiness % meter (green = ready, yellow = close, red = not yet)
  - **Center-left:** Chat window (crew banter, meltdowns, Breather Moments)
  - **Center-right:** Terminal log (system events, infra status, "roo3 just went down", "new investor ping")
  - **Bottom:** Codec popups (character portraits with dialogue, Metal Gear style)

**Aesthetic:**
- CRT terminal glow (green/amber on black)
- Hazard yellow / toxic orange accents for alerts
- Redacted dossier vibes for character intros
- Stat bars that pulse/flicker when in danger zone
- Typography: emergency HUD font, fixed-width terminal text

**Tagline Placement:**
- Splash screen: "INFRA EXTRACTION HORROR"
- Loading screen rotation: "KEEP THE STACK ALIVE. GET THE MAN OUT." / "PANAMA ➜ SILICON VALLEY OR DIE TRYING" / "EVERYTHING IS MEAN." / "IT GOES BRRRRRR."

---

## LOOP SUMMARY (Reference)

```
START
  ↓
SYNC (war room, read crew state, optional Breather Moment)
  ↓
CHOOSE OP (Cover Story / Tech Proof / Infra Survival / Clean Trail)
  ↓
ESCALATION (pressure builds, stats shift)
  ↓
BRRR MODE (crisis mini-game tied to chosen op)
  ↓
HANDOFF (auto-log results, update stats)
  ↓
DECISION POINT
  ├─ Continue → loop back to SYNC
  └─ Attempt Final Extraction (if Extraction Readiness green)
       ↓
     FINAL EXTRACTION BRRR MODE
       ↓
     ENDING (Ascension / Black Bag / Stolen Crown / He Stayed Behind / You Dropped The Line)
```

---

**END GAME_LOOP.md**
