// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh, fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "chevron-record-profit-war-premium-2026-07-31",
  "date": "2026-07-31",
  "title": "The Same War That Crashed Oil for Everyone Else Just Gave Chevron Its Best Quarter in 6 Years",
  "hook": "While this site covered how the U.S.-Iran conflict whipsawed oil prices for consumers and traders, Chevron was busy posting its highest quarterly profit in at least six years — the other side of the same story.",
  "category": "Earnings & Energy",
  "clubs": ["bta", "pmc", "maa"],
  "backstory": [
    "This site has covered the U.S.-Iran conflict's effect on oil prices from the trader's and consumer's side: a ceasefire crashed prices, resumed strikes spiked them back up. But elevated war-driven oil prices and refining margins aren't just a cost for consumers and a risk for traders — they're direct revenue for companies that produce and refine oil. Chevron is one of the largest.",
    "On Friday, July 31, 2026, Chevron reported second-quarter results showing $12.1 billion in net income — its highest quarterly profit in at least six years — as war-driven oil prices and refining margins ran elevated through the quarter, combined with record U.S. production and 20% higher worldwide production year over year.",
  ],
  "panels": [
    {
      "scene": "Recap: the same conflict, two very different reactions",
      "chars": [
        { "pose": "panic", "label": "OIL TRADER", "side": "left" },
        { "pose": "celebrate", "label": "CHEVRON", "side": "right" },
      ],
      "caption": "The U.S.-Iran conflict whipsawed oil prices for traders all summer. For an oil producer, elevated prices are simply revenue.",
      "dialogue": [
        { "who": "OIL TRADER", "text": "This volatility has been exhausting to trade." },
        { "who": "CHEVRON", "text": "I've just been quietly pumping and refining through all of it." },
      ],
    },
    {
      "scene": "Chevron's Q2 earnings — Friday, July 31",
      "chars": [
        { "pose": "celebrate", "label": "CHEVRON", "side": "left" },
        { "pose": "shocked", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Net income: $12.1 billion — Chevron's highest quarterly profit in at least six years. Adjusted EPS: $6.06 vs. $5.56 expected.",
      "dialogue": [
        { "who": "ANALYST", "text": "Best quarter in six years, during a war that's been crushing everyone else's forecasts?" },
        { "who": "CHEVRON", "text": "Elevated oil prices and refining margins will do that." },
      ],
    },
    {
      "scene": "The production side of the story",
      "chars": [{ "pose": "pointing", "label": "CHEVRON", "side": "left" }],
      "caption": "Worldwide production rose 20% year-over-year, with record U.S. production — volume growth on top of higher prices.",
      "dialogue": [
        { "who": "CHEVRON", "text": "It's not just that prices were high — we pumped more oil than ever, too." },
      ],
    },
    {
      "scene": "Whiteboard recap",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "Same war, opposite exposure: consumers and importers pay more; oil producers earn more.",
      "dialogue": [
        { "who": "NARRATOR", "text": "Every commodity price move has a winner and a loser — you just have to know which side of the trade a company sits on." },
      ],
    },
  ],
  "vocab": [
    { "term": "Refining margin (crack spread)", "def": "The profit a refiner earns from turning crude oil into finished products like gasoline and diesel — the difference between what it pays for crude and what it sells refined products for. Refining margins can move independently of crude oil prices themselves." },
    { "term": "War premium", "def": "The portion of a commodity's price that reflects fear of supply disruption from conflict, on top of pure supply-and-demand pricing — a cost for buyers, but revenue for sellers holding the underlying commodity." },
    { "term": "Upstream / downstream", "def": "Oil industry terms for different parts of the business: upstream is exploration and production (finding and pumping oil); downstream is refining and marketing (turning crude into usable products and selling them)." },
    { "term": "Net income", "def": "A company's total profit after all expenses, taxes, and costs are subtracted from revenue — the 'bottom line' figure investors watch most closely each earnings season." },
  ],
  "sources": [
    { "label": "Chevron Earnings Surpasses Forecasts on War-Driven Price Rally — Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-07-31/chevron-profit-surpasses-forecasts-on-war-driven-price-rally" },
    { "label": "Chevron Q2 2026 earnings: highest profit in six years — Quartz", "url": "https://qz.com/chevron-q2-2026-earnings-profit-iran-war-oil-prices-073126" },
    { "label": "Chevron Reports Second Quarter 2026 Results — Yahoo Finance", "url": "https://finance.yahoo.com/energy/articles/chevron-reports-second-quarter-2026-101500197.html" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Chevron reported Q2 2026 net income of $12.1 billion ($6.11 diluted EPS); adjusted earnings were $12.0 billion, or $6.06 per share, beating the Wall Street consensus of $5.56.", "source": "Bloomberg / Yahoo Finance", "url": "https://finance.yahoo.com/energy/articles/chevron-reports-second-quarter-2026-101500197.html" },
      { "text": "Revenue of $70.06 billion also topped Street forecasts.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/energy/articles/chevron-reports-second-quarter-2026-101500197.html" },
      { "text": "The $12.1 billion quarterly profit was Chevron's highest in at least six years, driven by the U.S.-Israeli conflict with Iran pushing oil prices and refining margins to elevated levels.", "source": "Quartz", "url": "https://qz.com/chevron-q2-2026-earnings-profit-iran-war-oil-prices-073126" },
      { "text": "Chevron achieved record U.S. production, with worldwide production up 20% year over year.", "source": "Quartz", "url": "https://qz.com/chevron-q2-2026-earnings-profit-iran-war-oil-prices-073126" },
    ],
    "analysis": [
      "This comic is best read as a direct companion to the Iran/oil comics already on this site: the same conflict that crashed oil on a ceasefire, spiked it on resumed strikes, and crashed it again on a called-off strike created exactly the kind of elevated, volatile pricing environment that benefits an integrated oil producer's bottom line, even as it created headaches for traders and consumers.",
      "The production growth detail (20% worldwide, record U.S. output) matters because it separates two distinct sources of Chevron's record profit: higher prices per barrel, and more barrels sold. A company benefiting purely from price would be more exposed if the war premium unwinds; Chevron's volume growth provides a cushion that doesn't depend on elevated prices persisting.",
      "This is a useful, concrete example of how the same macro event can be simultaneously bad news (for consumers, importers, and companies with high fuel costs) and good news (for producers) depending entirely on which side of the trade a company or person sits on — a distinction worth internalizing before assuming any single 'war is bad for markets' narrative applies uniformly.",
    ],
  },
  "clubRelevance": {
    "bta": "A clean example of how the same commodity-price volatility that trading desks find stressful is, for a producer, simply favorable pricing — useful context for understanding commodity exposure across different types of companies.",
    "pmc": "Raises a genuinely useful portfolio construction question: energy producers can act as a natural hedge against geopolitical-risk-driven oil spikes elsewhere in a portfolio.",
    "maa": "Elevated refining margins and record production are exactly the kind of operating metrics that shape how energy-sector M&A and valuation work gets done — relevant context for anyone modeling an oil major.",
  },
} as const;

export const chevronRecordProfitWarPremium20260731Comic = {
  ...existingFields,

  professionalSummary:
    "Chevron reported Q2 2026 net income of $12.1 billion ($6.11 diluted EPS), its highest quarterly profit in at least six years, with adjusted EPS of $6.06 beating the $5.56 consensus and revenue of $70.06 billion topping forecasts. The results were driven by the U.S.-Israeli conflict with Iran pushing oil prices and refining margins to elevated levels, combined with record U.S. production and 20% higher worldwide production year over year. The results illustrate the flip side of the same Iran-driven oil volatility covered elsewhere on this site from the trader's and consumer's perspective.",
  thirtySecondSummary:
    "The same U.S.-Iran conflict that's been whipsawing oil prices for traders and consumers all summer gave Chevron its best quarter in six years. Elevated war-driven oil prices, strong refining margins, and record production combined for $12.1 billion in profit — proof that the same event can hurt some players and help others.",
  eli5Summary:
    "Remember how the fighting between the U.S. and Iran kept making oil prices jump around this summer? That was stressful for people who buy oil or trade it — but for Chevron, a company that actually pumps and sells oil, higher oil prices during that time just meant more money. Chevron made more profit in this one quarter than it has in any quarter in at least six years, partly because of higher prices and partly because it pumped a record amount of oil.",
  timeline: [
    {
      date: "Throughout Q2 2026",
      label: "War-driven oil price volatility",
      detail: "The U.S.-Iran conflict pushes oil prices and refining margins to elevated levels through the quarter.",
    },
    {
      date: "July 31, 2026",
      label: "Chevron reports Q2 results",
      detail: "Net income of $12.1 billion, its highest quarterly profit in at least six years, beats analyst estimates.",
    },
    {
      date: "July 31, 2026",
      label: "Production details disclosed",
      detail: "Chevron reports record U.S. production and 20% higher worldwide production year over year.",
    },
  ],
  bullCase: [
    {
      point: "Record production growth means Chevron's profit isn't purely dependent on elevated war-driven prices persisting.",
      support: "A 20% increase in worldwide production and record U.S. output provide a volume-based profit cushion independent of whether oil prices stay elevated.",
    },
    {
      point: "Energy producers can serve as a natural portfolio hedge against the same geopolitical risks that hurt other sectors.",
      support: "As shown this quarter, the same conflict that pressures airlines, shipping, and consumer spending directly benefits an integrated oil major's bottom line.",
    },
  ],
  bearCase: [
    {
      point: "A meaningful share of this quarter's record profit depends on war-driven pricing that could reverse quickly.",
      support: "This site has already covered oil prices swinging sharply multiple times in weeks on this same conflict — if a durable resolution is reached, some of the elevated margin could disappear just as fast as it appeared.",
    },
    {
      point: "Relying on geopolitical volatility for record results makes forward guidance and valuation more uncertain than a demand-driven profit story.",
      support: "Investors modeling Chevron's future earnings have to make a judgment call on how much of this quarter's profit is repeatable versus a one-time war-premium windfall.",
    },
  ],
  longTermView:
    "The key question for Chevron investors is how much of this record profit is durable production and margin improvement versus a temporary war-premium windfall that could unwind if the Iran conflict reaches a lasting resolution. The 20% production growth and record U.S. output are the more durable, controllable part of the story; the elevated pricing and refining margins are the more volatile, geopolitically-dependent part. Investors should track whether Chevron's production gains hold up in a lower-price environment, which would be a better test of the underlying business than a single war-driven quarter.",
  quiz: [
    {
      question: "What was Chevron's Q2 2026 net income, and how did it compare historically?",
      options: [
        "$3 billion, a multi-year low",
        "$12.1 billion, its highest quarterly profit in at least six years",
        "$50 billion, an all-time record",
        "Roughly flat with the prior quarter",
      ],
      correctIndex: 1,
      explanation: "Chevron reported $12.1 billion in net income, its highest quarterly profit in at least six years.",
    },
    {
      question: "What was the main driver behind Chevron's record profit?",
      options: [
        "A major cost-cutting program",
        "War-driven elevated oil prices and refining margins, plus record production",
        "A one-time asset sale",
        "A change in accounting method",
      ],
      correctIndex: 1,
      explanation: "The U.S.-Iran conflict pushed oil prices and refining margins to elevated levels, combined with record U.S. production and 20% higher worldwide production.",
    },
    {
      question: "How does elevated war-driven oil pricing typically affect an oil producer differently than a consumer or importer?",
      options: [
        "It affects both identically",
        "It's revenue for a producer but a cost for consumers/importers",
        "It has no effect on producers",
        "It only affects refiners, not producers",
      ],
      correctIndex: 1,
      explanation: "Higher oil prices are direct revenue for a company that produces and sells oil, while they're a cost for consumers, importers, and companies with high fuel expenses.",
    },
    {
      question: "By how much did Chevron's worldwide production grow year-over-year?",
      options: ["5%", "10%", "20%", "50%"],
      correctIndex: 2,
      explanation: "Chevron reported worldwide production up 20% year over year, alongside record U.S. production.",
    },
  ],
  discussionQuestions: [
    "Name another company or sector that would benefit from the same war-driven oil price volatility that hurt oil traders and consumers this summer.",
    "How should an investor decide how much of Chevron's record profit to treat as repeatable versus a one-time windfall?",
    "If you were building a diversified portfolio, would you want energy-producer exposure specifically as a hedge against geopolitical oil-price risk? Why or why not?",
    "Compare this quarter's profit drivers (price vs. volume) — which do you think matters more for valuing Chevron over the next several years?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Trump Called Off a Planned Iran Strike. Oil Crashed Almost 7%.",
      date: "2026-08-03",
      connection: "The same underlying conflict driving Chevron's record profit here is the one whose de-escalation, days later, crashed the oil prices that had been elevating Chevron's margins.",
      internalSlug: "iran-strike-called-off-oil-crash-2026-08-03",
    },
    {
      title: "The Oil Ceasefire Lasted Two Days",
      date: "2026-07-29",
      connection: "Shows the trader's and consumer's side of the same volatility that, from Chevron's side as a producer, translated into a record profit quarter.",
      internalSlug: "iran-strikes-resume-oil-spikes-2026-07-29",
    },
  ],
} as unknown as FlagshipComic;
