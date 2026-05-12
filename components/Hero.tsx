import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center pt-32 pb-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[var(--color-ink-soft)] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Disponible para nuevos proyectos · {site.location}
          </div>

          <h1 className="animate-fadeup text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            <span className="block text-white/90">{hero.greeting}.</span>
            <span className="block text-gradient">{hero.headline}.</span>
          </h1>

          <p
            className="max-w-2xl text-balance text-lg text-[var(--color-ink-soft)] sm:text-xl animate-fadeup"
            style={{ animationDelay: "0.15s" }}
          >
            {hero.subhead}
          </p>

          <div
            className="flex flex-wrap items-center gap-3 animate-fadeup"
            style={{ animationDelay: "0.3s" }}
          >
            {hero.ctas.map((c) =>
              c.variant === "primary" ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.6)] transition hover:scale-[1.02]"
                >
                  <span className="relative">{c.label}</span>
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              ) : (
                <a
                  key={c.label}
                  href={c.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  {c.label}
                </a>
              )
            )}
          </div>

          <div
            className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-3 animate-fadeup"
            style={{ animationDelay: "0.45s" }}
          >
            {hero.metrics.map((m) => (
              <div
                key={m.label}
                className="glass relative overflow-hidden rounded-2xl p-4"
              >
                <div className="text-2xl font-black text-white sm:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-[var(--color-ink-soft)] sm:text-sm">
                  {m.label}
                </div>
                <div className="shine pointer-events-none absolute inset-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[var(--color-muted)] md:block">
        <div className="flex flex-col items-center gap-2 text-xs">
          <span>scroll</span>
          <div className="h-8 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
