# 🚀 Master Build Prompt: Abhishek Shukla's Portfolio Website

> This is the single source of truth for this build. It merges the **content/design specification** with the **iterative build discipline** the agent must follow. Read fully before writing code. Do not skip the loop protocol in Section 8 — it governs how work proceeds, not just what gets built.

---

## 1. IDENTITY & POSITIONING

| Field | Value |
|---|---|
| **Full Name** | Abhishek Shukla |
| **Location** | Bangalore, India *(confirm — an earlier draft said Mumbai)* |
| **GitHub** | [abhishek3059](https://github.com/abhishek3059) |
| **Avatar URL** | `https://avatars.githubusercontent.com/u/91185735?v=4` |
| **Role / Title** | Full-Stack Developer & AI Systems Builder |
| **Tagline** | "I build production systems — from microservice backends to multi-agent AI platforms." |
| **LinkedIn** | `[PLACEHOLDER — ASK USER]` |
| **Email** | `[PLACEHOLDER — ASK USER]` |
| **Resume/CV Link** | `[PLACEHOLDER — ASK USER]` |

**Positioning note:** Abhishek has ~1.5–2 years of production Java Full Stack experience and is actively transitioning toward GenAI Developer roles (the Java market has been slow for him; GenAI is the deliberate pivot). The tagline above already balances this well — "Full-Stack Developer & AI Systems Builder" reads as credible, not junior. Keep that balance: lead with real production experience, let the AI/agentic projects carry the forward-looking narrative. Do not overstate shipped status on anything still in progress.

---

## 2. DESIGN VISION — "Neural Network / Deep Space" Theme

Inspiration: **https://jeevesh-portfolio-website-00.vercel.app/** — match its *level of polish* (animation, glassmorphism, 3D cards, premium feel), but do **not** copy its color scheme, fonts, or Cyberpunk/HUD/JARVIS metaphor.

### 2.1 Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--bg-void` | `#0a0a0f` | Main background |
| `--bg-surface` | `#12121a` | Card/section backgrounds |
| `--accent-primary` | `#6366F1` | Indigo — buttons, links |
| `--accent-secondary` | `#22D3EE` | Cyan — highlights, badges |
| `--accent-tertiary` | `#A78BFA` | Violet — hover states |
| `--text-primary` | `#E2E8F0` | Body text |
| `--text-muted` | `#94A3B8` | Secondary text |
| `--glow-primary` | `rgba(99, 102, 241, 0.4)` | Indigo glow |
| `--glow-secondary` | `rgba(34, 211, 238, 0.3)` | Cyan glow |
| `--success` | `#34D399` | Status indicators |

### 2.2 Typography (Google Fonts)
- **Display/Headings:** Space Grotesk (500, 600, 700)
- **Body:** Inter (300, 400, 500)
- **Mono/Terminal:** JetBrains Mono (400, 500)

### 2.3 Visual Effects (Must-Have)
1. Animated particle/star canvas background (subtle, performant, neural-network connection lines)
2. Glassmorphism cards (`backdrop-filter: blur()`, subtle border glow)
3. 3D tilt effect on project cards (mouse-hover parallax glow)
4. Gradient text on section headings (`--accent-primary` → `--accent-secondary`)
5. Scroll-triggered fade-in/slide-up via IntersectionObserver (no heavy libraries)
6. Pulsing "online" status dot in header
7. Typing animation in hero subtitle

---

## 3. TECH STACK

- **Framework:** Vite + React (`npx -y create-vite@latest ./ -- --template react`)
- **Styling:** Vanilla CSS with custom properties — no Tailwind
- **Animations:** CSS transitions/keyframes + IntersectionObserver
- **Fonts:** Google Fonts (Space Grotesk, Inter, JetBrains Mono)
- **Deployment:** Vercel (static export)
- **Structure:** Single-page app, scrollable, smooth anchor nav

---

## 4. SECTIONS

### 4.1 Header/Nav
Fixed, blurred backdrop. Left: `AS />` logo (JetBrains Mono, `/>` in `--accent-primary`). Nav: ABOUT · SKILLS · PROJECTS · EXPERIENCE · CONTACT. Right: pulsing green `ONLINE` dot. Mobile: hamburger + slide-in drawer.

### 4.2 Hero
- `Hello, I'm` (small, muted)
- `Abhishek Shukla` (large, gradient)
- Typing animation cycling: `Full-Stack Developer` / `AI Systems Builder` / `Microservices Architect` / `Open-Source Contributor`
- Body: `Based in Bangalore, India. I build production-grade systems — from Spring Boot microservices to multi-agent AI research platforms.`
- CTAs: `View My Work` (primary → Projects) · `Get In Touch` (outline → Contact)
- Stats bar (4 glowing cards): `18+` Public Repos · `6+` Languages & Frameworks · `5+` Shipped Projects · `2026` Building Since 2021 *(verify these counts against actual GitHub before shipping)*

### 4.3 Skills — "Core Stack" (2×3 glassmorphism grid)
1. **Backend & Microservices** — Java · Spring Boot · Spring Data JPA · REST APIs · Microservices Architecture · MySQL
2. **AI & Agentic Systems** — Python · LangGraph · CrewAI · Guardrails AI · Ragas · DeepEval · OpenAI APIs
3. **MCP & RAG Pipelines** — Model Context Protocol (MCP) · Multi-Repo MCP Server · RAG Artifacts · Knowledge Graphs · Context Retrieval
4. **Frontend & UI** — React · Vue.js · JavaScript · TypeScript · HTML5 · CSS3 · Vite
5. **DevOps & Tools** — Docker · Git · GitHub Actions · Vercel · VS Code Extensions
6. **Mobile & Edge AI** — Android (Kotlin/Java) · Accessibility Services · On-Device AI · Edge ML Inference

*Only include tools Abhishek has actually used in a real project — cross-check each module against Section 4.4 before finalizing. Don't list aspirational skills as core stack.*

### 4.4 Projects — "Shipped Systems" (3D-tilt grid, 2 col desktop / 1 col mobile)

| # | Project | Description | Tech | Repo | Note |
|---|---|---|---|---|---|
| 1 | deep-research.ai | Multi-Agent Research Platform with Persistent Knowledge Base | Python, LangGraph, CrewAI, Guardrails AI, Ragas, DeepEval | `abhishek3059/deep-research.ai` | Verify current status before calling it "shipped" |
| 2 | Agentic Chat QA Bot | Universal scoped RAG & contextual Q&A console for AI agent responses, cross-IDE (VS Code, Antigravity, Cursor) | TypeScript, RAG, VS Code Extension | `abhishek3059/Agentic-chat-QA-bot` | Currently mid-build (Stage 4 RAG pipeline in progress) — reflect real status, not "complete" |
| 3 | Multi-Repository MCP Server | Python MCP server for multi-repo AI workflows — shared workspaces, cross-repo search, workflow persistence, Git ops, RAG artifacts | Python, MCP, OpenAI, Git, RAG Artifacts | `abhishek3059/multi-repository-mcp` | Personal tool, not deployed as org infra — phrase accordingly |
| 4 | Ticket Reservation Microservices | Event-driven microservices for train ticket booking, real-time seat management | Java, Spring Boot, Microservices, MySQL, REST API | `abhishek3059/Ticket-Reservation-Microservices` | |
| 5 | ScrollSnap | Offline doomscrolling enforcer — Android Accessibility Services + local edge AI, zero data collection | Android, Kotlin, Accessibility Services, Edge AI | `abhishek3059/ScrollSnap` | |
| 6 | Laundry Management System | Full-stack platform, Vue.js frontend + Spring Boot backend REST APIs | Java, Spring Boot, Vue.js, TypeScript, REST API | `abhishek3059/LaundryManagementSystems` (+ `LaundryManagementVue`) | |

Each card: name, one-line description, tech badges, GitHub link, optional expand-to-read-more.

### 4.5 Experience — "Career Timeline"
Vertical timeline, glowing connector lines. Known entries (verify exact dates/bullets against resume):

- **Amiti Software Technologies** — Software Developer — on-site for client OpenLane (US B2B automotive wholesale marketplace) — `[dates — confirm]`
- **Capgemini, Mumbai** — Trainee — `[dates — confirm]`

Each entry needs 3–4 bullet achievements pulled from the actual resume once available — do not invent metrics.

### 4.6 Education
- **Thakur College of Engineering and Technology** — B.E., Electronics and Telecommunication — 2023

### 4.7 Contact — "Let's Connect"
- Heading: `Let's Build Something Together`
- Subtext: `I'm open to full-stack, backend, and AI engineering roles. Let's talk.`
- Links: 📧 Email `[PLACEHOLDER]` · 💼 LinkedIn `[PLACEHOLDER]` · 🐙 GitHub `github.com/abhishek3059` · 📄 Resume `[PLACEHOLDER]`

### 4.8 Command Palette (Ctrl+K)
Replaces a floating chatbot. Commands: `/about` `/skills` `/projects` `/contact` (scroll), `/github` (new tab), `/theme` (bonus toggle), free text → fuzzy search across sections/projects.

### 4.9 Footer
`© 2026 Abhishek Shukla. Built with React + Vite.` — GitHub icon link — subtle neural-network line separator above it.

---

## 5. SEO & META

```html
<title>Abhishek Shukla — Full-Stack Developer & AI Systems Builder | Bangalore, India</title>
<meta name="description" content="Full-Stack Developer & AI Systems Builder based in Bangalore, India. Building production systems from Spring Boot microservices to multi-agent AI research platforms with LangGraph, CrewAI, and MCP." />
<meta name="keywords" content="Abhishek Shukla, Full-Stack Developer Bangalore, AI Systems Builder, Java Spring Boot, LangGraph, CrewAI, MCP Server, React, Vue.js, Microservices, Python, TypeScript" />
```
Include JSON-LD `Person` and `WebSite` schema.

---

## 6. WHAT NOT TO COPY FROM THE REFERENCE SITE

❌ Amber-Cyan-Purple cyberpunk palette · ❌ Orbitron/Rajdhani fonts · ❌ HUD/Arc-Reactor metaphor · ❌ Terminal-style headers · ❌ JARVIS floating assistant.
✅ Match its polish level and hero→skills→projects→experience→contact structure only.

---

## 7. DELIVERABLES CHECKLIST

- [ ] Vite + React project initialized
- [ ] Fully responsive (mobile-first)
- [ ] Animated particle/neural-network canvas background
- [ ] Glassmorphism skill cards with hover effects
- [ ] 3D tilt project cards with tech tags
- [ ] Hero typing animation
- [ ] Scroll-triggered fade-in animations
- [ ] Command Palette (Ctrl+K)
- [ ] Fixed navbar, blur backdrop, active-section highlighting
- [ ] SEO meta tags + JSON-LD
- [ ] All remaining `[PLACEHOLDER]` markers clearly visible for Abhishek to fill in
- [ ] No fabricated metrics, employers, or "shipped" claims on in-progress work
- [ ] Clean, organized code, CSS custom properties throughout

---

## 8. BUILD LOOP PROTOCOL — the agent must follow this process, not just the spec above

Do not treat Sections 1–7 as a one-shot build target. Work in the following cycle, and do not mark the task done until every Section 7 checklist item is true **and verified**, not assumed.

1. **Read & Understand** — Re-read this spec plus current codebase state (if any prior iteration exists). State in 2–3 sentences what "done" looks like for *this* iteration.
2. **Plan** — Scope the smallest testable unit of work for this iteration. Flag any assumption made instead of asking, and why it's reasonable.
3. **Implement** — Build only what's scoped. Semantic HTML, accessible markup, mobile-first layout, lazy-loaded images by default.
4. **Test** — Build succeeds, no console errors, layout holds at mobile/tablet/desktop widths, links resolve, animations don't jank. Where something can't be auto-tested, state exactly how to manually verify it.
5. **Self-Review Against Section 7** — List what's still missing or weak. Do not gloss over gaps to call it done early.
6. **Refine or Continue** — If gaps remain, return to step 1 informed by what step 5 surfaced. If everything is verified true, stop and summarize what was built plus anything assumed that needs double-checking.

**Constraints:** Ask a clarifying question only if proceeding would clearly go in the wrong direction — otherwise make a reasonable, stated assumption and continue. Never fabricate resume content, metrics, or project status to fill a gap — leave it flagged instead.