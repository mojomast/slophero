# ROO GANG
## Infra Extraction Horror

**Keep the stack alive. Get the man out.**

Panama → Silicon Valley or die trying.

---

## What Is This?

ROO GANG is a narrative survival / ops-management game about a tiny cursed crew of late-night weirdos trying to smuggle a blacklisted genius (AiSatoshi) out of Panama and deliver him safely to Silicon Valley so he can become a billion-dollar founder.

Every "night cycle," you:
- Sync with the crew in a war-room UI
- Pick which op to run tonight (cover story, tech proof, infra survival, or cleanup)
- Ride escalating pressure
- Survive BRRR MODE (crisis spike)
- Log the outcome and decide: continue or extract?

The goal: Lower Heat, stockpile Tokens, keep everyone sane and alive, and pull off a CLEAN extraction.

**Rating:** AO (Adults Only)  
**Platform:** Web browser  
**Genre:** Narrative thriller, ops management, infra horror

---

## Tech Stack

- **Frontend:** HTML, CSS, TypeScript
- **Build Tool:** Vite
- **Narrative Engine:** Ink.js
- **UI Style:** CRT terminal aesthetic (Metal Gear Solid codec vibes)

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone or navigate to project directory
cd ROOGANG

# Install dependencies
npm install

# Start dev server
npm run dev
```

The game will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory. Deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

### Deploy to Vercel

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Project name: roo-gang (or roogang)
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
# - Install command: npm install
```

The game is fully production-ready with mobile responsive design and optimized bundle size.

---

## Project Structure

```
ROOGANG/
├── src/
│   ├── game/
│   │   └── StatSystem.ts      # Six-stat resource system
│   ├── ui/
│   │   └── UIManager.ts       # War room UI controller
│   ├── styles/
│   │   └── main.css           # CRT aesthetic styling
│   └── main.ts                # Game entry point
├── docs/
│   ├── GAME_LOOP.md           # Canonical loop structure
│   ├── STATS.md               # Stat definitions & flavor text
│   ├── CHARACTERS.md          # Crew bios & perks
│   ├── STYLE_GUIDE.md         # Visual language rules
│   └── ROADMAP.md             # Development phases
├── index.html                 # Entry HTML
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite bundler config
└── README.md                  # This file
```

---

## Development Status

**Version:** 0.3.0  
**Status:** 🚀 READY FOR DEPLOYMENT

**Phase 1: Foundation** ✅ Complete  
- Design bible locked (GAME_LOOP, STATS, CHARACTERS, STYLE_GUIDE)

**Phase 2: Core Game Loop** ✅ Complete  
- [x] Full cycle implementation (6 phases)
- [x] All 4 BRRR MODE operations with Ink.js
- [x] Stat system with real-time updates
- [x] War room UI with CRT aesthetic
- [x] Extraction readiness system

**Phase 3: Character Depth** ✅ Complete  
- [x] All crew perks (BREATHER, RTC THIS BITCH, BRRR NOW, DARK FAVOR)
- [x] Final Extraction BRRR MODE (3-phase endgame)
- [x] 7 complete game endings
- [x] Special encounters system (25+ scenarios)
- [x] Celebrity chaos (Elon, Sam, Paris, Neil, Woz, Cena, Mr. Beast, Balaji, Vitalik)
- [x] Breather moments (3 scenarios)

**Phase 4: Polish & Deploy** 🚧 In Progress  
- [x] Mobile responsive design
- [x] Production build optimized (<55KB gzipped)
- [x] Meta tags for social sharing
- [x] Vercel deployment config
- [ ] Balance testing (target: 8-12 cycles to extract)
- [ ] Additional cycle dialogue variations

See `HANDOFF.md` for detailed session notes.

---

## The Crew

- **Roo (You):** Mission control. Shot caller. The one who decides when to go BRRR.
- **Hübris:** Archivist. Morale saboteur. Forces "RTC THIS BITCH" when a branch is cooked.
- **Stack:** Prototype saint. Guilt-powered miracle builder. Delivers TECH PROOF under duress.
- **AiSatoshi:** The payload. The package. The reason you're doing any of this.
- **EvilFear:** Hardware barbarian. Plastidips GPUs in a bathtub at 2AM. Everything should look mean.

---

## The Stats

1. **Energy** - Physical stamina. 0 = game over.
2. **Sanity** - Mental stability. 0 = game over.
3. **Heat** - Attention level. 100 = game over.
4. **Tokens** - Extraction budget (resources, favors, routes).
5. **Hype** - How legendary the op looks right now.
6. **Cred** - Trust that you're delivering, not vaporware.

**Extraction Readiness %** - Derived meter. Must hit 100% to attempt Final Extraction.

---

## Game Features

- **7 Complete Endings:** Success, failure, and everything in between
- **25+ Random Encounters:** Celebrity chaos, industry events, cryptic transmissions
- **4 Crew Perks:** Tactical abilities with cooldowns and consequences
- **6-Stat Management:** Energy, Sanity, Heat, Tokens, Hype, Cred
- **Multiple Operation Types:** Infra survival, tech proof, cover story, trail cleanup
- **Cascading Consequences:** Choices echo through future cycles
- **CRT Aesthetic:** Authentic terminal war room with scan lines and phosphor glow
- **Mobile Responsive:** Playable on desktop, tablet, and phone

## Taglines

- INFRA EXTRACTION HORROR
- KEEP THE STACK ALIVE. GET THE MAN OUT.
- PANAMA → SILICON VALLEY OR DIE TRYING
- EVERYTHING IS MEAN.
- IT GOES BRRRRRR.

---

## License

MIT (code)  
All narrative content and characters © ROO GANG team

---

## Contact / Community

TBD - Discord / Twitter / itch.io links

---

**Now go brrrr.**
