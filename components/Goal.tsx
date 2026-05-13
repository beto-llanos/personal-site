import { goal } from "@/lib/content";

export function Goal() {
  return (
    <section id="goal" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-pink-500/10 to-orange-400/10 p-10 sm:p-16">
          <div
            aria-hidden
            className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-violet-500/40 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-pink-500/40 blur-3xl"
          />

          <div className="relative">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {goal.eyebrow}
            </div>
            <blockquote className="mt-6 text-balance text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              <span aria-hidden className="text-gradient">
                &ldquo;
              </span>
              {goal.quote}
              <span aria-hidden className="text-gradient">
                &rdquo;
              </span>
            </blockquote>
            <div className="mt-6 font-mono text-xs uppercase tracking-widest text-white/50">
              {goal.attribution}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
