// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// copied verbatim from data.js, new Financial Storytelling fields authored
// below, fact-checked against the deepDive.facts/sources already ported.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "apple-earnings-services-china-miss-2026-07-31",
  "date": "2026-07-31",
  "title": "Apple Beat Every Estimate. Its Stock Still Crashed 7%.",
  "hook": "Apple topped Wall Street's earnings and revenue targets — but Services and China came up short, and the stock was on pace to lose nearly $500 billion in value.",
  "category": "Earnings & Big Tech",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "Apple reports its financial results four times a year, and its fiscal third quarter (covering roughly April through June) is one investors watch closely for two reasons beyond iPhone sales: Services revenue (subscriptions, App Store fees, advertising, and warranties — a higher-margin, recurring business Apple has leaned on for growth) and Greater China revenue (a huge, closely watched market where Apple faces intense local competition). When Apple reports, Wall Street isn't just grading the headline numbers — it's grading these specific growth stories.",
    "On Thursday, July 30, 2026, Apple beat analysts' overall earnings and revenue targets, driven by strong iPhone sales. But both Services and Greater China came in below expectations, and Apple's guidance for the next quarter was weaker than expected. The stock cratered anyway — the second time this earnings season a company has beaten estimates and still gotten punished (an earlier comic on this site covered the same pattern with Alphabet and Tesla).",
  ],
  "panels": [
    {
      "scene": "Apple's fiscal Q3 earnings call — Thursday, July 30",
      "chars": [
        { "pose": "celebrate", "label": "APPLE", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "EPS: $2.02 vs. $1.89 expected. Revenue: $109.4 billion vs. $108.8 billion expected.",
      "dialogue": [
        { "who": "APPLE", "text": "Beat on both lines! iPhone sales carried us." },
        { "who": "TRADER", "text": "Great, another easy up day for the stock, right?" },
      ],
    },
    {
      "scene": "Two minutes later, deeper in the numbers",
      "chars": [
        { "pose": "shocked", "label": "APPLE", "side": "left" },
        { "pose": "talking", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Services revenue: $30.74B, missed the $31.22B estimate. Greater China revenue: $18.8B, missed the $19.5B estimate.",
      "dialogue": [
        { "who": "ANALYST", "text": "Wait — your two most-watched growth stories both came up short?" },
        { "who": "APPLE", "text": "...yes." },
      ],
    },
    {
      "scene": "The guidance drops",
      "chars": [
        { "pose": "panic", "label": "APPLE", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "Apple guided next quarter's revenue growth to 9%–11% — below the 12%+ Wall Street expected — citing component shortages.",
      "dialogue": [
        { "who": "APPLE", "text": "We might not have enough parts to build everything people want to buy." },
        { "who": "TRADER", "text": "That's... not the sentence investors wanted to hear." },
      ],
    },
    {
      "scene": "Friday morning, premarket",
      "chars": [{ "pose": "panic", "label": "APPLE STOCK", "side": "left" }],
      "caption": "Apple shares sank more than 7% in premarket trading Friday — on pace to erase nearly $500 billion in market value.",
      "dialogue": [
        { "who": "APPLE STOCK", "text": "I beat estimates yesterday. Today I'm having one of my worst days in over a year." },
      ],
    },
    {
      "scene": "Whiteboard recap",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "Second time this earnings season a 'beat' quarter has tanked a stock — this site covered the same pattern with Alphabet and Tesla back in July.",
      "dialogue": [
        { "who": "NARRATOR", "text": "A beat only protects a stock if investors trust what happens next. Right now, they don't." },
      ],
    },
  ],
  "vocab": [
    { "term": "Services revenue", "def": "Money a company earns from ongoing digital offerings — subscriptions, App Store fees, advertising, warranties — rather than from selling physical devices. Usually higher-margin and more predictable than hardware sales." },
    { "term": "Guidance", "def": "A company's own forecast of its future results, given to investors. Markets often react more to a change in guidance than to the quarter that just ended." },
    { "term": "Component shortage", "def": "When a company can't get enough of the parts (chips, displays, etc.) it needs to manufacture as many products as it wants to sell, limiting how much revenue it can book even with strong demand." },
    { "term": "Market value (market cap)", "def": "A company's total stock-market value — share price times shares outstanding. Even a modest percentage decline can equal tens or hundreds of billions of dollars for a company Apple's size." },
    { "term": "Greater China", "def": "A reporting segment covering mainland China, Hong Kong, and Taiwan — one of Apple's largest and most closely watched international markets." },
  ],
  "sources": [
    { "label": "Apple Beats Earnings, but Services, China Disappoint — Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/apple-beats-earnings-services-china-204434887.html" },
    { "label": "Apple set to lose nearly $500 billion in value after weak forecast — BNN Bloomberg", "url": "https://www.bnnbloomberg.ca/business/2026/07/31/apple-set-to-lose-nearly-500-billion-in-value-after-weak-forecast/" },
    { "label": "Apple Stock Is Sinking Friday: What's Going On? — Benzinga", "url": "https://www.benzinga.com/analyst-stock-ratings/analyst-color/26/07/60830088/apple-stock-is-sinking-friday-whats-going-on" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Apple reported fiscal Q3 2026 EPS of $2.02 on revenue of $109.4 billion, ahead of the $1.89 EPS and $108.8 billion in revenue analysts expected, driven by strong iPhone sales.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/apple-beats-earnings-services-china-204434887.html" },
      { "text": "Services revenue came in at $30.74 billion, missing the $31.22 billion analysts expected. Greater China revenue was $18.8 billion, below the $19.5 billion estimate.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/apple-beats-earnings-services-china-204434887.html" },
      { "text": "Apple guided fiscal Q4 revenue growth of 9%–11%, below the more than 12% growth analysts had forecast, citing component shortages weighing on its sales outlook.", "source": "Bloomberg / Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/apple-beats-earnings-services-china-204434887.html" },
      { "text": "Apple shares fell more than 7% in premarket trading Friday, July 31, putting the company on pace to lose nearly $500 billion in market value.", "source": "BNN Bloomberg", "url": "https://www.bnnbloomberg.ca/business/2026/07/31/apple-set-to-lose-nearly-500-billion-in-value-after-weak-forecast/" },
    ],
    "analysis": [
      "This is the second time this earnings season this exact pattern has shown up on this site: a company beats Wall Street's headline numbers and still gets sold off hard, because investors are grading something more specific than 'did they hit the number.' With Alphabet and Tesla in late July, the issue was future spending plans. With Apple, it's segment-level misses (Services, China) and forward guidance — different mechanics, same lesson: a 'beat' headline doesn't automatically protect a stock.",
      "Services and China matter disproportionately to how investors value Apple precisely because they're the parts of the story that aren't just 'how many iPhones did you sell this quarter.' Services is higher-margin and recurring — it's a big part of why Apple trades at the valuation it does, not just as a hardware maker. China is both a huge growth market and a barometer of how much local competition and geopolitical friction are eating into Apple's position there. A miss in either raises harder, longer-term questions than an iPhone-sales miss would.",
      "The guidance cut is arguably the most consequential single data point here: 9%–11% expected growth next quarter, versus the 12%+ Wall Street had modeled, tied to component shortages. That's a forward-looking constraint — a signal that even strong demand might not translate into strong revenue if Apple physically can't build enough product, a different and arguably harder problem to fix than a one-quarter demand miss.",
      "The 'nearly $500 billion in value' framing is worth sitting with for scale: a ~7% move in a company as large as Apple erases an amount of market value larger than the entire market capitalization of most S&P 500 companies. It's a useful, concrete way to explain why percentage moves in mega-cap stocks matter so much more in dollar terms than the same percentage move almost anywhere else in the market.",
    ],
  },
  "clubRelevance": {
    "pmc": "Whether this is a one-quarter stumble or the start of a more serious Services/China growth problem is a genuinely debatable question worth arguing both sides of — exactly the format PMC discussions are built around, and it pairs naturally with the Alphabet/Tesla 'beat but stock fell' comic already on this site.",
    "bta": "Equity research analysts had to immediately re-cut their Services and China revenue models same-day, and trading desks handled enormous volume as the stock repriced nearly $500 billion in value in a single session — a clean, current example of fast-moving sell-side and trading-desk work.",
    "wfa": "This is a second, ready-made real example for the classic 'walk me through a stock that beat estimates but still sold off' interview question — and it teaches the deeper skill of looking past the headline EPS/revenue beat to the segment-level and guidance details that actually drove the reaction.",
  },
} as const;

export const appleEarningsServicesChinaMiss20260731Comic = {
  ...existingFields,

  professionalSummary:
    "Apple's fiscal Q3 2026 results beat headline estimates (EPS $2.02 vs. $1.89 expected; revenue $109.4B vs. $108.8B expected) on strong iPhone sales, but Services ($30.74B vs. $31.22B expected) and Greater China ($18.8B vs. $19.5B expected) both missed, and fiscal Q4 guidance of 9%–11% revenue growth — citing component shortages — fell short of the 12%+ Wall Street had modeled. Shares fell more than 7% in premarket trading Friday, putting Apple on pace to lose nearly $500 billion in market value, making it the second beat-but-selloff earnings reaction covered on this site in the same season.",
  thirtySecondSummary:
    "Apple beat Wall Street's overall earnings and revenue targets, but its two most closely watched growth stories — Services and China — both came up short, and next quarter's forecast was weaker than expected due to parts shortages. The stock fell more than 7% anyway, erasing close to $500 billion in value.",
  eli5Summary:
    "Apple made more money than people expected overall — but two of the specific things investors care most about (its subscription-and-services business, and its sales in China) came in a little lower than hoped. Apple also warned it might not have enough parts to build as much as it wants to sell next quarter. Even though the overall report was good, those two problems worried investors enough that the stock price dropped a lot the next morning.",
  timeline: [
    {
      date: "July 30, 2026",
      label: "Apple reports fiscal Q3 earnings",
      detail: "Apple beats overall EPS and revenue estimates on strong iPhone sales, but Services and Greater China revenue both miss expectations.",
    },
    {
      date: "July 30, 2026",
      label: "Weak Q4 guidance cites component shortages",
      detail: "Apple guides next quarter's revenue growth to 9%–11%, below the 12%+ analysts had forecast.",
    },
    {
      date: "July 31, 2026",
      label: "Shares sink more than 7% premarket",
      detail: "Apple stock falls sharply in premarket trading, on pace to erase nearly $500 billion in market value.",
    },
  ],
  bullCase: [
    {
      point: "The headline beat shows Apple's core hardware business remains genuinely strong.",
      support: "iPhone sales drove EPS and revenue above expectations even in a quarter with real headwinds — the underlying demand story hasn't broken.",
    },
    {
      point: "Component shortages are a supply problem, not a demand problem.",
      support: "A guidance cut tied to not being able to build enough product is a fundamentally different (and often more fixable) issue than a guidance cut because customers don't want to buy — it points to potential upside once supply catches up.",
    },
    {
      point: "A single quarter's Services/China miss doesn't necessarily reflect a structural decline in either business.",
      support: "Both segments have had strong multi-year growth trends; one quarter below estimates is not automatically evidence the growth story is broken, especially against tough prior comparisons.",
    },
  ],
  bearCase: [
    {
      point: "Services and China misses hit exactly the two growth stories that justify Apple's premium valuation.",
      support: "Investors pay up for Apple partly because Services is high-margin and recurring and China is a major growth market — misses in both raise real questions about the durability of that growth narrative.",
    },
    {
      point: "A forward guidance cut is more informative than a backward-looking beat.",
      support: "Markets price in the future; a weaker outlook for the very next quarter, tied to a supply constraint that may not resolve quickly, is a more consequential signal than one quarter of already-known results.",
    },
    {
      point: "A ~$500 billion market-value swing on a single earnings report reflects real, not overblown, investor concern.",
      support: "Moves of this size in a company Apple's size don't happen on minor news — the market is treating the Services/China/guidance combination as a genuine reassessment, not a knee-jerk overreaction.",
    },
  ],
  longTermView:
    "The headline 'beat' obscures the more important question for long-term Apple investors: are Services and China temporarily soft, or is this the start of a slower growth phase in the two businesses that have carried Apple's valuation beyond a pure hardware multiple? The component-shortage guidance cut adds a second, related question — how quickly can Apple's supply chain catch up to demand, and does a planned iPhone price increase (noted alongside the shortage concerns) risk demand destruction on top of a supply constraint? Investors who believe both issues are transitory may see the ~7% drop as an entry point into a company that just posted a genuine EPS and revenue beat; investors who see this as the start of a slower-growth Apple will want to watch the next one or two quarters' Services and China numbers specifically, not just the headline EPS line, before drawing conclusions.",
  quiz: [
    {
      question: "Did Apple beat or miss Wall Street's overall EPS and revenue estimates for fiscal Q3 2026?",
      options: ["Missed both", "Beat both", "Beat EPS, missed revenue", "Missed EPS, beat revenue"],
      correctIndex: 1,
      explanation: "Apple reported EPS of $2.02 (vs. $1.89 expected) and revenue of $109.4 billion (vs. $108.8 billion expected) — a beat on both headline numbers.",
    },
    {
      question: "Which two segments came in below analyst expectations?",
      options: ["iPhone and Mac", "Services and Greater China", "Wearables and iPad", "App Store and Advertising"],
      correctIndex: 1,
      explanation: "Services revenue ($30.74B vs. $31.22B expected) and Greater China revenue ($18.8B vs. $19.5B expected) both missed estimates.",
    },
    {
      question: "What did Apple cite as the reason for its weaker-than-expected Q4 guidance?",
      options: ["Falling iPhone demand", "A new tariff", "Component shortages", "A CEO transition"],
      correctIndex: 2,
      explanation: "Apple guided fiscal Q4 revenue growth to 9%–11%, below the 12%+ analysts expected, citing component shortages limiting how much it can build.",
    },
    {
      question: "Roughly how much market value was Apple on pace to lose after the selloff began?",
      options: ["About $50 billion", "About $150 billion", "Nearly $500 billion", "Over $2 trillion"],
      correctIndex: 2,
      explanation: "With shares down more than 7% in premarket trading, Apple was on pace to lose nearly $500 billion in market value.",
    },
    {
      question: "Why does a 'guidance' change often move a stock more than the quarter that just ended?",
      options: [
        "Guidance is legally binding, past results are not",
        "Markets price in expectations about the future, not just past results",
        "Guidance is always more accurate than actual results",
        "It doesn't — past results always matter more",
      ],
      correctIndex: 1,
      explanation: "Stock prices reflect expectations about future performance, so a weaker outlook for the next quarter can move a stock more than results from the quarter that already happened.",
    },
  ],
  discussionQuestions: [
    "Is it rational for Apple stock to fall 7%+ on a quarter where it beat both EPS and revenue estimates? Defend your answer.",
    "Which matters more to Apple's long-term valuation: the Services miss or the China miss? Why?",
    "How should investors distinguish between a supply-side guidance cut (component shortages) and a demand-side one (weak sales)?",
    "If you were pitching Apple in an IPO Investing or PMC-style meeting, would you treat this quarter as a buying opportunity or a warning sign? What would change your answer?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Tesla and Alphabet Just Lost Hundreds of Billions — On Purpose?",
      date: "2026-07-23",
      connection: "The same 'beat and raise, stock still sells off' or 'beat but guide weaker' pattern — different specific mechanics, same core lesson about markets pricing the future over the past.",
      internalSlug: "ai-capex-selloff-2026-07-23",
    },
    {
      title: "Coinbase Just Posted a $359 Million Loss — And Still Grew Its Market Share",
      date: "2026-07-30",
      connection: "Another same-week earnings reaction where the headline number didn't tell the full story — Coinbase's market-share gain was real progress that still didn't stop a selloff.",
      internalSlug: "coinbase-earnings-miss-2026-07-30",
    },
  ],
} as unknown as FlagshipComic;
