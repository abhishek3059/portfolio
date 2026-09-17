# PHASES — Build Plan

Ordered, dependency-safe. Each phase ends with a verifiable checkpoint. Source: `prompt.md` Master Build Prompt §3/§4/§7, governed by §8 Build Loop Protocol (Read → Plan → Implement → Test → Self-Review → Refine).

---

## Phase 0 — Scaffold + SEO Shell [checkpoint: `npm run dev` renders blank themed page]
- [ ] Run `npx -y create-vite@latest ./ -- --template react` (in empty dir; here repo has docs — scaffold carefully or move).
- [ ] `npm install`, `npm run dev` smoke test.
- [ ] `index.html`: title, description, keywords, OG, JSON-LD Person + WebSite, Google Fonts (Space Grotesk, Inter, JetBrains Mono), avatar/meta.
- [ ] `src/index.css`: tokens (§2 architecture), reset, `scroll-behavior: smooth`.
- [ ] `src/App.jsx`: empty section anchors (`about/skills/projects/experience/education/contact`).

## Phase 1 — Foundation: Theme, Layout, Canvas [checkpoint: deep-space bg + tokens visible]
- [ ] `data/profile.js` — Bangalore location, email/phone/LinkedIn from resume (display-approved), resume link = Drive URL (user-provided).
- [ ] `ParticleCanvas` (capped particles, rAF, resize, reduced-motion fallback).
- [ ] `SectionHeading` (gradient title + geometric divider).
- [ ] `useReveal` hook + `.reveal/.revealed` CSS.
- [ ] Responsive container widths + `scroll-margin-top`.

## Phase 2 — Header + Hero [checkpoint: nav, typing, stats all working]
- [ ] `Header`: `AS />` logo, 5 links, ONLINE pulse, ⌘K button, hamburger drawer, `useActiveSection`.
- [ ] `Hero` (`#about`): Hello → gradient name → `useTyping` (4 roles) → subtext → 2 CTAs → 4 stat cards.
- [ ] Mobile drawer CSS + ESC/overlay close.

## Phase 3 — Skills 2×3 Grid [checkpoint: 6 glass cards, hover glow, cross-checked vs resume]
- [ ] `data/skills.js` (6 modules; fold in resume-verified Kafka/Redis/AWS/K8s/Angular/LangChain only where used in a real project — no aspirational tags).
- [ ] `Skills.jsx`: grid 3→2→1, icon + tags, reveal stagger.

## Phase 4 — Projects 3D-Tilt Grid [checkpoint: 6-7 cards, honest status, tilt, GitHub links]
- [ ] `data/projects.js` (6 projects; honest status flags: QA Bot v0.1.0 Marketplace per resume — get listing URL; MCP = personal tool; ScrollSnap = early stage; Laundry = link backend + Vue, decide on 3rd TS repo).
- [ ] `ProjectCard.jsx`: tilt (≤8deg), glow follows mouse, badges, GitHub button, expand (optional).
- [ ] Grid 2→1 responsive.

## Phase 5 — Experience + Education (real data, not placeholders) [checkpoint: timeline renders, no invented metrics]
- [ ] `Experience.jsx`: Amiti (Jan 2025–Present, resume bullets) + Capgemini Trainee `[dates — confirm]` — ask user or omit.
- [ ] `Education.jsx`: Thakur College BE E&TC 2023 (filled from resume).
- [ ] Do NOT invent employers/metrics; keep `[PLACEHOLDER]` only where resume is silent (Capgemini dates, Resume link).

## Phase 6 — Contact + Footer [checkpoint: email/LinkedIn from resume confirmed, resume link flagged]
- [ ] `Contact.jsx`: `Let's Build Something Together` + subtext + 4 glowing buttons (Email/LinkedIn [resume] / GitHub / Resume `[PLACEHOLDER]`).
- [ ] `Footer.jsx`: © 2026 line, GitHub icon, neural-line separator.

## Phase 7 — Command Palette Cmd+K [checkpoint: Ctrl+K, fuzzy search, all 7 commands]
- [ ] `CommandPalette.jsx`: overlay, input, list; `Ctrl/⌘+K` toggle, ESC close, focus trap-ish.
- [ ] Commands: `/about /skills /projects /contact` scroll, `/github` new tab, `/theme` toggle, free-text fuzzy over sections + project names.
- [ ] Header ⌘K button wired.

## Phase 8 — Polish, Responsive, Deploy [checkpoint: meets PRD §8 checklist]
- [ ] Reduced-motion pass, contrast pass, keyboard/a11y pass, touch-device tilt disable.
- [ ] Full breakpoint sweep (360px → 1440px).
- [ ] `npm run build` + `preview` clean; Vercel deploy; verify meta/JSON-LD.
- [ ] Confirm every `[PLACEHOLDER]` still visible; update `memory.md` status.

## Dependencies
`0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8`. Palette (7) needs sections + project data, so it comes late. Polish (8) last.

## Effort Heuristic
Phases 2, 4, 7 are heaviest (animations/tilt/palette). Phases 5–6 are light (placeholders/markup).
