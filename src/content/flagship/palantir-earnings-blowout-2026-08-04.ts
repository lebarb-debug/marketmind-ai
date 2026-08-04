// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh, fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "palantir-earnings-blowout-2026-08-04",
  "date": "2026-08-04",
  "title": "Palantir Grew Revenue 93% and the Stock Jumped 15%",
  "hook": "Palantir's CEO called it an 'otherworldly' quarter — revenue up 93% year-over-year, U.S. commercial business up 149%, and a raised full-year outlook sent the stock surging, the opposite reaction to the 'beat but sell off anyway' pattern this site has covered all summer.",
  "category": "Earnings & Big Tech",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "Palantir builds data-analytics and AI software, historically for government and defense clients, that has expanded rapidly into commercial enterprise customers over the past two years. Its U.S. commercial segment growth rate has become one of the most closely watched numbers on Wall Street as a bellwether for how fast large companies are actually adopting AI software in production, not just experimenting with it.",
    "On Tuesday, August 4, 2026, Palantir reported second-quarter results that beat estimates by a wide margin on both revenue and earnings, with U.S. commercial revenue growth accelerating to 149% year-over-year. The company raised its full-year 2026 revenue guidance, and the stock jumped as much as 15-20% in trading — a sharp contrast to several other 'beat but the stock fell anyway' reactions this site has covered from Apple, Meta, and others this earnings season.",
  ],
  "panels": [
    {
      "scene": "Palantir's Q2 earnings call — Tuesday, August 4",
      "chars": [
        { "pose": "celebrate", "label": "PALANTIR", "side": "left" },
        { "pose": "shocked", "label": "ANALYST", "side": "right" },
      ],
      "caption": "EPS: $0.41 vs. $0.35 expected. Revenue: $1.94 billion vs. $1.81 billion expected — up 93% year-over-year.",
      "dialogue": [
        { "who": "PALANTIR", "text": "CEO Alex Karp called this an 'otherworldly' quarter." },
        { "who": "ANALYST", "text": "93% revenue growth would back that up." },
      ],
    },
    {
      "scene": "The number underneath the headline",
      "chars": [
        { "pose": "celebrate", "label": "US COMMERCIAL", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "U.S. commercial revenue growth accelerated to 149% year-over-year — the segment Wall Street watches most closely.",
      "dialogue": [
        { "who": "US COMMERCIAL", "text": "This is the number that tells you whether companies are actually deploying AI, not just testing it." },
        { "who": "TRADER", "text": "149% says they are." },
      ],
    },
    {
      "scene": "Guidance raised",
      "chars": [{ "pose": "celebrate", "label": "PALANTIR", "side": "left" }],
      "caption": "Palantir raised full-year 2026 U.S. commercial revenue guidance to 'in excess of' $3.42 billion, up from prior guidance of $3.22 billion.",
      "dialogue": [
        { "who": "PALANTIR", "text": "And we think next quarter looks even better than this one." },
      ],
    },
    {
      "scene": "The reaction — a contrast to this summer's usual pattern",
      "chars": [
        { "pose": "celebrate", "label": "PALANTIR STOCK", "side": "left" },
        { "pose": "pointing", "label": "NARRATOR", "side": "right" },
      ],
      "caption": "Shares jumped as much as 15-20% — unlike several other 'beat but still sold off' reactions covered on this site this earnings season.",
      "dialogue": [
        { "who": "NARRATOR", "text": "A beat protects a stock when the guidance backs it up. This time, it did." },
      ],
    },
  ],
  "vocab": [
    { "term": "U.S. commercial revenue", "def": "Revenue from private-sector (non-government) customers within the United States — for a company like Palantir, historically known for government contracts, this segment's growth rate signals how well it's expanding beyond its original customer base." },
    { "term": "Year-over-year (YoY) growth", "def": "Comparing a metric to the same period one year earlier — a common way to measure growth while controlling for seasonal patterns." },
    { "term": "Forward guidance", "def": "A company's own forecast of future results, given to investors alongside its actual reported results. Raised guidance signals management's confidence that recent momentum will continue." },
    { "term": "Beat", "def": "When a company's reported results exceed analyst estimates — on its own, a beat doesn't guarantee a stock will rise, since investors also weigh guidance and other details (see this site's other earnings comics for beats that still led to selloffs)." },
  ],
  "sources": [
    { "label": "Palantir stock jumps 15% after a blowout Q2 — Finbold", "url": "https://finbold.com/palantir-stock-jumps-15-after-a-blowout-q2/" },
    { "label": "Palantir Shares Surge Pre-Bell After Q2 Adjusted Earnings, Sales Top Estimates, FY26 Revenue Guidance Raised — MarketScreener", "url": "https://www.marketscreener.com/news/palantir-shares-surge-pre-bell-after-q2-adjusted-earnings-sales-top-estimates-fy26-revenue-guidanc-ce7f50ded98cf32d" },
    { "label": "Palantir (PLTR) earnings Q2 2026 — CNBC", "url": "https://www.cnbc.com/2026/08/03/palantir-pltr-earnings-q2-2026.html" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Palantir reported Q2 2026 EPS of $0.41 versus $0.35 expected, and revenue of $1.94 billion versus $1.81 billion expected — revenue grew 93% year-over-year.", "source": "CNBC / MarketScreener", "url": "https://www.cnbc.com/2026/08/03/palantir-pltr-earnings-q2-2026.html" },
      { "text": "U.S. commercial segment revenue grew 149% year-over-year, one of the fastest growth rates the company has posted.", "source": "Finbold", "url": "https://finbold.com/palantir-stock-jumps-15-after-a-blowout-q2/" },
      { "text": "Palantir raised its full-year 2026 U.S. commercial revenue guidance to 'in excess of' $3.42 billion, up from prior guidance of $3.22 billion, and issued better-than-expected guidance for the current quarter.", "source": "MarketScreener", "url": "https://www.marketscreener.com/news/palantir-shares-surge-pre-bell-after-q2-adjusted-earnings-sales-top-estimates-fy26-revenue-guidanc-ce7f50ded98cf32d" },
      { "text": "Palantir shares jumped as much as 15-20% in trading on August 4, 2026, with CEO Alex Karp describing the quarter as 'otherworldly.'", "source": "Finbold", "url": "https://finbold.com/palantir-stock-jumps-15-after-a-blowout-q2/" },
    ],
    "analysis": [
      "This comic is a deliberate counterpoint to the 'beat but stock falls anyway' pattern this site has tracked all summer with Apple, Meta, and others: Palantir beat on both revenue and EPS AND raised guidance AND the stock rose sharply. The common thread across all these stories, in either direction, is that guidance — not just the quarter that already happened — is what determines the market's reaction.",
      "The 149% U.S. commercial growth figure is the single most important number here: it's the clearest evidence yet that large private-sector companies are moving from piloting AI software to actually deploying it at scale, which is a different and more durable signal than enthusiasm or spending announcements alone.",
      "Raising full-year guidance mid-year, rather than just beating a quarter that already happened, is a stronger signal of management confidence — it's a forward-looking commitment that Wall Street can hold the company accountable to in future quarters, not just a backward-looking result.",
      "Palantir's shift from a primarily government-contract business to a fast-growing commercial one is itself a multi-year story worth watching — this quarter is strong evidence that transition is working, but a single quarter doesn't yet prove the trend is permanent.",
    ],
  },
  "clubRelevance": {
    "pmc": "A genuinely useful case study in reading forward guidance alongside a beat — pairs directly with this site's other earnings comics where a beat wasn't enough to protect the stock, for a real comparative discussion.",
    "bta": "A 93% revenue growth quarter with raised guidance is exactly the kind of result equity research desks race to re-model same-day — a clean, current example of a genuinely bullish earnings reaction.",
    "wfa": "A strong contrast example for the 'walk me through an earnings reaction' interview question — this time, explaining why a beat DID protect the stock, unlike several other examples covered on this site.",
  },
} as const;

export const palantirEarningsBlowout20260804Comic = {
  ...existingFields,

  professionalSummary:
    "Palantir reported Q2 2026 EPS of $0.41 (vs. $0.35 expected) and revenue of $1.94 billion (vs. $1.81 billion expected), up 93% year-over-year. U.S. commercial segment revenue growth accelerated to 149% year-over-year, and the company raised full-year 2026 U.S. commercial revenue guidance to 'in excess of' $3.42 billion, up from $3.22 billion, alongside better-than-expected current-quarter guidance. Shares jumped as much as 15-20% on August 4, 2026, a sharp contrast to several 'beat but sold off' reactions this site has covered from other companies this earnings season.",
  thirtySecondSummary:
    "Palantir crushed Wall Street's estimates, grew revenue 93%, saw its U.S. commercial business grow 149%, and raised its full-year outlook. Unlike several other companies this earnings season that beat estimates and still got punished, Palantir's stock jumped as much as 15-20% because the guidance backed up the beat.",
  eli5Summary:
    "Palantir, a company that makes data and AI software, had a really good quarter — it made way more money than expected, and its business selling to regular companies (not just the government) grew incredibly fast. The company also said it expects to keep doing well for the rest of the year. Because everything lined up — good results AND a confident outlook — investors were excited and the stock price jumped a lot, which is different from some other companies this summer that had good results but still saw their stock price fall.",
  timeline: [
    {
      date: "August 4, 2026",
      label: "Palantir reports Q2 2026 earnings",
      detail: "EPS and revenue both beat estimates by a wide margin; revenue grows 93% year-over-year.",
    },
    {
      date: "August 4, 2026",
      label: "U.S. commercial growth accelerates",
      detail: "U.S. commercial segment revenue grows 149% year-over-year.",
    },
    {
      date: "August 4, 2026",
      label: "Full-year guidance raised",
      detail: "Palantir raises 2026 U.S. commercial revenue guidance to over $3.42 billion, up from $3.22 billion.",
    },
    {
      date: "August 4, 2026",
      label: "Shares jump 15-20%",
      detail: "Stock surges on the combination of a beat, accelerating growth, and raised guidance.",
    },
  ],
  bullCase: [
    {
      point: "149% U.S. commercial growth is strong evidence of real, at-scale AI software adoption, not just pilot programs.",
      support: "This growth rate accelerated rather than decelerated, suggesting demand is compounding rather than being a one-time surge from early adopters.",
    },
    {
      point: "Raised full-year guidance is a stronger signal than a single quarter's beat.",
      support: "Management is publicly committing to a higher bar for the rest of the year, giving investors a forward-looking benchmark to hold the company accountable to.",
    },
    {
      point: "The stock's strong reaction shows the market rewards guidance-backed beats, a distinct and more durable pattern than a beat alone.",
      support: "Unlike several 'beat but the stock still fell' examples this earnings season, Palantir's combination of a beat AND raised guidance produced a genuinely bullish reaction.",
    },
  ],
  bearCase: [
    {
      point: "A single standout quarter doesn't yet prove the government-to-commercial transition is permanent.",
      support: "Palantir's growth has historically been lumpy around large contract wins; one exceptional quarter needs follow-through over several more to confirm a durable trend.",
    },
    {
      point: "A 15-20% single-day stock move can overshoot, especially after already-elevated expectations.",
      support: "Palantir's stock had already run up ahead of earnings on high expectations (described in preview coverage as having '8 straight beats'), meaning some of this move may reflect relief as much as new information.",
    },
    {
      point: "Valuation remains a real consideration even after a strong quarter.",
      support: "Fast-growing software companies often trade at high multiples that price in years of future growth — a single beat doesn't eliminate the risk of a valuation reset if growth decelerates in a future quarter.",
    },
  ],
  longTermView:
    "The key long-term signal from this quarter is the acceleration, not just the level, of U.S. commercial growth — 149% year-over-year suggests Palantir's push beyond its government-contract roots is gaining momentum rather than plateauing. Investors should watch whether this growth rate holds or decelerates over the next two to three quarters, since a single standout quarter is encouraging but not yet proof of a multi-year trend. The raised guidance gives a concrete, forward-looking benchmark: if Palantir delivers on or beats that $3.42 billion commercial revenue target, the bull case strengthens considerably; if it falls short, today's stock reaction may prove to have overshot.",
  quiz: [
    {
      question: "How much did Palantir's revenue grow year-over-year in Q2 2026?",
      options: ["9%", "33%", "93%", "149%"],
      correctIndex: 2,
      explanation: "Palantir's total revenue grew 93% year-over-year to $1.94 billion, beating the $1.81 billion analysts expected.",
    },
    {
      question: "What was Palantir's U.S. commercial segment growth rate?",
      options: ["15%", "50%", "93%", "149%"],
      correctIndex: 3,
      explanation: "U.S. commercial revenue growth accelerated to 149% year-over-year, the fastest-growing part of the business.",
    },
    {
      question: "How did Palantir's stock react to the earnings report, and how does that compare to other companies covered on this site this earnings season?",
      options: [
        "It fell, like Apple and Meta",
        "It was flat",
        "It jumped 15-20%, unlike several beat-but-sold-off reactions covered elsewhere on this site",
        "Trading was halted",
      ],
      correctIndex: 2,
      explanation: "Shares jumped as much as 15-20%, a notably different reaction than the 'beat but stock falls anyway' pattern seen with Apple, Meta, and others this earnings season.",
    },
    {
      question: "What did Palantir do to its full-year 2026 guidance?",
      options: [
        "Lowered it",
        "Kept it unchanged",
        "Raised U.S. commercial revenue guidance to over $3.42 billion, up from $3.22 billion",
        "Withdrew guidance entirely",
      ],
      correctIndex: 2,
      explanation: "Palantir raised its full-year 2026 U.S. commercial revenue guidance to 'in excess of' $3.42 billion, up from the prior $3.22 billion.",
    },
  ],
  discussionQuestions: [
    "Why might a beat-and-raise quarter produce such a different stock reaction than the beat-but-fell pattern seen elsewhere this earnings season?",
    "Is 149% commercial growth likely to be sustainable, or does very fast growth tend to decelerate as a company's revenue base gets larger? What would you want to see in the next few quarters?",
    "How should investors weigh a company's own raised guidance — is it a reliable signal, or should it be discounted since management has an incentive to sound optimistic?",
    "If you were pitching Palantir in a portfolio review, would this quarter change your position size? What would you want to confirm first?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Apple Beat Every Estimate. Its Stock Still Crashed 7%.",
      date: "2026-07-31",
      connection: "The direct counterpoint to this story — same 'earnings beat' setup, opposite stock reaction, because Palantir's beat came with accelerating growth and raised guidance while Apple's came with segment misses and a weaker outlook.",
      internalSlug: "apple-earnings-services-china-miss-2026-07-31",
    },
    {
      title: "Amazon's Cloud Business Just Had Its Best Quarter in Five Years",
      date: "2026-07-30",
      connection: "Another beat that held up under scrutiny and drove a genuine rally — part of the same pattern this earnings season where guidance-backed beats get rewarded and unclear ones don't.",
      internalSlug: "amazon-q2-aws-blowout-2026-07-30",
    },
  ],
} as unknown as FlagshipComic;
