// Hand-added, mirroring the pattern scripts/convert-comic.mjs uses for the
// other flagship files: existing fields copied verbatim from data.js, new
// Financial Storytelling fields hand-authored below, fact-checked against
// the deepDive.facts/sources already carried over.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "fed-decision-dissent-selloff-rebound-2026-07-30",
  "date": "2026-07-30",
  "title": "The Fed Meeting Actually Happened. It Was Chaos.",
  "hook": "The Fed held rates steady like everyone expected — but three officials publicly demanded a hike instead, and the market whiplashed from its worst day in over a year to a huge rebound in 24 hours.",
  "category": "Macro & Rates",
  "clubs": ["pmc", "bta", "maa", "wfa"],
  "backstory": [
    "The Federal Reserve's interest-rate decisions are made by a group called the Federal Open Market Committee (FOMC) — a mix of Washington-based Fed governors and a rotating set of regional Federal Reserve Bank presidents (from cities like Cleveland, Minneapolis, and Dallas). Officially the FOMC votes as a group, and the headline outcome — 'the Fed held rates steady' or 'the Fed cut rates' — is usually the whole story investors need. But individual members can formally 'dissent': publicly vote against the majority decision. That's rare, and treated as a meaningful signal in its own right, separate from the headline vote.",
    "An earlier comic on this site previewed the Fed's July 29, 2026 meeting, noting the committee's own internal forecasts had already turned more hawkish (worried about inflation) even though a hold was still the most likely outcome. That's exactly what happened on July 29 — except three regional Fed presidents dissented, all arguing the Fed should have raised rates instead, because inflation has stayed above the Fed's 2% target for years. A three-person hawkish dissent hadn't happened since September 2016, which is why markets reacted so strongly to a decision that, on paper, changed nothing.",
  ],
  "panels": [
    {
      "scene": "FOMC decision day — July 29, 2026",
      "chars": [
        { "pose": "talking", "label": "FED", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "The Fed holds its rate steady at 3.50%–3.75%. The vote: 9 to 3.",
      "dialogue": [
        { "who": "FED", "text": "We're holding steady. Again." },
        { "who": "TRADER", "text": "Wait, 9-3? That's not usually how these votes go." },
      ],
    },
    {
      "scene": "Same afternoon — three regional Fed presidents speak up",
      "chars": [
        { "pose": "arms-crossed", "label": "DISSENTING PRESIDENTS", "side": "left" },
        { "pose": "shocked", "label": "ANALYST", "side": "right" },
      ],
      "caption": "All three dissenters wanted a rate HIKE, not a cut — the first three-way hawkish dissent since September 2016.",
      "dialogue": [
        { "who": "DISSENTING PRESIDENTS", "text": "Inflation's been above target for years. We wanted a quarter-point hike today." },
        { "who": "ANALYST", "text": "A three-way hawkish dissent is the loudest 'we disagree' this committee has sent in almost a decade." },
      ],
    },
    {
      "scene": "Wednesday afternoon — the selloff accelerates",
      "chars": [{ "pose": "panic", "label": "DOW", "side": "left" }],
      "caption": "Dow fell 1,153 points (−2.19%) — its worst day since April 2025. S&P 500 −1.52%, Nasdaq −1.74%.",
      "dialogue": [
        { "who": "DOW", "text": "Turns out 'holding steady' with three people begging to hike isn't exactly reassuring." },
      ],
    },
    {
      "scene": "Thursday — the mood flips",
      "chars": [
        { "pose": "celebrate", "label": "MICROSOFT", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "Microsoft jumped over 15% — its best day since 2008 — after Azure cloud revenue topped $100 billion for the first time. Chip stocks rallied too.",
      "dialogue": [
        { "who": "MICROSOFT", "text": "Forget the Fed drama — my cloud business just had a monster quarter." },
        { "who": "TRADER", "text": "Guess panic has a shelf life of about 18 hours." },
      ],
    },
    {
      "scene": "Whiteboard recap",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "Wednesday: Dow −1,153. Thursday: Dow +614. Same market, same week, two completely different moods.",
      "dialogue": [
        { "who": "NARRATOR", "text": "The Fed didn't move rates. But three of its own members just told Wall Street a hike might be coming in September — and now everyone's watching." },
      ],
    },
  ],
  "vocab": [
    { "term": "Dissent (FOMC dissent)", "def": "When a Federal Reserve policymaker formally votes against the committee's majority decision, publicly registering disagreement with the official rate call." },
    { "term": "Hawkish dissent", "def": "A dissenting vote cast specifically because a policymaker wanted TIGHTER policy (higher rates) than what the committee decided — a signal they see inflation as the bigger risk." },
    { "term": "Regional Fed president", "def": "The head of one of the 12 regional Federal Reserve Banks (e.g., Cleveland, Minneapolis, Dallas). A rotating subset of these presidents hold voting seats on the FOMC each year." },
    { "term": "Basis point (bp)", "def": "1/100th of a percent. A move from 4.60% to 4.67% is a 7-basis-point move." },
    { "term": "Treasury yield", "def": "The return an investor earns for lending money to the U.S. government by buying its bonds. Yields often jump when investors expect higher interest rates ahead." },
    { "term": "Rate-path repricing", "def": "A sharp market move driven by investors suddenly reassessing how likely future rate changes are — not by any change in company earnings or fundamentals." },
  ],
  "sources": [
    { "label": "Divided Fed holds interest rates steady, but three members voted to hike — CNBC", "url": "https://www.cnbc.com/2026/07/29/fed-rate-decision-july-2026.html" },
    { "label": "Dow drops 1,100 points for worst day since April 2025 on fear the Fed is falling behind on inflation — CNBC", "url": "https://www.cnbc.com/2026/07/28/stock-market-today-live-updates.html" },
    { "label": "Stock market today: Nasdaq soars nearly 3%, Dow and S&P 500 rebound as Microsoft posts record 1-day value gain — Yahoo Finance", "url": "https://finance.yahoo.com/markets/live/stock-market-today-thursday-july-30-dow-sp-500-nasdaq-082255995.html" },
    { "label": "Dow Posts Its Worst Day Of The Year After Federal Reserve Maintains Interest Rates — Forbes", "url": "https://www.forbes.com/sites/antoniopequenoiv/2026/07/29/dow-posts-its-worst-day-of-the-year-after-federal-reserve-maintains-interest-rates/" },
  ],
  "deepDive": {
    "facts": [
      { "text": "The FOMC voted 9-3 to hold the federal funds rate at 3.50%–3.75%. Three regional Fed presidents — Beth Hammack (Cleveland), Neel Kashkari (Minneapolis), and Lorie Logan (Dallas) — dissented, each preferring a quarter-point hike. It was the first time since September 2016 that three policymakers dissented with a unified hawkish view.", "source": "CNBC", "url": "https://www.cnbc.com/2026/07/29/fed-rate-decision-july-2026.html" },
      { "text": "The Dow fell 1,153.18 points (−2.19%) to 51,594.14 on Wednesday, July 29 — its worst session since April 2025. The S&P 500 fell 1.52% to 7,316.15 and the Nasdaq fell 1.74% to 24,442.94, as the 10-year Treasury yield rose about 7 basis points to above 4.67%.", "source": "CNBC / Forbes", "url": "https://www.forbes.com/sites/antoniopequenoiv/2026/07/29/dow-posts-its-worst-day-of-the-year-after-federal-reserve-maintains-interest-rates/" },
      { "text": "Stocks rebounded sharply on Thursday, July 30: the Dow rose 613.92 points (+1.2%) to 52,208.06, the S&P 500 gained 1.7% to 7,437.63, and the Nasdaq jumped 2.8% to 25,122.18, snapping a six-day losing streak.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/live/stock-market-today-thursday-july-30-dow-sp-500-nasdaq-082255995.html" },
      { "text": "Microsoft shares jumped more than 15% on Thursday — its best single-day gain since 2008 — after its Azure cloud business topped $100 billion in annual revenue for the first time. A gauge of semiconductor stocks also rallied roughly 8% the same day.", "source": "The Motley Fool / Yahoo Finance", "url": "https://finance.yahoo.com/markets/live/stock-market-today-thursday-july-30-dow-sp-500-nasdaq-082255995.html" },
    ],
    "analysis": [
      "The confusing part of this story is exactly the point: the Fed's headline decision — 'hold rates steady' — didn't change anything on its own. What moved markets was the dissent underneath it. Three policymakers publicly saying 'we wanted to hike, not hold' is the committee itself signaling real disagreement about where inflation is headed, and markets don't just price in today's vote — they price in where the committee looks like it's drifting next.",
      "This ties directly back to the earlier comic on this site previewing this same meeting: back then, 9 of the Fed's 18 officials had already penciled in another hike in their internal projections, even though a hold was still the most likely near-term outcome. The July 29 dissent is that internal split turning into something real and public, not just a forecast on paper anymore.",
      "The Thursday rebound is a reminder that a market can hold two separate worries at once. Wednesday's selloff was about rate-path risk — a macro, Fed-driven story. Thursday's rally was about company-specific fundamentals — Microsoft's Azure business proving, with a real number ($100 billion in revenue), that at least one of the big AI-infrastructure bets is paying off on schedule. Both were rational reactions to different information; neither day contradicts the other.",
      "For an interview, the useful skill here isn't memorizing the point moves — it's being able to say which force was driving a given day. 'Down Wednesday because of Fed dissent, up Thursday because of Microsoft's own earnings' is a much stronger answer than 'the market was volatile this week,' and it's exactly the kind of same-week, multi-cause reasoning these clubs are built to practice.",
    ],
  },
  "clubRelevance": {
    "pmc": "This is the direct resolution of the earlier Fed-preview comic on this site, and it opens a fresh, genuinely live debate: does a three-way hawkish dissent make a September hike likely, or is the committee more split than that headline suggests? Exactly the kind of evolving macro story PMC tracks week to week rather than as a one-off headline.",
    "bta": "Fixed income desks repriced Treasuries within minutes of the dissent news (the 10-year yield jumped ~7bps), and equity trading desks watched the Dow post its worst day since April 2025 followed by one of its best rebounds in weeks. Reading same-day cause and effect this fast is core trading-desk judgment.",
    "maa": "A more likely September hike raises the cost of debt-financed deals across the board — directly relevant to the energy M&A wave covered earlier on this site, where financing costs were already a live factor in deal structuring.",
    "wfa": "'Walk me through what happened at the last Fed meeting' is now a genuinely answerable, current interview question — and the strong answer isn't just 'they held rates,' it's naming the dissent, the historical rarity, and the two-day market whiplash that followed, exactly the layered clarity WFA's Financial Literacy Committee coaches.",
  },
} as const;

export const fedDecisionDissentSelloffRebound20260730Comic = {
  ...existingFields,

  // ---- New Financial Storytelling fields — hand-authored, fact-checked
  // against the deepDive.facts/sources already ported above. ----
  professionalSummary:
    "The FOMC held its benchmark rate at 3.50%–3.75% on July 29, but three regional Fed presidents — the first three-way hawkish dissent since September 2016 — publicly favored a quarter-point hike, signaling deeper internal disagreement about inflation than the headline vote suggested. Markets responded immediately: the Dow fell 1,153 points (−2.19%) on Wednesday, its worst session since April 2025, before rebounding 614 points Thursday as Microsoft's Azure cloud business crossed $100 billion in annual revenue for the first time, pulling chip stocks and the broader Nasdaq up with it. The whiplash illustrates how a 'no change' policy decision can still move markets sharply once the internal vote reveals a more hawkish committee than expected.",
  thirtySecondSummary:
    "The Fed held interest rates steady, just like everyone expected — but three Fed officials publicly said they wanted a rate hike instead, something that hasn't happened in almost a decade. Stocks tanked the next day, then rebounded hard less than 24 hours later after Microsoft posted a blowout cloud-earnings number.",
  eli5Summary:
    "The people in charge of U.S. interest rates decided not to change anything — which is usually pretty boring news. But three of them spoke up and said they actually wanted to raise rates, because they're worried prices are going up too fast. That hasn't happened in almost 10 years, so it surprised everyone and stock prices dropped a lot the next day. Then, just one day later, a giant tech company (Microsoft) announced amazing sales numbers, and stocks jumped right back up.",
  timeline: [
    {
      date: "July 29, 2026 (decision)",
      label: "FOMC votes 9-3 to hold rates",
      detail: "The Fed holds its benchmark rate at 3.50%–3.75%, marking another meeting without a change — but the vote itself is closer than usual.",
    },
    {
      date: "July 29, 2026 (same afternoon)",
      label: "Three regional presidents dissent — all hawkish",
      detail: "Beth Hammack, Neel Kashkari, and Lorie Logan each formally dissent in favor of a quarter-point hike — the first three-way hawkish dissent since September 2016.",
    },
    {
      date: "July 29, 2026 (market close)",
      label: "Dow posts worst day since April 2025",
      detail: "The Dow falls 1,153.18 points (−2.19%) to 51,594.14 as investors reassess how hawkish the Fed's internal mood really is.",
    },
    {
      date: "July 30, 2026",
      label: "Microsoft rallies 15%+, market rebounds",
      detail: "Azure cloud revenue tops $100 billion for the first time; the Dow rebounds 613.92 points, the Nasdaq jumps 2.8%, and chip stocks rally alongside it.",
    },
  ],
  bullCase: [
    {
      point: "The Fed's actual policy didn't change — rates are exactly where they were before the meeting.",
      support: "The dissent is a signal about future risk, not a current tightening of financial conditions; nothing about borrowing costs, mortgages, or business loans actually moved on July 29 itself.",
    },
    {
      point: "Thursday's rebound shows real company fundamentals can outweigh a full day of macro fear within 24 hours.",
      support: "Microsoft's Azure crossing $100 billion in revenue is a concrete, verified number — proof that at least one major AI-infrastructure bet is paying off on schedule, which is exactly the kind of evidence that can override a rate-path scare.",
    },
    {
      point: "A committee airing internal disagreement publicly is arguably healthier than a false consensus.",
      support: "Three presidents dissenting on the record gives investors more information about the range of views inside the Fed, rather than papering over a genuine split with a unanimous vote that hides it.",
    },
  ],
  bearCase: [
    {
      point: "A three-way hawkish dissent — the first since 2016 — is a real signal the committee is more worried about inflation than markets had priced in.",
      support: "Dissents of this kind are rare precisely because they mean multiple senior policymakers were unwilling to simply go along with the majority — that's a stronger signal than any single official's public comments.",
    },
    {
      point: "A more likely September hike raises borrowing costs across the economy, not just for one sector.",
      support: "Higher expected rates make debt-financed deals, mortgages, and business loans more expensive well before any actual hike happens, since markets and lenders price in the higher odds immediately.",
    },
    {
      point: "Wednesday's selloff and Thursday's rebound don't cancel out — they're evidence the market is genuinely uncertain, not settled.",
      support: "A ~1,150-point round trip in two days signals real disagreement among investors about how to weigh Fed risk against company fundamentals, not a market that has confidently resolved the question either way.",
    },
  ],
  longTermView:
    "The real story for long-term investors isn't Wednesday's selloff or Thursday's rebound individually — it's that the internal Fed split flagged in an earlier preview (9 of 18 officials projecting another hike) just turned into a real, public, three-way dissent. That's a meaningful escalation from forecast to formal vote, and it raises the odds that September's meeting is the next genuine inflection point for rate policy, not just another routine hold. At the same time, Microsoft's $100 billion Azure milestone is a reminder that company-specific fundamentals can still move a stock (and a market) more than a single macro headline, even in the same week. The two threads — a Fed that may be closer to hiking than assumed, and AI-infrastructure spending starting to show real payoff — will likely keep pulling markets in opposite directions until one clearly wins out, which is exactly the tension worth tracking into the fall.",
  quiz: [
    {
      question: "What did the FOMC actually decide on July 29, 2026?",
      options: [
        "Cut rates by a quarter point",
        "Hold rates steady at 3.50%–3.75%",
        "Raise rates by a quarter point",
        "Postpone the decision to September",
      ],
      correctIndex: 1,
      explanation: "The FOMC voted 9-3 to hold the federal funds rate at 3.50%–3.75%.",
    },
    {
      question: "What made this particular 'hold' decision unusual?",
      options: [
        "It was unanimous",
        "Three regional Fed presidents dissented in favor of a rate hike — the first three-way hawkish dissent since 2016",
        "It was announced a week early",
        "The Fed chair resigned immediately after",
      ],
      correctIndex: 1,
      explanation: "Three regional Fed presidents — Hammack, Kashkari, and Logan — dissented, all preferring a quarter-point hike, the first such three-way hawkish dissent since September 2016.",
    },
    {
      question: "How did the Dow perform on Wednesday, July 29, after the decision?",
      options: [
        "Rose about 600 points",
        "Was roughly flat",
        "Fell 1,153 points, its worst day since April 2025",
        "Fell more than 3,000 points",
      ],
      correctIndex: 2,
      explanation: "The Dow fell 1,153.18 points (−2.19%) to 51,594.14, its worst session since April 2025.",
    },
    {
      question: "What drove the market's rebound on Thursday, July 30?",
      options: [
        "The Fed reversed its decision",
        "Microsoft's Azure cloud business topped $100 billion in annual revenue, and shares jumped 15%+",
        "Oil prices collapsed",
        "A new trade deal was announced",
      ],
      correctIndex: 1,
      explanation: "Microsoft shares jumped more than 15% — its best day since 2008 — after Azure crossed $100 billion in annual revenue, helping lead a broad market rebound.",
    },
    {
      question: "What does a 'hawkish dissent' specifically mean?",
      options: [
        "A vote against the majority because a policymaker wanted lower rates",
        "A vote against the majority because a policymaker wanted higher rates",
        "An anonymous internal memo",
        "A dissent from a non-voting member",
      ],
      correctIndex: 1,
      explanation: "A hawkish dissent is a vote against the majority decision specifically because the dissenting policymaker wanted tighter policy (higher rates), signaling greater concern about inflation.",
    },
  ],
  discussionQuestions: [
    "Is it rational for markets to sell off sharply on a decision that, on paper, changed nothing? Why or why not?",
    "How should investors weigh a formal, on-the-record dissent against informal comments from Fed officials in speeches or interviews?",
    "Does Microsoft's Azure milestone actually offset Fed-related rate risk for the broader market, or are these two genuinely separate questions that just happened to collide the same week?",
    "If you had to bet on whether the Fed hikes in September, would you weight the July dissent more heavily than the market's own two-day round trip? Defend your answer.",
  ],
  relatedHistoricalEvents: [
    {
      title: "Tesla and Alphabet Just Lost Hundreds of Billions — On Purpose?",
      date: "2026-07-23",
      connection: "Both stories show markets reacting sharply to signals about the future (AI capex plans, Fed dissent) rather than to any change in current fundamentals.",
      internalSlug: "ai-capex-selloff-2026-07-23",
    },
    {
      title: "China Built Its Own Chip-Making Machine — and Asia's Markets Panicked",
      date: "2026-07-28",
      connection: "Another same-week example of a single piece of forward-looking information — not an earnings miss or a policy change — triggering an outsized market reaction.",
      internalSlug: "china-duv-chip-selloff-2026-07-28",
    },
    {
      title: "SpaceX Was the Biggest IPO Ever. It's Now Down 49% From Its Peak.",
      date: "2026-07-27",
      connection: "Part of the same 2026 pattern of markets sharply repricing risk and uncertainty across very different corners of the market within the same week.",
      internalSlug: "spacex-post-ipo-reality-check-2026-07-27",
    },
  ],
} as unknown as FlagshipComic;
