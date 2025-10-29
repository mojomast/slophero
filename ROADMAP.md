# ROADMAP
## ROO GANG – Development Phases

Version: 2025-10-29  
Tracks what's done, what's next, and what's blocking.

---

## PHASE 1: FOUNDATION (COMPLETE ✓)

**Goal:** Lock the design bible so no future agent or dev drifts the vision.

**Completed:**
- ✓ GAME_LOOP.md (canonical loop structure)
- ✓ STATS.md (six stats + Extraction Readiness, numeric ranges, flavor text)
- ✓ CHARACTERS.md (five crew members with codenames, perks, stat impacts, visual notes)
- ✓ STYLE_GUIDE.md (visual language, no-drift aesthetic rules)
- ✓ ROADMAP.md (this file)

**Verification:**
- All docs cross-reference consistently
- Extraction arc (Panama → Silicon Valley) is locked
- Win/lose conditions mapped to stats
- No overworld walking (war room UI confirmed)

---

## PHASE 2: TECHNICAL FOUNDATION (CURRENT)

**Goal:** Stand up the project, choose tools, build stat system prototype.

**Tasks:**
1. **Initialize project structure**
   - Create directories: `src/`, `assets/`, `docs/`, `tests/`
   - Set up version control (Git repo, .gitignore)
   - Add README.md with project overview and quick-start

2. **Choose tech stack**
   - **Options:**
     - Unity (C#) — robust, good for UI-heavy games
     - Godot (GDScript/C#) — open-source, lightweight, good for 2D UI
     - Web-based (HTML/CSS/JS + Ink or Twine) — fastest prototype path, easy distribution
   - **Narrative engine:** Ink (integrates with Unity/Godot) or custom dialogue system
   - **BLOCKER:** Need user input on preferred stack

3. **Build stat system prototype**
   - Implement six stats (Energy, Sanity, Heat, Tokens, Hype, Cred) as numeric values
   - Implement stat modification functions (drain, restore, spike)
   - Implement Extraction Readiness derived calculation
   - Write unit tests for stat boundaries (e.g., Energy hitting 0 triggers game-over check)

4. **Prototype SYNC screen UI**
   - Multi-pane layout: stat HUD, chat window, terminal log, codec popup area
   - Stat bars with color coding (green/yellow/red zones)
   - Placeholder text for chat/terminal
   - Verify layout matches STYLE_GUIDE.md (CRT aesthetic, hazard yellow accents)

5. **Mock data for one cycle**
   - Hardcode one cycle: SYNC → CHOOSE OP → ESCALATION → BRRR MODE → HANDOFF
   - No real gameplay yet, just UI flow
   - Verify loop structure matches GAME_LOOP.md

**Success criteria:**
- Stat system works (values drain/restore correctly)
- SYNC screen renders with correct layout
- One cycle can be clicked through (even if choices don't do anything yet)

---

## PHASE 3: CORE LOOP IMPLEMENTATION

**Goal:** Build one complete, playable cycle with all four op types and BRRR MODES.

**Tasks:**
1. **Implement CHOOSE OP screen**
   - Four buttons: Cover Story, Tech Proof, Infra Survival, Clean Trail
   - Each button shows: goal, BRRR MODE type, stat impact preview
   - Clicking locks in the choice and advances to ESCALATION

2. **Implement ESCALATION phase**
   - Stat shifts based on chosen op
   - Crew dialogue popups (codec style)
   - Player can invoke Brrrr Override or Narrative Spin (if unlocked)

3. **Script four BRRR MODE sequences**
   - **Cover Story BRRR:** Timed dialogue tree (rewrite investor deck, scrub LinkedIn)
   - **Tech Proof BRRR:** Stack's sprint (demo under duress, coffee bean jokes)
   - **Infra Survival BRRR:** Route failure, EvilFear duct-tape fix
   - **Clean Trail BRRR:** Hübris forcing RTC, archive radioactive branch
   - Each resolves with success/failure state and stat changes

4. **Implement HANDOFF screen**
   - Auto-generate log text summarizing op results
   - Display updated stat bars
   - Show Extraction Readiness %
   - Player can optionally edit narrative (Narrative Spin)

5. **Implement DECISION POINT**
   - Two options: "Continue to Next Cycle" or "Attempt Final Extraction"
   - "Attempt Final Extraction" only enabled if Extraction Readiness = 100%
   - Clicking "Continue" loops back to SYNC

6. **Implement game-over states**
   - Energy = 0 → "You Dropped The Line" ending
   - Sanity = 0 → "He Stayed Behind" ending
   - Heat = 100 → "Black Bag" ending
   - Display ending text, freeze game state

**Success criteria:**
- Player can complete 3–5 cycles
- All four op types are playable
- Stats move correctly based on choices
- Game-over triggers work

---

## PHASE 4: FINAL EXTRACTION & ENDINGS

**Goal:** Implement endgame sequence and all five endings.

**Tasks:**
1. **Script Final Extraction BRRR MODE**
   - Beat-by-beat: route selection → last-minute crisis → high-pressure dialogue tree
   - Success/failure branches
   - Stat checks during execution (if Sanity/Energy drop to 0 mid-extraction, pivot to bad ending)

2. **Implement all five endings**
   - **Ascension Ending:** Cinematic text + victory screen
   - **Black Bag Ending:** Heat maxed, grabbed in Panama
   - **Stolen Crown Ending:** Tokens 0, someone else monetizes Satoshi
   - **He Stayed Behind Ending:** Sanity 0 or trust broken, Satoshi refuses
   - **You Dropped The Line Ending:** Energy 0, you collapse
   - Each ending has unique text, tone, and (optional) visual treatment

3. **Implement trust tracking**
   - Hidden stat: Satoshi Trust (not displayed, but tracked)
   - Decreases if: you betray him, panic-leak, lie too hard (Narrative Spin overuse)
   - If trust breaks, Extraction Window closes → "He Stayed Behind" ending

4. **Test endgame gating**
   - Verify you CANNOT trigger Final Extraction if Extraction Readiness < 100%
   - Verify bad endings trigger correctly if you force extraction too early

**Success criteria:**
- Final Extraction is playable and tense
- All five endings are reachable
- Endgame gating works (no false positives/negatives)

---

## PHASE 5: CHARACTER ABILITIES & PERKS

**Goal:** Make each crew member mechanically distinct.

**Tasks:**
1. **Implement Roo perks**
   - Brrrr Override (force BRRR early, high reward, high cost)
   - Narrative Spin (edit HANDOFF logs, Cred boost, Sanity cost)

2. **Implement Hübris perks**
   - RTC THIS BITCH (force Clean Trail op)
   - Breather Moment (trigger snack debate, Heat bleed, Sanity restore)

3. **Implement Stack perks**
   - Prototype Saint (Tech Proof op, Hype/Tokens spike, Sanity/Energy drain)
   - Guilt Spiral (passive risk: if Sanity low, contagious morale drop)

4. **Implement AiSatoshi perks**
   - Dark Favor (emergency Tokens, Heat spike)
   - Trust tracking (affects Extraction Window)

5. **Implement EvilFear perks**
   - Bathtub Barbarian (hardware mod, Tokens bump, Heat spike)
   - "It's Fine, I Have a Heat Gun" (emergency infra fix)

6. **Balance perk costs**
   - Ensure high-reward perks have meaningful costs
   - Test: can player cheese the game by spamming one perk?

**Success criteria:**
- All perks are functional
- Each crew member feels mechanically distinct
- No dominant strategy (balance pass)

---

## PHASE 6: POLISH & JUICE

**Goal:** Make it feel good. Add audio, visual effects, narrative depth.

**Tasks:**
1. **Audio implementation**
   - Background music (low-tension ambient, high-tension BRRR MODE)
   - SFX (terminal keystrokes, codec ring, alert beeps, stat drain sound)
   - Optional: voice acting (codec distortion for AiSatoshi)

2. **Visual effects**
   - CRT scan lines, phosphor glow
   - Stat bar pulse/flicker in danger zone
   - Codec popup animation (static, connection distortion)
   - BRRR MODE intensity ramp (screen shake, color shift)

3. **Narrative depth**
   - Write flavor text for all stat thresholds (see STATS.md)
   - Write crew dialogue for each op type (banter, meltdowns, jokes)
   - Write Breather Moment variants (snack debate, moon chat, beard disaster)

4. **Redacted dossier intro screens**
   - Character intros with typewriter text, redactions, stamps
   - Display before first cycle or in a "Meet The Crew" menu

5. **Loading screen taglines**
   - Rotate taglines during load (see STYLE_GUIDE.md)

**Success criteria:**
- Game feels tense and operational
- Crew feels alive (not robotic)
- Aesthetic matches STYLE_GUIDE.md

---

## PHASE 7: PLAYTESTING & BALANCE

**Goal:** Make sure the game is fun, fair, and finishable.

**Tasks:**
1. **Internal playtesting**
   - Can you reach Ascension Ending without cheating?
   - Can you trigger all five endings?
   - Are any stats too forgiving or too punishing?

2. **Balance pass**
   - Adjust stat drain/restore rates
   - Adjust perk costs
   - Adjust BRRR MODE difficulty

3. **Bug fixes**
   - Stat overflow/underflow bugs
   - UI glitches
   - Softlock scenarios (e.g., stuck in a cycle with no valid choices)

4. **External playtesting (optional)**
   - Get 3–5 external testers
   - Gather feedback: Is the loop clear? Is the tone landing? Is it fun?

**Success criteria:**
- Game is winnable (Ascension Ending reachable)
- No major bugs
- Tone/aesthetic feedback is positive

---

## PHASE 8: RELEASE PREP

**Goal:** Ship it.

**Tasks:**
1. **Marketing assets**
   - Key art (cover, Steam capsule, social media banner)
   - Trailer (30–60 seconds, showcase war room UI, BRRR MODE tension, taglines)
   - GIF loops for social media (stat bars moving, codec popups)

2. **Store page / itch.io page**
   - Description (use taglines, core loop summary)
   - Screenshots (SYNC screen, BRRR MODE, ending screens)
   - Tag appropriately (narrative, thriller, management, indie)

3. **Build & package**
   - Export builds (Windows, Mac, Linux, or web)
   - Test on clean machines (no dev dependencies)

4. **Launch**
   - Post on itch.io, Steam, or host web build
   - Share on social media, dev communities

**Success criteria:**
- Build runs on target platforms
- Store page is live
- Game is public

---

## BLOCKERS (CURRENT)

**NEEDS_INPUT:**
1. **Tech stack preference** (Unity, Godot, web-based?)
2. **Target platform** (PC, web, console?)
3. **ESRB rating target** (affects how explicit burnout/paranoia language can be)
4. **Breather Moments gating** (always available, or require certain conditions?)

---

## FUTURE / STRETCH GOALS (Post-Launch)

- **New Game+** (start with higher Heat, different crew perks unlocked)
- **Challenge modes** ("No Breather Moments", "Double Heat")
- **Additional crew members** (new perks, new dynamics)
- **Alternate extraction routes** (different endgame paths)
- **Modding support** (custom ops, custom BRRR MODES)

---

**END ROADMAP.md**
