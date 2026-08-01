// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// copied verbatim from data.js, new Financial Storytelling fields authored
// below, fact-checked against the deepDive.facts/sources already ported.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "coinbase-earnings-miss-2026-07-30",
  "date": "2026-07-30",
  "title": "Coinbase Just Posted a $359 Million Loss — And Still Grew Its Market Share",
  "hook": "Coinbase's Q2 revenue and profit both missed Wall Street's targets for the third quarter in a row, even as the crypto exchange hit a record share of global trading volume.",
  "category": "Earnings & Crypto",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "Coinbase is the largest U.S.-based cryptocurrency exchange, and most of its revenue comes from fees it charges when customers buy, sell, or trade crypto — meaning its results are heavily tied to how much trading activity is happening across the crypto market as a whole, not just how well Coinbase itself is run. When crypto prices and trading volumes are booming, Coinbase tends to look great; when the broader crypto market cools off, its revenue can fall sharply even if the company isn't doing anything wrong operationally.",
    "On July 30, 2026, Coinbase reported its second-quarter results, and they landed during a rough stretch for crypto trading activity industrywide. The company missed Wall Street's revenue and profit targets for the third straight quarter, but also pointed to a genuinely strong result buried in the numbers: its share of global crypto trading volume hit a record high, meaning Coinbase is losing less business than its competitors even as the overall pie shrinks.",
  ],
  "panels": [
    {
      "scene": "Coinbase Q2 2026 earnings — July 30, 2026",
      "chars": [
        { "pose": "panic", "label": "COINBASE", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "Net loss: $359.5 million ($1.36 per share). Revenue: $1.2 billion, down from $1.5 billion a year ago — and below the $1.3 billion analysts expected.",
      "dialogue": [
        { "who": "COINBASE", "text": "Third straight quarter missing targets. Not the streak I wanted." },
        { "who": "TRADER", "text": "What happened to all that crypto trading volume?" },
      ],
    },
    {
      "scene": "The CFO explains",
      "chars": [{ "pose": "talking", "label": "COINBASE CFO", "side": "left" }],
      "caption": "Industrywide spot trading volumes fell more than 20%, and total crypto market value shrank double digits this quarter.",
      "dialogue": [
        { "who": "COINBASE CFO", "text": "It's not just us — the whole crypto market cooled off at once." },
      ],
    },
    {
      "scene": "The one bright spot",
      "chars": [
        { "pose": "celebrate", "label": "COINBASE", "side": "left" },
        { "pose": "neutral", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Coinbase hit a record 10.3% share of global crypto trading volume — even as the total market shrank.",
      "dialogue": [
        { "who": "COINBASE", "text": "Everyone's business got smaller. Mine shrank the least." },
        { "who": "ANALYST", "text": "Gaining share in a shrinking market is a real result. It's just not the headline number people look at first." },
      ],
    },
    {
      "scene": "After-hours trading",
      "chars": [{ "pose": "panic", "label": "COIN STOCK", "side": "left" }],
      "caption": "Shares fell 6.5% to $152.90 in after-hours trading.",
      "dialogue": [
        { "who": "COIN STOCK", "text": "Market share gains are nice. Missing estimates for a third straight quarter is what actually moves the price." },
      ],
    },
  ],
  "vocab": [
    { "term": "Trading volume", "def": "The total dollar amount of an asset (like a cryptocurrency) bought and sold over a given period. Exchanges like Coinbase earn fees based on this activity." },
    { "term": "Market share", "def": "The percentage of total activity in an industry that one company captures. Gaining share in a shrinking market means losing less than your competitors, not necessarily growing in absolute terms." },
    { "term": "Net loss", "def": "When a company's total expenses exceed its total revenue over a period, resulting in negative profit rather than positive earnings." },
    { "term": "After-hours trading", "def": "Trading that happens after the stock market's regular session closes, often driven by earnings reports released after the bell — prices here can differ meaningfully from the next day's official open." },
    { "term": "Crypto market capitalization", "def": "The total dollar value of all cryptocurrencies combined — a broad gauge of how much money is currently invested in crypto assets overall." },
  ],
  "sources": [
    { "label": "Coinbase shares fall after crypto exchange posts disappointing second-quarter results — CNBC", "url": "https://www.cnbc.com/2026/07/30/coinbase-coin-earnings-q2-2026.html" },
    { "label": "Coinbase Q2 2026 earnings miss: $359 million net loss — Yahoo Finance", "url": "https://finance.yahoo.com/markets/crypto/articles/coinbase-q2-2026-earnings-miss-144916215.html" },
    { "label": "Coinbase falls 6% after wider-than-expected Q2 loss, revenue miss — Yahoo Finance", "url": "https://finance.yahoo.com/markets/crypto/articles/coinbase-falls-6-wider-expected-214730512.html" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Coinbase reported a net loss of $359.5 million, or $1.36 per share, for the quarter ended June 30, 2026 — falling short of Wall Street's targets for the third consecutive quarter.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/crypto/articles/coinbase-q2-2026-earnings-miss-144916215.html" },
      { "text": "Revenue fell to $1.2 billion from $1.5 billion in the same quarter a year earlier, missing analyst estimates of roughly $1.3 billion.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/crypto/articles/coinbase-q2-2026-earnings-miss-144916215.html" },
      { "text": "Industrywide spot crypto trading volumes fell more than 20% (one report cites 25%) during the quarter, and total crypto market capitalization shrank by double digits (about 11%) quarter-over-quarter.", "source": "CNBC / Yahoo Finance", "url": "https://www.cnbc.com/2026/07/30/coinbase-coin-earnings-q2-2026.html" },
      { "text": "Despite the revenue miss, Coinbase reported a record 10.3% share of global crypto trading volume. Shares fell 6.53% to $152.90 in after-hours trading following the results.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/crypto/articles/coinbase-falls-6-wider-expected-214730512.html" },
    ],
    "analysis": [
      "Coinbase's results are a good lesson in why a single company's earnings miss doesn't always mean that company did something wrong. Because Coinbase mostly earns fees on trading activity, its revenue is directly exposed to how much the whole crypto market is trading — and this quarter, that market shrank across the board (volumes down 20%+, total market value down roughly 11%). A lot of Coinbase's miss is really a story about crypto-market conditions, not Coinbase-specific mismanagement.",
      "That's exactly why the market-share number matters, even though it didn't stop the stock from falling. Gaining share in a shrinking market — going from a smaller piece of a bigger pie to a bigger piece of a smaller pie — can still mean a company is executing well relative to competitors, even while its absolute revenue falls. Investors reacted to the headline miss anyway, a reminder that markets often price the number that's easiest to compare to a forecast, not the number that best explains the underlying business.",
      "Three consecutive quarters of missing targets is the more concerning pattern here for long-term investors, independent of any one quarter's excuses. A single miss can plausibly be blamed on market conditions; a third straight miss starts to raise questions about how much of Coinbase's revenue volatility is structural (tied to how crypto trading itself works) versus something the company could better manage or hedge against.",
      "For anyone studying this for an interview, Coinbase is a useful example of a 'volume-based' business model, similar in structure to a stock exchange or a payments processor — revenue scales with activity in the underlying market, for better and for worse. That's a meaningfully different risk profile than a subscription business (like Services revenue at Apple) or an advertising business (like Alphabet), and it's worth being able to name that distinction.",
    ],
  },
  "clubRelevance": {
    "pmc": "Whether Coinbase's market-share gains outweigh three straight quarters of missed targets is a real, debatable question about how to weigh relative performance against absolute results — a good PMC-style argument with real numbers on both sides.",
    "bta": "Equity research analysts covering Coinbase have to model crypto-market-wide trading volume, not just company-specific execution, and trading desks watched the stock reprice sharply in after-hours trading on the earnings release — a clean example of volume-driven business models and after-hours price action.",
    "wfa": "Explaining why a 'record market share' result and a 'stock price drop' can both be true at the same time is exactly the kind of nuanced, confident market storytelling WFA's Financial Literacy Committee prepares members to deliver in interviews.",
  },
} as const;

export const coinbaseEarningsMiss20260730Comic = {
  ...existingFields,

  professionalSummary:
    "Coinbase reported a Q2 2026 net loss of $359.5 million on revenue of $1.2 billion (down from $1.5 billion a year earlier), missing Wall Street's targets for the third consecutive quarter as industrywide crypto trading volumes fell more than 20% and total crypto market capitalization shrank roughly 11% quarter-over-quarter. Despite the miss, Coinbase achieved a record 10.3% share of global crypto trading volume, illustrating relative outperformance within a contracting market — shares still fell 6.53% to $152.90 in after-hours trading as investors weighted the headline miss over the share gain.",
  thirtySecondSummary:
    "Coinbase lost $359 million and missed revenue targets for the third straight quarter, mostly because the whole crypto market slowed down. But it also grabbed a record share of global crypto trading — meaning it's losing less business than its rivals. The stock fell anyway.",
  eli5Summary:
    "Coinbase makes money mainly from fees when people trade crypto. This past quarter, way fewer people were trading crypto everywhere, so Coinbase made less money and lost more than expected — that's happened three quarters in a row now. But here's the twist: even though the whole crypto-trading pie got smaller, Coinbase's slice of that pie got bigger than ever. It's like a lemonade stand doing better than its neighbors on a rainy week when nobody's buying much lemonade — that's real progress, but it still didn't stop investors from being unhappy about the loss.",
  timeline: [
    {
      date: "July 30, 2026",
      label: "Coinbase reports Q2 2026 results",
      detail: "Net loss of $359.5 million and revenue of $1.2 billion, both missing Wall Street's targets for the third straight quarter.",
    },
    {
      date: "July 30, 2026",
      label: "CFO cites industrywide slowdown",
      detail: "Spot crypto trading volumes fell more than 20% industrywide; total crypto market cap shrank about 11% quarter-over-quarter.",
    },
    {
      date: "July 30, 2026",
      label: "Record market share revealed",
      detail: "Coinbase reports a record 10.3% share of global crypto trading volume, even as the overall market contracted.",
    },
    {
      date: "July 30, 2026 (after-hours)",
      label: "Shares fall 6.5%",
      detail: "COIN shares drop to $152.90 in after-hours trading as investors focus on the earnings miss.",
    },
  ],
  bullCase: [
    {
      point: "Gaining record market share in a shrinking market is genuine evidence of competitive strength.",
      support: "Coinbase's 10.3% share of global crypto trading volume is a record, meaning it's taking business from competitors even while the entire market contracts — a sign of relative execution quality, not weakness.",
    },
    {
      point: "Much of the revenue miss is attributable to industrywide conditions, not Coinbase-specific problems.",
      support: "Spot trading volumes fell more than 20% and total crypto market cap fell roughly 11% across the whole industry — a volume-based business will naturally see revenue swing with conditions largely outside its control.",
    },
    {
      point: "A rebound in crypto trading activity would flow disproportionately to the company with the largest market share.",
      support: "If crypto markets recover, Coinbase's record share position means it's structurally positioned to capture an outsized share of any recovery in industrywide trading volume.",
    },
  ],
  bearCase: [
    {
      point: "Three consecutive quarters of missed targets is a pattern, not a one-off.",
      support: "A single miss can be explained by market conditions; a third straight miss raises legitimate questions about how well the business can perform even in a difficult trading environment.",
    },
    {
      point: "Coinbase's revenue is structurally exposed to a volatile, cyclical industry it doesn't control.",
      support: "As a volume-based business, Coinbase's results will keep swinging with crypto market conditions — investors betting on steady growth need to accept this cyclicality as a permanent feature, not a temporary issue.",
    },
    {
      point: "Market share gains don't pay the bills — the company still posted a $359.5 million net loss.",
      support: "A larger slice of a shrinking pie is still a real financial loss today; the market-share story is a reason for optimism about relative positioning, not a substitute for actual profitability.",
    },
  ],
  longTermView:
    "Coinbase's results this quarter split into two genuinely separate questions for long-term investors. The first is cyclical: crypto trading volumes ebb and flow, and a 20%+ industrywide volume decline is the kind of swing that can reverse just as quickly as it appeared, especially if crypto prices recover. The second is competitive: does Coinbase's record 10.3% market share reflect a durable structural advantage (better product, more trust, regulatory positioning) or a temporary blip? If the market-share gain is durable, Coinbase is better positioned than ever to benefit from any future upswing in crypto trading — meaning this quarter's loss might be the cost of holding position through a rough patch rather than a sign of a broken business. Investors should watch whether the market-share gains persist into a recovery, not just during a downturn, before concluding which story is the right one.",
  quiz: [
    {
      question: "How much was Coinbase's net loss for Q2 2026?",
      options: ["$35.9 million", "$135 million", "$359.5 million", "$1.2 billion"],
      correctIndex: 2,
      explanation: "Coinbase reported a net loss of $359.5 million, or $1.36 per share, for the quarter.",
    },
    {
      question: "What was the main industrywide factor behind Coinbase's revenue miss?",
      options: [
        "A new SEC regulation banning crypto trading",
        "Spot crypto trading volumes fell more than 20% industrywide",
        "Coinbase lost its banking license",
        "A competitor undercut all its fees to zero",
      ],
      correctIndex: 1,
      explanation: "Industrywide spot trading volumes fell more than 20%, and total crypto market capitalization shrank roughly 11% quarter-over-quarter — a market-wide slowdown, not a Coinbase-specific failure.",
    },
    {
      question: "What was the one clearly positive result buried in Coinbase's earnings?",
      options: [
        "A surprise profit",
        "A record 10.3% share of global crypto trading volume",
        "A new stock buyback program",
        "A big new bank partnership",
      ],
      correctIndex: 1,
      explanation: "Despite the revenue miss, Coinbase achieved a record 10.3% share of global crypto trading volume, meaning it lost less business than its competitors during the industry-wide slowdown.",
    },
    {
      question: "How did COIN stock react after the earnings release?",
      options: ["Rose 6.5%", "Fell 6.5% in after-hours trading", "Was unchanged", "Was halted for volatility"],
      correctIndex: 1,
      explanation: "Shares fell 6.53% to $152.90 in after-hours trading as investors focused on the earnings miss over the market-share gain.",
    },
    {
      question: "Why is Coinbase's revenue described as 'volume-based'?",
      options: [
        "It sells products by the pound",
        "Its revenue mostly comes from fees on crypto trading activity, so it rises and falls with how much trading is happening",
        "It only reports revenue once a year",
        "It has no recurring revenue at all",
      ],
      correctIndex: 1,
      explanation: "Coinbase earns most of its revenue from trading fees, so its results are directly tied to how much crypto trading activity is happening across the market, similar to an exchange or payments processor.",
    },
  ],
  discussionQuestions: [
    "Should investors weigh Coinbase's record market share more heavily than its third consecutive earnings miss? How would you decide?",
    "How is Coinbase's 'volume-based' business model different in risk profile from a subscription business like Apple's Services segment?",
    "If crypto trading volumes recover next quarter, how much of that recovery do you think flows to Coinbase specifically, given its market-share gains?",
    "What would three more consecutive quarters of misses tell you that three quarters alone doesn't?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Apple Beat Every Estimate. Its Stock Still Crashed 7%.",
      date: "2026-07-31",
      connection: "Both stories show a headline number (Apple's beat, Coinbase's market-share record) failing to protect a stock once investors focus on a different, more concerning detail.",
      internalSlug: "apple-earnings-services-china-miss-2026-07-31",
    },
    {
      title: "China Built Its Own Chip-Making Machine — and Asia's Markets Panicked",
      date: "2026-07-28",
      connection: "Part of the same week's pattern of markets reacting sharply to competitive and cyclical signals across very different sectors.",
      internalSlug: "china-duv-chip-selloff-2026-07-28",
    },
  ],
} as unknown as FlagshipComic;
