// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh, fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "us-japan-yen-intervention-2026-08-03",
  "date": "2026-08-03",
  "title": "The Dollar Hit a 40-Year High Against the Yen. Then Two Governments Stepped In.",
  "hook": "The U.S. and Japan jointly bought yen and sold dollars for the first time since 2011 — an unusual, coordinated move by two governments to stop a currency from falling further.",
  "category": "Macro & Currencies",
  "clubs": ["pmc", "bta", "wfa"],
  "backstory": [
    "Currencies normally trade freely based on interest rates, trade flows, and investor sentiment, with governments rarely stepping in directly. But when a currency's decline gets extreme enough to threaten financial stability or trade relationships, governments can intervene — buying or selling the currency directly in the open market to push its price in a different direction. This is a blunt, closely watched tool precisely because it's used so rarely.",
    "By late July 2026, the U.S. dollar had climbed above 163 yen — a roughly 40-year high for the dollar against the yen, meaning the yen had fallen to its weakest level since 1986. On Monday, August 3, 2026, Japan and the U.S. confirmed they had jointly intervened in currency markets — buying yen and selling dollars — marking the first coordinated U.S.-Japan intervention since 2011 and the first joint operation specifically to buy yen since 1998.",
  ],
  "panels": [
    {
      "scene": "Late July — the yen keeps falling",
      "chars": [
        { "pose": "panic", "label": "YEN", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "The dollar climbs above 163 yen — a roughly 40-year high, meaning the yen's weakest level since 1986.",
      "dialogue": [
        { "who": "TRADER", "text": "This is getting extreme. Someone's going to have to do something." },
      ],
    },
    {
      "scene": "Monday, August 3 — the announcement",
      "chars": [
        { "pose": "pointing", "label": "JAPAN", "side": "left" },
        { "pose": "arms-crossed", "label": "U.S. TREASURY", "side": "right" },
      ],
      "caption": "Japan and the U.S. confirm a coordinated intervention — buying yen, selling dollars — the first joint U.S.-Japan action since 2011.",
      "dialogue": [
        { "who": "JAPAN", "text": "We worked together on this one." },
        { "who": "U.S. TREASURY", "text": "A weaker yen isn't just Japan's problem — it widens our trade deficit too." },
      ],
    },
    {
      "scene": "The market reacts",
      "chars": [{ "pose": "celebrate", "label": "YEN", "side": "left" }],
      "caption": "The dollar drops about 1% to 156.34 yen immediately after the announcement.",
      "dialogue": [
        { "who": "YEN", "text": "Finally, some help." },
      ],
    },
    {
      "scene": "What it signals",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "Both governments say they stand ready to intervene again if needed — a signal meant to matter as much as the intervention itself.",
      "dialogue": [
        { "who": "NARRATOR", "text": "Sometimes the message 'we'll do this again' moves markets almost as much as actually doing it." },
      ],
    },
  ],
  "vocab": [
    { "term": "Currency intervention", "def": "When a government or central bank directly buys or sells its own currency in the open market to influence its exchange rate, rather than letting market forces set the price alone. A rarely used, closely watched tool." },
    { "term": "Joint (coordinated) intervention", "def": "When two or more governments intervene together in currency markets, rather than one acting alone — seen as a stronger, more credible signal because it shows shared commitment across countries." },
    { "term": "Trade deficit", "def": "The amount by which a country's imports exceed its exports. A weaker currency in a trading partner (like Japan) can make that partner's exports cheaper and a country's own exports relatively more expensive, potentially widening the trade deficit." },
    { "term": "Exchange rate", "def": "The price of one currency in terms of another — for example, how many yen it takes to buy one U.S. dollar. Exchange rates affect the cost of imports, exports, and travel between countries." },
  ],
  "sources": [
    { "label": "U.S. and Japan prop up weak yen with first joint market intervention in 15 years — NBC News", "url": "https://www.nbcnews.com/world/asia/us-dollar-falls-sharply-japanese-yen-market-intervention-rcna590522" },
    { "label": "Japan yen intervention: why the U.S. stepped in — CNBC", "url": "https://www.cnbc.com/2026/08/03/japan-yen-intervention-us-treasurys-euros-.html" },
    { "label": "Japan and US confirm rare joint intervention to prop up yen — Al Jazeera", "url": "https://www.aljazeera.com/economy/2026/8/3/japan-and-us-confirm-rare-joint-intervention-to-prop-up-yen" },
  ],
  "deepDive": {
    "facts": [
      { "text": "The U.S. dollar traded above 163 yen prior to the intervention, touching a roughly 40-year high against the yen — the yen's weakest level since 1986.", "source": "NBC News", "url": "https://www.nbcnews.com/world/asia/us-dollar-falls-sharply-japanese-yen-market-intervention-rcna590522" },
      { "text": "Japan and the U.S. confirmed a coordinated intervention to buy yen and sell dollars, the first joint U.S.-Japan currency intervention since 2011 and the first joint operation specifically to buy yen since 1998.", "source": "NBC News", "url": "https://www.nbcnews.com/world/asia/us-dollar-falls-sharply-japanese-yen-market-intervention-rcna590522" },
      { "text": "Following the announcement, the dollar dropped about 1% to 156.34 yen. Japanese Finance Minister Satsuki Katayama confirmed the two countries worked together to sell dollars and buy yen to curb financial market volatility.", "source": "Yahoo Finance / CNBC", "url": "https://www.cnbc.com/2026/08/03/japan-yen-intervention-us-treasurys-euros-.html" },
      { "text": "Both countries said they stand ready to intervene again if needed; the move also aligns with U.S. interest in preventing its trade deficit from widening due to a weaker yen.", "source": "CNBC", "url": "https://www.cnbc.com/2026/08/03/japan-yen-intervention-us-treasurys-euros-.html" },
    ],
    "analysis": [
      "Joint currency intervention is unusual precisely because it signals both a real problem and unusual cooperation: a single country intervening alone happens periodically, but a coordinated U.S.-Japan operation hadn't occurred since 2011, and hadn't specifically targeted buying yen since 1998 — the rarity itself is part of what makes it a strong market signal.",
      "The U.S. angle matters as much as Japan's here: a very weak yen makes Japanese exports cheaper and U.S. exports to Japan relatively more expensive, which can widen the U.S. trade deficit. That gives Washington its own reason to participate, not just to help an ally — this wasn't purely a favor to Japan.",
      "The explicit statement that both governments 'stand ready to intervene again' is a deliberate part of the strategy — central banks and treasuries often try to shape expectations, not just move the current price, since a credible threat of further action can deter speculators from testing the currency's floor again.",
      "This story connects to the broader macro backdrop of the week: rising Treasury yields (noted in the July 31 market wrap) and Fed policy tension were already putting pressure on the dollar's value relative to other currencies, providing useful context for why the yen's decline became severe enough to trigger a rare joint response now.",
    ],
  },
  "clubRelevance": {
    "pmc": "A concrete example of how currency moves affect multinational companies differently depending on their import/export exposure — useful for discussing FX risk in a portfolio context.",
    "bta": "Currency intervention is a market-structure event trading desks watch closely — this is a clean, current example of how and why governments occasionally override free-floating exchange rates.",
    "wfa": "A strong example for explaining exchange rates and trade deficits in an interview — using a real, headline-making event instead of a textbook definition.",
  },
} as const;

export const usJapanYenIntervention20260803Comic = {
  ...existingFields,

  professionalSummary:
    "After the U.S. dollar climbed above 163 yen — a roughly 40-year high, the yen's weakest level since 1986 — Japan and the U.S. confirmed a coordinated currency intervention on Monday, August 3, 2026, buying yen and selling dollars. It was the first joint U.S.-Japan intervention since 2011 and the first joint yen-buying operation since 1998. The dollar dropped about 1% to 156.34 yen following the announcement. Both governments said they stand ready to intervene again if needed; the move also serves U.S. interests by helping limit further widening of its trade deficit tied to a weak yen.",
  thirtySecondSummary:
    "The yen had fallen to its weakest level in 40 years against the dollar, so the U.S. and Japan did something they hadn't done together since 2011: directly intervened in currency markets, buying yen and selling dollars. The dollar dropped about 1% against the yen right after the announcement.",
  eli5Summary:
    "Japan's currency, the yen, had gotten really weak compared to the U.S. dollar — the weakest it's been in about 40 years. Normally governments let currency values float on their own, but this got serious enough that the U.S. and Japan teamed up and directly bought yen (using dollars) to push its value back up — something they hadn't done together in 15 years. It worked, at least a little: right after they announced it, the dollar dropped in value compared to the yen.",
  timeline: [
    {
      date: "Late July 2026",
      label: "Dollar hits 40-year high vs. yen",
      detail: "The dollar climbs above 163 yen, the yen's weakest level since 1986.",
    },
    {
      date: "August 3, 2026",
      label: "Joint intervention confirmed",
      detail: "Japan and the U.S. confirm a coordinated intervention to buy yen and sell dollars — the first joint action since 2011.",
    },
    {
      date: "August 3, 2026",
      label: "Dollar drops against yen",
      detail: "The dollar falls about 1% to 156.34 yen immediately following the announcement.",
    },
  ],
  bullCase: [
    {
      point: "A credible, coordinated intervention can meaningfully stabilize a currency, at least in the near term.",
      support: "The immediate roughly 1% move shows the announcement had real market impact, and the explicit 'ready to act again' statement adds a forward-looking deterrent against further yen weakness.",
    },
    {
      point: "A stronger yen reduces imported-inflation pressure in Japan and eases the U.S. trade deficit concern that motivated Washington's participation.",
      support: "Both countries have a genuine economic interest in a less extreme exchange rate, which supports the durability of this cooperation if pressure resumes.",
    },
  ],
  bearCase: [
    {
      point: "Currency interventions often provide only temporary relief if the underlying interest-rate and trade dynamics driving the move haven't changed.",
      support: "Historically, unilateral or joint interventions can be overwhelmed by market forces again within weeks or months if the fundamental gap (like differing interest rate policy) that caused the currency move remains in place.",
    },
    {
      point: "A rare, coordinated intervention signals how severe the underlying imbalance had already become.",
      support: "The fact that two governments felt compelled to act jointly for the first time in 15 years suggests normal market mechanisms had already failed to correct the move on their own.",
    },
  ],
  longTermView:
    "The near-term question is whether this intervention meaningfully changes the yen's trajectory or simply pauses it — that depends heavily on whether the interest-rate gap between the U.S. and Japan (a major driver of yen weakness) narrows going forward, something the intervention itself doesn't directly address. Long-term investors and businesses with Japan exposure should watch whether the two countries follow through on their stated willingness to intervene again, and whether Japan's central bank makes any accompanying interest-rate moves — the intervention is a signal and a temporary lever, not a permanent fix to the underlying imbalance.",
  quiz: [
    {
      question: "How weak had the yen gotten against the dollar before the intervention?",
      options: [
        "Its weakest level in 5 years",
        "Its weakest level since 1986 (roughly a 40-year high for the dollar)",
        "Its strongest level in a decade",
        "Roughly unchanged from historical norms",
      ],
      correctIndex: 1,
      explanation: "The dollar traded above 163 yen, a roughly 40-year high, meaning the yen was at its weakest level since 1986.",
    },
    {
      question: "What did the U.S. and Japan do on August 3, 2026?",
      options: [
        "Raised interest rates jointly",
        "Confirmed a coordinated intervention, buying yen and selling dollars",
        "Signed a new trade agreement",
        "Devalued the dollar by government decree",
      ],
      correctIndex: 1,
      explanation: "The two countries confirmed a coordinated currency intervention — buying yen and selling dollars — the first such joint action since 2011.",
    },
    {
      question: "How did the dollar-yen exchange rate move immediately after the announcement?",
      options: ["The dollar rose 5% against the yen", "It was unchanged", "The dollar fell about 1% to 156.34 yen", "The yen collapsed further"],
      correctIndex: 2,
      explanation: "The dollar dropped about 1% to 156.34 yen immediately following the intervention announcement.",
    },
    {
      question: "Why did the U.S., not just Japan, have an interest in this intervention?",
      options: [
        "The U.S. has no independent interest — it was purely a favor to Japan",
        "A weak yen risks widening the U.S. trade deficit",
        "The U.S. owns a large stake in the Bank of Japan",
        "It was required by a treaty signed in 1998",
      ],
      correctIndex: 1,
      explanation: "A very weak yen makes Japanese exports cheaper and U.S. exports to Japan relatively pricier, which can widen the U.S. trade deficit — giving Washington its own reason to participate.",
    },
  ],
  discussionQuestions: [
    "Why do governments intervene in currency markets so rarely, given that they technically have the tools to do it more often?",
    "What does it mean that this was the first *joint* intervention since 2011 — why might coordination matter more than either country acting alone?",
    "How might a Japanese exporter and a Japanese importer view this intervention differently?",
    "What would make you confident this intervention will have a lasting effect, versus just a short-term bounce?",
  ],
  relatedHistoricalEvents: [
    {
      title: "China Built Its Own Chip-Making Machine — and Asia's Markets Panicked",
      date: "2026-07-28",
      connection: "Another story this summer where a single country's action (or in this case two countries acting jointly) moved markets across Asia and beyond — both examples of how interconnected global markets react to government-level moves.",
      internalSlug: "china-duv-chip-selloff-2026-07-28",
    },
    {
      title: "The Fed Meeting Actually Happened. It Was Chaos.",
      date: "2026-07-30",
      connection: "Both stories are part of the same summer-long macro backdrop — Fed policy tension and interest-rate differentials are a key driver of the currency pressure that led to this intervention.",
      internalSlug: "fed-decision-dissent-selloff-rebound-2026-07-30",
    },
  ],
} as unknown as FlagshipComic;
