# Architecture — Abhishek Shukla Portfolio

Stack per `prompt.md` §3 (Master Build Prompt). SPA, static export, Vercel target. No Tailwind, no heavy animation libs.

---

## 1. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Vite + React (JS, not TS by default) | `npx -y create-vite@latest ./ -- --template react` |
| Styling | SCSS + BEM, CSS custom properties for tokens | `sass` devDep; one `.scss` per component; `styles/_tokens.scss` owns all vars; NO Tailwind |
| Animations | CSS transitions/keyframes + IntersectionObserver | `useReveal` hook; `prefers-reduced-motion` guard |
| Canvas | Raw `<canvas>` 2D, rAF loop | Neural-net particles + connecting lines, capped density |
| Fonts | Google Fonts link | Space Grotesk 500/600/700, Inter 300/400/500, JetBrains Mono 400/500 |
| Deploy | Vercel static | `npm run build` → `dist/`, no SSR |

## 2. Design Tokens (`src/styles/_tokens.scss` `:root`)

```css
--bg-void: #0a0a0f;
--bg-surface: #12121a;
--accent-primary: #6366F1;
--accent-secondary: #22D3EE;
--accent-tertiary: #A78BFA;
--text-primary: #E2E8F0;
--text-muted: #94A3B8;
--glow-primary: rgba(99, 102, 241, 0.4);
--glow-secondary: rgba(34, 211, 238, 0.3);
--success: #34D399;
--radius: 16px;
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

Rules: gradient headings `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`; glass cards `background: rgba(18,18,26,0.6); backdrop-filter: blur(12px); border: 1px solid rgba(99,102,241,0.2)`; glow shadows use `--glow-*`.

Light theme (bonus `/theme`): `[data-theme="light"]` overrides `--bg-*` / `--text-*`, same accents.

## 3. File Structure (target)

```
portfolio/
  index.html              # SEO meta + JSON-LD + fonts + #root
  vite.config.js
  package.json            # + sass devDependency
  src/
    main.jsx              # ReactDOM mount + imports styles/main.scss
    App.jsx               # composes all sections + palette + canvas
    styles/
      _tokens.scss        # CSS vars, breakpoints, mixins (glass, glow, gradient-text)
      _base.scss          # reset, body, container, .reveal states, keyframes
      main.scss           # imports tokens + base only (components import own scss)
    data/
      profile.js          # name, tagline, stats, links (email/phone/LinkedIn + Drive resume)
      skills.js           # 6 modules + tags (cross-checked vs resume)
      projects.js         # 6 projects + honest status flags
      experience.js       # Amiti (resume bullets) + Capgemini [dates confirm]
      education.js        # Thakur College BE E&TC 2023
    components/
      ParticleCanvas/
        ParticleCanvas.jsx  # canvas neural-net bg (.particle-canvas fixed bg)
      Header/Header.jsx + Header.scss               # BEM: .header__*
      Hero/Hero.jsx + Hero.scss                     # BEM: .hero__*
      Skills/Skills.jsx + Skills.scss               # BEM: .skills__*, .skill-card__*
      Projects/Projects.jsx + ProjectCard.jsx + Projects.scss  # BEM: .project-card__*
      Experience/Experience.jsx + Experience.scss   # BEM: .timeline__*
      Education/Education.jsx + Education.scss
      Contact/Contact.jsx + Contact.scss
      CommandPalette/CommandPalette.jsx + CommandPalette.scss
      Footer/Footer.jsx + Footer.scss
      SectionHeading/SectionHeading.jsx + SectionHeading.scss
    hooks/
      useReveal.js        # IntersectionObserver → .revealed
      useTyping.js        # hero type/delete loop
      useActiveSection.js # nav highlight via observer
```

If scaffolding fresh with Vite, delete `src/App.css` + `src/index.css` + unused assets — styles live in `src/styles/` + per-component `.scss`.

## 4. Component Architecture

```
<App>
  <ParticleCanvas />   # fixed, z-index -1, pointer-events none
  <Header />           # fixed, blur; owns drawer + palette-button + ONLINE badge
  <main>
    <Hero />           # id="about"
    <Skills />         # id="skills"
    <Projects />       # id="projects"
    <Experience />     # id="experience"
    <Education />      # id="education"
    <Contact />        # id="contact"
  </main>
  <Footer />
  <CommandPalette />   # portal-level overlay
</App>
```

- Data flows one-way: `data/*.js` → presentational components. No global store.
- Navigation: anchor `href="#id"` + `scroll-behavior: smooth` + `scroll-margin-top` for fixed header. Active link via `useActiveSection`.
- Reveal: each section wrapper `ref` from `useReveal()` adds `.reveal` → `.revealed` on intersect (threshold 0.15, once).
- Typing: `useTyping(words, typeSpeed, deleteSpeed, pause)` returns text; blinking caret via CSS.
- Tilt: `ProjectCard` mousemove → `rotateX/Y` (max ~8deg) + `--mx/--my` glow position; reset on leave; disabled on touch / reduced-motion.
- Palette: global `keydown` (Ctrl/Cmd+K toggle, ESC close); input filters static command list + `projects.js` names; Enter executes (scroll or `window.open`); `/theme` toggles `document.documentElement.dataset.theme`.

## 5. Key Implementation Details

- **ParticleCanvas:** ~70 particles desktop (fewer on mobile via width check), velocity drift, lines when dist < 120px, indigo/cyan strokes, rAF + resize listener + visibility-pause + reduced-motion static fallback.
- **Header:** `position: fixed; backdrop-filter: blur(12px); background: rgba(10,10,15,0.7)`. Pulsing dot: `box-shadow` keyframe on `var(--success)`.
- **Hero:** `min-height: 100vh`, centered; gradient text via `background-clip: text`.
- **Grids:** Skills `grid-template-columns: repeat(3,1fr)` → 2 → 1; Projects `repeat(2,1fr)` → 1.
- **SEO (`index.html`):** Bangalore title/description/keywords from PRD §7 + JSON-LD Person + WebSite + OG tags + preconnect fonts.

## 6. Privacy Constraint (binding)

- `PERSONAL/` (root) and any `docs/PERSONAL/` copy hold the private resume. Both are gitignored via `.gitignore` (`**/PERSONAL/`). Never import resume files into `src/`. Email/LinkedIn/phone values already extracted to PRD §4 with user approval — copy those, never re-read the phone into new files unnecessarily.

## 6. Constraints / Non-Goals

- No Tailwind, no framer-motion, no three.js, no backend.
- Do not copy reference HUD/Cyberpunk CSS; do not build JARVIS bot.
- Keep bundle small; no router (single page anchors only).
