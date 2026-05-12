export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[var(--color-violet)] opacity-30 blur-[120px] animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--color-pink)] opacity-25 blur-[140px] animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[440px] w-[440px] rounded-full bg-[var(--color-orange)] opacity-20 blur-[140px] animate-blob"
        style={{ animationDelay: "8s" }}
      />
      <div
        className="absolute top-2/3 right-1/4 h-[360px] w-[360px] rounded-full bg-[var(--color-cyan)] opacity-15 blur-[120px] animate-blob"
        style={{ animationDelay: "12s" }}
      />
    </div>
  );
}
