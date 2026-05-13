export type PreviewLineKind =
  | "prompt"
  | "out"
  | "ok"
  | "warn"
  | "err"
  | "dim"
  | "kw";

export type PreviewLine = { kind?: PreviewLineKind; text: string };

export type PreviewData =
  | { type: "terminal"; title?: string; lines: PreviewLine[] }
  | { type: "code"; title: string; lines: PreviewLine[] };

const kindClass: Record<PreviewLineKind, string> = {
  prompt: "text-violet-300",
  out: "text-white/80",
  ok: "text-lime-300",
  warn: "text-orange-300",
  err: "text-pink-300",
  dim: "text-white/35",
  kw: "text-cyan-300",
};

export function Preview({ data }: { data: PreviewData }) {
  const isTerminal = data.type === "terminal";
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/60 font-mono text-[11px] leading-relaxed shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 truncate text-[10px] text-white/40">
          {data.title ?? (isTerminal ? "~/work" : "main.py")}
        </span>
      </div>
      <pre className="m-0 max-h-[180px] overflow-hidden px-4 py-3 text-[11px]">
        {data.lines.map((l, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap break-words ${l.kind ? kindClass[l.kind] : "text-white/70"}`}
          >
            {isTerminal && l.kind === "prompt" ? (
              <>
                <span className="text-white/40">$</span>{" "}
                <span>{l.text}</span>
              </>
            ) : !isTerminal ? (
              <>
                <span className="mr-3 inline-block w-5 text-right text-white/25">
                  {String(i + 1).padStart(2, " ")}
                </span>
                <span>{l.text}</span>
              </>
            ) : (
              l.text
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
