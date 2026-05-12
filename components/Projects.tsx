import { projects, type Project } from "@/lib/content";

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

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              02 · Work
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Productos y experimentos
            </h2>
            <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
              Una selección de lo que estoy construyendo y lo que ya está en
              producción.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            ¿Próximo proyecto juntos?
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href ?? "#"}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                aria-hidden
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${accentMap[p.accent]} blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-70`}
              />

              <div className="relative flex items-center gap-2 text-xs text-[var(--color-ink-soft)]">
                <span className={`h-2 w-2 rounded-full ${dotMap[p.accent]}`} />
                <span className="font-mono uppercase tracking-widest">
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-bold text-white">
                {p.title}
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {p.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center gap-1.5 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                Ver más
                <span aria-hidden>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
