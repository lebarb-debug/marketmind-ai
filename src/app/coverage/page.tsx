import { STOCK_PROFILES } from "@/content/stocks";
import { StockProfileCard } from "@/components/coverage/StockProfileCard";
import { StockNewsFeed } from "@/components/coverage/StockNewsFeed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: "Coverage — MarketMind AI",
  description: "Daily analyst-style coverage of NVIDIA, Microsoft, and Amazon.",
};

export default function CoveragePage() {
  const defaultTicker = STOCK_PROFILES[0]?.ticker;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">Coverage</p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          The stocks we track, the way an analyst would.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Ongoing coverage of three bellwether AI-infrastructure stocks — what each company does, what makes it
          worth watching, and the market-moving news behind today&apos;s move.
        </p>
      </section>

      <Tabs defaultValue={defaultTicker}>
        <TabsList>
          {STOCK_PROFILES.map((profile) => (
            <TabsTrigger key={profile.ticker} value={profile.ticker}>
              {profile.ticker}
            </TabsTrigger>
          ))}
        </TabsList>
        {STOCK_PROFILES.map((profile) => (
          <TabsContent key={profile.ticker} value={profile.ticker} className="mt-6">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
              <StockProfileCard profile={profile} />
              <div>
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Latest Updates
                </h2>
                <StockNewsFeed entries={profile.newsUpdates} />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
