import type { TimelineEvent } from "@/lib/types";

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <section>
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Timeline</h2>
      <ol className="flex flex-col gap-0 md:flex-row md:gap-0">
        {events.map((e, i) => (
          <li key={i} className="relative flex flex-1 gap-3 pb-6 md:flex-col md:gap-2 md:pb-0 md:pr-4">
            <div className="flex flex-col items-center md:flex-row md:w-full">
              <span className="z-10 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
              {i < events.length - 1 && (
                <span className="w-0.5 flex-1 bg-border md:h-0.5 md:w-full" aria-hidden />
              )}
            </div>
            <div className="pt-0 md:pt-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{e.date}</div>
              <div className="text-sm font-semibold text-foreground">{e.label}</div>
              <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
