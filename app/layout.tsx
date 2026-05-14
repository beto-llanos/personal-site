import type { Metadata, Viewport } from "next";
import { site, projects } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Roberto Llanos",
    "beto-llanos",
    "Python automation developer",
    "Python automation Mexico City",
    "web scraping freelance",
    "API integration",
    "data pipelines",
    "AI agents",
    "LLM engineer",
    "Google Cloud hackathon",
    "remote developer Mexico",
    "indie builder",
    "building in public",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — Python automation developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#07060c",
  width: "device-width",
  initialScale: 1,
};

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: "beto-llanos",
      url: site.url,
      email: `mailto:${site.email}`,
      jobTitle: "Python Automation Developer",
      description: site.description,
      worksFor: {
        "@type": "Organization",
        name: "Independent / freelance",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location,
        addressRegion: "CDMX",
        addressCountry: "MX",
      },
      sameAs: [site.socials.github, site.socials.linkedin],
      knowsAbout: [
        "Python automation",
        "Web scraping",
        "API integration",
        "Data pipelines",
        "ETL",
        "AI agents",
        "LLM applications",
        "OpenAI",
        "Anthropic Claude",
        "Google Cloud",
        "MongoDB Atlas Vector Search",
        "FastAPI",
        "Next.js",
      ],
      knowsLanguage: ["es", "en"],
      hasOccupation: {
        "@type": "Occupation",
        name: "Python Automation Developer",
        skills:
          "Python, FastAPI, web scraping, API integration, data pipelines, AI agents, LLMs",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      url: site.url,
      name: site.title,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "ItemList",
      name: "Projects by Roberto Llanos",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          description: p.what,
          url: p.href,
          creator: { "@id": personId },
          keywords: p.stack.join(", "),
        },
      })),
    },
    {
      "@type": "Service",
      provider: { "@id": personId },
      areaServed: { "@type": "Place", name: "Remote — Worldwide" },
      serviceType:
        "Python automation, web scraping, API integration, AI agents",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Automation services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web scraping systems",
              description:
                "Scrapers with JS rendering, anti-bot handling, retries, and clean data export.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "API integration",
              description:
                "Glue third-party APIs (CRMs, ads, payments) into one consistent interface.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data pipelines",
              description:
                "ETL and reporting pipelines with pandas, Postgres, and scheduled jobs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI agents",
              description:
                "Vertical agents that complete real tasks end-to-end (OpenAI, Claude, Gemini).",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Roberto Llanos build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python automation systems that save businesses hours of manual work — web scraping, API integrations, data pipelines, and AI-powered workflows. On the side, he ships AI agents and hackathon prototypes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Roberto Llanos available for remote work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. He's based in Mexico City and open to remote-first freelance sprints, ongoing retainers, or full-time roles.",
          },
        },
        {
          "@type": "Question",
          name: "What hackathons has Roberto Llanos shipped to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google Cloud Rapid Agent Hackathon (MongoDB track) — built Helix, an autonomous commerce agent. NEXA Hack 2026 / HACKHAZARDS Developer Tools track — built BLUEPRINT, a tool that decodes any GitHub user's repos into a startup blueprint.",
          },
        },
        {
          "@type": "Question",
          name: "What stack does Roberto Llanos work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Python and FastAPI for backends, Playwright and BeautifulSoup for web scraping, OpenAI / Anthropic / Gemini for AI work, Next.js and TypeScript on the frontend, Postgres for storage, and Google Cloud / Railway for hosting.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="me" href={site.socials.github} />
        <link rel="me" href={site.socials.linkedin} />
        <link rel="me" href={`mailto:${site.email}`} />
        <link rel="author" href={site.url} />
      </head>
      <body className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
