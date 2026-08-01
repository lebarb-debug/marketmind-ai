// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// copied verbatim from data.js, new Financial Storytelling fields authored
// below, fact-checked against the deepDive.facts/sources already ported.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "microsoft-record-market-cap-gain-2026-07-30",
  "date": "2026-07-30",
  "title": "Microsoft Just Had the Best Day Any Stock Has Ever Had",
  "hook": "Microsoft added roughly $450 billion in market value in a single day — the largest one-day dollar gain by any stock in history, beating Nvidia's previous record.",
  "category": "Earnings & Big Tech",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "A company's 'market capitalization' (or market cap) is its total stock-market value — share price multiplied by the number of shares outstanding. When a stock's price jumps, its market cap rises too, and for a company as large as Microsoft, even a percentage move that sounds modest can represent an enormous amount of actual dollars. Microsoft has spent the past few years pouring huge sums into AI and cloud-computing infrastructure through its Azure platform, and investors have been watching closely for proof that spending is actually generating revenue, not just running up costs.",
    "On Wednesday, July 29, 2026, Microsoft reported quarterly earnings that answered that question emphatically: Azure grew 43% — its fastest pace in years — and Microsoft guided to even faster growth ahead, well above what Wall Street expected. The stock jumped more than 15% the next day, adding an amount of value that set a genuine stock-market record, and doing so on the very same day the broader market was already rebounding from the Fed-related selloff covered in an earlier comic on this site.",
  ],
  "panels": [
    {
      "scene": "Microsoft's fiscal Q4 earnings call — Wednesday, July 29",
      "chars": [
        { "pose": "celebrate", "label": "MICROSOFT", "side": "left" },
        { "pose": "shocked", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Azure cloud revenue grew 43% this quarter — the fastest pace since early 2022.",
      "dialogue": [
        { "who": "MICROSOFT", "text": "And next quarter, we're guiding to 45% growth." },
        { "who": "ANALYST", "text": "Wall Street expected about 41%. That's not a beat, that's a statement." },
      ],
    },
    {
      "scene": "Thursday, July 30 — the stock reacts",
      "chars": [{ "pose": "celebrate", "label": "MSFT STOCK", "side": "left" }],
      "caption": "Microsoft shares jump more than 15% — the biggest one-day gain since October 2008.",
      "dialogue": [
        { "who": "MSFT STOCK", "text": "I just added roughly $450 billion in value. In one day." },
      ],
    },
    {
      "scene": "Same day, for context",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "That's the largest single-day dollar gain by ANY stock in history — beating Nvidia's $441 billion record from April 2025.",
      "dialogue": [
        { "who": "NARRATOR", "text": "Microsoft's market cap after the jump: about $3.35 trillion." },
      ],
    },
    {
      "scene": "Whiteboard recap",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "This wasn't a Fed-driven rally. It was one company proving its AI/cloud spending is generating real returns — the same day the Fed's own dissent was still rattling the broader market.",
      "dialogue": [
        { "who": "NARRATOR", "text": "One earnings call, correctly read by the market, moved more value than most entire companies are worth." },
      ],
    },
  ],
  "vocab": [
    { "term": "Market capitalization", "def": "A company's total stock-market value — share price multiplied by shares outstanding." },
    { "term": "Azure", "def": "Microsoft's cloud-computing platform, which rents out computing power and storage to businesses — one of Microsoft's biggest growth engines alongside AI." },
    { "term": "Constant-currency growth", "def": "A way of measuring revenue growth that removes the effect of exchange-rate swings, so investors can see how much a business actually grew regardless of currency movements." },
    { "term": "Consensus estimate", "def": "The average forecast among Wall Street analysts for a specific number. A company's actual result is measured against this benchmark, not against some absolute standard." },
    { "term": "Record one-day gain", "def": "The largest single-day increase, in dollar terms, that any stock has ever added to its market value — a measure of the sheer scale of investor reaction, not just the percentage move." },
  ],
  "sources": [
    { "label": "Microsoft Adds $450 Billion in Value, Biggest One-Day Gain in Market History — Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-07-30/microsoft-eyes-history-with-490-billion-pop-in-market-value" },
    { "label": "Microsoft sets record with near $450 billion single-day gain in market value — Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/microsoft-set-record-one-day-194111444.html" },
    { "label": "Microsoft Sets Record With Near $450 Billion Single-Day Gain in Market Value — U.S. News", "url": "https://www.usnews.com/news/top-news/articles/2026-07-30/microsoft-set-for-record-one-day-market-cap-gain-after-upbeat-azure-forecast" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Microsoft shares closed up more than 15% on Thursday, July 30, 2026, adding roughly $450 billion in market value — the largest single-day dollar gain by any stock in history, surpassing Nvidia's previous record of $441 billion set on April 9, 2025.", "source": "Yahoo Finance / Bloomberg", "url": "https://finance.yahoo.com/markets/stocks/articles/microsoft-set-record-one-day-194111444.html" },
      { "text": "At its intraday peak, the gain briefly approached $490 billion before settling back to roughly $450 billion by the close.", "source": "Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-07-30/microsoft-eyes-history-with-490-billion-pop-in-market-value" },
      { "text": "Microsoft's market capitalization rose to approximately $3.35 trillion following the rally.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/microsoft-set-record-one-day-194111444.html" },
      { "text": "The rally was driven by Azure cloud revenue growing 43% in the quarter — the fastest pace since early 2022 — with Microsoft guiding to 45% constant-currency growth next quarter, above the roughly 41% analysts had expected.", "source": "Yahoo Finance / Bloomberg", "url": "https://finance.yahoo.com/markets/stocks/articles/microsoft-set-record-one-day-194111444.html" },
    ],
    "analysis": [
      "Records set in raw dollar terms, not just percentage terms, matter because of scale: a 15% move sounds large but not extraordinary — plenty of small stocks move that much routinely. What made this historic is that Microsoft is one of the most valuable companies on Earth, so the same percentage move translated into roughly $450 billion in actual value.",
      "The specific numbers behind the move matter as much as the size of it. Azure growing 43%, against a guide of 45% next quarter versus roughly 41% consensus, is a genuinely large beat relative to expectations — and it lands directly on the exact question this site's earlier comic on Alphabet and Tesla's AI capex raised: is all this AI infrastructure spending actually generating revenue, or just costs?",
      "The timing is worth noting explicitly: this rally happened on the same day the broader market was rebounding from the Fed-dissent selloff covered elsewhere on this site. Microsoft's earnings weren't just a side story — they were a major contributor to that overall market rebound, alongside a broader rally in chip stocks.",
      "For an interview, the useful distinction to know is dollar-value records versus percentage records: a stock can post a huge percentage gain without setting any record if the company is small, while a 'modest'-sounding double-digit percentage move at trillion-dollar scale can set an all-time record, as it did here.",
    ],
  },
  "clubRelevance": {
    "pmc": "This is the clearest piece of evidence yet in a debate this site has tracked all month: does AI/cloud capital spending actually pay off? Microsoft just answered with real, record-setting numbers — a strong anchor for either side of a PMC debate on AI infrastructure spending.",
    "bta": "Equity research had to model an unprecedented single-day valuation move, and trading desks handled enormous volume in one of the most heavily-weighted stocks in major indexes — a genuine once-in-years trading event worth understanding in detail for a trading-floor interview.",
    "wfa": "Knowing the exact mechanics of why one earnings report can move more value than most companies are worth — and being able to explain the dollar-record vs. percentage-record distinction — is a powerful, memorable data point for any interview about the AI trade.",
  },
} as const;

export const microsoftRecordMarketCapGain20260730Comic = {
  ...existingFields,

  professionalSummary:
    "Microsoft's fiscal Q4 2026 earnings, reported July 29, showed Azure cloud revenue growing 43% — the fastest pace since early 2022 — with guidance for 45% constant-currency growth next quarter versus roughly 41% consensus. Shares surged more than 15% on July 30, adding approximately $450 billion in market value (briefly $490 billion intraday) and pushing Microsoft's market cap to roughly $3.35 trillion — the largest single-day dollar gain by any stock in history, surpassing Nvidia's prior $441 billion record from April 2025. The rally landed the same day the broader market was rebounding from the Fed-dissent selloff, making Microsoft's results a primary driver of that overall market recovery.",
  thirtySecondSummary:
    "Microsoft's cloud business grew faster than expected and guided even higher for next quarter, and the stock jumped over 15% — adding about $450 billion in value in a single day, the biggest one-day dollar gain any stock has ever had.",
  eli5Summary:
    "Microsoft makes a lot of money renting out computer power to other companies through something called Azure. That business grew really fast this past quarter, and Microsoft said it expects it to grow even faster next quarter. Investors got so excited that Microsoft's stock jumped a huge amount in one day — adding more value in a single day than almost any company on Earth is even worth. No stock has ever added that much value in one day before.",
  timeline: [
    {
      date: "July 29, 2026",
      label: "Microsoft reports Q4 earnings",
      detail: "Azure cloud revenue grows 43% — the fastest pace since early 2022 — beating expectations.",
    },
    {
      date: "July 29, 2026",
      label: "Microsoft guides even higher",
      detail: "Microsoft guides to 45% constant-currency Azure growth next quarter, above the roughly 41% analysts expected.",
    },
    {
      date: "July 30, 2026",
      label: "Shares surge 15%+, setting a record",
      detail: "Microsoft stock jumps more than 15%, adding roughly $450 billion in market value — the largest single-day dollar gain by any stock in history.",
    },
    {
      date: "July 30, 2026",
      label: "Market cap reaches ~$3.35 trillion",
      detail: "The rally pushes Microsoft's total market value to approximately $3.35 trillion, surpassing Nvidia's prior one-day dollar-gain record of $441 billion.",
    },
  ],
  bullCase: [
    {
      point: "This is concrete, verified proof that AI/cloud infrastructure spending can generate real, accelerating revenue.",
      support: "Azure's 43% growth and the raised 45% guidance are actual, reported numbers — not projections or promises — directly addressing the market's broader worry about whether AI capex pays off.",
    },
    {
      point: "A guidance beat of this magnitude suggests genuine, durable demand acceleration, not a one-quarter blip.",
      support: "Companies typically guide conservatively; beating consensus by several points on forward guidance, not just trailing results, signals management has real visibility into sustained demand.",
    },
    {
      point: "The scale of the reaction shows the market rewards proof, not just promises, when it comes to AI spending.",
      support: "Investors who had grown skeptical after the Alphabet/Tesla capex selloff responded enormously positively the moment a company showed the spending translating into accelerating revenue.",
    },
  ],
  bearCase: [
    {
      point: "A single blowout quarter doesn't guarantee the growth rate is sustainable long-term.",
      support: "43% growth is measured against a prior-year base, and hyperscale cloud growth rates can decelerate as the revenue base gets larger — this quarter's number doesn't guarantee next year's.",
    },
    {
      point: "A $450 billion one-day move, even on genuinely good news, raises questions about how much was already priced in.",
      support: "Extremely large single-day re-ratings can reflect a market correcting a prior underestimate as much as they reflect a fundamentally new assessment of long-term value.",
    },
    {
      point: "Microsoft's success doesn't resolve the broader AI-capex debate for every company simultaneously.",
      support: "One company proving its specific AI/cloud investments are paying off doesn't automatically mean every other company's similar spending will show the same results — each company's execution differs.",
    },
  ],
  longTermView:
    "Microsoft's results are a genuine data point in the broader 2026 debate this site has tracked about whether AI infrastructure spending pays off — and for Microsoft specifically, the evidence this quarter is strong: accelerating growth, raised guidance, and a market reaction that reflects real conviction, not just hype. But long-term investors should be careful not to over-generalize from one company's results to the entire AI trade. Azure's growth reflects Microsoft's specific execution, product mix, and customer base — other companies making similar capex bets will need to prove the same thing with their own numbers, on their own timelines. The right long-term question isn't 'is AI spending working' as a blanket statement, but 'which specific companies are converting that spending into revenue, and how durable is each one's growth rate' — a company-by-company question, not an industry-wide verdict.",
  quiz: [
    {
      question: "What drove Microsoft's stock to jump more than 15% on July 30, 2026?",
      options: ["A new CEO announcement", "Strong Azure cloud growth and even stronger forward guidance", "A Fed rate cut", "A stock buyback announcement"],
      correctIndex: 1,
      explanation: "Azure grew 43% (fastest since early 2022) and Microsoft guided to 45% growth next quarter, well above the roughly 41% consensus — driving the rally.",
    },
    {
      question: "Roughly how much market value did Microsoft add in a single day?",
      options: ["$45 billion", "$150 billion", "$450 billion", "$1 trillion"],
      correctIndex: 2,
      explanation: "Microsoft added roughly $450 billion in market value, the largest single-day dollar gain by any stock in history.",
    },
    {
      question: "Whose previous record did Microsoft's gain surpass?",
      options: ["Apple's", "Amazon's", "Nvidia's", "Tesla's"],
      correctIndex: 2,
      explanation: "Microsoft surpassed Nvidia's previous record of $441 billion, set on April 9, 2025.",
    },
    {
      question: "What is 'constant-currency growth'?",
      options: [
        "Growth measured only in U.S. dollars",
        "A way of measuring revenue growth that removes the effect of exchange-rate swings",
        "Growth that stays exactly the same every quarter",
        "A type of stock option",
      ],
      correctIndex: 1,
      explanation: "Constant-currency growth removes the effect of exchange-rate movements, so investors can see how much a business actually grew regardless of currency swings.",
    },
    {
      question: "Why does this story connect to the earlier Alphabet/Tesla comic on this site?",
      options: [
        "They're all the same company",
        "Both stories are about the same underlying question: is AI/cloud infrastructure spending actually generating returns?",
        "They happened on the exact same day",
        "There is no connection",
      ],
      correctIndex: 1,
      explanation: "The Alphabet/Tesla comic raised doubts about whether AI capex was paying off; Microsoft's results are a concrete, positive data point in that same ongoing debate.",
    },
  ],
  discussionQuestions: [
    "Does Microsoft's result resolve the broader AI-capex debate, or just answer the question for Microsoft specifically?",
    "How should investors distinguish between a market correcting an underestimate versus a market that's now overreacting to good news?",
    "What would make you confident Azure's 43-45% growth rate is sustainable versus a temporary acceleration?",
    "If you were comparing Microsoft's earnings reaction to Alphabet and Tesla's capex-driven selloff from the same month, what specific numbers would you point to as the key difference?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Tesla and Alphabet Just Lost Hundreds of Billions — On Purpose?",
      date: "2026-07-23",
      connection: "The direct counterpoint — this earlier comic covered markets punishing AI capex spending; Microsoft's results are the opposite reaction to the opposite outcome.",
      internalSlug: "ai-capex-selloff-2026-07-23",
    },
    {
      title: "The Fed Meeting Actually Happened. It Was Chaos.",
      date: "2026-07-30",
      connection: "Microsoft's rally happened the same day as the broader market's rebound from the Fed-dissent selloff, and was a major contributor to that overall recovery.",
      internalSlug: "fed-decision-dissent-selloff-rebound-2026-07-30",
    },
  ],
} as unknown as FlagshipComic;
