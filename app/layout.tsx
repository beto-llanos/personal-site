import type { Metadata, Viewport } from "next";
import { site } from "@/lib/content";
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
    "Python automation",
    "web scraping",
    "API integration",
    "AI agents",
    "Mexico City",
    "Google Cloud",
    "hackathons",
    "building in public",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#07060c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Python Automation Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
    addressCountry: "MX",
  },
  sameAs: [site.socials.github, site.socials.linkedin],
  knowsAbout: [
    "Python automation",
    "Web scraping",
    "API integration",
    "Data pipelines",
    "AI agents",
    "LLM applications",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
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
