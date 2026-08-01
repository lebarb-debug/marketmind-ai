// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh (not ported from data.js — this comic didn't exist there),
// fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "meta-q2-earnings-miss-capex-2026-07-30",
  "date": "2026-07-30",
  "title": "Meta Sank 8% the Same Night Microsoft Gained $450 Billion",
  "hook": "Meta missed Wall Street's earnings estimate badly, driven by one-time legal and severance charges — and raised its AI spending guidance to as much as $145 billion, splitting investors on whether that's a warning sign or a promise.",
  "category": "Earnings & Big Tech",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "Meta has spent 2025 and 2026 pouring tens of billions of dollars into AI infrastructure — data centers, chips, and research talent — betting that the spending will eventually pay off in better ad targeting, new AI products, and other future revenue. Wall Street has been divided on this bet since it began: some investors see it as necessary long-term investment, others worry it's spending without a clear near-term payoff, squeezing profit margins along the way.",
    "On Thursday, July 30, 2026 — the same night Microsoft posted its best day since 2008 on strong AI-driven cloud results — Meta reported second-quarter earnings that missed estimates badly on the bottom line, driven largely by one-time legal and severance charges, and raised its full-year capital expenditure guidance to as much as $145 billion. The stock fell nearly 8% as investors weighed a real earnings miss against a revenue number that actually beat expectations, in what CNBC described as the 'AI trade' splitting in two different directions on the same earnings night.",
  ],
  "panels": [
    {
      "scene": "Meta's Q2 earnings call — Thursday, July 30",
      "chars": [
        { "pose": "panic", "label": "META", "side": "left" },
        { "pose": "shocked", "label": "ANALYST", "side": "right" },
      ],
      "caption": "EPS: $6.18 vs. $7.14 expected — a significant miss. Revenue: $60.8 billion vs. $60.2 billion expected — a narrow beat.",
      "dialogue": [
        { "who": "ANALYST", "text": "Revenue actually beat. Why did profit miss by so much?" },
        { "who": "META", "text": "Some one-time costs hit us hard this quarter." },
      ],
    },
    {
      "scene": "The one-time charges, itemized",
      "chars": [
        { "pose": "talking", "label": "META", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "Total costs rose 55% to $42.03 billion, including $2.40 billion in legal charges and $1.18 billion in severance tied to a May workforce reduction.",
      "dialogue": [
        { "who": "META", "text": "Legal settlement costs, plus layoff severance — both one-time." },
        { "who": "TRADER", "text": "So the ad business itself might be healthier than the EPS line suggests." },
      ],
    },
    {
      "scene": "The capex guidance",
      "chars": [
        { "pose": "pointing", "label": "META", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "Meta raised full-year 2026 capital spending guidance to $135–145 billion, up from its earlier $125–145 billion range.",
      "dialogue": [
        { "who": "META", "text": "We're spending even more on AI infrastructure than we said in April." },
        { "who": "TRADER", "text": "That's either a huge bet paying off soon, or a huge bet that isn't." },
      ],
    },
    {
      "scene": "After-hours trading — same night as Microsoft's record gain",
      "chars": [
        { "pose": "panic", "label": "META STOCK", "side": "left" },
        { "pose": "celebrate", "label": "MICROSOFT STOCK", "side": "right" },
      ],
      "caption": "Meta shares fell nearly 8% while Microsoft shares jumped 15% the same night — the 'AI trade' splitting sharply between the two companies.",
      "dialogue": [
        { "who": "META STOCK", "text": "Rough night for me." },
        { "who": "MICROSOFT STOCK", "text": "Same AI story, very different reaction." },
      ],
    },
  ],
  "vocab": [
    { "term": "Capital expenditure (capex)", "def": "Money a company spends on long-term physical assets like data centers, servers, and chips. High capex can signal aggressive growth investment, but it also reduces near-term free cash flow." },
    { "term": "Severance expense", "def": "Costs a company pays employees who are laid off, such as continued salary or benefits for a set period — typically a one-time charge tied to a specific workforce reduction." },
    { "term": "One-time (non-recurring) charge", "def": "A cost that isn't expected to repeat in future quarters, such as a legal settlement or restructuring expense — investors often exclude these when judging a company's ongoing profitability." },
    { "term": "AI trade", "def": "Wall Street shorthand for the group of stocks whose valuations are closely tied to AI infrastructure spending and adoption — when this comic's headline event happened, that trade 'split,' with some AI-spending companies rewarded and others punished on the same night." },
  ],
  "sources": [
    { "label": "Meta sinks 8%, continuing record losing streak, while Microsoft jumps 15% as AI trade splits — CNBC", "url": "https://www.cnbc.com/2026/07/30/microsoft-msft-meta-stock-today-earnings.html" },
    { "label": "Meta's stock sinks as earnings disappoint and capex guidance balloons to $145 billion — Crypto Briefing", "url": "https://cryptobriefing.com/meta-stock-sinks-earnings-capex-guidance/" },
    { "label": "Meta misses on Q2 earnings, stock tumbles — Yahoo Finance", "url": "https://finance.yahoo.com/news/meta-misses-on-q2-earnings-stock-tumbles-121325403.html" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Meta reported Q2 2026 EPS of $6.18, missing the $7.14 consensus estimate, while revenue of $60.8 billion narrowly beat the $60.2 billion analysts expected.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/news/meta-misses-on-q2-earnings-stock-tumbles-121325403.html" },
      { "text": "Total costs and expenses climbed 55% to $42.03 billion, driven in part by $2.40 billion in legal-proceeding charges and $1.18 billion in severance expenses tied to a May 2026 workforce reduction.", "source": "Crypto Briefing", "url": "https://cryptobriefing.com/meta-stock-sinks-earnings-capex-guidance/" },
      { "text": "Meta raised its full-year 2026 capital expenditure guidance to $135–145 billion, up from the $125–145 billion range set earlier in the year, and guided current-quarter revenue to $61–64 billion.", "source": "CNBC", "url": "https://www.cnbc.com/2026/07/30/microsoft-msft-meta-stock-today-earnings.html" },
      { "text": "Meta shares fell 9.64% in after-hours trading to $529.15 from a $585.61 close — nearly an 8% decline — the same night Microsoft shares jumped roughly 15% on strong Azure and Copilot results.", "source": "CNBC", "url": "https://www.cnbc.com/2026/07/30/microsoft-msft-meta-stock-today-earnings.html" },
    ],
    "analysis": [
      "The headline EPS miss looks worse than the underlying ad business performed: revenue actually beat estimates, and a meaningful share of the cost increase came from one-time legal and severance charges rather than a deterioration in Meta's core advertising business. That's an important distinction for anyone reading the earnings report quickly and reacting only to the EPS miss headline.",
      "The capex guidance increase is the more consequential, forward-looking part of this story. Raising planned 2026 AI infrastructure spending to as much as $145 billion — after already guiding to a wide range in April — signals either growing confidence that the investment will pay off, or a company doubling down on a bet that hasn't yet shown a clear return, depending on which side of the debate an investor is on.",
      "This earnings night is a useful direct comparison to Microsoft's, reported the same evening: both companies are spending enormous sums on AI infrastructure, but Microsoft's Azure and Copilot results gave investors visible evidence the spending is translating into revenue growth, while Meta's core story was muddied by one-time charges — even though its underlying ad revenue also beat estimates. The market rewarded the company whose AI spending had the clearer near-term payoff story.",
      "Meta's stock decline continuing what CNBC described as a 'record losing streak' is also worth noting as its own signal — repeated post-earnings selloffs suggest the market has grown more skeptical of Meta's spending story specifically, not just reacting to this one quarter in isolation.",
    ],
  },
  "clubRelevance": {
    "pmc": "A genuinely debatable capital-allocation question — is $135–145 billion in AI capex smart long-term positioning or overspending without a clear payoff timeline — that pairs directly with the same night's Microsoft comic for a real-time bull/bear comparison.",
    "bta": "A same-night, direct comparison of how trading desks and equity research repriced two mega-cap AI spenders in opposite directions — a clean example of how the market can reward or punish the same strategic bet depending on execution and visible payoff.",
    "wfa": "Tests the skill of separating a headline EPS miss from the underlying business trend (revenue actually beat) — exactly the kind of nuance interviewers probe for when they ask you to 'walk me through' an earnings reaction.",
  },
} as const;

export const metaQ2EarningsMissCapex20260730Comic = {
  ...existingFields,

  professionalSummary:
    "Meta's Q2 2026 EPS of $6.18 missed the $7.14 consensus estimate, while revenue of $60.8 billion narrowly beat the $60.2 billion expected. The miss was driven substantially by one-time items: total costs rose 55% to $42.03 billion, including $2.40 billion in legal charges and $1.18 billion in severance tied to a May 2026 workforce reduction. Meta also raised full-year 2026 capex guidance to $135–145 billion, up from $125–145 billion. Shares fell nearly 8% in after-hours trading — the same night Microsoft's stock jumped roughly 15% on strong Azure and Copilot results, a split CNBC characterized as the 'AI trade' diverging.",
  thirtySecondSummary:
    "Meta missed on profit but beat on revenue, and a big chunk of the profit miss came from one-time legal and severance costs, not a weaker ad business. Meta also said it plans to spend even more on AI — up to $145 billion this year. The stock fell nearly 8%, the same night Microsoft's stock jumped 15% on its own AI results.",
  eli5Summary:
    "Meta made less profit than expected, but that was partly because of some one-time costs — a legal settlement and severance pay for laid-off workers — not because its main advertising business did badly (it actually did a little better than expected on sales). Meta also said it's going to spend even more money building AI computers and data centers. Investors weren't sure if that huge spending is a good idea, so the stock price dropped. Weirdly, on that exact same night, Microsoft's stock went way up for similar AI reasons — showing that investors don't treat all 'big AI spending' companies the same way.",
  timeline: [
    {
      date: "July 30, 2026",
      label: "Meta reports Q2 2026 earnings",
      detail: "EPS of $6.18 misses the $7.14 estimate; revenue of $60.8 billion narrowly beats the $60.2 billion estimate.",
    },
    {
      date: "July 30, 2026",
      label: "One-time charges disclosed",
      detail: "Total costs rise 55% to $42.03 billion, including $2.40 billion in legal charges and $1.18 billion in severance expenses.",
    },
    {
      date: "July 30, 2026",
      label: "Capex guidance raised",
      detail: "Meta increases full-year 2026 capital spending guidance to $135–145 billion, up from $125–145 billion.",
    },
    {
      date: "July 30, 2026",
      label: "Shares fall nearly 8% after hours",
      detail: "Meta stock drops to $529.15 from a $585.61 close, the same night Microsoft shares jump roughly 15%.",
    },
  ],
  bullCase: [
    {
      point: "The EPS miss overstates the business's actual weakness, since much of it was one-time charges.",
      support: "$2.40 billion in legal charges and $1.18 billion in severance together account for a large share of the cost increase — neither is expected to recur, and revenue itself beat estimates.",
    },
    {
      point: "Rising capex reflects confidence, not desperation, if it's backed by visible AI product traction.",
      support: "Meta has continued to grow ad revenue even while investing heavily, suggesting the spending hasn't come at the expense of the core business's near-term performance.",
    },
    {
      point: "A 'record losing streak' framing can overstate the story if each individual quarter has a distinct, explainable cause.",
      support: "This quarter's miss traces to specific, identifiable one-time items rather than a broad deterioration across the business, which is a different situation than a company missing for the same underlying reason repeatedly.",
    },
  ],
  bearCase: [
    {
      point: "Raising capex guidance for a second time in one year, without a Microsoft-style visible revenue payoff, raises real capital-discipline questions.",
      support: "Microsoft's AI spending showed up the same night as a 15% stock jump tied to clear Azure/Copilot revenue growth; Meta's spending story lacks an equally clear, quantified near-term payoff.",
    },
    {
      point: "A 'record losing streak' on earnings reactions suggests the market's skepticism is structural, not a one-quarter reaction.",
      support: "Repeated post-earnings declines indicate investors have consistently found reasons to discount Meta's results, which is a harder pattern to dismiss than a single quarter's one-time charges.",
    },
    {
      point: "One-time charges this large can still signal underlying problems, even if they don't recur in the same form.",
      support: "$2.40 billion in legal charges and a workforce reduction both reflect real business decisions and liabilities, not simply noise unrelated to how the company is being run.",
    },
  ],
  longTermView:
    "The core long-term question for Meta is whether its AI capital spending — now guided as high as $145 billion for 2026 alone — will eventually show up in revenue growth as visibly as it has for Microsoft, or whether it will keep pressuring margins without a comparably clear payoff. This quarter's headline miss is muddied by one-time legal and severance charges, making it a weaker signal of the core ad business's health than the revenue beat suggests. Investors should watch two things going forward: whether Meta's 'record losing streak' on earnings reactions continues even in quarters without unusual one-time items, and whether future quarters start showing the kind of AI-driven revenue acceleration that justified Microsoft's reaction the same night.",
  quiz: [
    {
      question: "Did Meta beat or miss on revenue and EPS in Q2 2026?",
      options: ["Missed both", "Beat both", "Beat revenue, missed EPS", "Missed revenue, beat EPS"],
      correctIndex: 2,
      explanation: "Meta's revenue of $60.8 billion narrowly beat the $60.2 billion estimate, while EPS of $6.18 missed the $7.14 estimate.",
    },
    {
      question: "What were the two main one-time items driving Meta's cost increase?",
      options: [
        "A stock buyback and a dividend payment",
        "Legal-proceeding charges and severance expenses",
        "A tax penalty and a currency loss",
        "Marketing spend and R&D tax credits",
      ],
      correctIndex: 1,
      explanation: "Meta's costs rose 55% to $42.03 billion, including $2.40 billion in legal charges and $1.18 billion in severance tied to a May 2026 workforce reduction.",
    },
    {
      question: "What did Meta do to its full-year 2026 capex guidance?",
      options: [
        "Cut it significantly",
        "Kept it unchanged",
        "Raised it to $135–145 billion",
        "Eliminated capex guidance entirely",
      ],
      correctIndex: 2,
      explanation: "Meta raised its full-year 2026 capital expenditure guidance to $135–145 billion, up from the earlier $125–145 billion range.",
    },
    {
      question: "What happened to Microsoft's stock the same night Meta's fell nearly 8%?",
      options: ["It also fell about 8%", "It was roughly flat", "It jumped about 15%", "Microsoft didn't report that night"],
      correctIndex: 2,
      explanation: "Microsoft posted its best day since 2008 the same night, with shares jumping roughly 15% on strong Azure and Copilot results — CNBC described this as the 'AI trade' splitting.",
    },
    {
      question: "Why might an investor discount Meta's EPS miss more than a typical miss?",
      options: [
        "Because EPS misses never matter",
        "Because a large share of the added costs were one-time legal and severance charges, not core business deterioration",
        "Because Meta's revenue also missed",
        "Because Meta doesn't report EPS",
      ],
      correctIndex: 1,
      explanation: "Since revenue beat estimates and a large share of the cost increase was one-time legal and severance charges, the EPS miss may overstate weakness in Meta's core, ongoing business.",
    },
  ],
  discussionQuestions: [
    "Should investors treat a one-time-charge-driven EPS miss the same way they'd treat a miss from declining core revenue? Why or why not?",
    "Compare Meta's and Microsoft's stock reactions on the same earnings night. What made investors treat similar AI spending stories so differently?",
    "Is repeatedly raising capex guidance within the same year a sign of confidence or a red flag? What additional information would help you decide?",
    "If you were advising a portfolio on whether to add to or trim a Meta position after this report, what would you want to see in the next one or two quarters?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Microsoft Just Had Its Best Day Since 2008 — And Gained Almost $450 Billion",
      date: "2026-07-30",
      connection: "The direct counterpart to this story — same night, same 'heavy AI capex' theme, opposite stock reaction, because Microsoft's spending showed a clearer near-term revenue payoff.",
      internalSlug: "microsoft-record-market-cap-gain-2026-07-30",
    },
    {
      title: "Tesla and Alphabet Just Lost Hundreds of Billions — On Purpose?",
      date: "2026-07-23",
      connection: "The same 'heavy AI capital spending divides investors' pattern that's run through this entire earnings season, here showing up again with Meta a week later.",
      internalSlug: "ai-capex-selloff-2026-07-23",
    },
  ],
} as unknown as FlagshipComic;
