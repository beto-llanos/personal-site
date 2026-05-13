export const site = {
  name: "Roberto Llanos",
  title: "Roberto Llanos — Building things on the internet",
  description:
    "Student & indie builder from Mexico City. Shipping AI agents, automation, and startup experiments — in public.",
  url: "https://personal-site-production-b1e8.up.railway.app",
  location: "Mexico City",
  email: "rbenllanos@gmail.com",
  socials: {
    twitter: "https://twitter.com/betollanos",
    github: "https://github.com/beto-llanos",
    linkedin: "https://linkedin.com/in/beto-llanos",
  },
};

export const hero = {
  status: "Open to hackathons, collabs & weird ideas · Mexico City",
  greeting: "Hi, I'm Roberto.",
  headline: "Building things on the internet until one changes my life.",
  subhead:
    "Student & indie builder. Shipping AI agents, automation experiments, and startup MVPs — learning in public, one prototype at a time.",
  ctas: [
    { label: "View projects", href: "#projects", variant: "primary" as const },
    { label: "Get in touch", href: "#contact", variant: "ghost" as const },
    { label: "Resume", href: "/resume.pdf", variant: "ghost" as const },
  ],
};

export const about = {
  title: "About",
  body: [
    "I'm a student and indie builder obsessed with AI agents, automation, and startup experiments. I move fast, ship rough, and learn out loud.",
    "Right now I'm prototyping for cloud + AI hackathons, exploring what LLMs can actually do in production, and figuring out which weird idea sticks.",
  ],
  pills: [
    "AI agents",
    "Automation",
    "Startup experiments",
    "Hackathons",
    "Building in public",
    "Mexico City ↔ Linz",
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
    what: "A series of small vertical agents that complete real tasks end-to-end.",
    why: "Learning what LLMs can actually do in production — outside the demo bubble.",
    stack: ["TypeScript", "OpenAI", "LangChain"],
    status: "building",
    href: "#contact",
    accent: "pink",
  },
  {
    title: "Personal Productivity Tracker",
    what: "A simple system to see where my time and money actually go each week.",
    why: "I needed it for myself. Turns out a lot of people do.",
    stack: ["Next.js", "Postgres", "Tailwind"],
    status: "shipped",
    href: "#contact",
    accent: "orange",
  },
  {
    title: "Google Cloud Hackathon Build",
    what: "AI + cloud-native prototype currently in development for the upcoming Google Cloud hackathon.",
    why: "Pressure-test what I can ship in a weekend with real infra.",
    stack: ["Google Cloud", "AI"],
    status: "building",
    href: "#contact",
    accent: "cyan",
  },
  {
    title: "Startup MVP — TBA",
    what: "Early concept exploring how small teams use AI to replace internal busywork.",
    why: "Validating the problem with real users before writing the second line of code.",
    stack: ["Research", "Prototype"],
    status: "concept",
    href: "#contact",
    accent: "lime",
  },
  {
    title: "Your next weird idea",
    what: "Got a hackathon, a prototype, or a half-baked concept? Let's build it.",
    why: "Most of the best stuff I've made started as a DM.",
    stack: ["Open"],
    status: "concept",
    href: "#contact",
    accent: "violet",
  },
];

export const skills = [
  {
    group: "Tech",
    items: [
      "Python",
      "JavaScript / TypeScript",
      "React & Next.js",
      "APIs",
      "SQL",
      "Google Cloud",
    ],
  },
  {
    group: "AI & Tooling",
    items: ["OpenAI", "LangChain", "Agents", "Prompt eval", "Automation"],
  },
  {
    group: "Building",
    items: [
      "Product thinking",
      "Rapid prototyping",
      "Building in public",
      "Hackathon execution",
    ],
  },
  {
    group: "Business",
    items: [
      "Growth experiments",
      "Data analysis",
      "User research",
      "Startup validation",
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
    "Building a company that solves real problems and gives me the freedom to live between Mexico City and Linz.",
  attribution: "— Current obsession",
};

export const ctaBlocks = [
  {
    eyebrow: "Hackathons",
    title: "Need a co-builder?",
    body: "If you're entering a hackathon and need someone fast on AI, automation, or full-stack — let's team up.",
    cta: {
      label: "Team up",
      href: "mailto:rbenllanos@gmail.com?subject=Hackathon%20teammate",
    },
    accent: "violet" as const,
  },
  {
    eyebrow: "Freelance & builds",
    title: "Have an AI idea to ship?",
    body: "I help founders go from prototype to production fast. Available for short sprints or longer collabs.",
    cta: {
      label: "Start a project",
      href: "mailto:rbenllanos@gmail.com?subject=Project",
    },
    accent: "pink" as const,
  },
  {
    eyebrow: "Just say hi",
    title: "Want to chat?",
    body: "AI, startups, weird internet ideas, or coffee in CDMX — I'm always open to good conversations.",
    cta: {
      label: "Say hi",
      href: "mailto:rbenllanos@gmail.com?subject=Hi",
    },
    accent: "orange" as const,
  },
];
