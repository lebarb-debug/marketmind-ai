import { StockProfileSchema, type StockProfile } from "@/lib/types";
import { nvdaProfile } from "./nvda";
import { msftProfile } from "./msft";
import { amznProfile } from "./amzn";

const RAW_STOCK_PROFILES = [nvdaProfile, msftProfile, amznProfile];

// Fails loudly at build/dev-server-start time if any hand-authored field is
// missing or malformed, instead of silently rendering a blank section.
export const STOCK_PROFILES: StockProfile[] = RAW_STOCK_PROFILES.map((profile) => {
  const result = StockProfileSchema.safeParse(profile);
  if (!result.success) {
    throw new Error(
      `Stock profile "${profile.ticker}" failed validation:\n${result.error.issues
        .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
        .join("\n")}`
    );
  }
  // Most recent news first.
  return {
    ...result.data,
    newsUpdates: [...result.data.newsUpdates].sort((a, b) => b.date.localeCompare(a.date)),
  };
});

export function getStockProfile(ticker: string): StockProfile | undefined {
  return STOCK_PROFILES.find((p) => p.ticker.toLowerCase() === ticker.toLowerCase());
}
