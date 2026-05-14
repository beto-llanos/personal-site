export const site = {
  name: "Roberto Llanos",
  title: "Roberto Llanos — Python Automation Developer",
  description:
    "Python automation developer from Mexico City. I help businesses automate repetitive tasks with web scraping, API integration, and AI — and ship indie experiments on the side.",
  url: "https://personal-site-production-b1e8.up.railway.app",
  location: "Mexico City",
  email: "rbenllanos@gmail.com",
  // Drop a square image at public/avatar.jpg (or .png) and set this to "/avatar.jpg"
  // to swap the gradient initials for a real photo.
  avatar: null as string | null,
  initials: "RL",
  socials: {
    github: "https://github.com/beto-llanos",
    linkedin: "https://linkedin.com/in/roberto-llanos-476773360/",
  },
};

export const hero = {
  status: "Building from Mexico City · available for projects · remote",
  greeting: "Hi, I'm Roberto.",
  headline: "Building things on the internet until one changes my life.",
  subhead:
    "I build automation systems that save businesses hours of manual work — from web scraping and API integrations to AI-powered workflows.",
  recentBuilds: {
    label: "Recently shipped",
    items: [
      {
        label: "Helix",
        href: "https://helix-tau-two.vercel.app",
        badge: "live",
      },
      {
        label: "BLUEPRINT",
        href: "https://blueprint-production-50d0.up.railway.app",
        badge: "live",
      },
      { label: "PulseOps", href: "https://github.com/beto-llanos/pulseops" },
      { label: "FlairGuard", href: "https://github.com/beto-llanos/flairguard" },
    ],
  },
  ctas: [
    { label: "View projects", href: "#projects", variant: "primary" as const },
    { label: "Get in touch", href: "#contact", variant: "ghost" as const },
    { label: "Resume", href: "/resume.pdf", variant: "ghost" as const },
  ],
};

export const about = {
  title: "About",
  body: [
    "I'm a Python automation developer from Mexico City. My day-to-day is helping businesses save time with web scraping, API integrations, and data pipelines that just work.",
    "On the side I'm an indie builder — shipping AI agents, hackathon prototypes, and small startup experiments. Same toolkit, different goal: figure out which weird idea sticks.",
  ],
  pills: [
    "Python automation",
    "Web scraping",
    "API integration",
    "Data pipelines",
    "AI agents",
    "Building in public",
    "Mexico City",
  ],
};

export const now = {
  eyebrow: "Currently",
  title: "What I'm building now",
  intro:
    "Snapshot of where my attention goes this week. Updated when reality changes.",
  items: [
    {
      label: "Shipping",
      text: "An AI-first prototype for the Google Cloud hackathon.",
    },
    {
      label: "Learning",
      text: "Cloud infra, agent eval loops, and faster prototyping pipelines.",
    },
    {
      label: "Documenting",
      text: "Building in public — every experiment, win, and dumb idea.",
    },
    {
      label: "Exploring",
      text: "Startup concepts at the intersection of AI + real workflows.",
    },
  ],
  lastUpdated: "May 2026",
};

import type { PreviewData } from "@/components/Preview";

export type Project = {
  title: string;
  what: string;
  why: string;
  stack: string[];
  status: "shipped" | "building" | "concept";
  href?: string;
  accent: "violet" | "pink" | "orange" | "cyan" | "lime";
  preview?: PreviewData;
  featured?: boolean;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "Helix",
    what: "Autonomous commerce agent that learns from prior product launches and cites that operational memory while pricing new ones. Built for the Google Cloud Rapid Agent Hackathon (MongoDB track).",
    why: "Wanted to find out what an agent looks like when its memory is the product — not the chat.",
    stack: ["Next.js", "FastAPI", "Gemini 2.5", "MongoDB Atlas", "Shopify"],
    status: "shipped",
    href: "https://helix-tau-two.vercel.app",
    accent: "violet",
    featured: true,
    badge: "Live demo",
    preview: {
      type: "terminal",
      title: "mission · live trace",
      lines: [
        { kind: "prompt", text: "mission start  brief=\"summer hoodie · MX market\"" },
        { kind: "kw", text: "› recall   $vectorSearch listings_memory (k=3)" },
        { kind: "out", text: "  ↳ cites: launch-08 (overpriced), launch-14 (winner)" },
        { kind: "kw", text: "› reason   price tier B · positioning streetwear-adjacent" },
        { kind: "ok", text: "✓ publish  draft product → Shopify Admin API" },
        { kind: "dim", text: "consolidate → memory upsert · 18.4s total" },
      ],
    },
  },
  {
    title: "BLUEPRINT",
    what: "Drop a GitHub username and BLUEPRINT decodes the repos into an archetype, a builder score, a signature pattern, and a real next-startup idea tied to commits you actually wrote.",
    why: "Built solo for NEXA Hack 2026 (HACKHAZARDS) — Developer Tools track. Two-month buildathon.",
    stack: ["Next.js 16", "Claude Sonnet 4.6", "next/og", "Railway"],
    status: "shipped",
    href: "https://blueprint-production-50d0.up.railway.app",
    accent: "orange",
    badge: "Live demo",
    preview: {
      type: "terminal",
      title: "blueprint · report",
      lines: [
        { kind: "prompt", text: "blueprint @beto-llanos" },
        { kind: "kw", text: "› archetype       The Tinkerer" },
        { kind: "out", text: "  builder score  78 · depth↑ consistency↑" },
        { kind: "kw", text: "› signature       systems that learn from prior runs" },
        { kind: "out", text: "  next startup   \"Helix-pattern memory layer for agents\"" },
        { kind: "ok", text: "✓ report rendered · OG card generated" },
      ],
    },
  },
  {
    title: "PulseOps",
    what: "Real-time operational intelligence that finds where a company is bleeding money — meetings, blocked PRs, unused SaaS — and ranks the top 5 leaks by dollar cost.",
    why: "Most ops dashboards show vanity numbers. I wanted one that points at recoverable spend.",
    stack: ["Python", "Streamlit", "Claude API", "Postgres"],
    status: "building",
    href: "https://github.com/beto-llanos/pulseops",
    accent: "pink",
    preview: {
      type: "terminal",
      title: "pulseops · this week",
      lines: [
        { kind: "kw", text: "Top 5 money drains — week of May 11" },
        { kind: "warn", text: "#1  Recurring 1h all-hands · 14 attendees   $4,820" },
        { kind: "warn", text: "#2  Notion + Confluence (overlap)            $1,940/mo" },
        { kind: "out", text: "#3  3 PRs stalled >5 days · ENG team         $1,610" },
        { kind: "out", text: "#4  Figma seats inactive 30d (6)             $  540/mo" },
        { kind: "ok", text: "Recoverable this month: $8,910" },
      ],
    },
  },
  {
    title: "FlairGuard",
    what: "Reddit Devvit app that gives mods one-click post removal with wiki-configured reason templates. Drop-in replacement for the classic Taskerbot — no server to host.",
    why: "Taskerbot solved this problem with PRAW years ago, then bitrot. Devvit makes it native and free to run.",
    stack: ["TypeScript", "Reddit Devvit"],
    status: "shipped",
    href: "https://github.com/beto-llanos/flairguard",
    accent: "orange",
    preview: {
      type: "code",
      title: "wiki/taskerbot · removal reasons",
      lines: [
        { kind: "kw", text: "Header: \"Sorry u/{author}, your submission was removed:\"" },
        { text: "" },
        { kind: "out", text: "'1':" },
        { kind: "dim", text: "  Flair: \"Removed (Rule 1)\"" },
        { kind: "dim", text: "  Message: |" },
        { kind: "dim", text: "    Your post breaks Rule 1. See the wiki." },
        { text: "" },
        { kind: "out", text: "spam:" },
        { kind: "ok", text: "  Flair: \"Removed (Spam)\"" },
      ],
    },
  },
  {
    title: "Excel Data Pipeline",
    what: "Python + pandas pipeline that ingests multiple Excel files, auto-detects key columns (qty, price, product), cleans the data, and exports a multi-sheet report.",
    why: "The boring automation businesses actually need — surfaced as something I'd hand a teammate, not hide.",
    stack: ["Python", "pandas", "openpyxl"],
    status: "shipped",
    href: "https://github.com/beto-llanos/excel-data-pipeline",
    accent: "cyan",
    preview: {
      type: "terminal",
      title: "main.py · run",
      lines: [
        { kind: "prompt", text: "python main.py" },
        { kind: "dim", text: "Reading data/  ·  4 files found" },
        { kind: "out", text: "Detected columns: product, qty, price" },
        { kind: "out", text: "Cleaning… dropped 18 dupes · 3 missing rows" },
        { kind: "kw", text: "Aggregating by product (n=47)" },
        { kind: "ok", text: "✓ output/report_2026-05.xlsx · 3 sheets" },
      ],
    },
  },
];

export type ClientCase = {
  title: string;
  what: string;
  outcome: string;
  stack: string[];
  accent: Project["accent"];
  preview?: PreviewData;
};

export const clientWork: ClientCase[] = [
  {
    title: "Web scraping systems",
    what: "Scrapers built for clients — handle JS rendering, anti-bot patterns, retries, and clean data export to wherever they need it.",
    outcome: "Replace hours of manual data collection per week with one cron job.",
    stack: ["Python", "Playwright", "BeautifulSoup"],
    accent: "violet",
    preview: {
      type: "terminal",
      title: "scrape.py · run",
      lines: [
        { kind: "prompt", text: "python scrape.py --site marketplace --pages 1200" },
        { kind: "dim", text: "rotating proxies… 24 healthy" },
        { kind: "out", text: "page 0742/1200  ·  rate 8.4/s  ·  retries 11" },
        { kind: "warn", text: "⚠ challenge page detected — backing off 12s" },
        { kind: "ok", text: "✓ done · 1,200 pages · 38,914 rows" },
        { kind: "kw", text: "→ exported to s3://client/raw/2026-05-12.csv" },
      ],
    },
  },
  {
    title: "API integration systems",
    what: "Small Python services that connect third-party APIs (CRMs, ads platforms, payments) so the rest of a client's stack sees one consistent interface.",
    outcome: "Stop juggling 4 dashboards. One source of truth, updated automatically.",
    stack: ["Python", "FastAPI", "Postgres"],
    accent: "pink",
    preview: {
      type: "code",
      title: "integrations/hubspot.py",
      lines: [
        { kind: "kw", text: "from fastapi import APIRouter" },
        { kind: "kw", text: "from .base import normalize_contact" },
        { text: "" },
        { kind: "kw", text: "router = APIRouter(prefix=\"/hubspot\")" },
        { text: "" },
        { kind: "out", text: "@router.post(\"/sync\")" },
        { kind: "out", text: "async def sync(payload: HubspotEvent):" },
        { kind: "dim", text: "    contact = normalize_contact(payload)" },
        { kind: "ok", text: "    await db.contacts.upsert(contact)" },
      ],
    },
  },
  {
    title: "Your repetitive task",
    what: "Got a manual workflow that eats hours every week? Let's see if it's automatable — usually it is.",
    outcome: "Free your team to do work only humans can do.",
    stack: ["Discovery call"],
    accent: "orange",
  },
];

export const notes = {
  eyebrow: "Notes",
  title: "Half-baked thoughts",
  intro:
    "Things I keep noticing while building. Not essays — more like sticky notes I'd write to past-me.",
  items: [
    {
      tag: "Lesson",
      text: "At a hackathon earlier this year, reviewers called my AI finance assistant \"just a wrapper.\" They were right. Helix — where the memory layer IS the product — is what came out of that critique.",
    },
    {
      tag: "Automation",
      text: "Most automation problems are really data problems. Get the data clean and 80% of the \"AI magic\" becomes a SQL query.",
    },
    {
      tag: "AI agents",
      text: "Agents in real workflows don't fail at reasoning. They fail at not knowing when to stop.",
    },
    {
      tag: "Shipping",
      text: "Speed comes from picking smaller problems, not working faster on huge ones.",
    },
    {
      tag: "Indie",
      text: "Building in public is mostly building anyway. The \"public\" part is a forcing function for finishing.",
    },
  ],
};

export const skills = [
  {
    group: "Automation",
    items: [
      "Python",
      "Web scraping",
      "API integration",
      "Data pipelines",
      "Workflow automation",
      "ETL",
    ],
  },
  {
    group: "AI & Tooling",
    items: ["OpenAI", "LangChain", "Agents", "Prompt eval", "RAG"],
  },
  {
    group: "Engineering",
    items: ["FastAPI", "Postgres", "SQL", "Next.js", "TypeScript", "Git"],
  },
  {
    group: "Cloud & Infra",
    items: [
      "Google Cloud",
      "Railway",
      "Docker basics",
      "Linux",
      "CI/CD",
    ],
  },
];

export const experience = [
  {
    role: "Hackathons + AI products",
    org: "Indie / building in public",
    period: "2026",
    bullets: [
      "Prototyping for Google Cloud + AI hackathons.",
      "Shipping AI agents and tooling experiments.",
      "Documenting the process publicly.",
    ],
  },
  {
    role: "First revenue experiments",
    org: "Side bets",
    period: "2025",
    bullets: [
      "Tested small products and content experiments to learn what people actually pay for.",
      "Made first dollars on the internet — confirmed it's possible.",
    ],
  },
  {
    role: "Started building online",
    org: "Self-taught",
    period: "2024",
    bullets: [
      "Began shipping small tools, automations, and side projects.",
      "Got hooked on the build-publish-learn loop.",
    ],
  },
];

export const goal = {
  eyebrow: "The long game",
  quote:
    "Build a company that solves real problems and gives me the freedom to work from anywhere.",
  attribution: "— Current obsession",
};

export const ctaBlocks = [
  {
    eyebrow: "Automation work",
    title: "Repetitive task eating your week?",
    body: "I help businesses automate scraping, integrations, and data pipelines. Available for short sprints or ongoing retainers — remote, from CDMX.",
    cta: {
      label: "Get a quote",
      href: "mailto:rbenllanos@gmail.com?subject=Automation%20project",
    },
    accent: "violet" as const,
  },
  {
    eyebrow: "Full-time roles",
    title: "Hiring a Python / automation engineer?",
    body: "Open to full-time, remote-first roles where I can ship automations and grow into AI engineering. Mexico City based.",
    cta: {
      label: "See my resume",
      href: "/resume.pdf",
    },
    accent: "pink" as const,
  },
  {
    eyebrow: "Hackathons & collabs",
    title: "Building something weird?",
    body: "Hackathons, indie experiments, AI prototypes — I'm always up for a build session. Especially anything Google Cloud or LLM-related.",
    cta: {
      label: "Team up",
      href: "mailto:rbenllanos@gmail.com?subject=Hackathon%20teammate",
    },
    accent: "orange" as const,
  },
];
