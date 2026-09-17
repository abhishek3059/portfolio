# Build — Setup, Run, Deploy

---

## 1. Prerequisites
- Node.js 18+ (`node -v`), npm 9+.
- No global installs needed (use `npx -y`).

## 2. Scaffold (Phase 0 — do once)
> Repo currently has `prompt.md` + `docs/` + `AGENTS.md` + `PERSONAL/` (private, gitignored). Scaffolding Vite in-place needs an empty dir, so scaffold in a temp dir and copy in — never move/delete `PERSONAL/`.

```powershell
# option A: scaffold fresh then merge docs/prompt in
npx -y create-vite@latest portfolio-app -- --template react
# option B (empty dir only):
# npx -y create-vite@latest ./ -- --template react
npm install
npm run dev
```

## 3. Daily Commands
```powershell
npm run dev       # local dev, default http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## 4. Project Conventions
- Tokens only via CSS vars in `src/styles/_tokens.scss`. No hardcoded hex in components.
- SCSS + strict BEM (`block__element--modifier`); one `.scss` per component colocated with its `.jsx`.
- Data in `src/data/` (`profile.js`, `skills.js`, `projects.js`, `experience.js`, `education.js`) — UI reads from there.
- One folder per component: `Component.jsx` + `Component.css`.
- Placeholders: literal `[PLACEHOLDER — ASK USER]` strings for LinkedIn/Email/Resume/Experience/Education — never invent values.
- Fonts via Google Fonts `<link>` in `index.html`, not `@import` in CSS (faster).

## 5. Vercel Deploy
1. `npm run build` passes locally.
2. Push repo to GitHub → Vercel → Import → Framework: Vite → Build: `npm run build`, Output: `dist`.
3. Verify: title/meta/JSON-LD, canvas perf, mobile drawer, Cmd+K, all anchors.

## 6. Verification Checklist
- [ ] `npm run build` clean, `preview` renders all 7 sections
- [ ] Responsive 360px → 1440px, drawer works
- [ ] Typing loop, reveals, tilt, palette (`/about /skills /projects /contact /github /theme` + fuzzy)
- [ ] SEO tags + JSON-LD present in served HTML (Bangalore)
- [ ] No Tailwind/heavy-lib imports; respects `prefers-reduced-motion`
- [ ] `git status` shows NO `PERSONAL/` files (gitignore working); no phone numbers committed without approval

## 7. Privacy Rule
- `PERSONAL/` (resume source) is gitignored and never imported into `src/`. Copy verified values by hand into `src/data/*.js`. Contact values (email/phone/LinkedIn) are user-approved for display — source them from PRD §4.
