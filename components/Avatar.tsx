import { site } from "@/lib/content";

export function Avatar({ size = 64 }: { size?: number }) {
  const px = `${size}px`;
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full"
      style={{ width: px, height: px }}
    >
      <div
        aria-hidden
        className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 opacity-70 blur-md"
      />
      {site.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={site.avatar}
          alt={site.name}
          width={size}
          height={size}
          className="relative h-full w-full rounded-full border border-white/20 object-cover"
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-white">
          <span
            className="font-black tracking-tight"
            style={{ fontSize: `${Math.round(size * 0.42)}px` }}
          >
            {site.initials}
          </span>
        </div>
      )}
    </div>
  );
}
