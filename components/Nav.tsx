"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <div
          className={`flex w-full items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <a href="#top" className="group flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-sm font-black text-white">
              R
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 opacity-50 blur-md transition group-hover:opacity-80" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white sm:inline">
              {site.name}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-[var(--color-ink-soft)] transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90 md:inline-block"
            >
              Trabaja conmigo
            </a>
            <button
              aria-label="Abrir menú"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 md:hidden"
            >
              <span className="sr-only">Menú</span>
              <div className="flex flex-col gap-1">
                <span
                  className={`h-0.5 w-4 bg-white transition ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-4 bg-white transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-4 bg-white transition ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-5 md:hidden">
          <div className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-[var(--color-ink-soft)] hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-white px-3 py-2 text-center text-sm font-semibold text-black"
            >
              Trabaja conmigo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
