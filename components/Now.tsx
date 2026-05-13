import { now } from "@/lib/content";

export function Now() {
  return (
    <section id="now" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              02 · {now.eyebrow}
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              {now.title}
            </h2>
            <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
              {now.intro}
            </p>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
            Updated · {now.lastUpdated}
          </span>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {now.items.map((it) => (
            <li
              key={it.label}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div
                aria-hidden
                className="absolute -left-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/30 to-pink-500/0 blur-2xl"
              />
              <span className="relative font-mono text-xs font-semibold uppercase tracking-widest text-white/60">
                {it.label}
              </span>
              <span className="relative flex-1 text-base text-[var(--color-ink-soft)]">
                {it.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
