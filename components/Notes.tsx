import { notes } from "@/lib/content";

export function Notes() {
  return (
    <section id="notes" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            05 · {notes.eyebrow}
          </div>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            {notes.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
            {notes.intro}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {notes.items.map((n) => (
            <li
              key={n.text}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 transition hover:border-white/20"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                #{n.tag.toLowerCase().replace(/\s+/g, "-")}
              </div>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                {n.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
