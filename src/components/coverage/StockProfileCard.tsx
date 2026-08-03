import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StockProfile } from "@/lib/types";

export function StockProfileCard({ profile }: { profile: StockProfile }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="text-lg">{profile.companyName}</CardTitle>
          <Badge variant="secondary">{profile.ticker}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{profile.sector}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {profile.stockType.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-5 text-sm leading-relaxed">
        <div>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            What They Do
          </h3>
          <p>{profile.whatTheyDo}</p>
        </div>

        <div>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            What&apos;s Special
          </h3>
          <ul className="list-disc space-y-1.5 pl-5">
            {profile.whatsSpecial.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Competitors
          </h3>
          <ul className="space-y-1.5">
            {profile.competitors.map((c) => (
              <li key={c.name}>
                <span className="font-medium text-foreground">{c.name}</span>
                {" — "}
                <span className="text-muted-foreground">{c.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Key Considerations
          </h3>
          <ul className="list-disc space-y-1.5 pl-5">
            {profile.keyConsiderations.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
