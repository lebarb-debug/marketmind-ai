// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh, fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "spacex-first-earnings-capex-fears-2026-08-05",
  "date": "2026-08-05",
  "title": "SpaceX's First Earnings Report Beat on Revenue. Investors Focused on the $18.4 Billion Bill.",
  "hook": "In its debut quarterly report as a public company, SpaceX grew revenue 92% and beat estimates — but capital spending nearly 50% above Wall Street's forecast, mostly on AI infrastructure, sent the stock down 11%.",
  "category": "Earnings & Big Tech",
  "clubs": ["ipo", "pmc", "bta"],
  "backstory": [
    "This site already covered SpaceX's record-setting IPO and its rocky post-IPO trading, including a looming insider share unlock. This report was the next major test: SpaceX's first-ever quarterly earnings release as a public company, and the market's first real chance to judge the business on its actual numbers rather than IPO hype.",
    "On Tuesday, August 4, 2026, SpaceX reported second-quarter revenue of $7.8 billion, up 92% year-over-year and ahead of analyst estimates, with adjusted EBITDA nearly tripling to $3.5 billion. But capital expenditures totaled $18.4 billion — well above Wall Street's roughly $13 billion forecast — with $15.8 billion of that going into AI infrastructure alone. The AI segment itself grew revenue 247% to $2.56 billion but posted a $1.26 billion operating loss. Shares fell 11% in Wednesday premarket trading as investors weighed the spending against the growth.",
  ],
  "panels": [
    {
      "scene": "SpaceX's first-ever quarterly earnings report — Tuesday, August 4",
      "chars": [
        { "pose": "celebrate", "label": "SPACEX", "side": "left" },
        { "pose": "neutral", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Revenue: $7.8 billion, up 92% year-over-year, beating estimates. Adjusted EBITDA: $3.5 billion, nearly triple last year.",
      "dialogue": [
        { "who": "SPACEX", "text": "First public earnings report, and we beat on both lines." },
        { "who": "ANALYST", "text": "Strong debut. Now let's look at what it cost to get there." },
      ],
    },
    {
      "scene": "The capex number",
      "chars": [
        { "pose": "shocked", "label": "ANALYST", "side": "left" },
        { "pose": "talking", "label": "SPACEX", "side": "right" },
      ],
      "caption": "Capital expenditures: $18.4 billion — well above Wall Street's roughly $13 billion forecast. $15.8 billion went into AI infrastructure alone.",
      "dialogue": [
        { "who": "ANALYST", "text": "That's 40% more spending than expected. On top of an IPO that already had investors nervous." },
        { "who": "SPACEX", "text": "We're building for where the business is going, not just where it is today." },
      ],
    },
    {
      "scene": "The AI segment, in detail",
      "chars": [
        { "pose": "celebrate", "label": "AI SEGMENT", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "AI segment revenue: $2.56 billion, up 247% — but with a $1.26 billion operating loss.",
      "dialogue": [
        { "who": "TRADER", "text": "Huge growth, but you're losing over a billion dollars running it." },
        { "who": "AI SEGMENT", "text": "CFO Bret Johnsen says the payback period is under a year, backed by $6.7 billion in new contracts starting October." },
      ],
    },
    {
      "scene": "Wednesday premarket",
      "chars": [{ "pose": "panic", "label": "SPACEX STOCK", "side": "left" }],
      "caption": "Shares fell 11% in premarket trading, despite the revenue and EBITDA beat.",
      "dialogue": [
        { "who": "SPACEX STOCK", "text": "Same pattern as my post-IPO trading — good numbers, bigger worries." },
      ],
    },
  ],
  "vocab": [
    { "term": "Adjusted EBITDA", "def": "Earnings before interest, taxes, depreciation, and amortization, adjusted to exclude certain one-time items — a common profitability measure for capital-intensive companies, since it strips out non-cash accounting charges tied to large asset purchases." },
    { "term": "Capital expenditures (capex)", "def": "Money spent on long-term physical assets like infrastructure, equipment, and facilities. High capex can signal aggressive growth investment, but it reduces near-term free cash flow and raises questions about payback timing." },
    { "term": "Operating loss", "def": "When a business segment's operating expenses exceed its revenue — common for a fast-growing new segment still scaling up, but a number investors watch closely for how long it's expected to persist." },
    { "term": "Payback period", "def": "The time it takes for an investment to generate enough return to cover its original cost — a shorter payback period suggests a company will recoup heavy spending faster." },
  ],
  "sources": [
    { "label": "SpaceX Stock Down 11% On $18.4 Billion Capex Forecast — Forbes", "url": "https://www.forbes.com/sites/petercohan/2026/08/05/spacex-stock-down-9-on-184-billion-capex-forecast/" },
    { "label": "SpaceX earnings takeaways: Soaring AI costs outweigh revenue beat in first report since IPO — CNBC", "url": "https://www.cnbc.com/2026/08/04/spacex-spcx-earnings-live-updates-q2-2026.html" },
    { "label": "SpaceX's earnings beat runs into a $116bn problem — Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/spacexs-earnings-beat-runs-116bn-063500428.html" },
  ],
  "deepDive": {
    "facts": [
      { "text": "SpaceX reported Q2 2026 revenue of $7.8 billion, up 92% year-over-year, beating analyst estimates, with adjusted EBITDA nearly tripling to $3.5 billion.", "source": "CNBC", "url": "https://www.cnbc.com/2026/08/04/spacex-spcx-earnings-live-updates-q2-2026.html" },
      { "text": "Capital expenditures totaled $18.4 billion, exceeding Wall Street's roughly $13 billion forecast, with $15.8 billion directed toward AI infrastructure.", "source": "Forbes", "url": "https://www.forbes.com/sites/petercohan/2026/08/05/spacex-stock-down-9-on-184-billion-capex-forecast/" },
      { "text": "The AI segment generated $2.56 billion in revenue, up 247% year-over-year, but posted a $1.26 billion operating loss. CFO Bret Johnsen said the AI investments carry a payback period of under a year, citing $6.7 billion in new cloud contracts taking effect in October.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/spacexs-earnings-beat-runs-116bn-063500428.html" },
      { "text": "SpaceX shares fell 11% in premarket trading Wednesday, August 5, despite the revenue and EBITDA beat.", "source": "Forbes", "url": "https://www.forbes.com/sites/petercohan/2026/08/05/spacex-stock-down-9-on-184-billion-capex-forecast/" },
    ],
    "analysis": [
      "This report is a direct continuation of the post-IPO story already covered on this site: SpaceX's stock has now shown, twice, that strong underlying growth doesn't automatically translate into a strong stock reaction when spending or supply concerns dominate the narrative — first with the post-IPO reality check, now with this earnings debut.",
      "The AI segment's math is the crux of the debate: 247% revenue growth is exceptional, but a $1.26 billion operating loss on a business unit that just consumed $15.8 billion in capex is a lot of money to have out the door before proving out. The CFO's under-one-year payback claim, backed by named contract value, is a specific, checkable claim investors can hold the company accountable to in coming quarters.",
      "Unlike a mature company's capex, which usually funds known, predictable expansion, SpaceX's spending spans genuinely novel areas — Starlink, Starship, and now AI infrastructure — making the payback timeline inherently harder to forecast than for a company investing in, say, additional retail stores or a known product line.",
      "This is also useful context for a first-quarter public-company report specifically: without a longer public track record, investors have less history to judge whether management's capex and payback claims have historically proven accurate, adding an extra layer of uncertainty beyond the numbers themselves.",
    ],
  },
  "clubRelevance": {
    "ipo": "A direct sequel to this site's SpaceX IPO coverage — a real example of how a newly public company's first earnings report can move the stock as much as, or more than, the IPO itself.",
    "pmc": "A genuinely debatable capital-allocation question: is $18.4 billion in capex, mostly AI infrastructure, smart positioning for a new growth vector, or overspending that outpaces even generous Wall Street estimates?",
    "bta": "A clean example of how equity research has to weigh a genuine growth-and-profitability beat against a capex figure that blew past consensus — exactly the kind of nuanced same-day reaction analysts have to model quickly.",
  },
} as const;

export const spacexFirstEarningsCapexFears20260805Comic = {
  ...existingFields,

  professionalSummary:
    "SpaceX's first quarterly earnings report as a public company showed Q2 2026 revenue of $7.8 billion (up 92% year-over-year, beating estimates) and adjusted EBITDA nearly tripling to $3.5 billion. However, capital expenditures of $18.4 billion significantly exceeded Wall Street's roughly $13 billion forecast, with $15.8 billion directed to AI infrastructure. The AI segment grew revenue 247% to $2.56 billion but posted a $1.26 billion operating loss; CFO Bret Johnsen cited a sub-one-year payback period backed by $6.7 billion in new contracts starting October. Shares fell 11% in Wednesday premarket trading despite the revenue and EBITDA beat.",
  thirtySecondSummary:
    "SpaceX's first earnings report as a public company beat on revenue and profitability, but investors focused on $18.4 billion in spending — well above forecasts, mostly on AI infrastructure — and the stock fell 11% anyway, echoing the rocky reaction to its IPO a few weeks earlier.",
  eli5Summary:
    "SpaceX released its very first quarterly report since going public, and the actual business results were strong — sales grew a lot and beat what analysts expected. But the company also spent way more money than expected building new stuff, especially AI-related infrastructure, and some of that new AI business is currently losing money even though it's growing fast. Investors got nervous about all that spending, so the stock price dropped by 11%, even though the underlying results were good.",
  timeline: [
    {
      date: "June 2026",
      label: "SpaceX's record-setting IPO",
      detail: "SpaceX goes public in the largest IPO ever (covered elsewhere on this site), later falling well below its debut price.",
    },
    {
      date: "August 4, 2026",
      label: "First quarterly earnings report",
      detail: "Revenue of $7.8 billion (+92% YoY) and adjusted EBITDA of $3.5 billion both beat estimates.",
    },
    {
      date: "August 4, 2026",
      label: "Capex figure disclosed",
      detail: "Capital expenditures of $18.4 billion, well above the ~$13 billion Wall Street forecast, with $15.8 billion in AI infrastructure.",
    },
    {
      date: "August 5, 2026",
      label: "Shares fall 11% premarket",
      detail: "Stock drops despite the revenue and EBITDA beat, as investors weigh the spending against the growth.",
    },
  ],
  bullCase: [
    {
      point: "92% revenue growth and nearly tripled EBITDA show the core business is genuinely strong, independent of the AI segment's spending.",
      support: "Both headline profitability metrics beat estimates, suggesting the business fundamentals are sound even before considering the AI investment story.",
    },
    {
      point: "A sub-one-year payback period, if accurate, would make the AI capex look like a smart bet rather than overspending.",
      support: "The CFO's claim is backed by a specific, named figure — $6.7 billion in contracts starting October — giving investors a concrete benchmark to check management's credibility against in upcoming quarters.",
    },
    {
      point: "247% AI segment revenue growth suggests genuine, fast-scaling demand, not speculative spending without customers.",
      support: "Revenue growing this fast alongside the capex build-out indicates real, paying demand is already materializing, not just infrastructure built ahead of any confirmed need.",
    },
  ],
  bearCase: [
    {
      point: "Capex 40% above consensus is a meaningful forecasting miss, regardless of the reason.",
      support: "Investors modeling SpaceX's cash flow and valuation now have to substantially revise their spending assumptions, which introduces real uncertainty about future capital needs.",
    },
    {
      point: "A $1.26 billion operating loss on the AI segment is a large near-term cash drain, whatever the eventual payback claim.",
      support: "Even if the payback period proves accurate, the company has to fund that loss now, which affects near-term cash flow and could require additional capital raises.",
    },
    {
      point: "This is now the second consecutive market disappointment since SpaceX's IPO, echoing the same 'good numbers, bigger worries' pattern.",
      support: "A newly public company building a credible track record with investors can't afford too many quarters where spending or execution concerns overshadow genuinely strong underlying growth.",
    },
  ],
  longTermView:
    "The central long-term question is whether SpaceX's AI infrastructure bet follows the trajectory management describes — a large near-term loss that converts into strong returns within about a year, backed by real contracted revenue — or whether the payback timeline slips as costs continue to run ahead of forecasts. Investors should watch the AI segment's operating loss and revenue growth in the next two to three quarters specifically, alongside whether the $6.7 billion in October contracts materializes as described, before drawing conclusions about whether this capex was smart positioning or overreach. Given this is the second post-IPO disappointment in a row, SpaceX also needs to start building a credibility track record with public-market investors, which matters as much as any single quarter's numbers.",
  quiz: [
    {
      question: "How did SpaceX's Q2 2026 revenue and EBITDA compare to analyst estimates?",
      options: [
        "Both missed estimates",
        "Both beat estimates — revenue up 92%, EBITDA nearly tripled",
        "Revenue beat but EBITDA missed",
        "Results were roughly in line with estimates",
      ],
      correctIndex: 1,
      explanation: "Revenue grew 92% year-over-year to $7.8 billion and adjusted EBITDA nearly tripled to $3.5 billion, both beating analyst expectations.",
    },
    {
      question: "How did SpaceX's capital expenditures compare to Wall Street's forecast?",
      options: [
        "Roughly in line with the ~$13 billion forecast",
        "Below the forecast",
        "$18.4 billion, well above the ~$13 billion forecast",
        "SpaceX didn't disclose capex",
      ],
      correctIndex: 2,
      explanation: "Capital expenditures totaled $18.4 billion, significantly exceeding Wall Street's roughly $13 billion forecast, with $15.8 billion going into AI infrastructure.",
    },
    {
      question: "What happened with SpaceX's AI segment specifically?",
      options: [
        "It had no revenue yet",
        "Revenue grew 247% but the segment posted a $1.26 billion operating loss",
        "It was profitable with modest growth",
        "It was spun off as a separate company",
      ],
      correctIndex: 1,
      explanation: "AI segment revenue grew 247% to $2.56 billion, but the segment posted a $1.26 billion operating loss.",
    },
    {
      question: "How did SpaceX stock react to the earnings report?",
      options: ["Rose 11%", "Was roughly flat", "Fell 11% despite the revenue/EBITDA beat", "Trading was halted"],
      correctIndex: 2,
      explanation: "Shares fell 11% in Wednesday premarket trading, as investors focused on the capex overrun despite the underlying beat.",
    },
  ],
  discussionQuestions: [
    "Why might investors react more strongly to a capex overrun than to strong revenue and EBITDA growth?",
    "What would you want to see in the next few quarters to be convinced the AI segment's sub-one-year payback claim is credible?",
    "Compare this earnings reaction to SpaceX's post-IPO stock decline covered elsewhere on this site — what pattern, if any, connects the two?",
    "If you were advising SpaceX's management on investor communication, how would you have framed the AI capex increase differently, if at all?",
  ],
  relatedHistoricalEvents: [
    {
      title: "SpaceX Was the Biggest IPO Ever. It's Now Down 49% From Its Peak.",
      date: "2026-07-27",
      connection: "The direct predecessor to this story — the same stock's first major post-IPO test, now followed by its first earnings report producing a similar 'good news overshadowed by bigger worries' reaction.",
      internalSlug: "spacex-post-ipo-reality-check-2026-07-27",
    },
    {
      title: "AMD's Data Center Revenue Grew 107%. The Stock Still Fell 9%.",
      date: "2026-08-05",
      connection: "The same earnings night produced two AI-infrastructure-heavy reports where strong headline growth wasn't enough to prevent a selloff — a broader pattern worth noting across this week's earnings.",
      internalSlug: "amd-earnings-guidance-disappoints-2026-08-05",
    },
  ],
} as unknown as FlagshipComic;
