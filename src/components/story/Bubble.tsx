export function Bubble({ who, text, alignRight }: { who: string; text: string; alignRight: boolean }) {
  return (
    <div
      className={`max-w-[85%] rounded-2xl border border-border bg-card px-4 py-2.5 text-sm shadow-sm ${
        alignRight ? "self-end text-right" : "self-start"
      }`}
    >
      <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-wide text-primary">{who}</span>
      {text}
    </div>
  );
}
