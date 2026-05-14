import { faq } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-4xl px-5">
        <div className="mb-12">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            08 · {faq.eyebrow}
          </div>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            {faq.title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-ink-soft)]">
            {faq.intro}
          </p>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <details
              key={item.q}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition open:border-white/20 open:bg-white/[0.05] hover:border-white/15"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-white sm:px-6 sm:py-5 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-sm transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:px-6 sm:pb-6">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
