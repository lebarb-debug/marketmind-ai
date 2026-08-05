// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh, fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "amd-earnings-guidance-disappoints-2026-08-05",
  "date": "2026-08-05",
  "title": "AMD's Data Center Revenue Grew 107%. The Stock Still Fell 9%.",
  "hook": "AMD posted record revenue and beat on profit and guidance — but a gross margin miss and a sales outlook that didn't clear sky-high expectations sent shares down as much as 9%, even as the company announced major new deals with Anthropic and Microsoft.",
  "category": "Earnings & Big Tech",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "AMD has spent 2025 and 2026 positioning itself as the most credible alternative to NVIDIA in AI data center chips (covered elsewhere on this site's NVIDIA coverage), and the stock had already run up significantly heading into this earnings report on the strength of that narrative. When expectations run that high, even genuinely strong results can disappoint if they don't clear an unusually high bar.",
    "On Tuesday, August 4, 2026, AMD reported record quarterly revenue of $11.54 billion, with Data Center revenue up 107% year-over-year to $6.7 billion. But gross margin came in at 54%, below the 56% Wall Street expected, driven by near-term costs from ramping its new Helios AI infrastructure platform. Despite third-quarter guidance of roughly $13 billion that itself beat consensus, shares fell as much as 9% by Wednesday premarket — investors had wanted an even larger guidance increase given how far AI infrastructure spending has been running.",
  ],
  "panels": [
    {
      "scene": "AMD's Q2 earnings call — Tuesday, August 4",
      "chars": [
        { "pose": "celebrate", "label": "AMD", "side": "left" },
        { "pose": "neutral", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Revenue: $11.54 billion, a record. Data Center revenue: $6.7 billion, up 107% year-over-year.",
      "dialogue": [
        { "who": "AMD", "text": "Record revenue, and Data Center more than doubled." },
        { "who": "ANALYST", "text": "Strong headline. Let's check the margins." },
      ],
    },
    {
      "scene": "The margin miss",
      "chars": [
        { "pose": "shocked", "label": "ANALYST", "side": "left" },
        { "pose": "talking", "label": "AMD", "side": "right" },
      ],
      "caption": "Gross margin: 54% vs. 56% expected — near-term costs from ramping the new Helios AI infrastructure platform.",
      "dialogue": [
        { "who": "ANALYST", "text": "Margins missed. That's the number the stock is going to react to." },
        { "who": "AMD", "text": "It's a ramp cost, tied to launching new infrastructure — not a demand problem." },
      ],
    },
    {
      "scene": "The strategic news, easy to miss under the margin headline",
      "chars": [
        { "pose": "pointing", "label": "AMD", "side": "left" },
        { "pose": "celebrate", "label": "PARTNER", "side": "right" },
      ],
      "caption": "Anthropic agreed to deploy up to 2 gigawatts of AMD's new MI450 GPUs. Microsoft expanded its Azure partnership to deploy AMD's Helios systems and 6th-gen EPYC CPUs at scale.",
      "dialogue": [
        { "who": "PARTNER", "text": "Two major AI infrastructure commitments, same quarter." },
        { "who": "AMD", "text": "That's real, multi-year demand — not just a good quarter." },
      ],
    },
    {
      "scene": "Wednesday premarket",
      "chars": [{ "pose": "panic", "label": "AMD STOCK", "side": "left" }],
      "caption": "Shares fell as much as 9% in premarket trading Wednesday, despite guidance for Q3 revenue of about $13 billion — itself ahead of consensus.",
      "dialogue": [
        { "who": "AMD STOCK", "text": "I beat on almost everything and I'm still down 9%. That's how high the bar had gotten." },
      ],
    },
  ],
  "vocab": [
    { "term": "Gross margin", "def": "The percentage of revenue left after subtracting the direct cost of producing goods or services — a closely watched profitability measure, especially for hardware companies ramping new, more expensive product lines." },
    { "term": "Guidance", "def": "A company's own forecast for future results. A guidance number can beat Wall Street's consensus estimate and still disappoint investors if the market had informally priced in an even higher number." },
    { "term": "Rackscale solution", "def": "A pre-integrated bundle of servers, networking, and cooling designed to be deployed as a complete data center unit, rather than assembled piece by piece — AMD's Helios platform is an example." },
    { "term": "Expectations reset", "def": "When a stock has run up sharply on optimism, even objectively strong results can trigger a selloff if they don't clear the elevated bar investors had implicitly built into the price." },
  ],
  "sources": [
    { "label": "AMD Sales Outlook Disappoints Investors After AI-Fueled Rally — Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-08-04/amd-sales-outlook-disappoints-investors-after-ai-fueled-rally" },
    { "label": "AMD Beat on Revenue, Profit, and Guidance — So Why Did the Stock Drop 7%? — TradingKey", "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262074451-amd-q2-2026-earnings-double-beat-stock-falls-tradingkey" },
    { "label": "AMD earnings report Q2 2026 — CNBC", "url": "https://www.cnbc.com/2026/08/04/amd-earnings-report-q2-2026.html" },
  ],
  "deepDive": {
    "facts": [
      { "text": "AMD reported Q2 2026 revenue of $11.54 billion, a record, with GAAP diluted EPS of $1.38 and non-GAAP diluted EPS of $1.66.", "source": "CNBC", "url": "https://www.cnbc.com/2026/08/04/amd-earnings-report-q2-2026.html" },
      { "text": "Data Center segment revenue was $6.7 billion, up 107% year-over-year, with operating income of $2.1 billion versus an operating loss of $0.2 billion a year earlier.", "source": "CNBC", "url": "https://www.cnbc.com/2026/08/04/amd-earnings-report-q2-2026.html" },
      { "text": "Gross margin came in at 54%, below the 56% consensus, attributed to near-term costs from ramping the Helios AI infrastructure platform. Third-quarter revenue guidance was set at roughly $13 billion, plus or minus $300 million.", "source": "TradingKey", "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262074451-amd-q2-2026-earnings-double-beat-stock-falls-tradingkey" },
      { "text": "AMD announced Anthropic would deploy up to 2 gigawatts of AMD Instinct MI450 Series GPUs, and an expanded Microsoft collaboration to deploy AMD Helios and 6th-gen EPYC CPUs at scale across Azure. Shares fell as much as 8-9% in after-hours and Wednesday premarket trading.", "source": "Bloomberg / TradingKey", "url": "https://www.bloomberg.com/news/articles/2026-08-04/amd-sales-outlook-disappoints-investors-after-ai-fueled-rally" },
    ],
    "analysis": [
      "This is a textbook 'expectations reset' — nearly every headline number beat estimates, including guidance, and the stock still fell sharply. The lesson isn't that the quarter was bad; it's that AMD's stock had already priced in a very optimistic scenario heading into earnings, leaving little room for anything short of an exceptional guidance raise.",
      "The gross margin miss is a more nuanced signal than a simple demand problem: it reflects the cost of ramping new infrastructure (Helios) rather than weaker sales. Investors and analysts have to distinguish between a temporary, ramp-related margin dip and a structural profitability problem — this appears to be the former, based on the company's own explanation.",
      "The Anthropic and Microsoft deals are arguably the most important forward-looking data points in this report, and both risk being overshadowed by the stock's reaction to the margin miss. A 2-gigawatt GPU commitment and an expanded Azure partnership represent real, multi-year demand signals that matter more for AMD's long-term trajectory than one quarter's margin percentage.",
      "This comic pairs naturally with this site's NVIDIA coverage: AMD's 107% Data Center growth is direct evidence the AI infrastructure buildout is genuinely competitive, not a one-company story — even if AMD's stock reaction this quarter shows the market is now demanding near-perfect execution from every AI infrastructure player, not just NVIDIA.",
    ],
  },
  "clubRelevance": {
    "pmc": "A clean example of how a stock's prior run-up shapes its earnings reaction — the same results delivered after a flat year might have produced a very different market response.",
    "bta": "A genuinely nuanced earnings reaction (beat on revenue/profit/guidance, miss on margin) that trading desks and equity research had to quickly parse same-day — good material for practicing that kind of fast read.",
    "wfa": "A strong interview example for explaining why 'beat estimates' doesn't automatically mean 'stock goes up' — expectations, not just results, drive the reaction.",
  },
} as const;

export const amdEarningsGuidanceDisappoints20260805Comic = {
  ...existingFields,

  professionalSummary:
    "AMD reported Q2 2026 revenue of $11.54 billion (a record), with Data Center revenue up 107% year-over-year to $6.7 billion and operating income of $2.1 billion versus a loss a year earlier. However, gross margin of 54% missed the 56% consensus, attributed to near-term Helios AI infrastructure ramp costs. Q3 guidance of roughly $13 billion beat consensus, and AMD announced major new deals — Anthropic committing to up to 2 gigawatts of MI450 GPUs, and an expanded Microsoft Azure partnership — but shares still fell as much as 9% by Wednesday premarket, as investors had priced in an even larger guidance increase.",
  thirtySecondSummary:
    "AMD beat on revenue, profit, and even guidance, and announced major new AI infrastructure deals with Anthropic and Microsoft — but a gross margin miss and guidance that didn't clear sky-high expectations sent the stock down as much as 9% anyway.",
  eli5Summary:
    "AMD, a company that makes computer chips, had a really strong quarter — it made more money than ever and its AI-related chip business more than doubled in size. It also announced big new deals with two major AI companies. But investors had expected the results to be even better, and one number (how much profit AMD keeps per dollar of sales) came in a little lower than hoped. So even though the quarter was genuinely good, the stock price still dropped, because expectations had gotten very high beforehand.",
  timeline: [
    {
      date: "August 4, 2026",
      label: "AMD reports Q2 2026 earnings",
      detail: "Record revenue of $11.54 billion; Data Center revenue up 107% year-over-year.",
    },
    {
      date: "August 4, 2026",
      label: "Margin miss and new deals disclosed",
      detail: "Gross margin of 54% misses the 56% consensus; Anthropic and Microsoft deals announced.",
    },
    {
      date: "August 5, 2026",
      label: "Shares fall as much as 9% premarket",
      detail: "Despite Q3 guidance beating consensus, the stock drops on the margin miss and expectations that weren't fully met.",
    },
  ],
  bullCase: [
    {
      point: "107% Data Center growth and a swing from an operating loss to a $2.1 billion profit show the segment has reached real scale.",
      support: "This isn't early-stage growth off a tiny base — Data Center is now a large, profitable segment growing faster than the overall AI infrastructure market.",
    },
    {
      point: "The Anthropic and Microsoft deals represent durable, multi-year demand, not one-quarter results.",
      support: "A 2-gigawatt GPU commitment and an expanded hyperscaler partnership are the kind of long-term signals that matter more than a single quarter's margin percentage.",
    },
    {
      point: "The margin miss has a specific, temporary explanation (ramp costs) rather than reflecting weaker demand.",
      support: "If Helios ramp costs are truly transitory, margins should recover in coming quarters as the new platform scales, without needing demand to improve further.",
    },
  ],
  bearCase: [
    {
      point: "A stock that falls 9% on a beat-and-raise quarter suggests the market's bar for AI infrastructure companies has become very high.",
      support: "If even strong execution isn't enough to satisfy investors, that raises the risk of continued volatility around every future earnings report, regardless of underlying business quality.",
    },
    {
      point: "Margin pressure during a major infrastructure ramp is a real cost, whatever the explanation.",
      support: "Ramp costs are real dollars either way; if the Helios ramp takes longer than expected to reach target margins, that pressure could persist longer than management's framing suggests.",
    },
    {
      point: "AMD's stock had already run up significantly before this report, meaning some of today's decline may reflect a broader valuation reset, not just this quarter's specific numbers.",
      support: "When a stock prices in near-perfect execution, any result short of exceptional — even a genuine beat — can trigger a larger-than-usual pullback.",
    },
  ],
  longTermView:
    "The most important long-term signals in this report are the Anthropic and Microsoft commitments, not the quarter's gross margin percentage — multi-year infrastructure deals of this scale are hard to fake and represent real conviction from major AI players in AMD's roadmap. Investors should watch whether gross margin recovers toward the 56%+ range in the next one to two quarters as Helios ramp costs normalize; if it does, this quarter's selloff will likely look like an expectations-driven overreaction. If margin pressure persists, it would suggest a more structural cost challenge in scaling AMD's newest AI infrastructure platform.",
  quiz: [
    {
      question: "How much did AMD's Data Center revenue grow year-over-year?",
      options: ["17%", "54%", "107%", "247%"],
      correctIndex: 2,
      explanation: "Data Center revenue grew 107% year-over-year to $6.7 billion.",
    },
    {
      question: "What specifically missed analyst expectations in AMD's report?",
      options: ["Total revenue", "Gross margin (54% vs. 56% expected)", "Q3 guidance", "Data Center growth"],
      correctIndex: 1,
      explanation: "Gross margin came in at 54%, below the 56% consensus, due to near-term Helios ramp costs — revenue, profit, and guidance all beat estimates.",
    },
    {
      question: "What two major deals did AMD announce alongside its earnings?",
      options: [
        "A merger with Intel and a stock buyback",
        "An Anthropic GPU deployment deal and an expanded Microsoft Azure partnership",
        "A new gaming console and a retail store chain",
        "A spinoff of its Data Center business",
      ],
      correctIndex: 1,
      explanation: "Anthropic committed to deploying up to 2 gigawatts of AMD MI450 GPUs, and Microsoft expanded its Azure partnership to deploy AMD Helios and EPYC CPUs at scale.",
    },
    {
      question: "Why did AMD's stock fall despite beating on revenue, profit, and guidance?",
      options: [
        "The company missed on all metrics",
        "A gross margin miss and guidance that didn't clear already sky-high investor expectations",
        "A major product recall",
        "An unrelated market crash",
      ],
      correctIndex: 1,
      explanation: "Despite beating headline estimates, the gross margin miss and a guidance increase investors saw as insufficient relative to the stock's prior run-up drove the selloff.",
    },
  ],
  discussionQuestions: [
    "Why can a company beat estimates on almost every metric and still see its stock fall sharply?",
    "How should investors distinguish between a temporary, ramp-related margin dip and a structural profitability problem?",
    "Which matters more for AMD's long-term value: this quarter's gross margin miss, or the new Anthropic and Microsoft deals? Defend your answer.",
    "Compare this reaction to NVIDIA's position in the AI chip market (covered in this site's NVIDIA coverage) — does AMD's 107% Data Center growth change how you'd think about the competitive landscape?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Amazon's Cloud Business Just Had Its Best Quarter in Five Years",
      date: "2026-07-30",
      connection: "Another AI-infrastructure-driven earnings reaction from the same summer, illustrating how differently the market can treat similar 'strong growth, big capex' stories depending on the specific details.",
      internalSlug: "amazon-q2-aws-blowout-2026-07-30",
    },
    {
      title: "Tesla and Alphabet Just Lost Hundreds of Billions — On Purpose?",
      date: "2026-07-23",
      connection: "The same 'strong results, high expectations, stock falls anyway' pattern that's run through this entire earnings season across multiple AI-infrastructure-exposed companies.",
      internalSlug: "ai-capex-selloff-2026-07-23",
    },
  ],
} as unknown as FlagshipComic;
