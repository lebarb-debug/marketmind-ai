// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh (not ported from data.js — this comic didn't exist there),
// fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "amazon-q2-aws-blowout-2026-07-30",
  "date": "2026-07-30",
  "title": "Amazon's Cloud Business Just Had Its Best Quarter in Five Years",
  "hook": "AWS grew 37% and Amazon topped $200 billion in quarterly revenue for the first time ever — but a $53.4 billion one-time gain tied to its Anthropic stake did most of the work on the eye-popping headline profit number.",
  "category": "Earnings & Big Tech",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "Amazon reports results across three main pieces: North America retail, International retail, and AWS (Amazon Web Services) — its cloud-computing division that rents out servers, storage, databases, and increasingly AI infrastructure to other companies. AWS is the smallest of the three by revenue but by far the most profitable, so its growth rate is one of the single most-watched numbers on Wall Street each quarter.",
    "On Thursday, July 30, 2026, Amazon reported second-quarter results that blew past Wall Street's targets by an unusual margin — a 218% EPS beat. But buried in the release was a disclosure that a huge chunk of that profit, $53.4 billion, came from a one-time non-operating gain, primarily from Amazon marking up the value of its investment stake in AI company Anthropic. Investors and analysts had to look past the headline number to find the quarter's real story: AWS itself grew faster than it had in nearly five years.",
  ],
  "panels": [
    {
      "scene": "Amazon's Q2 earnings drop after the bell — Thursday, July 30",
      "chars": [
        { "pose": "celebrate", "label": "AMAZON", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "EPS: $5.75 vs. $1.81 expected. Revenue: $200.6 billion — Amazon's first-ever $200B quarter.",
      "dialogue": [
        { "who": "AMAZON", "text": "Biggest EPS beat in company history!" },
        { "who": "TRADER", "text": "That's a 218% beat. What actually happened here?" },
      ],
    },
    {
      "scene": "Reading the fine print",
      "chars": [
        { "pose": "talking", "label": "AMAZON", "side": "left" },
        { "pose": "pointing", "label": "ANALYST", "side": "right" },
      ],
      "caption": "$53.4 billion of that profit was a one-time non-operating gain — mostly from marking up Amazon's investment in AI company Anthropic.",
      "dialogue": [
        { "who": "ANALYST", "text": "So how much of that EPS beat is actually the core business?" },
        { "who": "AMAZON", "text": "...a lot less than the headline number." },
      ],
    },
    {
      "scene": "The number underneath the one-time gain",
      "chars": [
        { "pose": "celebrate", "label": "AWS", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "AWS revenue: $42.2 billion, up 36.7% year-over-year — its fastest growth in 18 quarters, beating the 31% analysts expected.",
      "dialogue": [
        { "who": "AWS", "text": "Forget the one-time gain — cloud demand alone grew almost 37%." },
        { "who": "TRADER", "text": "Now that's the number that actually matters." },
      ],
    },
    {
      "scene": "After-hours trading",
      "chars": [{ "pose": "celebrate", "label": "AMAZON STOCK", "side": "left" }],
      "caption": "Shares jumped more than 9% in after-hours trading, from a $235.50 close to $257.04.",
      "dialogue": [
        { "who": "AMAZON STOCK", "text": "Even stripping out the one-time gain, this was a genuinely strong quarter." },
      ],
    },
  ],
  "vocab": [
    { "term": "Non-operating income", "def": "Profit that doesn't come from a company's core, ongoing business operations — for example, gains from marking up the value of an investment stake. Investors typically discount it when judging underlying business health." },
    { "term": "AWS (Amazon Web Services)", "def": "Amazon's cloud-computing division, which rents out servers, storage, databases, and AI infrastructure to other companies. Smaller than Amazon's retail business by revenue, but historically its main profit engine." },
    { "term": "Operating income", "def": "Profit from a company's core business activities, before one-time items, interest, and taxes — often a more reliable gauge of underlying business health than net income in a quarter with unusual items." },
    { "term": "Year-over-year (YoY) growth", "def": "Comparing a metric to the same period one year earlier, which controls for seasonal patterns and gives a cleaner read on the underlying growth trend." },
  ],
  "sources": [
    { "label": "AMZN Stock Soars 7% After-Hours — Amazon's Q2 AWS Grows At Fastest Pace In Five Years — Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/amzn-stock-soars-7-hours-232648495.html" },
    { "label": "Amazon Q2 2026 earnings: AWS grows 37%, revenue tops $200B — Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-q2-2026-earnings-aws-204411872.html" },
    { "label": "Amazon's (NASDAQ:AMZN) Q2 CY2026 Sales Beat Estimates, Stock Soars — StockStory", "url": "https://stockstory.org/us/stocks/nasdaq/amzn/news/earnings/amazons-nasdaqamzn-q2-cy2026-sales-beat-estimates-stock-soars" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Amazon reported Q2 2026 EPS of $5.75 on revenue of $200.6 billion, versus Wall Street estimates of $1.81 EPS and $196.16 billion revenue — its first-ever $200 billion quarter.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-q2-2026-earnings-aws-204411872.html" },
      { "text": "AWS revenue was $42.2 billion, up 36.7% year over year — its fastest growth pace in 18 quarters — beating analysts' 31% growth projection.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/amzn-stock-soars-7-hours-232648495.html" },
      { "text": "Amazon confirmed that Q2 net income included $53.4 billion in non-operating pre-tax other income, primarily from its investment in Anthropic, accounting for a significant portion of the EPS beat.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-q2-2026-earnings-aws-204411872.html" },
      { "text": "Operating income climbed 43% to $27.5 billion, with AWS operating income of $16.6 billion at a 39% margin. Shares rose 9.15% in after-hours trading to $257.04, after closing the regular session up 3.9% at $235.50.", "source": "StockStory", "url": "https://stockstory.org/us/stocks/nasdaq/amzn/news/earnings/amazons-nasdaqamzn-q2-cy2026-sales-beat-estimates-stock-soars" },
    ],
    "analysis": [
      "This is a case study in reading past the headline number. A 218% EPS beat sounds almost too good to be true — and in a sense, it was: more than half of the reported profit came from a one-time accounting gain on an investment stake, not from selling more cloud capacity or ads. Investors who stopped at the EPS line would have badly overstated how much better Amazon's actual business got this quarter.",
      "The number that mattered more: AWS growing 36.7%, its fastest pace in nearly five years, comfortably ahead of the 31% analysts expected. That's a real, operating-business signal — cloud and AI infrastructure demand is accelerating, not just Amazon's balance sheet getting a one-time boost.",
      "The Anthropic stake gain is also a preview of a broader theme showing up across Big Tech in 2026: as companies take large equity stakes in AI labs, those stakes' quarter-to-quarter value swings are starting to show up as real, sometimes enormous, line items on the income statement — separate from and sometimes larger than the swings in the actual operating business.",
      "Unlike the Apple and Coinbase reactions covered elsewhere on this site, where a headline beat still got punished, Amazon's stock rose — because once analysts separated the one-time gain from the AWS growth number, the underlying business story held up on its own merits.",
    ],
  },
  "clubRelevance": {
    "pmc": "A textbook 'quality of earnings' exercise: the headline EPS beat and the real operating story (AWS growth) point in the same bullish direction here, but for very different reasons — exactly the kind of number you have to decompose before using it in a valuation model.",
    "bta": "Mark-to-market gains on strategic AI investments are becoming a recurring, market-moving line item across Big Tech earnings — trading desks and equity research need a fast read on how much of an EPS number is one-time versus recurring.",
    "wfa": "A clean, current example for the classic 'walk me through quality of earnings' interview question — and a chance to explain why a company's stock can rally on a quarter where the reported profit number is partly noise.",
  },
} as const;

export const amazonQ2AwsBlowout20260730Comic = {
  ...existingFields,

  professionalSummary:
    "Amazon's Q2 2026 results showed EPS of $5.75 and revenue of $200.6 billion, both far ahead of consensus ($1.81 EPS, $196.16B revenue) — a first-ever $200B quarter. However, $53.4 billion of the reported profit was non-operating income, primarily a mark-up on Amazon's Anthropic investment stake. Stripping that out, the more meaningful signal was AWS revenue of $42.2 billion, up 36.7% year over year and its fastest growth in 18 quarters, beating the 31% consensus estimate. Operating income rose 43% to $27.5 billion. Shares rose more than 9% in after-hours trading.",
  thirtySecondSummary:
    "Amazon posted a huge headline profit beat, but over half of it came from a one-time gain on its Anthropic investment, not the actual business. The real story was underneath: AWS, Amazon's cloud division, grew almost 37% — its fastest pace in nearly five years. The stock jumped more than 9% after hours.",
  eli5Summary:
    "Amazon said it made way more money than expected — but a big chunk of that extra money came from the value of one of its investments going up, not from selling more stuff or cloud services. The part that actually matters more, though, is that Amazon's cloud computing business (which rents out computer power to other companies) grew really fast — its best growth in almost five years. Investors were happy about that real growth, so the stock price jumped.",
  timeline: [
    {
      date: "July 30, 2026",
      label: "Amazon reports Q2 2026 earnings",
      detail: "EPS of $5.75 and revenue of $200.6 billion both far exceed Wall Street estimates.",
    },
    {
      date: "July 30, 2026",
      label: "One-time Anthropic gain disclosed",
      detail: "Amazon confirms $53.4 billion of the quarter's profit was non-operating income tied to its Anthropic investment stake.",
    },
    {
      date: "July 30, 2026",
      label: "AWS growth number lands",
      detail: "AWS revenue grows 36.7% year over year to $42.2 billion, its fastest pace in 18 quarters.",
    },
    {
      date: "July 30, 2026",
      label: "Shares jump after hours",
      detail: "Amazon stock rises more than 9% in after-hours trading, from $235.50 to $257.04.",
    },
  ],
  bullCase: [
    {
      point: "AWS's growth acceleration is a real, durable signal, not an accounting artifact.",
      support: "36.7% year-over-year growth against a 31% estimate, and the fastest pace in 18 quarters, reflects genuine cloud and AI infrastructure demand — a business fundamentally separate from the one-time investment gain.",
    },
    {
      point: "Operating income growth (43%) shows the core business is genuinely more profitable, independent of the Anthropic markup.",
      support: "Operating income excludes non-operating gains by definition, so its 43% growth is a cleaner signal of underlying business health than the headline EPS number.",
    },
    {
      point: "Large equity stakes in AI labs may keep generating similar mark-to-market gains going forward.",
      support: "If Anthropic's valuation continues rising, Amazon's stake could keep contributing meaningfully to reported profits in future quarters, even though the timing and size of any single gain is unpredictable.",
    },
  ],
  bearCase: [
    {
      point: "The headline EPS number is misleading and could set an unrealistic bar for future quarters.",
      support: "A 218% EPS beat driven mostly by a one-time gain isn't repeatable — investors who anchor on this quarter's EPS risk being disappointed when a future quarter lacks a similar windfall.",
    },
    {
      point: "Relying on investment-stake markups for reported profit introduces volatility investors can't easily forecast.",
      support: "Unlike AWS revenue, which follows a predictable growth trend, a private company's valuation markup depends on funding rounds and market sentiment that are difficult to model or time.",
    },
    {
      point: "Even AWS's strong growth doesn't guarantee margin expansion if AI infrastructure buildout costs keep rising.",
      support: "AWS's 39% operating margin this quarter is strong, but heavy ongoing capital spending on AI data centers and chips could pressure margins in future quarters even if revenue growth stays strong.",
    },
  ],
  longTermView:
    "The durable story here is AWS's growth re-acceleration — its fastest pace in nearly five years — which suggests Amazon's heavy AI infrastructure investment is translating into real cloud demand, not just capital expenditure. The Anthropic stake gain is a reminder that as Big Tech companies take larger equity positions in AI labs, their income statements will increasingly include large, hard-to-forecast swings tied to those private companies' valuations — a trend worth watching across Amazon, Microsoft, and other hyperscalers with similar AI investments. Long-term investors should track AWS's revenue growth and operating margin quarter over quarter as the cleaner signal, while treating investment-stake gains as a volatile, secondary contributor to reported earnings rather than a repeatable source of profit.",
  quiz: [
    {
      question: "How much did Amazon beat Wall Street's EPS estimate by, in percentage terms?",
      options: ["About 25%", "About 75%", "About 150%", "About 218%"],
      correctIndex: 3,
      explanation: "Amazon reported EPS of $5.75 versus an expected $1.81 — a beat of roughly 218%.",
    },
    {
      question: "What was the main driver of Amazon's unusually large EPS beat?",
      options: [
        "Record iPhone-equivalent hardware sales",
        "A $53.4 billion non-operating gain tied to its Anthropic investment",
        "A one-time tax refund",
        "Lower marketing spending",
      ],
      correctIndex: 1,
      explanation: "Amazon confirmed $53.4 billion of the quarter's profit was non-operating income, primarily from marking up its Anthropic investment stake.",
    },
    {
      question: "How fast did AWS revenue grow year-over-year, and how did that compare to expectations?",
      options: [
        "31%, in line with expectations",
        "20%, below the 31% expected",
        "36.7%, beating the 31% expected",
        "50%, roughly double what was expected",
      ],
      correctIndex: 2,
      explanation: "AWS revenue grew 36.7% year-over-year to $42.2 billion, beating the 31% growth analysts had projected, and marking its fastest pace in 18 quarters.",
    },
    {
      question: "Why do analysts consider operating income a cleaner signal than net income (EPS) in a quarter like this one?",
      options: [
        "Operating income is always higher than net income",
        "Operating income excludes one-time, non-operating items like investment gains",
        "Operating income is required by law to be reported accurately",
        "There is no meaningful difference between the two",
      ],
      correctIndex: 1,
      explanation: "Operating income reflects profit from core business activities and excludes non-operating items, making it a better gauge of underlying business health when a quarter includes a large one-time gain.",
    },
    {
      question: "How did Amazon's stock react in after-hours trading following the earnings report?",
      options: ["Fell about 5%", "Was roughly flat", "Rose more than 9%", "Rose more than 30%"],
      correctIndex: 2,
      explanation: "Shares jumped more than 9% in after-hours trading, from a $235.50 close to $257.04, as investors focused on the strong underlying AWS growth.",
    },
  ],
  discussionQuestions: [
    "Should investors treat Amazon's Q2 EPS number as a meaningful data point at all, given how much of it came from a one-time gain? Why or why not?",
    "Compare Amazon's reaction (stock up on a beat, once the one-time item was explained) to Apple's reaction covered elsewhere on this site (stock down on a beat). What explains the difference?",
    "As more Big Tech companies take large equity stakes in AI labs, how should investors adjust the way they read quarterly earnings reports going forward?",
    "Is a 39% AWS operating margin sustainable given the pace of AI infrastructure spending? What would change your answer?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Tesla and Alphabet Just Lost Hundreds of Billions — On Purpose?",
      date: "2026-07-23",
      connection: "Part of the same summer-long story of markets re-pricing AI capital spending — here, heavy AWS/AI infrastructure investment is shown paying off in accelerating growth rather than triggering a selloff.",
      internalSlug: "ai-capex-selloff-2026-07-23",
    },
    {
      title: "Microsoft Just Had Its Best Day Since 2008 — And Gained Almost $450 Billion",
      date: "2026-07-30",
      connection: "Same earnings night, same 'AI trade' theme — Microsoft's Azure/Copilot strength and Amazon's AWS strength were the two biggest wins of a night that also saw Meta and Apple sell off.",
      internalSlug: "microsoft-record-market-cap-gain-2026-07-30",
    },
    {
      title: "Apple Beat Every Estimate. Its Stock Still Crashed 7%.",
      date: "2026-07-31",
      connection: "Two very different reactions to a 'beat' from the same earnings week — Amazon's beat held up under scrutiny once the one-time item was explained, while Apple's beat didn't protect it from segment-level misses.",
      internalSlug: "apple-earnings-services-china-miss-2026-07-31",
    },
  ],
} as unknown as FlagshipComic;
