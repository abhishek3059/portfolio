# AGENTS.md — Entry File for AI Agents (portfolio/)

> Root handover file. Windows path is case-insensitive: `AGENTS.md` = `agents.md` = `Agent.md`.

## 1. Read Order (mandatory before coding)
1. `prompt.md` — Master Build Prompt, single source of truth (177 lines). Includes §8 Build Loop Protocol — follow it as process, not just spec.
2. `docs/PRD.md` — vision, positioning (Java → GenAI pivot), requirements, resume-grounded truth, acceptance checklist.
3. `docs/architecture.md` — stack, design tokens, file structure, component design, privacy §6.
4. `docs/PHASES.md` — build order Phase 0→8. Work in order.
5. `docs/memory.md` — who Abhishek is, resume fills, open items §2, session log. Update it when done.
6. `docs/decisions.md` — ADRs incl. honesty rule, PERSONAL/ privacy, Build Loop Protocol.
7. `docs/build.md` — scaffold/run/deploy commands + conventions + privacy rule.
8. `PERSONAL/AI_Engineer_Resume_Abhishek_Shukla (1).txt` — private resume, LOCAL ONLY, never commit. Ground experience/education/skills from it; never invent.

## 2. Operating Rules
- Build Loop Protocol (§8 prompt): Read → Plan → Implement → Test → Self-Review vs §7 → Refine. Done = every §7 item verified true, assumptions stated. Ask only if proceeding would clearly go wrong.
- Build exactly what `prompt.md` + `PRD.md` specify. Premium bar: glassmorphism, glows, gradient headings, particle canvas, 3D-tilt, typing, reveals, ONLINE pulse, Cmd+K palette. A Bootstrap-template look = failure.
- Do NOT copy the reference site (`jeevesh-portfolio-website-00.vercel.app`) colors, fonts, HUD metaphor, or JARVIS bot. Differentiation table in PRD §2 is binding.
- SCSS + BEM only (one `.scss` per component, tokens in `src/styles/_tokens.scss`). No Tailwind. No framer-motion / three.js. IntersectionObserver + raw canvas.
- Honesty: Bangalore location; Amiti Jan 2025–Present bullets from resume only; Capgemini dates unconfirmed; QA Bot shipped-vs-midbuild conflict + FinPilot in/out + deep-research status = ask-or-flag, never fabricate. Keep `[PLACEHOLDER — ASK USER]` / `[confirm]` where silent.
- Privacy (binding): `PERSONAL/` is gitignored (`**/PERSONAL/`). Never commit it, never import it into `src/`. Email/LinkedIn/phone from resume are user-approved for display (2026-09-17).
- Single-page anchors: `#about #skills #projects #experience #education #contact` with smooth scroll + active highlight.
- SEO: Bangalore title/description/keywords + JSON-LD Person + WebSite in `index.html`.

## 3. Workflow
- Follow `PHASES.md` checkpoints; verify each (`npm run dev/build`, responsive sweep, reduced-motion + keyboard pass, `git status` clean of PERSONAL/).
- Keep `src/data/*.js` as the only content source (profile, skills, projects, experience, education); components stay presentational.
- After each session, append to `docs/memory.md` §4 Session Log and tick off open items as filled.
- Before deploy, confirm `docs/build.md` §6–§7 checklist and PRD §8 acceptance list.
