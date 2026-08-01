export function LongTermView({ text }: { text: string }) {
  return (
    <section>
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Long-Term View</h2>
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="text-sm leading-relaxed text-foreground">{text}</p>
      </div>
    </section>
  );
}
