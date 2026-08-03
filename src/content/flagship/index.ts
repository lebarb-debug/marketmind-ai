import { FlagshipComicSchema, type FlagshipComic } from "@/lib/types";
import { chinaDuvChipSelloff20260728Comic } from "./china-duv-chip-selloff-2026-07-28";
import { spacexPostIpoRealityCheck20260727Comic } from "./spacex-post-ipo-reality-check-2026-07-27";
import { aiCapexSelloff20260723Comic } from "./ai-capex-selloff-2026-07-23";
import { fedDecisionDissentSelloffRebound20260730Comic } from "./fed-decision-dissent-selloff-rebound-2026-07-30";
import { iranCeasefireOilCrash20260727Comic } from "./iran-ceasefire-oil-crash-2026-07-27";
import { appleEarningsServicesChinaMiss20260731Comic } from "./apple-earnings-services-china-miss-2026-07-31";
import { coinbaseEarningsMiss20260730Comic } from "./coinbase-earnings-miss-2026-07-30";
import { iranStrikesResumeOilSpikes20260729Comic } from "./iran-strikes-resume-oil-spikes-2026-07-29";
import { microsoftRecordMarketCapGain20260730Comic } from "./microsoft-record-market-cap-gain-2026-07-30";
import { iceAcquiresMarketaxess20260730Comic } from "./ice-acquires-marketaxess-2026-07-30";
import { amazonQ2AwsBlowout20260730Comic } from "./amazon-q2-aws-blowout-2026-07-30";
import { metaQ2EarningsMissCapex20260730Comic } from "./meta-q2-earnings-miss-capex-2026-07-30";
import { jerseyMikesIpoDebut20260730Comic } from "./jersey-mikes-ipo-debut-2026-07-30";
import { iranStrikeCalledOffOilCrash20260803Comic } from "./iran-strike-called-off-oil-crash-2026-08-03";
import { usJapanYenIntervention20260803Comic } from "./us-japan-yen-intervention-2026-08-03";
import { amazon3TrillionMarketCap20260803Comic } from "./amazon-3-trillion-market-cap-2026-08-03";
import { chevronRecordProfitWarPremium20260731Comic } from "./chevron-record-profit-war-premium-2026-07-31";
import { goldSnapsLosingStreak20260731Comic } from "./gold-snaps-losing-streak-2026-07-31";
import { alibabaQwenMaxAiModel20260803Comic } from "./alibaba-qwen-max-ai-model-2026-08-03";

const RAW_FLAGSHIP_COMICS = [
  chinaDuvChipSelloff20260728Comic,
  spacexPostIpoRealityCheck20260727Comic,
  aiCapexSelloff20260723Comic,
  fedDecisionDissentSelloffRebound20260730Comic,
  iranCeasefireOilCrash20260727Comic,
  appleEarningsServicesChinaMiss20260731Comic,
  coinbaseEarningsMiss20260730Comic,
  iranStrikesResumeOilSpikes20260729Comic,
  microsoftRecordMarketCapGain20260730Comic,
  iceAcquiresMarketaxess20260730Comic,
  amazonQ2AwsBlowout20260730Comic,
  metaQ2EarningsMissCapex20260730Comic,
  jerseyMikesIpoDebut20260730Comic,
  iranStrikeCalledOffOilCrash20260803Comic,
  usJapanYenIntervention20260803Comic,
  amazon3TrillionMarketCap20260803Comic,
  chevronRecordProfitWarPremium20260731Comic,
  goldSnapsLosingStreak20260731Comic,
  alibabaQwenMaxAiModel20260803Comic,
];

// Fails loudly at build/dev-server-start time if any hand-authored field is
// missing or malformed, instead of silently rendering a blank section.
export const FLAGSHIP_COMICS: FlagshipComic[] = RAW_FLAGSHIP_COMICS.map((comic) => {
  const result = FlagshipComicSchema.safeParse(comic);
  if (!result.success) {
    throw new Error(
      `Flagship comic "${comic.id}" failed validation:\n${result.error.issues
        .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
        .join("\n")}`
    );
  }
  return result.data;
})
  // Newest first, matching the legacy site's ordering.
  .sort((a, b) => b.date.localeCompare(a.date));

export function getFlagshipComic(slug: string): FlagshipComic | undefined {
  return FLAGSHIP_COMICS.find((c) => c.id === slug);
}
