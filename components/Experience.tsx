import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            04 · Timeline
          </div>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Lo que vine haciendo
          </h2>
        </div>

        <ol className="relative space-y-10 border-l border-white/10 pl-8">
          {experience.map((e, i) => (
            <li key={e.role + i} className="relative">
              <span className="absolute -left-[37px] top-2 flex h-4 w-4 items-center justify-center">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-gradient-to-br from-violet-500 to-pink-500 opacity-40" />
                <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-bold text-white">{e.role}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  {e.period}
                </span>
              </div>
              <div className="mt-1 text-sm text-[var(--color-ink-soft)]">
                {e.org}
              </div>
              <ul className="mt-4 space-y-2">
                {e.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm text-[var(--color-ink-soft)]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
