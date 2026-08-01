export function SourcesFooter({ sources }: { sources: { label: string; url: string }[] }) {
  return (
    <section className="border-t border-border pt-6 text-xs text-muted-foreground">
      <span className="font-semibold">Sources: </span>
      {sources.map((s, i) => (
        <span key={i}>
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {s.label}
          </a>
          {i < sources.length - 1 && " · "}
        </span>
      ))}
    </section>
  );
}
