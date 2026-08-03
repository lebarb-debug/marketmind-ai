// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh, fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "amazon-3-trillion-market-cap-2026-08-03",
  "date": "2026-08-03",
  "title": "Amazon Just Joined the $3 Trillion Club — Only the Fifth Company Ever",
  "hook": "Four days after its AWS-driven earnings blowout, Amazon's stock kept climbing and crossed $3 trillion in market value — a milestone only Nvidia, Alphabet, Microsoft, and Apple had reached before it.",
  "category": "Earnings & Big Tech",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "A company's market capitalization — share price multiplied by total shares outstanding — is the market's real-time estimate of what the whole company is worth. Crossing a round-number trillion-dollar threshold doesn't change anything about the underlying business, but it's a widely watched symbolic milestone that reflects sustained investor confidence, not just a single good day.",
    "On July 30, 2026, Amazon reported Q2 earnings showing AWS revenue growth of 36.7% — its fastest pace in 18 quarters (covered elsewhere on this site). The stock kept rising in the days that followed, and on August 3, shares hit a record high of $287.16, pushing Amazon's market capitalization above $3 trillion for the first time — becoming only the fifth company in history to reach that level, joining Nvidia, Alphabet, Microsoft, and Apple.",
  ],
  "panels": [
    {
      "scene": "Four days after the AWS earnings blowout",
      "chars": [
        { "pose": "celebrate", "label": "AMAZON STOCK", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "Amazon shares keep climbing through the following days, building on the post-earnings pop.",
      "dialogue": [
        { "who": "TRADER", "text": "This rally has real legs. How far does it go?" },
      ],
    },
    {
      "scene": "Monday, August 3",
      "chars": [
        { "pose": "celebrate", "label": "AMAZON STOCK", "side": "left" },
        { "pose": "shocked", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Shares hit a record high of $287.16, pushing Amazon's market cap above $3 trillion for the first time.",
      "dialogue": [
        { "who": "ANALYST", "text": "$3 trillion. Only four other companies have ever gotten here." },
        { "who": "AMAZON STOCK", "text": "Nvidia, Alphabet, Microsoft, Apple — and now me." },
      ],
    },
    {
      "scene": "The two-trillion-to-three-trillion stretch",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "Amazon first reached $2 trillion in June 2024 — it took just over two years to add the next trillion.",
      "dialogue": [
        { "who": "NARRATOR", "text": "For context: it took Amazon over two decades to reach its first trillion, and just two years to add its third." },
      ],
    },
    {
      "scene": "Analysts respond",
      "chars": [
        { "pose": "talking", "label": "MORGAN STANLEY", "side": "left" },
        { "pose": "talking", "label": "JPMORGAN", "side": "right" },
      ],
      "caption": "Morgan Stanley and JPMorgan both raised their price targets on Amazon following the milestone.",
      "dialogue": [
        { "who": "MORGAN STANLEY", "text": "We're raising our target." },
        { "who": "JPMORGAN", "text": "Same here — the AWS growth story justifies it." },
      ],
    },
  ],
  "vocab": [
    { "term": "Market capitalization (market cap)", "def": "A company's total stock-market value — share price multiplied by total shares outstanding. It's the market's real-time collective estimate of what the entire company is worth." },
    { "term": "Price target", "def": "An analyst's forecast of where a stock's price will be at a future point, typically 12 months out — used by investors as one input (among many) when deciding whether a stock looks under- or over-valued." },
    { "term": "Record high", "def": "The highest price a stock has ever traded at, as distinct from a 52-week high (highest in the past year) — a stronger signal since it means the stock has never been more expensive." },
    { "term": "$3 trillion club", "def": "Informal shorthand for the small group of companies whose market capitalization has crossed $3 trillion — as of this milestone, Nvidia, Apple, Microsoft, Alphabet, and Amazon." },
  ],
  "sources": [
    { "label": "Amazon tops $3 trillion market cap as stock continues post-earnings surge — CNBC", "url": "https://www.cnbc.com/2026/08/03/amazon-amzn-stock-market-cap-earnings.html" },
    { "label": "Amazon (AMZN) Tops $3 Trillion in Market Value for First Time — Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-08-03/amazon-joins-elite-list-of-stocks-to-top-3-trillion-in-value" },
    { "label": "Amazon Hits Record High to Become Fifth Company With $3 Trillion Market Cap — TradingKey", "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262070966-amazon-amzn-all-time-high-3-trillion-market-cap-fifth-analyst-price-target-upgrades-tradingkey" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Amazon shares hit a record high of $287.16 on August 3, 2026, pushing the company's market capitalization above $3 trillion for the first time.", "source": "CNBC", "url": "https://www.cnbc.com/2026/08/03/amazon-amzn-stock-market-cap-earnings.html" },
      { "text": "Amazon became only the fifth company in history to reach a $3 trillion market cap, joining Nvidia, Alphabet, Microsoft, and Apple.", "source": "Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-08-03/amazon-joins-elite-list-of-stocks-to-top-3-trillion-in-value" },
      { "text": "The milestone was driven by Amazon's Q2 2026 earnings, which showed AWS revenue of $42.2 billion, ahead of StreetAccount's $40.54 billion estimate, reflecting strong AI-driven cloud demand.", "source": "TradingKey", "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262070966-amazon-amzn-all-time-high-3-trillion-market-cap-fifth-analyst-price-target-upgrades-tradingkey" },
      { "text": "Amazon first reached a $2 trillion market cap in June 2024, meaning it took just over two years to add its third trillion dollars of value. Morgan Stanley and JPMorgan both raised their price targets on the stock following the milestone.", "source": "TradingKey", "url": "https://www.tradingkey.com/analysis/stocks/us-stocks/262070966-amazon-amzn-all-time-high-3-trillion-market-cap-fifth-analyst-price-target-upgrades-tradingkey" },
    ],
    "analysis": [
      "This milestone is best read as a continuation of the AWS earnings story already covered on this site, not a standalone event — the $3 trillion crossing happened because the post-earnings rally kept building over several trading days, showing sustained investor conviction rather than a single euphoric spike.",
      "The 'fifth company ever' framing matters for scale: reaching $3 trillion isn't just a big number, it's a level only the very largest technology companies in history have reached, and Amazon's path there was retail- and logistics-rooted before AWS became its profit engine — a different origin story than pure-software peers like Microsoft or hardware-and-software Apple.",
      "The pace of the milestone is arguably the more interesting data point than the milestone itself: Amazon took roughly two years to go from $2 trillion to $3 trillion, versus a far longer stretch to first reach $1 trillion — a pattern common among AI-era megacaps, where a strong cloud/AI growth narrative can compound market value faster than in prior tech cycles.",
      "Sell-side price target increases from Morgan Stanley and JPMorgan following the milestone show that at least some analysts view the AWS growth trend as durable enough to raise forward estimates, not just react to the current price — though it's worth noting analyst price targets are opinions, not guarantees.",
    ],
  },
  "clubRelevance": {
    "pmc": "A clean example of how a strong earnings report can compound into sustained multi-day momentum rather than a one-day pop — worth discussing alongside how analysts recalibrate price targets after a fundamental catalyst.",
    "bta": "Sell-side price target changes are a core part of equity research work — this is a timely, real example of two major banks updating their models after a confirmed growth catalyst.",
    "wfa": "A good 'talk me through a recent stock move' interview example that connects an earnings report to a multi-day stock reaction and follow-on analyst activity, rather than just a single data point.",
  },
} as const;

export const amazon3TrillionMarketCap20260803Comic = {
  ...existingFields,

  professionalSummary:
    "On August 3, 2026, Amazon shares hit a record high of $287.16, pushing the company's market capitalization above $3 trillion for the first time — making it only the fifth company in history to reach that level, after Nvidia, Alphabet, Microsoft, and Apple. The milestone capped a multi-day rally following Amazon's July 30 Q2 earnings report, which showed AWS revenue of $42.2 billion, ahead of the $40.54 billion StreetAccount estimate, on strong AI-driven cloud demand. Amazon reached $2 trillion in June 2024, meaning it added its third trillion dollars of market value in just over two years. Morgan Stanley and JPMorgan both raised their price targets on the stock following the milestone.",
  thirtySecondSummary:
    "Four days after a strong earnings report showing fast AWS growth, Amazon's stock kept climbing and crossed $3 trillion in total market value — only the fifth company ever to do that. It took Amazon just over two years to go from $2 trillion to $3 trillion. Two major banks raised their price targets on the stock afterward.",
  eli5Summary:
    "Amazon's stock has been on a hot streak since it reported really good earnings a few days ago — especially strong growth in its cloud computing business. That stock price climb added up to the entire company now being worth more than $3 trillion, which is an enormous number that only four other companies (Nvidia, Google's parent Alphabet, Microsoft, and Apple) had ever reached before. Some big Wall Street banks now think the stock could go even higher.",
  timeline: [
    {
      date: "June 2024",
      label: "Amazon first reaches $2 trillion",
      detail: "Amazon's market capitalization crosses $2 trillion for the first time.",
    },
    {
      date: "July 30, 2026",
      label: "Amazon reports strong Q2 earnings",
      detail: "AWS revenue grows 36.7% year over year to $42.2 billion, beating estimates (covered elsewhere on this site).",
    },
    {
      date: "August 3, 2026",
      label: "Shares hit record high, cross $3 trillion",
      detail: "Amazon shares hit $287.16, pushing market cap above $3 trillion — the fifth company ever to reach that level.",
    },
    {
      date: "August 3, 2026",
      label: "Analysts raise price targets",
      detail: "Morgan Stanley and JPMorgan both raise their price targets on Amazon following the milestone.",
    },
  ],
  bullCase: [
    {
      point: "The milestone reflects a multi-day, earnings-driven rally, not a single speculative spike.",
      support: "The stock climbed steadily over several trading days following a concrete, verifiable earnings catalyst (AWS growth beating estimates), suggesting the move is grounded in fundamentals rather than short-term hype.",
    },
    {
      point: "Sell-side analysts raising price targets after the milestone signals continued confidence in forward growth, not just a reaction to the current price.",
      support: "Price target increases from Morgan Stanley and JPMorgan reflect updated models incorporating the stronger AWS growth trajectory, not simply chasing the stock's recent performance.",
    },
    {
      point: "The accelerating pace from $2 trillion to $3 trillion suggests compounding investor confidence in Amazon's AI/cloud growth story.",
      support: "A roughly two-year gap between trillion-dollar milestones, faster than Amazon's path to its first trillion, points to strengthening rather than weakening momentum.",
    },
  ],
  bearCase: [
    {
      point: "Round-number market cap milestones carry symbolic weight but don't independently justify a valuation.",
      support: "Crossing $3 trillion doesn't change Amazon's underlying cash flows or growth prospects — investors should be wary of treating the milestone itself as a reason to buy.",
    },
    {
      point: "A rapid, multi-day rally increases the risk of a short-term pullback if subsequent data disappoints.",
      support: "Stocks that run up quickly on a single catalyst can be more sensitive to any negative follow-on news, since a larger share of recent gains may reflect momentum rather than fully digested fundamentals.",
    },
    {
      point: "At this scale, sustaining the growth rate that justified the rally becomes mathematically harder.",
      support: "AWS would need to keep adding tens of billions in revenue each year to sustain a growth rate anywhere close to its current pace, a harder proposition off an already-large base.",
    },
  ],
  longTermView:
    "The $3 trillion milestone is a lagging confirmation of the AWS growth story already underway, not a new independent catalyst — the more important long-term question is whether AWS can sustain 30%+ growth off an increasingly large revenue base as AI infrastructure demand matures, and whether Amazon's other segments (retail, advertising) continue contributing alongside cloud. Investors should track AWS's growth rate and margin trends in the next several quarters, alongside how analyst price targets evolve, rather than treating this milestone itself as a signal to act on.",
  quiz: [
    {
      question: "What milestone did Amazon reach on August 3, 2026?",
      options: [
        "First $1 trillion market cap",
        "First $2 trillion market cap",
        "First $3 trillion market cap",
        "First $4 trillion market cap",
      ],
      correctIndex: 2,
      explanation: "Amazon shares hit a record high of $287.16, pushing its market capitalization above $3 trillion for the first time.",
    },
    {
      question: "How many companies in history had reached a $3 trillion market cap before Amazon?",
      options: ["None — Amazon was first", "Two", "Four", "Ten"],
      correctIndex: 2,
      explanation: "Amazon became the fifth company ever to reach $3 trillion, joining Nvidia, Alphabet, Microsoft, and Apple.",
    },
    {
      question: "What was the main driver behind Amazon's rally leading up to this milestone?",
      options: [
        "A stock buyback announcement",
        "Strong AWS revenue growth reported in its Q2 2026 earnings",
        "A new CEO announcement",
        "A stock split",
      ],
      correctIndex: 1,
      explanation: "The rally followed Amazon's July 30, 2026 earnings report, which showed AWS revenue growing 36.7% year over year to $42.2 billion, beating estimates.",
    },
    {
      question: "How long did it take Amazon to go from a $2 trillion to a $3 trillion market cap?",
      options: ["About 6 months", "About 2 years", "About 5 years", "About 10 years"],
      correctIndex: 1,
      explanation: "Amazon first reached $2 trillion in June 2024, so it took just over two years to add its third trillion dollars of market value.",
    },
  ],
  discussionQuestions: [
    "Does a round-number market cap milestone like $3 trillion carry any real investment significance, or is it purely symbolic? Defend your answer.",
    "Why might it take a company less time to go from $2 trillion to $3 trillion than it took to reach $1 trillion in the first place?",
    "How should an investor weigh a sell-side price target increase that comes right after a stock hits a record high?",
    "Compare Amazon's path to $3 trillion (cloud/AI-driven) to how you'd expect a company like Apple's to have gotten there. What does that say about how tech valuations are built in different ways?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Amazon's Cloud Business Just Had Its Best Quarter in Five Years",
      date: "2026-07-30",
      connection: "The direct cause of this milestone — the AWS earnings beat that kicked off the rally which culminated in Amazon crossing $3 trillion four days later.",
      internalSlug: "amazon-q2-aws-blowout-2026-07-30",
    },
    {
      title: "Microsoft Just Had Its Best Day Since 2008 — And Gained Almost $450 Billion",
      date: "2026-07-30",
      connection: "The same earnings night produced two of the market's biggest AI-driven winners — Microsoft's single-day record gain and Amazon's rally toward its own historic milestone days later.",
      internalSlug: "microsoft-record-market-cap-gain-2026-07-30",
    },
  ],
} as unknown as FlagshipComic;
