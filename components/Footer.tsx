import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)]">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          <span>
            © {new Date().getFullYear()} {site.name}. Hecho con café en{" "}
            {site.location}.
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
          <a href="#top" className="hover:text-white">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
