export const site = {
  name: "Roberto Llanos",
  title: "Roberto Llanos — Python Automation Developer",
  description:
    "Python automation developer from Mexico City. I help businesses automate repetitive tasks with web scraping, API integration, and AI — and ship indie experiments on the side.",
  url: "https://personal-site-production-b1e8.up.railway.app",
  location: "Mexico City",
  email: "rbenllanos@gmail.com",
  socials: {
    github: "https://github.com/beto-llanos",
    linkedin: "https://linkedin.com/in/roberto-llanos-476773360/",
  },
};

export const hero = {
  status: "Open to work · Mexico City · Remote",
  greeting: "Hi, I'm Roberto.",
  headline: "Building things on the internet until one changes my life.",
  subhead:
    "I build automation systems that save businesses hours of manual work — from web scraping and API integrations to AI-powered workflows.",
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

export type Project = {
  title: string;
  what: string;
  why: string;
  stack: string[];
  status: "shipped" | "building" | "concept";
  href?: string;
  accent: "violet" | "pink" | "orange" | "cyan" | "lime";
};

export const projects: Project[] = [
  {
    title: "AI KPI Debugger",
    what: "Compares advertising metrics across platforms and surfaces reporting mismatches in real time.",
    why: "Built to understand cross-source analytics discrepancies that quietly waste ad budget.",
    stack: ["Python", "SQL", "APIs"],
    status: "building",
    href: "#contact",
    accent: "violet",
  },
  {
    title: "AI Agent Experiments",
    what: "Small vertical agents that try to complete real tasks end-to-end — research, data entry, follow-ups.",
    why: "Learning what LLMs can actually do in production, outside the demo bubble.",
    stack: ["Python", "OpenAI", "LangChain"],
    status: "building",
    href: "#contact",
    accent: "pink",
  },
  {
    title: "Google Cloud Hackathon Build",
    what: "AI + cloud-native prototype in development for an upcoming Google Cloud hackathon.",
    why: "Pressure-test what I can ship in a weekend with real infra.",
    stack: ["Google Cloud", "Python", "AI"],
    status: "building",
    href: "#contact",
    accent: "orange",
  },
  {
    title: "Startup Prototype — TBA",
    what: "Early concept exploring how small teams replace internal busywork with AI.",
    why: "Validating the problem with real users before writing the second line of code.",
    stack: ["Research", "Prototype"],
    status: "concept",
    href: "#contact",
    accent: "cyan",
  },
];

export type ClientCase = {
  title: string;
  what: string;
  outcome: string;
  stack: string[];
  accent: Project["accent"];
};

export const clientWork: ClientCase[] = [
  {
    title: "Web scraping systems",
    what: "Scrapers built for clients — handle JS rendering, anti-bot patterns, retries, and clean data export to wherever they need it.",
    outcome: "Replace hours of manual data collection per week with one cron job.",
    stack: ["Python", "Playwright", "BeautifulSoup"],
    accent: "violet",
  },
  {
    title: "API integration systems",
    what: "Small Python services that connect third-party APIs (CRMs, ads platforms, payments) so the rest of a client's stack sees one consistent interface.",
    outcome: "Stop juggling 4 dashboards. One source of truth, updated automatically.",
    stack: ["Python", "FastAPI", "Postgres"],
    accent: "pink",
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
      tag: "Automation",
      text: "Most automation problems are really data problems. Get the data clean and 80% of the 'AI magic' becomes a SQL query.",
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
      text: "Building in public is mostly building anyway. The 'public' part is a forcing function for finishing.",
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
