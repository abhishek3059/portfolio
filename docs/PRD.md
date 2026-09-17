# PRD — Abhishek Shukla Portfolio Website

Source: `prompt.md` — Master Build Prompt (177 lines, single source of truth). This PRD is the product truth. `architecture.md` is the technical truth.

Resume ground truth: `PERSONAL/AI_Engineer_Resume_Abhishek_Shukla (1).txt` — **private, never commit** (see `.gitignore`). Values below marked [resume] are verified; items still marked `[PLACEHOLDER]` or `[confirm]` must not be invented.

---

## 1. Problem Statement

Abhishek Shukla (Bangalore, India) has ~1.5–2 years of production Java Full Stack experience (Amiti Software Technologies, client OpenLane) and is deliberately pivoting toward GenAI Developer roles (Java market slow for him). He builds production systems — Spring Boot microservices, RAG pipelines, MCP servers, multi-agent platforms — but has no single premium web presence that:

1. Leads with real production experience (not junior, not inflated) while letting AI/agentic projects carry the forward narrative.
2. Showcases shipped systems honestly — reflecting real status (in-progress vs shipped), no fabricated "shipped" claims.
3. Feels premium (animation, polish, performance) without copying the reference site's Cyberpunk/HUD style.
4. Converts visitors (recruiters / collaborators) to contact via Email, LinkedIn, GitHub, Resume.

Without this, GitHub profile alone (`abhishek3059`, 18+ repos — verify count) undersells the work.

## 2. Vision & Positioning

Single-page, deep-space "Neural Network / Constellation" portfolio positioning Abhishek as **Full-Stack Developer & AI Systems Builder**.

Tagline: **"I build production systems — from microservice backends to multi-agent AI platforms."**

Positioning rule (prompt §1): credible, not junior. Lead with production Java/microservices reality; AI projects = forward-looking proof. Do not overstate anything still in progress.

Reference inspiration (polish only, NOT style): https://jeevesh-portfolio-website-00.vercel.app/

| Reference (Jeevesh) | This Site (Abhishek) |
|---|---|
| Cyberpunk / Amber-Cyan-Purple | Deep Space / Indigo-Cyan-Violet |
| Orbitron + Rajdhani | Space Grotesk + Inter + JetBrains Mono |
| HUD / Arc-Reactor metaphor | Neural Network / Constellation metaphor |
| Terminal-style headers | Clean geometric dividers |
| JARVIS floating assistant | Minimal Cmd+K command palette |

## 3. Target Users

- Recruiters / hiring managers (full-stack, backend, AI/GenAI engineering roles).
- Collaborators / OSS consumers.
- Mobile-first visitors + desktop evaluators.

## 4. Identity (prompt §1 + [resume] fills)

| Field | Value | Status |
|---|---|---|
| Full Name | Abhishek Shukla | confirmed |
| Location | Bangalore, India | [resume] confirmed (earlier Mumbai draft superseded) |
| Role | Full-Stack Developer & AI Systems Builder | confirmed |
| GitHub | https://github.com/abhishek3059 | confirmed |
| Avatar | `https://avatars.githubusercontent.com/u/91185735?v=4` | confirmed |
| LinkedIn | `https://linkedin.com/in/abhishekiscoding` | [resume] user-approved for display |
| Email | `abhishekshukla3059@gmail.com` | [resume] user-approved for display |
| Phone | +91 7498479638 | [resume] user-approved for display (user: "take it from resume") |
| Resume/CV | `https://drive.google.com/file/d/14pBkKy4T6u4Ss5oTQDZVT21Mf06YgY8e/view?usp=drive_link` | user-provided 2026-09-17 (direct Drive link; replaces password-gated short link) |
| Experience | 1.7+ years production (Jan 2025–Present Amiti) | [resume] |

Hero typing roles: `Full-Stack Developer` / `AI Systems Builder` / `Microservices Architect` / `Open-Source Contributor`.

Hero subtext: `Based in Bangalore, India. I build production-grade systems — from Spring Boot microservices to multi-agent AI research platforms.`

Stats bar (verified via `gh` 2026-09-17): `18+` Public Repos ✓ (18 public + 1 private = 19 total) · `6+` Languages & Frameworks · `5+` Shipped Projects (keep honest status labels per §5.4) · `2026` Building Since 2021 (college repos `thecorrectposture`, `TSFbankingsys` suggest early start — keep, low risk).

## 5. Functional Requirements

### 5.1 Header / Nav (FR-01)
Fixed, blurred backdrop. Left `AS />` (JetBrains Mono, `/>` accent). Nav ABOUT · SKILLS · PROJECTS · EXPERIENCE · CONTACT. Pulsing green `ONLINE` dot. ⌘K button. Mobile hamburger + slide-in drawer.

### 5.2 Hero (FR-02)
Full viewport, centered: `Hello, I'm` → `Abhishek Shukla` (gradient) → typing line → body → `View My Work` (#projects) + `Get In Touch` (#contact) → 4 stat cards.

### 5.3 Skills — "Core Stack" (FR-03)
2×3 glass grid. Prompt's 6 modules stand, but **cross-check rule**: only list tools used in a real project (prompt §4.3). Resume adds verified tools to consider folding in: Kafka, Redis, Oracle SQL, AWS (EC2/S3/IAM/Lambda), Docker, Kubernetes, JBoss EAP, Grafana/Honeycomb, Angular/RxJS, Node.js, LangChain, TDD/JUnit. Do NOT list aspirational items as core.

1. Backend & Microservices — Java, Spring Boot, Spring Data JPA/Hibernate, REST APIs, Microservices, MySQL (+ Oracle SQL [resume])
2. AI & Agentic Systems — Python, LangGraph, CrewAI, Guardrails AI, Ragas, DeepEval, OpenAI APIs (+ LangChain, agentic memory [resume])
3. MCP & RAG Pipelines — MCP, Multi-Repo MCP Server, RAG Artifacts, Knowledge Graphs, Context Retrieval
4. Frontend & UI — React, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Vite (+ Angular, SDUI [resume])
5. DevOps & Tools — Docker, Git, GitHub Actions, Vercel, VS Code Extensions (+ K8s, AWS, Azure Pipelines, JBoss [resume])
6. Mobile & Edge AI — Android (Kotlin/Java), Accessibility Services, On-Device AI, Edge ML Inference

### 5.4 Projects — "Shipped Systems" (FR-04)
5 cards only (Laundry removed per user 2026-09-17 — novice project, out of scope). Layout: QA Assistant full-width featured showcase + 4 large cards in 2-col grid (1-col mobile). Every card has brand glyph panel, status pill, full description (no clamp), tech badges, metric callout, GitHub + extra links. 3D tilt retained on all cards.

| # | Project | gh-verified facts | Card status label |
|---|---|---|---|
| 1 | deep-research.ai — Multi-Agent Research Platform with Persistent Knowledge Base (Python, LangGraph, CrewAI, Guardrails AI, Ragas, DeepEval) | ★0, Python, pushed 2026-09-16 (active). No GitHub releases | "In active development" — do NOT call shipped |
| 2 | QA Assistant (repo: Agentic-chat-QA-bot) — Universal scoped RAG Q&A console, cross-IDE (VS Code, Antigravity, Cursor, Windsurf) | ★0, pushed 2026-09-12. **LIVE v0.1.0** (verified on Marketplace: `agentic-developer.agentic-chat-qa-bot`, free) | Card links Marketplace (primary) + GitHub |
| 3 | Multi-Repository MCP Server — Python MCP server for multi-repo AI workflows (Python, MCP, OpenAI, Git, RAG Artifacts) | ★1 ✓, Python, pushed 2026-06-09. Full description on repo | Personal tool, not org infra — phrase accordingly |
| 4 | Ticket Reservation Microservices — Event-driven train ticket booking, real-time seats (Java, Spring Boot, Microservices, MySQL, REST API) | ★1 ✓, Java, pushed 2026-06-05. No repo description — use prompt text | as listed |
| 5 | ScrollSnap — Offline doomscrolling enforcer (Android Accessibility + Edge AI, zero data) | ★0, pushed 2026-05-23, repo contains only README.md | "Early stage" — honest label |

### 5.5 Experience — "Career Timeline" (FR-05)
Vertical glowing timeline. Real entries from resume (do not invent metrics — use resume bullets verbatim or trimmed):

- **Amiti Software Technologies** — Software Developer, Full Stack & AI Engineering — Jan 2025–Present — Bangalore (client: OpenLane, USD 1B+ US automotive wholesale marketplace). Bullets: MCP server (−50% context-switch); RAG pipeline 15+ services (−30% tokens); 15+ Spring REST APIs 50K+ daily (−40% latency, −15% Oracle CPU); Kafka+Redis 99.9% availability; SDUI Vue/React/Angular (−25% iteration); Grafana/Honeycomb + Azure/GitHub Actions → EC2/Docker/K8s/JBoss (−30% release overhead).
- **Capgemini, Mumbai** — Software Trainee — Jul 2024–Oct 2024 (user-confirmed 2026-09-17; no achievement bullets provided — card shows role/dates only, nothing invented).

### 5.6 Education (FR-06)
- **Thakur College of Engineering and Technology** — B.E., Electronics and Telecommunication — Mumbai — Graduated 2023. [resume] filled, no placeholder needed.

### 5.7 Contact — "Let's Connect" (FR-07)
Heading `Let's Build Something Together`, subtext `I'm open to full-stack, backend, and AI engineering roles. Let's talk.` Buttons: Email `abhishekshukla3059@gmail.com` ✓, Phone +91 7498479638 ✓, LinkedIn `linkedin.com/in/abhishekiscoding` ✓, GitHub confirmed, Resume Drive link ✓ (user-provided).

### 5.8 Command Palette Ctrl+K (FR-08)
`/about /skills /projects /contact` scroll; `/github` new tab; `/theme` toggle; fuzzy search sections + projects.

### 5.9 Footer (FR-09)
`© 2026 Abhishek Shukla. Built with React + Vite.` + GitHub icon + neural-line separator.

## 6. Non-Functional Requirements

- Responsive mobile-first; performant canvas (capped, rAF, reduced-motion); CSS-only animation + IntersectionObserver; premium bar (no template look); SEO (Bangalore title/desc/keywords + JSON-LD Person/WebSite + OG); a11y (focus, ESC, keyboard, contrast); Vercel static.

## 7. SEO Spec (Bangalore)

```html
<title>Abhishek Shukla — Full-Stack Developer & AI Systems Builder | Bangalore, India</title>
<meta name="description" content="Full-Stack Developer & AI Systems Builder based in Bangalore, India. Building production systems from Spring Boot microservices to multi-agent AI research platforms with LangGraph, CrewAI, and MCP." />
<meta name="keywords" content="Abhishek Shukla, Full-Stack Developer Bangalore, AI Systems Builder, Java Spring Boot, LangGraph, CrewAI, MCP Server, React, Vue.js, Microservices, Python, TypeScript" />
```

## 8. Acceptance Criteria (prompt §7)

- [ ] Vite + React initialized, runs, builds
- [ ] Fully responsive (mobile-first)
- [ ] Particle canvas bg
- [ ] Glass skill cards + hover
- [ ] 3D-tilt project cards + tags
- [ ] Typing animation
- [ ] Scroll fade-ins
- [ ] Cmd palette Ctrl+K
- [ ] Fixed navbar blur + active highlight
- [ ] SEO meta + JSON-LD
- [ ] Remaining `[PLACEHOLDER]`s visible
- [ ] No fabricated metrics/employers/"shipped" claims on in-progress work
- [ ] Clean code, CSS vars throughout

## 9. Out of Scope (v1)

Blog, backend, CMS, auth, i18n, light-theme polish beyond toggle, test suite.
