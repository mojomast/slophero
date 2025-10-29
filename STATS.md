# STATS
## ROO GANG – Resource & Failure Model

Version: 2025-10-29  
Canonical stat definitions, ranges, breakpoints, and flavor text.

---

## THE SIX CORE STATS

### 1. ENERGY
**What it is:** Physical stamina. Your ability to stay awake and execute under duress.

**Range:** 0–100

**Breakpoints:**
- **100–75:** "Fresh" — You're wired. Coffee optional.
- **74–50:** "Steady" — You're holding. Sleep debt building.
- **49–25:** "Ragged" — Your hands shake. You misread terminal output. You forget which alias you're using.
- **24–1:** "Collapsing" — You're seeing double. Typos in critical commands. One more push and you're done.
- **0:** **GAME OVER** — "You Dropped The Line" ending. You faceplant mid-op. Crew scatters.

**Flavor text examples:**
- **High (90):** "You crack your knuckles. Let's brrrr."
- **Mid (50):** "Another coffee. Another cycle. You've done worse."
- **Low (20):** "Your vision tunnels. The codec audio sounds like it's underwater. You blink and lose 10 seconds."
- **Critical (5):** "You're typing with one eye closed. You don't remember the last time you stood up."

**How it moves:**
- **Drains:** Every cycle, every BRRR MODE, Brrrr Override ability
- **Restores:** Breather Moments (small), successful Clean Trail op (if crew morale lifts)

---

### 2. SANITY
**What it is:** Mental stability. Your ability to trust your own judgment and not spiral into paranoia, guilt, or betrayal.

**Range:** 0–100

**Breakpoints:**
- **100–75:** "Clear" — You know what you're doing. The mission makes sense.
- **74–50:** "Fraying" — You second-guess calls. You rehearse cover stories out loud when nobody's listening.
- **49–25:** "Cracking" — You see patterns that aren't there. You draft messages you don't send. Paranoia creeps in.
- **24–1:** "Breaking" — You don't trust the crew. You don't trust Satoshi. You're one bad moment from leaking or locking up.
- **0:** **GAME OVER** — "He Stayed Behind" ending. You break trust, panic-leak, or mentally collapse. Satoshi refuses extraction.

**Flavor text examples:**
- **High (85):** "The plan is clean. You trust your people. This is doable."
- **Mid (55):** "You catch yourself checking the same log three times. Are you being watched? Probably not. Probably."
- **Low (25):** "You drafted a confession email to nobody. You didn't send it. You'll delete it later. Maybe."
- **Critical (10):** "Every ping could be the one that ends it. You're rehearsing surrender speeches in your head."

**How it moves:**
- **Drains:** Failed BRRR MODE, Narrative Spin (lying to yourself), Stack guilt spirals (contagious), Brrrr Override, ethics panic
- **Restores:** Breather Moments, successful Tech Proof (validation), Hübris forcing crew to laugh at the absurdity

---

### 3. HEAT
**What it is:** Attention level on AiSatoshi and the operation. How loud you are. How close you are to getting black-bagged.

**Range:** 0–100

**Breakpoints:**
- **0–20:** "Ghost" — You're invisible. Nobody's looking. Perfect conditions for extraction.
- **21–50:** "Warm" — A few pings. Border agents might flag the name. Investors are curious. Manageable.
- **51–75:** "Hot" — You're on lists. Chat goes quiet when you ask questions. Routes are getting burned.
- **76–99:** "Radioactive" — Every move is watched. Contacts ghost you. Extraction window closing fast.
- **100:** **GAME OVER** — "Black Bag" ending. AiSatoshi gets grabbed. You never see him again.

**Flavor text examples:**
- **Low (15):** "Quiet night. No pings. Nobody's asking questions. This is what winning looks like."
- **Mid (50):** "An investor asked where Satoshi's been the last six months. You deflected. They seemed to buy it."
- **High (80):** "Panama chat is dead silent. You see a typing bubble from a contact you don't recognize. It disappears."
- **Critical (95):** "Someone knocked on your door at 3AM. You didn't answer. They didn't knock again."

**How it moves:**
- **Increases:** Failed Infra Survival, EvilFear's loud hardware mods, failed Cover Story, external events (investor scrutiny, border policy changes), Brrrr Override
- **Decreases:** Successful Clean Trail op, successful Cover Story op, Breather Moments (small), laying low for multiple cycles

---

### 4. TOKENS
**What it is:** Extraction budget. Resources, favors, compute, burner infra, hush money, fake docs, safe routes. The capital you need to vanish cleanly.

**Range:** 0–200 (can exceed 100 via hustle)

**Breakpoints:**
- **150+:** "Loaded" — You can buy silence, routes, legends. Extraction is a phone call away.
- **100–149:** "Comfortable" — You have options. Not unlimited, but enough to move clean.
- **50–99:** "Tight" — You can extract, but it'll cost everything. No margin for error.
- **25–49:** "Broke" — You're one favor away from begging. Extraction possible but desperate.
- **1–24:** "Destitute" — You have nothing. If you try to extract now, someone else will own the outcome.
- **0:** **RISK OF BAD ENDING** — "Stolen Crown" ending if you attempt extraction. Someone else monetizes Satoshi. You get nothing.

**Flavor text examples:**
- **High (160):** "You have three exfil routes, two fake passports, and a charter pilot who owes you. You're golden."
- **Mid (80):** "You can pull this off. It'll burn every favor you have, but you can pull it off."
- **Low (30):** "You're calling in debts you swore you'd never touch. This better be worth it."
- **Critical (10):** "You have $47 in a burner account and a half-written pitch deck. That's it."

**How it moves:**
- **Increases:** Successful Tech Proof (VC interest), EvilFear hardware mods (if you can monetize the flex), AiSatoshi's Dark Favor ability (huge spike, but Heat maxes)
- **Decreases:** Failed ops, buying silence, paying for routes, Clean Trail op (if you burn profitable work)

---

### 5. HYPE
**What it is:** How legendary the op looks right now. Buzz, momentum, "we're so back" energy.

**Range:** 0–100

**Breakpoints:**
- **80–100:** "Legendary" — Everyone wants in. Investors are cold-DMing. The crew believes.
- **50–79:** "Solid" — People are paying attention. You're on the map. Respectable.
- **25–49:** "Meh" — You're a rumor. Nobody's sure if you're real or vaporware.
- **1–24:** "Dead" — Nobody cares. Investors ghost you. Crew morale sags.
- **0:** Not a game-over, but kills Cred and makes extraction harder (nobody risks their neck for a flop).

**Flavor text examples:**
- **High (90):** "Three VCs asked for intros this week. Hübris said 'we're a cult now.' He's not wrong."
- **Mid (60):** "You're real enough that people ask questions. Not famous. Not invisible. Right in the zone."
- **Low (20):** "An investor said 'I thought that project died?' You said 'nah, we're just quiet.' They didn't seem convinced."
- **Critical (5):** "Nobody's talking about you. The chat's gone cold. It's like you never existed."

**How it moves:**
- **Increases:** Successful Tech Proof (huge), successful Cover Story, Narrative Spin, Satoshi doing something public and brilliant
- **Decreases:** Failed ops, long stretches with no output, scandals, Clean Trail op (you're erasing the proof)

---

### 6. CRED
**What it is:** Trust that you're actually delivering, not just hyping vaporware. Internal and external legitimacy.

**Range:** 0–100

**Breakpoints:**
- **80–100:** "Trusted" — The crew would die for you. Investors believe. Satoshi trusts you with his life.
- **50–79:** "Respected" — You've earned it. People take you seriously.
- **25–49:** "Shaky" — You're on thin ice. One more failure and they bail.
- **1–24:** "Joke" — Nobody believes you anymore. The crew's planning exits.
- **0:** Not a game-over, but you can't attempt extraction (nobody will risk it for you).

**Flavor text examples:**
- **High (85):** "Stack said 'I trust you' and meant it. That's worth more than tokens."
- **Mid (55):** "You've shipped enough that people don't write you off. Not yet."
- **Low (25):** "Hübris joked 'are we scamming or building?' You laughed. He wasn't joking."
- **Critical (5):** "EvilFear asked if you even believe in this anymore. You didn't answer."

**How it moves:**
- **Increases:** Successful BRRR MODES, shipping real work, Stack validation, keeping promises
- **Decreases:** Failed ops, Narrative Spin (if you're caught lying), breaking trust, vaporware vibes

---

## DERIVED METER: EXTRACTION READINESS %

**What it is:** Computed signal that gates Final Extraction attempt.

**Formula (rough):**
```
Extraction Readiness = (
  (Tokens >= 100 ? 30 : 0) +
  (Heat <= 40 ? 30 : 0) +
  (Sanity > 0 ? 20 : 0) +
  (Energy > 0 ? 10 : 0) +
  (Satoshi Trust Intact ? 10 : 0)
)
```

**Result:**
- **100%:** Green light. You can attempt Final Extraction.
- **70–99%:** Yellow. Close, but missing one piece (usually Tokens or Heat).
- **0–69%:** Red. Do not attempt. You will trigger a bad ending.

**UI Representation:**
- Color-coded bar in top-right of war room HUD
- Tooltip breaks down which conditions are met/unmet

---

## STAT INTERACTION NOTES

- **Energy and Sanity drain together** during high-pressure ops. If one is low, the other follows.
- **Heat and Hype feed each other.** High Hype can spike Heat (you're too visible). But you need some Hype to unlock Tokens.
- **Cred stabilizes Sanity.** If the crew trusts you, they're less likely to spiral.
- **Tokens are the oxygen.** Without them, nothing else matters at endgame.

---

**END STATS.md**
