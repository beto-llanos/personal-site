import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                01 · About
              </div>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                A bit{" "}
                <span className="text-gradient-cool">about me</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg text-[var(--color-ink-soft)]">
              {about.body.map((p, i) => (
                <p key={i} className="text-balance leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {about.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                Recognition
              </div>
              {about.recognition.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm"
                >
                  <span className="font-semibold text-white">{r.label}</span>
                  <span className="text-[var(--color-ink-soft)]">
                    · {r.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
