import { clientWork } from "@/lib/content";
import { Preview } from "@/components/Preview";

const accentMap = {
  violet: "from-violet-500/30 to-transparent",
  pink: "from-pink-500/30 to-transparent",
  orange: "from-orange-400/30 to-transparent",
  cyan: "from-cyan-400/30 to-transparent",
  lime: "from-lime-400/30 to-transparent",
} as const;

const dotMap = {
  violet: "bg-violet-500",
  pink: "bg-pink-500",
  orange: "bg-orange-400",
  cyan: "bg-cyan-400",
  lime: "bg-lime-400",
} as const;

export function ClientWork() {
  return (
    <section id="client-work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              04 · Client work
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              What I build for clients
            </h2>
            <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
              These are systems I get paid to build. They&apos;re not on
              GitHub — they live inside someone&apos;s business. But here&apos;s
              the shape of the work.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            Hire me
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="space-y-3">
          {clientWork.map((c, i) => {
            const isCta = !c.preview;
            const Wrapper = isCta ? "a" : "div";
            const wrapperProps = isCta
              ? { href: "#contact" as const }
              : {};
            return (
              <Wrapper
                key={c.title}
                {...wrapperProps}
                className={`group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.06] sm:p-7 ${
                  isCta ? "cursor-pointer" : ""
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-gradient-to-r ${accentMap[c.accent]} blur-3xl`}
                />
                <div className="relative grid gap-5 sm:grid-cols-[1fr_2fr] sm:items-start sm:gap-10">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[var(--color-ink-soft)]">
                      <span className={`h-2 w-2 rounded-full ${dotMap[c.accent]}`} />
                      <span className="font-mono uppercase tracking-widest">
                        C·{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                      {c.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                      {c.what}
                    </p>
                    <p className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
                      <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                        Outcome
                      </span>
                      {c.outcome}
                    </p>
                    {c.preview && <Preview data={c.preview} />}
                    {isCta && (
                      <span className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-white/80 transition group-hover:text-white">
                        Start the conversation
                        <span aria-hidden>→</span>
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
