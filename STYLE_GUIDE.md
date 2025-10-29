# STYLE GUIDE
## ROO GANG – Visual Language & Aesthetic

Version: 2025-10-29  
Canonical visual direction to prevent drift. Lock this before art production.

---

## CORE AESTHETIC

**Genre:** Infra extraction horror / ops thriller / codec drama  
**NOT:** Pixel-chibi, cozy indie, top-down RPG, overworld walking simulator  
**Reference vibes:** Metal Gear Solid codec screens, terminal hacker aesthetic, redacted CIA documents, emergency broadcast typography

---

## COLOR PALETTE

### Primary (UI / HUD)
- **CRT Green:** `#00FF41` (terminal text, stat bars in safe zone)
- **CRT Amber:** `#FFAA00` (alternate terminal mode, warm warnings)
- **Deep Black:** `#0A0A0A` (background, void)
- **Hazard Yellow:** `#FFED00` (alerts, attention states)
- **Toxic Orange:** `#FF6600` (danger, Heat spikes, critical warnings)

### Secondary (Accent / Danger)
- **Redline Red:** `#FF0033` (stat bars in critical zone, GAME OVER states)
- **Slate Gray:** `#3A3A3A` (UI panels, inactive elements)
- **Cold Blue:** `#00D9FF` (Stack's glow, tech proof aesthetic)

### Character Lighting
- **Roo:** Multi-monitor glow (green + amber CRT mix)
- **Hübris:** Warm desk lamp (soft yellow, #FFD27F)
- **Stack:** Cold CRT blue-white (harsh, #E0F7FF)
- **AiSatoshi:** Half-shadow, rim light only (mystery, paranoia)
- **EvilFear:** Harsh work light (angular shadows, high contrast)

---

## TYPOGRAPHY

### HUD / UI Text
- **Font:** Monospace, fixed-width (e.g., IBM Plex Mono, JetBrains Mono, or custom terminal font)
- **Weight:** Medium to Bold for emphasis
- **Style:** ALL CAPS for alerts, labels, codenames
- **Effects:** Subtle CRT scan lines, slight glow on active text

### Taglines / Marketing
- **Font:** Bold sans-serif (e.g., Helvetica Bold, Futura Bold)
- **Style:** ALL CAPS, tight kerning
- **Placement:**
  - Splash screen: "INFRA EXTRACTION HORROR"
  - Loading screens (rotate): "KEEP THE STACK ALIVE. GET THE MAN OUT." / "PANAMA ➜ SILICON VALLEY OR DIE TRYING" / "EVERYTHING IS MEAN." / "IT GOES BRRRRRR."

### In-Game Logs / Handoff Text
- **Font:** Monospace, left-aligned
- **Style:** devplan.md / HANDOFF.md formatting (headers with `#`, bullet lists, inline code blocks)
- **Color:** CRT Green on black

---

## UI LAYOUT (War Room / Ops Screen)

**No overworld movement.** Player does not control a character walking through a tileset. All interaction is menu/text-based in a multi-pane interface.

### Screen Regions

```
┌──────────────────────────────────────────────────────────┐
│  [STAT HUD]               [EXTRACTION READINESS %]        │
│  Energy:   ████████░░ 80  ███████░░░ 70% (YELLOW)        │
│  Sanity:   ██████░░░░ 60                                 │
│  Heat:     ████░░░░░░ 40                                 │
│  Tokens:   ██████████ 100                                │
│  Hype:     ███████░░░ 70                                 │
│  Cred:     ████████░░ 80                                 │
├──────────────────────────────────────────────────────────┤
│  [CHAT WINDOW]            │  [TERMINAL LOG]              │
│                           │                              │
│  Hübris: "yo are we       │  > roo3 connection stable    │
│  scamming or building"    │  > investor ping detected    │
│                           │  > Heat +5                   │
│  Stack: "i feel bad"      │  > Stack sanity -10          │
│                           │                              │
│  You: "breathe"           │  > Breather Moment triggered │
│                           │                              │
├───────────────────────────┴──────────────────────────────┤
│  [CODEC POPUP - CHARACTER PORTRAIT + DIALOGUE]           │
│  ┌────────────────────────────────────────────────────┐  │
│  │  [EvilFear portrait]  "It's fine. I have a heat    │  │
│  │                        gun."                        │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

### Stat Bars
- **Style:** Horizontal progress bars, pixel-art or minimal geometric
- **Color coding:**
  - Green zone (safe)
  - Yellow zone (warning)
  - Red zone (critical)
- **Effects:** Pulse/flicker when in danger zone, drain animation visible in real-time during BRRR MODE

### Extraction Readiness Meter
- **Location:** Top-right corner
- **Style:** Circular or vertical bar with percentage
- **Color:**
  - Red (0–69%): "DO NOT ATTEMPT"
  - Yellow (70–99%): "CLOSE"
  - Green (100%): "READY"
- **Tooltip:** Breaks down which conditions are met/unmet (Tokens ✓, Heat ✓, Sanity ✓, etc.)

---

## CHARACTER ART DIRECTION

### General Rules
- **Not chibi. Not cute.** These are tired, paranoid, dangerous people.
- **Lighting tells the story.** Each character has a signature light source (see Color Palette > Character Lighting).
- **Functional wardrobe.** Nobody's dressed for a photoshoot. Hoodies, work gloves, tactical-adjacent DIY.
- **Environmental storytelling.** Show their workspace: coffee cups, hardware, snacks, duct tape, tools.

### Individual Notes

**Roo (You):**
- Half-shadowed, lit by multiple monitors
- Tired but sharp eyes
- War room aesthetic: headset, terminal windows, coffee
- NOT glamorous—this is operational, not aspirational

**Hübris:**
- Warm desk lamp glow
- Relaxed posture (even in crisis)
- Beard situation (canonical)
- Snacks in frame
- Comfortable wardrobe (hoodie, joggers)

**Stack:**
- Cold CRT blue-white light (harsh, unflattering)
- Hunched, mid-keystroke
- Eye bags, messy hair
- Surrounded by energy drinks, coffee grounds, hardware
- Visual metaphor: saint in server room, monitor glow as halo

**AiSatoshi:**
- Always in half-shadow (face partially obscured)
- Rim light only (mystery, paranoia)
- Minimalist, transient environment (ready to run)
- Nondescript wardrobe (blends in)
- Checking phone, glancing at exits

**EvilFear:**
- Harsh work light (angular shadows, high contrast)
- Matte black gear (plastidipped, spray-painted)
- Tools scattered: heat gun, duct tape, work gloves
- Bathtub workshop in background (cursed)
- Mustang energy: dangerous, fast, loud

---

## CODEC POPUPS (Character Dialogue Windows)

**Reference:** Metal Gear Solid codec screens

### Layout
- Character portrait (grayscale or limited color, high contrast)
- Name/codename label (top)
- Dialogue text box (bottom)
- Optional: frequency/connection visual (static, scan lines)

### Style
- **Border:** Hazard yellow or CRT green
- **Background:** Deep black with subtle scan line texture
- **Text:** Monospace, left-aligned, CRT green or white
- **Portrait:** Shoulders-up, direct eye contact or looking off-screen (paranoia)

### Animation
- Codec "connects" with brief static/distortion
- Text types in (classic codec speed)
- Portrait subtly animates (blink, slight movement, breathing)

---

## EFFECTS & ATMOSPHERE

### CRT Aesthetic
- **Scan lines:** Subtle horizontal lines across UI
- **Screen curvature:** Very slight barrel distortion (optional, don't overdo it)
- **Phosphor glow:** Text has slight blur/glow (especially in CRT green)
- **Flicker:** Rare, subtle flicker on critical alerts

### Redacted Dossier (Character Intros / Handoff Logs)
- **Style:** Typewriter font on aged paper texture
- **Redactions:** Black bars over sensitive info
- **Stamps:** "CLASSIFIED", "EXTRACTING", "HEAT: HIGH"
- **Tone:** Cold War paranoia documents

### Emergency HUD
- **Alerts:** Flash briefly in hazard yellow or toxic orange
- **Sound cues:** Terminal beep, alert chime, codec ring
- **Text overlays:** "HEAT SPIKE", "SANITY CRITICAL", "BRRR MODE ACTIVE"

---

## TAGLINE / BRANDING

**Primary Tagline:**  
"INFRA EXTRACTION HORROR"

**Alternate Taglines (Rotate in Marketing):**
- "KEEP THE STACK ALIVE. GET THE MAN OUT."
- "PANAMA ➜ SILICON VALLEY OR DIE TRYING"
- "EVERYTHING IS MEAN."
- "IT GOES BRRRRRR."

**Logo Treatment:**
- Bold, blocky, ALL CAPS
- Optional: Hazard stripe accent (yellow/black)
- NO cute flourishes, NO pixel art text (unless doing NES cover homage)

---

## AUDIO DIRECTION (Brief Notes)

**Music:**
- Low-tension ambient: synth drones, distant machinery hum
- High-tension (BRRR MODE): industrial percussion, rising synth stabs, heartbeat bass
- Breather Moments: softer, warmer tones (brief respite)

**SFX:**
- Terminal keystrokes (mechanical keyboard)
- Codec ring (Metal Gear homage)
- Alert beeps (sharp, attention-grabbing)
- Stat drain sound (unsettling, like a slow leak)
- BRRR MODE ramp-up (building tension)

**Voice (Optional):**
- If voiced: tired, real, not over-acted
- Codec distortion on some lines (AiSatoshi especially)

---

## WHAT TO AVOID

❌ **Pixel-chibi characters**  
❌ **Cozy indie aesthetic** (this is not Stardew Valley)  
❌ **Top-down overworld walking** (no tileset movement)  
❌ **Bright, saturated colors** (this is CRT terminal glow, not candy pop)  
❌ **Heroic power fantasy** (you're exhausted operators, not superheroes)  
❌ **Over-explaining in UI** (trust the player to read the room)

---

## FINAL REMINDER

**EVERYTHING IS MEAN.**  
**IT GOES BRRRRRR.**

This is not a comfort game. This is infra extraction horror. The aesthetic should feel tense, operational, and real. If it looks too polished or too cute, we've drifted.

---

**END STYLE_GUIDE.md**
