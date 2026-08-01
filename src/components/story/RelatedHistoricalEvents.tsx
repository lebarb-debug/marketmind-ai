import Link from "next/link";
import type { RelatedEvent } from "@/lib/types";

export function RelatedHistoricalEvents({ events }: { events: RelatedEvent[] }) {
  return (
    <section>
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Related Historical Events</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => {
          const inner = (
            <div className="h-full rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{e.date}</div>
              <div className="mt-0.5 text-sm font-semibold text-foreground">{e.title}</div>
              <p className="mt-1 text-xs text-muted-foreground">{e.connection}</p>
            </div>
          );
          if (e.internalSlug) {
            return (
              <Link key={i} href={`/story/${e.internalSlug}`}>
                {inner}
              </Link>
            );
          }
          if (e.url) {
            return (
              <a key={i} href={e.url} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            );
          }
          return <div key={i}>{inner}</div>;
        })}
      </div>
    </section>
  );
}
