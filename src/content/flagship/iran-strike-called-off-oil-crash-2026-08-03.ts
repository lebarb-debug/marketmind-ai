// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh, fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "iran-strike-called-off-oil-crash-2026-08-03",
  "date": "2026-08-03",
  "title": "Trump Called Off a Planned Iran Strike. Oil Crashed Almost 7%.",
  "hook": "The third act of this summer's Iran story: after a ceasefire, then resumed strikes, President Trump called off a newly planned attack and said talks would restart — sending oil down nearly 7% and stock futures sharply higher.",
  "category": "Geopolitics & Markets",
  "clubs": ["pmc", "bta", "maa", "wfa"],
  "backstory": [
    "This site has already covered two turns in this story: a U.S.-Iran pause that crashed oil prices on July 27, and strikes resuming just two days later that sent oil right back up. Over the following weekend, tensions escalated again to the point that a new U.S. strike on Iran was reportedly being planned.",
    "On Monday, August 3, 2026, President Trump said he had called off that planned strike, citing agreement on the 'perimeters of a deal,' and said diplomatic talks would resume. Combined with an OPEC+ output increase over the weekend, oil prices dropped sharply and U.S. stock futures jumped — the market's third major reaction to this same conflict in barely a week.",
  ],
  "panels": [
    {
      "scene": "Sunday night into Monday morning, August 2-3",
      "chars": [
        { "pose": "panic", "label": "TRADER", "side": "left" },
        { "pose": "neutral", "label": "NARRATOR", "side": "right" },
      ],
      "caption": "Reports circulate over the weekend that a new U.S. strike on Iran is being planned.",
      "dialogue": [
        { "who": "TRADER", "text": "Weren't we just here two weeks ago? Ceasefire, then strikes, now this?" },
        { "who": "NARRATOR", "text": "Same conflict, third act." },
      ],
    },
    {
      "scene": "Monday morning announcement",
      "chars": [
        { "pose": "celebrate", "label": "TRUMP", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "Trump says he called off the planned strike, citing agreement on the 'perimeters of a deal,' with talks to resume.",
      "dialogue": [
        { "who": "TRUMP", "text": "Strike is off. We're back to talking." },
        { "who": "TRADER", "text": "Okay — now what does oil do?" },
      ],
    },
    {
      "scene": "Oil markets react",
      "chars": [{ "pose": "panic", "label": "OIL", "side": "left" }],
      "caption": "Brent crude fell roughly 6% to $82.95/barrel; WTI fell close to 7% to $78.93/barrel — also pressured by an OPEC+ output increase over the weekend.",
      "dialogue": [
        { "who": "OIL", "text": "War premium: gone. Again." },
      ],
    },
    {
      "scene": "Stock futures, Monday premarket",
      "chars": [
        { "pose": "celebrate", "label": "DOW FUTURES", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "Dow futures rose roughly 610 points (about 1.2%) as investors priced out geopolitical risk.",
      "dialogue": [
        { "who": "TRADER", "text": "Third whiplash in two weeks. At some point I need a rule for this, not just a reaction." },
      ],
    },
  ],
  "vocab": [
    { "term": "War premium", "def": "The portion of an asset's price (commonly oil) that reflects fear of supply disruption from an active or threatened conflict, on top of its price based on pure supply-and-demand fundamentals. It can appear or disappear quickly as conflict risk rises or falls." },
    { "term": "OPEC+", "def": "A coalition of OPEC oil-producing countries plus allied non-OPEC producers (including Russia) that coordinates production levels to influence global oil prices. A coordinated output increase adds supply, which tends to push prices down." },
    { "term": "Brent crude / WTI", "def": "The two most widely quoted global oil-price benchmarks. Brent is the international benchmark (North Sea oil); West Texas Intermediate (WTI) is the primary U.S. benchmark. They usually move together but can diverge on regional supply factors." },
    { "term": "Stock futures", "def": "Contracts that let traders bet on where a stock index will open before the regular trading session begins — often used as an early read on how markets will react to overnight news." },
  ],
  "sources": [
    { "label": "Oil drops over 4% after Trump calls off planned strike on Iran — CNBC", "url": "https://www.cnbc.com/2026/08/03/oil-prices-today-wti-brent-hormuz-trump-iran.html" },
    { "label": "Trump Halts Iran Attack, Oil Drops With Negotiations Expected to Restart — Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-08-03/oil-slips-as-trump-holds-off-iran-attack-says-talks-to-resume-msdeau9b" },
    { "label": "CNBC Daily Open: Markets exhale as Trump steps back, OPEC+ steps up — CNBC", "url": "https://www.cnbc.com/amp/2026/08/03/trump-ceasefire-nuclear-deal-strait-of-hormuz-opec-oil-output-.html" },
  ],
  "deepDive": {
    "facts": [
      { "text": "President Trump said he called off a newly planned strike on Iran, citing agreement on the 'perimeters of a deal,' and said diplomatic talks between the two countries would resume.", "source": "Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-08-03/oil-slips-as-trump-holds-off-iran-attack-says-talks-to-resume-msdeau9b" },
      { "text": "Brent crude tumbled roughly 6% to $82.95 a barrel, and West Texas Intermediate fell close to 7%, settling at $78.93 a barrel.", "source": "CNBC", "url": "https://www.cnbc.com/amp/2026/08/03/trump-ceasefire-nuclear-deal-strait-of-hormuz-opec-oil-output-.html" },
      { "text": "An OPEC+ output increase over the weekend added to the downward pressure on oil prices alongside the de-escalation news.", "source": "CNBC", "url": "https://www.cnbc.com/amp/2026/08/03/trump-ceasefire-nuclear-deal-strait-of-hormuz-opec-oil-output-.html" },
      { "text": "U.S. stock futures rose on the news, with Dow futures up roughly 610 points, or about 1.2%, on the first trading day of August.", "source": "CNBC", "url": "https://www.cnbc.com/2026/08/03/oil-prices-today-wti-brent-hormuz-trump-iran.html" },
    ],
    "analysis": [
      "This is now the third distinct market reaction to the same underlying U.S.-Iran conflict in roughly a week — a ceasefire crashed oil on July 27, resumed strikes sent it back up on July 29, and now a called-off strike has sent it down sharply again. The pattern itself is a lesson: geopolitical risk premiums can swing hard and fast in both directions as headlines change, well before the underlying situation is actually resolved.",
      "Pairing the de-escalation with an OPEC+ output increase compounds the price move — two separate bearish-for-oil catalysts landing at once, rather than one clean signal. Traders have to disentangle how much of the drop is 'war premium unwinding' versus 'more supply coming online' to judge whether the move is likely to persist.",
      "The stock futures reaction (broad market up on lower oil, lower perceived geopolitical risk) is a useful contrast to how energy-specific stocks would react to the same news — a lower oil price is generally good for the broad market and consumers, but bad for oil producers' near-term revenue, illustrating how the same headline can be simultaneously bullish and bearish depending on which part of the market you're looking at.",
    ],
  },
  "clubRelevance": {
    "pmc": "A live case study in how quickly a risk premium can be priced in and out of an asset — useful for discussing how much of a commodity's price at any moment reflects fear versus fundamentals.",
    "bta": "Energy and macro trading desks had to reprice risk three times in about a week on the same underlying conflict — a clean, current example of fast-moving geopolitical-risk trading.",
    "maa": "OPEC+ coordinated supply decisions are a reminder that large producer coalitions can move global commodity prices independent of any single company's actions — relevant context for any M&A analysis touching the energy sector.",
    "wfa": "A good example for explaining 'risk premium' in an interview — using a real, multi-part news cycle instead of an abstract definition.",
  },
} as const;

export const iranStrikeCalledOffOilCrash20260803Comic = {
  ...existingFields,

  professionalSummary:
    "President Trump said Monday, August 3, 2026 that he had called off a newly planned strike on Iran, citing agreement on the 'perimeters of a deal,' with diplomatic talks set to resume. Combined with an OPEC+ output increase over the weekend, Brent crude fell roughly 6% to $82.95/barrel and WTI fell nearly 7% to $78.93/barrel. U.S. stock futures rose sharply on reduced geopolitical risk, with Dow futures up roughly 610 points (1.2%). This is the third distinct market reaction to the same U.S.-Iran conflict in about a week, following a ceasefire-driven oil crash on July 27 and a strikes-resuming oil spike on July 29.",
  thirtySecondSummary:
    "For the third time in about a week, the U.S.-Iran conflict whipsawed oil prices. This time, Trump called off a newly planned strike and said talks would resume, and an OPEC+ supply increase added to the pressure — oil dropped nearly 7% and stock futures jumped.",
  eli5Summary:
    "Remember the on-again, off-again conflict between the U.S. and Iran that already moved oil prices twice this summer? It happened again: the U.S. was planning a new attack, but the president called it off and said the two countries would go back to talking instead of fighting. Because there's less risk of the fighting disrupting oil supplies, oil got cheaper again — really fast, just like it did the last two times something changed in this story.",
  timeline: [
    {
      date: "July 27, 2026",
      label: "Ceasefire crashes oil",
      detail: "A U.S.-Iran pause in strikes sends oil crashing more than 7% (covered elsewhere on this site).",
    },
    {
      date: "July 29, 2026",
      label: "Strikes resume",
      detail: "The ceasefire breaks down; fresh strikes send oil back up (covered elsewhere on this site).",
    },
    {
      date: "August 2-3, 2026",
      label: "New strike planned, then called off",
      detail: "Reports of a newly planned U.S. strike surface over the weekend; Trump calls it off Monday morning and says talks will resume.",
    },
    {
      date: "August 3, 2026",
      label: "Oil crashes, futures jump",
      detail: "Brent falls ~6% and WTI falls ~7%, compounded by an OPEC+ output increase; U.S. stock futures rise roughly 1.2%.",
    },
  ],
  bullCase: [
    {
      point: "A genuine return to talks could permanently remove the war-premium volatility that's whipsawed oil three times this summer.",
      support: "If diplomatic talks actually produce a durable agreement, markets could stop repeatedly re-pricing this same risk, reducing volatility for oil-sensitive sectors going forward.",
    },
    {
      point: "Lower, more stable oil prices are broadly good for consumer spending and non-energy corporate margins.",
      support: "Lower input and transportation costs benefit a wide range of businesses and consumers more than the volatility itself hurts them, assuming the de-escalation holds.",
    },
  ],
  bearCase: [
    {
      point: "A conflict that has already reversed twice in two weeks has a real chance of reversing again.",
      support: "Both the July 27 ceasefire and the current de-escalation followed periods of active conflict; without a durable resolution, markets may be pricing in more stability than the situation actually has.",
    },
    {
      point: "Repeated volatility itself has costs, independent of where oil eventually settles.",
      support: "Businesses that rely on stable energy costs for planning (airlines, shipping, manufacturers) face real hedging and forecasting challenges when the underlying risk swings this dramatically and this often.",
    },
  ],
  longTermView:
    "The pattern across all three reactions — ceasefire, resumed strikes, called-off strike — matters more than any single day's price move: markets have shown they'll re-price this specific geopolitical risk hard and fast every time the situation changes, which means oil-sensitive sectors should expect continued volatility until there's a durable resolution, not just another temporary pause. Investors and companies with real oil-price exposure should focus on whether the resumed talks produce an actual agreement, rather than reacting to each individual headline the way the futures market does in the moment.",
  quiz: [
    {
      question: "What did President Trump announce on Monday, August 3, 2026?",
      options: [
        "A new strike had been launched on Iran",
        "A newly planned strike on Iran had been called off, with talks to resume",
        "A permanent peace treaty had been signed",
        "Oil sanctions on Iran were being lifted",
      ],
      correctIndex: 1,
      explanation: "Trump said he called off a newly planned strike, citing agreement on the 'perimeters of a deal,' with diplomatic talks to resume.",
    },
    {
      question: "Roughly how much did WTI crude fall on this news?",
      options: ["About 1%", "About 3%", "Close to 7%", "Over 20%"],
      correctIndex: 2,
      explanation: "WTI fell close to 7%, settling at $78.93 a barrel, while Brent fell roughly 6% to $82.95 a barrel.",
    },
    {
      question: "What other factor, besides the Iran news, pushed oil prices down the same day?",
      options: ["A weaker U.S. dollar", "An OPEC+ output increase", "A refinery shutdown", "New U.S. sanctions on Russia"],
      correctIndex: 1,
      explanation: "An OPEC+ output increase over the weekend added supply-side pressure on top of the de-escalation news.",
    },
    {
      question: "How many distinct times has this same U.S.-Iran conflict moved oil prices sharply, as covered on this site?",
      options: ["Once", "Twice", "Three times", "Five times"],
      correctIndex: 2,
      explanation: "Oil crashed on the July 27 ceasefire, spiked when strikes resumed July 29, and crashed again on the August 3 called-off strike — three distinct reactions in about a week.",
    },
  ],
  discussionQuestions: [
    "Why might the same underlying conflict cause oil prices to swing sharply multiple times in a single week?",
    "How should a company that depends on stable fuel costs (an airline, for example) plan around this kind of repeated volatility?",
    "Is it rational for markets to fully price out war risk based on a single day's diplomatic announcement, given the conflict has reversed course before?",
    "What would you want to see happen next for this to be the last chapter of this story, rather than a fourth act?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Oil Just Had Its Worst Day in Two Months — Here's Why That's Good News",
      date: "2026-07-27",
      connection: "The first chapter of this same story — a U.S.-Iran ceasefire crashed oil prices, only for the pattern to reverse twice more in the following week.",
      internalSlug: "iran-ceasefire-oil-crash-2026-07-27",
    },
    {
      title: "The Oil Ceasefire Lasted Two Days",
      date: "2026-07-29",
      connection: "The second chapter — strikes resumed just two days after the ceasefire, sending oil back up and setting up this comic's third reversal.",
      internalSlug: "iran-strikes-resume-oil-spikes-2026-07-29",
    },
  ],
} as unknown as FlagshipComic;
