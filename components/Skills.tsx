import { skills } from "@/lib/content";

const accents = [
  "from-violet-500/30 via-violet-500/10",
  "from-pink-500/30 via-pink-500/10",
  "from-orange-400/30 via-orange-400/10",
  "from-cyan-400/30 via-cyan-400/10",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            04 · Stack
          </div>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            What I work with
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <div
              key={s.group}
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b ${accents[i % accents.length]} to-transparent p-6`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {s.group}
              </h3>
              <ul className="mt-5 space-y-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)]"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
