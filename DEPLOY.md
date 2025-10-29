# ROO GANG - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account (for connecting repo to Vercel)
- Vercel account (free tier works)
- Project pushed to GitHub

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Vercel auto-detects Vite config
5. Click "Deploy"
6. Done! Your game is live.

### Option 2: Deploy via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# From project root
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - What's your project's name? roo-gang
# - In which directory is your code located? ./
# - Want to override settings? N

# Vercel will auto-detect:
# - Framework: Vite
# - Build Command: npm run build
# - Output Directory: dist
# - Install Command: npm install
```

### Deploy Updates
```bash
# After making changes
git push

# Or with Vercel CLI
vercel --prod
```

---

## 📋 Pre-Deploy Checklist

### Build Verification
- [x] `npm run build` completes without errors
- [x] `npm run preview` runs correctly at localhost:4173
- [x] Bundle size < 60KB gzipped (current: 54KB ✅)
- [x] All TypeScript compiles with no errors
- [x] All Ink files compile to JSON successfully

### Configuration Files
- [x] `vercel.json` present and configured
- [x] `package.json` has correct scripts (build, preview)
- [x] `vite.config.ts` configured properly
- [x] Meta tags added to `index.html`

### Assets & Content
- [x] All narrative .ink files in `src/narrative/`
- [x] CSS includes responsive media queries
- [x] No hardcoded localhost URLs
- [x] No dev-only dependencies in production build

---

## 🧪 Post-Deploy Testing Checklist

### Basic Functionality
- [ ] Splash screen loads correctly
- [ ] "BEGIN EXTRACTION" button works
- [ ] War room UI renders properly
- [ ] All stat bars display and update
- [ ] Extraction Readiness meter shows correctly

### Game Loop
- [ ] SYNC phase displays crew banter
- [ ] CHOOSE OP screen shows all 4 operations
- [ ] Selecting operation triggers ESCALATION phase
- [ ] BRRR MODE loads Ink narrative correctly
- [ ] Choices modify stats in real-time
- [ ] HANDOFF screen shows cycle summary
- [ ] DECISION POINT works (continue vs extract)

### Perks
- [ ] BREATHER button works (manual trigger)
- [ ] RTC THIS BITCH button works (force Clean Trail)
- [ ] BRRR NOW button works (skip escalation)
- [ ] DARK FAVOR button works (emergency tokens)
- [ ] Perk cooldowns function correctly
- [ ] Perk buttons disable when on cooldown

### Special Features
- [ ] Breather moments auto-trigger at Sanity < 40
- [ ] Special encounters trigger randomly (15% chance)
- [ ] Celebrity encounters display correctly
- [ ] Final Extraction BRRR MODE works
- [ ] Game endings trigger appropriately

### Mobile & Responsive
- [ ] Layout works on tablet (landscape)
- [ ] Layout works on tablet (portrait)
- [ ] Layout works on mobile (iPhone/Android)
- [ ] Text is readable on small screens
- [ ] Buttons are tappable on touchscreen
- [ ] Scan line effect visible but not overwhelming

### Browser Compatibility
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (desktop)
- [ ] Safari (iOS)
- [ ] Chrome (Android)

---

## 🔧 Common Deployment Issues

### Issue: Assets not loading
**Symptom:** Blank screen or 404 errors in console  
**Fix:** Check `vite.config.ts` base path. For Vercel, it should be `/` (default).

### Issue: Ink files not compiling
**Symptom:** "Story is null" or narrative not loading  
**Fix:** Ensure `vite-plugin-ink.js` is in project root and registered in `vite.config.ts`

### Issue: TypeScript errors in build
**Symptom:** Build fails with TS errors  
**Fix:** Run `npm run build` locally first. Fix all TS errors before deploying.

### Issue: Mobile layout broken
**Symptom:** UI elements overlap or text unreadable on mobile  
**Fix:** Media queries added in `main.css` lines 597-782. Check responsive breakpoints.

### Issue: Slow first load
**Symptom:** Game takes >3 seconds to load initially  
**Fix:** Consider code splitting or lazy loading Ink files. Current bundle is optimized at 54KB gzipped.

---

## 📊 Performance Benchmarks

### Current Production Bundle
- **Total JS:** 202.19 KB (raw) / 54.16 KB (gzipped)
- **Total CSS:** 10.72 KB (raw) / 2.53 KB (gzipped)
- **HTML:** 7.32 KB (raw) / 1.86 KB (gzipped)
- **First Load:** ~1-2 seconds on 4G connection

### Optimization Opportunities (Future)
- Lazy load Ink narratives (load on-demand per operation)
- Service worker for offline play
- Preload critical assets
- Image optimization (if sprites added)

---

## 🌐 Domain & Environment Variables

### Custom Domain (Optional)
1. In Vercel dashboard, go to project settings
2. Click "Domains"
3. Add your custom domain (e.g. `roogang.io`)
4. Follow DNS configuration steps

### Environment Variables (If Needed)
Currently, ROO GANG has no backend or API calls, so no env vars needed.

If you add analytics or backend later:
1. Vercel dashboard → Project → Settings → Environment Variables
2. Add `VITE_ANALYTICS_ID` or similar
3. Access in code: `import.meta.env.VITE_ANALYTICS_ID`

---

## 📝 Deployment History

### Version 0.3.0 - Phase 3 Complete (2025-10-29)
- ✅ All perks implemented
- ✅ All endings implemented
- ✅ Celebrity encounter system
- ✅ Mobile responsive design
- ✅ Ready for first public deployment

### Upcoming: Version 0.4.0 - Polish Phase
- Balance testing
- Additional dialogue variations
- Save/load system (localStorage)
- Optional sound effects
- Analytics (optional)

---

## 🔒 Security Considerations

- No user data collected
- No authentication required
- No external API calls
- All game state client-side only
- Safe to deploy on any static host

---

## 📈 Post-Launch Monitoring

### What to Watch
1. **Vercel Analytics** - Track page views, load times
2. **Browser Console Errors** - Monitor for runtime errors
3. **Mobile vs Desktop Traffic** - Validate responsive design
4. **Completion Rate** - How many players reach an ending?

### Optional Analytics
Consider adding:
- Plausible (privacy-friendly)
- Simple Analytics
- Vercel Analytics (built-in)

**DO NOT** add Google Analytics or invasive tracking. Keep it simple.

---

## 🎉 Launch Day Checklist

- [ ] Deploy to Vercel
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Share link with team for QA
- [ ] Post to Twitter/Discord
- [ ] Update README with live URL
- [ ] Monitor Vercel dashboard for errors
- [ ] Celebrate 🎊

---

**Ready to ship. Let's go brrrr.**
