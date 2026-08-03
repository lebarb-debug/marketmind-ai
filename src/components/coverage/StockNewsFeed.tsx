import { Badge } from "@/components/ui/badge";
import type { StockNewsEntry } from "@/lib/types";

function metricDirection(metric?: string): "bull" | "bear" | null {
  if (!metric) return null;
  if (metric.includes("+")) return "bull";
  if (metric.includes("-")) return "bear";
  return null;
}

export function StockNewsFeed({ entries }: { entries: StockNewsEntry[] }) {
  return (
    <div className="space-y-4">
      {entries.map((entry, i) => {
        const direction = metricDirection(entry.metric);
        return (
          <article key={i} className="rounded-xl border border-border bg-card p-4">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">{entry.date}</span>
              {entry.metric && (
                <Badge
                  variant="outline"
                  className={
                    direction === "bull"
                      ? "border-bull text-bull"
                      : direction === "bear"
                        ? "border-bear text-bear"
                        : undefined
                  }
                >
                  {entry.metric}
                </Badge>
              )}
            </div>
            <h3 className="text-base font-semibold leading-snug text-foreground">{entry.headline}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{entry.takeaway}</p>
            <div className="mt-2.5 text-xs text-muted-foreground">
              <span className="font-semibold">Sources: </span>
              {entry.sources.map((s, j) => (
                <span key={j}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {s.label}
                  </a>
                  {j < entry.sources.length - 1 && " · "}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
