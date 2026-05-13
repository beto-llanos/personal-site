import { projects, type Project } from "@/lib/content";
import { Preview } from "@/components/Preview";

const accentMap: Record<Project["accent"], string> = {
  violet: "from-violet-500/40 to-violet-500/0",
  pink: "from-pink-500/40 to-pink-500/0",
  orange: "from-orange-400/40 to-orange-400/0",
  cyan: "from-cyan-400/40 to-cyan-400/0",
  lime: "from-lime-400/40 to-lime-400/0",
};

const dotMap: Record<Project["accent"], string> = {
  violet: "bg-violet-500",
  pink: "bg-pink-500",
  orange: "bg-orange-400",
  cyan: "bg-cyan-400",
  lime: "bg-lime-400",
};

const statusLabel: Record<Project["status"], string> = {
  shipped: "Shipped",
  building: "Building",
  concept: "Concept",
};

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              03 · Projects
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              What I build for myself
            </h2>
            <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
              Personal experiments, hackathon prototypes, and AI projects I
              ship to learn.{" "}
              <a
                href="https://github.com/beto-llanos"
                target="_blank"
                rel="noreferrer noopener"
                className="text-white/80 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/60"
              >
                Most experiments are public. The rest are still messy.
              </a>
            </p>
          </div>
          <a
            href="https://github.com/beto-llanos"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            See on GitHub
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const isExternal = p.href?.startsWith("http") ?? false;
            return (
            <a
              key={p.title}
              href={p.href ?? "#"}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer noopener" : undefined}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06] ${
                p.featured
                  ? "border-white/20 hover:border-white/40 lg:col-span-2 lg:p-8"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {p.featured && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-60"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.08) 40%, transparent 70%)",
                  }}
                />
              )}
              <div
                aria-hidden
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${accentMap[p.accent]} blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                  p.featured ? "opacity-100 h-72 w-72" : "opacity-70"
                }`}
              />

              <div className="relative flex items-center justify-between text-xs text-[var(--color-ink-soft)]">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${dotMap[p.accent]}`} />
                  <span className="font-mono uppercase tracking-widest">
                    {p.featured ? "Featured" : `#${String(i + 1).padStart(2, "0")}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {p.badge && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-400/15 px-2 py-0.5 font-mono uppercase tracking-widest text-[10px] text-lime-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-400" />
                      </span>
                      {p.badge}
                    </span>
                  )}
                  <span className="rounded-full border border-white/10 bg-black/30 px-2 py-0.5 font-mono uppercase tracking-widest text-[10px] text-white/60">
                    {statusLabel[p.status]}
                  </span>
                </div>
              </div>

              <h3
                className={`relative mt-6 font-bold text-white ${
                  p.featured ? "text-3xl sm:text-4xl" : "text-xl"
                }`}
              >
                {p.title}
              </h3>

              <p
                className={`relative mt-3 leading-relaxed text-[var(--color-ink-soft)] ${
                  p.featured ? "max-w-2xl text-base" : "text-sm"
                }`}
              >
                {p.what}
              </p>

              <p className="relative mt-3 border-l-2 border-white/10 pl-3 text-sm italic leading-relaxed text-white/50">
                {p.why}
              </p>

              {p.preview && (
                <div className="relative mt-5">
                  <Preview data={p.preview} />
                </div>
              )}

              <div className="relative mt-auto pt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {isExternal && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/60 transition group-hover:text-white">
                    Open
                    <span aria-hidden>↗</span>
                  </span>
                )}
              </div>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
