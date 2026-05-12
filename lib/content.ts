export const site = {
  name: "Roberto Llanos",
  title: "Roberto Llanos — Building AI products from Mexico City",
  description:
    "Building AI products, experimenting with startups, and learning in public from Mexico City.",
  url: "https://robertollanos.com",
  location: "Mexico City",
  email: "hello@robertollanos.com",
  socials: {
    twitter: "https://twitter.com/robertollanos",
    github: "https://github.com/robertollanos",
    linkedin: "https://linkedin.com/in/robertollanos",
  },
};

export const hero = {
  greeting: "Hola, soy Roberto",
  headline: "Building AI products from Mexico City",
  subhead:
    "Diseño, programo y lanzo productos con IA. Experimento con startups y comparto el proceso en público.",
  ctas: [
    { label: "Trabaja conmigo", href: "#contact", variant: "primary" as const },
    { label: "Ver proyectos", href: "#projects", variant: "ghost" as const },
  ],
  metrics: [
    { label: "Productos lanzados", value: "12+" },
    { label: "Años construyendo", value: "8" },
    { label: "Países usuarios", value: "30+" },
  ],
};

export const about = {
  title: "Sobre mí",
  body: [
    "Soy Roberto Llanos, builder mexicano enfocado en productos de IA. Combino diseño de producto, ingeniería full-stack y growth para llevar ideas de cero a usuarios reales.",
    "Trabajo con founders y equipos que quieren mover rápido sin romper lo importante. Cuando no estoy enviando código, escribo sobre lo que aprendo construyendo.",
  ],
  pills: ["AI Products", "Startups", "Full-stack", "Product Design", "Indie Hacking"],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  accent: "violet" | "pink" | "orange" | "cyan" | "lime";
};

export const projects: Project[] = [
  {
    title: "Producto IA #1",
    description:
      "SaaS de automatización con LLMs para equipos de soporte. De 0 a primeros clientes pagos en 6 semanas.",
    tags: ["Next.js", "OpenAI", "Postgres"],
    href: "#",
    accent: "violet",
  },
  {
    title: "Agente conversacional",
    description:
      "Agente vertical para inmobiliarias en LATAM. Califica leads por WhatsApp 24/7.",
    tags: ["LangChain", "Twilio", "Vercel"],
    href: "#",
    accent: "pink",
  },
  {
    title: "Dev tool open-source",
    description:
      "Librería para evaluar prompts en producción. Usada por equipos en 4 continentes.",
    tags: ["TypeScript", "OSS"],
    href: "#",
    accent: "orange",
  },
  {
    title: "Newsletter técnico",
    description:
      "Escribo sobre AI engineering y construir en público. Miles de suscriptores activos.",
    tags: ["Writing", "Community"],
    href: "#",
    accent: "cyan",
  },
  {
    title: "Consultoría AI",
    description:
      "Ayudo a startups y empresas a integrar IA en su producto sin quemar runway.",
    tags: ["Strategy", "Implementation"],
    href: "#contact",
    accent: "lime",
  },
  {
    title: "Tu próximo proyecto",
    description:
      "¿Tenés una idea y necesitás un partner técnico para llevarla a producción? Hablemos.",
    tags: ["Available"],
    href: "#contact",
    accent: "violet",
  },
];

export const skills = [
  {
    group: "AI / ML",
    items: ["OpenAI", "Anthropic", "LangChain", "RAG", "Embeddings", "Evals"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Python", "Postgres", "Redis", "tRPC", "Edge Functions"],
  },
  {
    group: "Producto & Growth",
    items: ["Product Design", "User Research", "Analytics", "SEO", "Building in Public"],
  },
];

export const experience = [
  {
    role: "Founder & Builder",
    org: "Indie / Múltiples productos",
    period: "2022 — Ahora",
    bullets: [
      "Lanzando productos de IA verticales para LATAM.",
      "Construyendo en público, monetizando con SaaS y consultoría.",
    ],
  },
  {
    role: "AI Product Engineer",
    org: "Startups Seed/Series A",
    period: "2020 — 2022",
    bullets: [
      "Liderando integraciones de LLMs en producto.",
      "De prototipo a producción con métricas claras.",
    ],
  },
  {
    role: "Full-stack Engineer",
    org: "Agencias & Startups",
    period: "2017 — 2020",
    bullets: [
      "Construyendo web apps end-to-end para clientes en LATAM y US.",
    ],
  },
];

export const ctaBlocks = [
  {
    eyebrow: "Trabajo freelance",
    title: "¿Quieres lanzar un producto IA?",
    body: "Diseño, prototipo y construyo. Disponible para proyectos por sprints o retainer mensual.",
    cta: { label: "Pedir presupuesto", href: "mailto:hello@robertollanos.com?subject=Proyecto" },
    accent: "violet" as const,
  },
  {
    eyebrow: "Empleo",
    title: "¿Buscas alguien para tu equipo?",
    body: "Abierto a roles senior/staff en empresas que mueven la frontera de la IA.",
    cta: { label: "Ver CV", href: "mailto:hello@robertollanos.com?subject=Oportunidad" },
    accent: "pink" as const,
  },
  {
    eyebrow: "Producto propio",
    title: "Sumate a la newsletter",
    body: "Una vez por semana: lo que aprendo construyendo productos de IA. Sin spam.",
    cta: { label: "Suscribirme", href: "#contact" },
    accent: "orange" as const,
  },
];
