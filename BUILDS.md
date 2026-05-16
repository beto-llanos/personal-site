# Roberto Llanos — Build Log

> Living inventory of everything I've shipped. Public builds, client work, hackathon entries, and historical credentials.
> Last updated: 2026-05-14
> Append new entries at the top of each section.

---

## How to read this

- **Status**: `shipped` (live or done) · `building` (in progress) · `archived` (deprecated or paused)
- **Type**: `product` (mine, possibly with a public face) · `internal` (tool I built for myself) · `client` (paid work for someone else) · `hackathon`
- **Signal**: why it matters — what it proves I can do, or what it could become

---

## 1. Products & personal builds

### Helix
- Status: **shipped** · Live demo: <https://helix-tau-two.vercel.app>
- Type: hackathon · product
- Repo: <https://github.com/beto-llanos/helix>
- Stack: Next.js · FastAPI · Gemini 2.5 · MongoDB Atlas Vector Search · Shopify Admin API
- What: autonomous commerce agent. Takes a product brief, recalls similar prior launches via `$vectorSearch`, reasons through pricing/positioning while citing those launches, publishes a real draft product to Shopify, consolidates the new launch back into operational memory.
- Why: wanted to find out what an agent looks like when its memory is the product — not the chat.
- Built for: **Google Cloud Rapid Agent Hackathon — MongoDB track**.
- Signal: most ambitious build to date. Demonstrates AI agents in production, vector search, multi-tool orchestration, streaming UI.

### BLUEPRINT
- Status: **shipped** · Live demo: <https://blueprint-production-50d0.up.railway.app>
- Type: hackathon · product
- Repo: <https://github.com/beto-llanos/blueprint>
- Stack: Next.js 16 · Claude Sonnet 4.6 (structured outputs + prompt caching) · next/og · framer-motion · Railway
- What: drop any GitHub username → returns an archetype, builder score, signature pattern, a real next-startup idea tied to commits the user actually wrote, plus two alternative paths. Each report has a unique Open Graph share card.
- Why: was tired of seeing portfolios that don't tell a story. Let the repos tell it.
- Built for: **NEXA Hack 2026 / HACKHAZARDS — Developer Tools track**. Two-month buildathon.
- v2 roadmap (before June 15): Neo4j founder-match · Archive · Team Scan.
- Signal: full editorial product, structured-output AI, share-mechanics built in.

### FLOW AI RADAR
- Status: **shipped** · in daily use
- Type: internal tool
- Stack: Python · Telegram Bot API · scraping
- What: bot that scrapes hackathons, potential clients on Reddit + GitHub, cloud problem reports, and cloud tools, and DMs me the relevant ones on Telegram.
- Why: opportunities don't come to me by accident anymore. The bot centralizes a flow that used to take hours of browsing.
- Signal: this IS the multiplier behind the recent shipping cadence. Could become a SaaS — "Opportunity radar for indie builders / freelancers".

### Workana AutoPitch
- Status: **shipped** · in daily use
- Type: internal tool (sales engine)
- Stack: Python · Claude API · webapp
- What: continuously scans Workana for projects that match my profile, drafts the full proposal with Claude, and pre-fills the other required fields (skills, price, time estimate, attachments).
- Why: writing proposals one-by-one was the bottleneck holding back lead conversion.
- Signal: explains how I climbed to Top 2 MX on Workana. Could be productized for other freelancers.

### PulseOps
- Status: **building**
- Type: product
- Repo: <https://github.com/beto-llanos/pulseops>
- Stack: Python · Streamlit · Claude API · Postgres
- What: 4 detection engines (meeting cost, dev-flow blockers, SaaS utilization, repetition) ranking a company's top 5 money drains this week by recoverable spend.
- Why: most ops dashboards show vanity numbers. Wanted one that points at recoverable dollars.
- Signal: the "operational intelligence" angle. Could be a real SaaS.

### FlairGuard
- Status: **shipped** · in the Devvit App Directory
- Type: product · open source
- Repo: <https://github.com/beto-llanos/flairguard>
- Stack: TypeScript · Reddit Devvit
- What: one-click post removal for Reddit mods with wiki-configured reason templates. Drop-in replacement for the classic Taskerbot — no server to host.
- Why: Taskerbot solved this with PRAW years ago, then bitrot. Devvit makes it native and free to run.
- Signal: real open-source contribution, real users (subreddits installing it).

### Personal landing site
- Status: **shipped** · Live: <https://personal-site-production-b1e8.up.railway.app>
- Type: product · marketing
- Repo: <https://github.com/beto-llanos/personal-site>
- Stack: Next.js 15 · Tailwind 4 · TypeScript · Railway
- What: this site. Indie-builder portfolio with terminal previews per project, JSON-LD `@graph`, FAQ, OG image.
- Signal: builder taste + technical SEO baseline.

---

## 2. Hackathon entries

### Google Cloud Rapid Agent Hackathon — MongoDB track
- Year: 2026
- Project: **Helix** (above)
- Status: shipped + submitted

### NEXA Hack 2026 / HACKHAZARDS — Developer Tools track
- Year: 2026
- Project: **BLUEPRINT** (above)
- Status: shipped, two-month buildathon entry

### Talent Land México 2026 — Banco Azteca track
- Year: 2026
- Project: **aldia** — AI finance assistant
- Repo: <https://github.com/beto-llanos/aldia>
- Result: top 15. Reviewers (correctly) called it "just a wrapper" — that critique became the design principle behind Helix.
- Signal: real hackathon experience + the most valuable lesson of the year so far.

---

## 3. Client work

### Mercado Libre Analytics
- Type: client (paid)
- Stack: Python · scraping · dashboards · analytics
- What: a near-SaaS analytics suite over Mercado Libre data. One of the most developed pieces of client work.
- Signal: the deepest single client build. Scrapes + dashboards + analysis stack.

### Mercado Libre → JumpSeller exporter
- Type: client (paid)
- Stack: Python · Mercado Libre API · JumpSeller API
- What: cross-platform catalog sync between Mercado Libre and JumpSeller.
- Signal: API-to-API integration work.

### Bsale ticket automation
- Type: client (paid)
- Stack: Python · Bsale platform
- What: ticket processing automation on top of the Bsale platform.
- Signal: enterprise SaaS integration.

### Scraper de licores
- Type: client (paid)
- Stack: Python · scraping
- What: catalog scraper for a liquor / spirits client.
- Signal: production scraping with a clean delivery.

### Excel automation pipeline
- Status: shipped
- Type: client (paid) · also in portfolio
- Repo: <https://github.com/beto-llanos/excel-data-pipeline>
- Stack: Python · pandas · openpyxl
- What: ingests multiple Excel files, auto-detects key columns (qty, price, product), cleans, exports a multi-sheet report.
- Signal: the "boring automation businesses need" piece — done well, showable.

### Power BI dashboards (early)
- Status: archived
- Type: client (paid)
- Stack: Microsoft Power BI
- What: three early dashboards. First paid freelance work.
- Signal: trajectory marker — proves the journey from "Power BI dashboards" to "autonomous AI agents" in ~2 years.

---

## 4. Recognition

- **Workana — Top 2 freelance programmer in Mexico** · **Top 60 globally** (programming category). Currently. Active profile, real ranking.
- **Talent Land 2026** — top 15 in Banco Azteca track.
- **Hackathons shipped in 2026**: 2 entries with live demos (Helix, BLUEPRINT) and 1 with a finished prototype (aldia).

---

## 5. Template for a new entry

Copy this when something new ships:

```
### <Name>
- Status: shipped / building / archived
- Type: product / internal / client / hackathon
- Stack:
- What:
- Why:
- Signal: <why it matters, what it proves, what it could become>
- Repo / Live:
```

---

## 6. Capture rule

If I shipped or moved something forward today, add it to this file before closing the laptop. Two-minute rule — if it took longer than two minutes to log, the entry is too long.
