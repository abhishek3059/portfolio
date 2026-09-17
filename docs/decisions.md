# Decisions — Architecture Decision Records

Lightweight ADRs. Status: Accepted unless noted.

---

## ADR-01: Vite + React SPA (no Next.js / SSR)
- Context: Need fast static portfolio, Vercel deploy, single scroll page.
- Decision: Vite + React template, static export.
- Consequences: Simple build, no SSR complexity; anchors instead of router.

## ADR-02: SCSS + BEM with CSS custom properties (no Tailwind)
- Context: Prompt mandates custom theme; user approved SCSS + BEM instead of plain CSS.
- Decision: Dart `sass` + one `.scss` per component, strict BEM (`block__element--modifier`); design tokens live as CSS custom properties in `styles/_tokens.scss` so the `/theme` toggle works at runtime; SCSS vars/mixins only for compile-time helpers (breakpoints, glass, glow).
- Consequences: Nested BEM must compile flat and readable; no hardcoded hex outside `_tokens.scss`.

## ADR-03: IntersectionObserver for reveals (no framer-motion)
- Context: Scroll fade/slide needed without heavy deps.
- Decision: `useReveal` hook + CSS classes.
- Consequences: Performant, must handle `prefers-reduced-motion`.

## ADR-04: Raw canvas particles (no three.js)
- Context: Neural-net background must stay performant.
- Decision: 2D canvas, capped particles, rAF, resize/visibility guards.
- Consequences: Lightweight; keep density low on mobile.

## ADR-05: Command Palette instead of floating chatbot
- Context: Reference has JARVIS assistant; prompt explicitly forbids copying it.
- Decision: Minimal Cmd+K/Ctrl+K palette with slash commands + fuzzy search + `/theme` toggle.
- Consequences: Distinct interaction, less code than a chatbot, keyboard-first.

## ADR-06: Deep Space / Constellation metaphor (not Cyberpunk/HUD)
- Context: Must match reference polish but be visually distinct.
- Decision: Indigo-Cyan-Violet + Space Grotesk/Inter/JetBrains Mono + geometric dividers.
- Consequences: All styling reviews check against reference-copy risk.

## ADR-07: Placeholders stay explicit; resume fills where verified (no invention)
- Context: Resume txt now grounds experience, education, email, LinkedIn. Capgemini dates, resume URL, project statuses still unknown/conflicted.
- Decision: Fill only resume-verified values; keep `[PLACEHOLDER — ASK USER]` / `[confirm]` where silent or conflicted (QA Bot shipped vs Stage 4, FinPilot in/out, Capgemini dates).
- Consequences: Honest site; open items tracked in `memory.md` §2.

## ADR-08: 3D tilt on project cards only (max ~8deg, no tilt on touch)
- Context: Premium feel without motion sickness / perf cost.
- Decision: Tilt + glow on `ProjectCard` hover, disabled for touch + reduced-motion.
- Consequences: Contained complexity, accessible fallback.

## ADR-09: PERSONAL/ private folder is gitignored (never committed)
- Context: Resume source lives in `PERSONAL/`; user explicitly forbids pushing it to GitHub/version control.
- Decision: Root `.gitignore` excludes `**/PERSONAL/` (+ `PERSONAL/` + `docs/PERSONAL/`); `PERSONAL/README_DO_NOT_COMMIT.txt` warns agents; resume data enters `src/data/` only as hand-copied verified values, never by import.
- Consequences: Private data stays local; builds stay reproducible without the folder.

## ADR-10: Build Loop Protocol (§8 prompt) governs every iteration
- Context: Master Build Prompt adds a process contract, not just a spec.
- Decision: Every work cycle runs Read → Plan → Implement → Test → Self-Review → Refine; done = §7 checklist verified true, assumptions stated.
- Consequences: No premature "done"; clarifying questions only when proceeding would clearly go wrong.
