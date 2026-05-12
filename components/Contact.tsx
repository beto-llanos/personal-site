import { ctaBlocks, site } from "@/lib/content";

const gradientMap = {
  violet: "from-violet-500 to-violet-600",
  pink: "from-pink-500 to-pink-600",
  orange: "from-orange-400 to-orange-500",
} as const;

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            05 · Contact
          </div>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Hagamos algo{" "}
            <span className="text-gradient">memorable.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            Estoy abierto a freelance, roles full-time selectos y colaboraciones.
            Contame en qué andás y respondo en menos de 24h.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {ctaBlocks.map((c) => (
            <div
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20"
            >
              <div
                aria-hidden
                className={`absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${gradientMap[c.accent]} opacity-25 blur-3xl transition group-hover:opacity-40`}
              />
              <div className="relative text-xs font-semibold uppercase tracking-widest text-white/60">
                {c.eyebrow}
              </div>
              <h3 className="relative mt-3 text-2xl font-bold text-white">
                {c.title}
              </h3>
              <p className="relative mt-3 flex-1 text-sm text-[var(--color-ink-soft)]">
                {c.body}
              </p>
              <a
                href={c.cta.href}
                className="relative mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                {c.cta.label}
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 text-center">
          <div className="text-sm uppercase tracking-widest text-[var(--color-muted)]">
            O directo
          </div>
          <a
            href={`mailto:${site.email}`}
            className="text-3xl font-black text-gradient sm:text-5xl"
          >
            {site.email}
          </a>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <SocialLink href={site.socials.twitter} label="Twitter" />
            <SocialLink href={site.socials.github} label="GitHub" />
            <SocialLink href={site.socials.linkedin} label="LinkedIn" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {label}
    </a>
  );
}
