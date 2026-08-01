import type { BullBearPoint } from "@/lib/types";

function CaseColumn({
  heading,
  points,
  tone,
}: {
  heading: string;
  points: BullBearPoint[];
  tone: "bull" | "bear";
}) {
  const dot = tone === "bull" ? "bg-bull" : "bg-bear";
  const label = tone === "bull" ? "text-bull" : "text-bear";
  return (
    <div className="flex-1 rounded-xl border border-border bg-card p-4">
      <h3 className={`mb-3 text-sm font-bold uppercase tracking-wide ${label}`}>{heading}</h3>
      <ul className="flex flex-col gap-4">
        {points.map((p, i) => (
          <li key={i}>
            <div className="flex gap-2">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} aria-hidden />
              <div>
                <p className="text-sm font-semibold text-foreground">{p.point}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.support}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BullBearCase({ bullCase, bearCase }: { bullCase: BullBearPoint[]; bearCase: BullBearPoint[] }) {
  return (
    <section>
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Bull Case vs. Bear Case</h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <CaseColumn heading="Bull Case" points={bullCase} tone="bull" />
        <CaseColumn heading="Bear Case" points={bearCase} tone="bear" />
      </div>
    </section>
  );
}
