// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// copied verbatim from data.js, new Financial Storytelling fields authored
// below, fact-checked against the deepDive.facts/sources already ported.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "iran-ceasefire-oil-crash-2026-07-27",
  "date": "2026-07-27",
  "title": "Oil Just Had Its Worst Day in Two Months — Here's Why That's Good News",
  "hook": "A U.S.-Iran pause in strikes sent crude oil crashing more than 7% in a single day, unwinding weeks of war-driven price gains almost overnight.",
  "category": "Geopolitics & Markets",
  "clubs": ["pmc", "bta", "maa", "wfa"],
  "serious_intro": "The Iran conflict referenced here has caused real casualties and displacement, covered in more depth in an earlier comic on this site. That human cost is serious and is not the subject of the jokes below — this comic looks only at how a pause in fighting moved oil and stock prices.",
  "backstory": [
    "An earlier comic on this site covered how escalating conflict between Iran and Western/Israeli forces pushed oil prices and Treasury yields sharply higher in mid-2026, since the region — including the critical Strait of Hormuz shipping route — is central to global oil supply. That comic explained the mechanism: more fighting means more risk to oil shipments, so traders bid up the price of oil to account for that risk, a markup often called a 'war premium' or 'risk premium.'",
    "Over the weekend of July 25–26, 2026, the U.S. paused its strikes on Iran, and Iran reportedly agreed to hold off on retaliating as long as that pause holds. It's a pause, not a peace deal — fighting could resume — but it was enough for traders to suddenly see much less risk of oil shipments getting disrupted, and oil prices reacted immediately and dramatically on Monday, July 27.",
  ],
  "panels": [
    {
      "scene": "Over the weekend — July 25–26, 2026",
      "chars": [
        { "pose": "shocked", "label": "TRADER", "side": "left" },
        { "pose": "talking", "label": "ANALYST", "side": "right" },
      ],
      "caption": "The U.S. pauses its strikes on Iran. Iran reportedly agrees to hold off retaliating — as long as the pause holds.",
      "dialogue": [
        { "who": "TRADER", "text": "Wait, they're just... stopping? For now?" },
        { "who": "ANALYST", "text": "A pause, not a peace treaty. But markets don't wait around for treaties." },
      ],
    },
    {
      "scene": "Monday morning — the oil desk",
      "chars": [{ "pose": "panic", "label": "WTI CRUDE", "side": "left" }],
      "caption": "WTI crude falls 7.5% to $82.61 a barrel — the biggest one-day drop since May 20.",
      "dialogue": [
        { "who": "WTI CRUDE", "text": "Three weeks of war-fear priced into me, gone in one trading session." },
      ],
    },
    {
      "scene": "Same day, the international benchmark",
      "chars": [
        { "pose": "panic", "label": "BRENT CRUDE", "side": "left" },
        { "pose": "shocked", "label": "TRADER", "side": "right" },
      ],
      "caption": "Brent crude fell even harder — down 8.7% to $88.36.",
      "dialogue": [
        { "who": "BRENT CRUDE", "text": "Less risk of tankers getting stuck near the Strait of Hormuz means less reason to pay a premium." },
        { "who": "TRADER", "text": "Funny how fast a 'war premium' can evaporate." },
      ],
    },
    {
      "scene": "Whiteboard recap",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "A pause isn't peace. If fighting resumes, oil can just as easily spike right back.",
      "dialogue": [
        { "who": "NARRATOR", "text": "Remember the earlier comic where escalation sent oil and bond yields up together? This is that exact mechanism running in reverse." },
      ],
    },
  ],
  "vocab": [
    { "term": "War premium / risk premium", "def": "The extra amount built into a commodity's price because of the risk that conflict disrupts supply — it can vanish as fast as it appeared once that risk fades." },
    { "term": "Strait of Hormuz", "def": "A narrow shipping passage between Iran and Oman that a large share of the world's oil exports must pass through — one of the most important chokepoints in global energy trade." },
    { "term": "WTI (West Texas Intermediate)", "def": "The main U.S. benchmark price for crude oil, used to price much of the oil produced and consumed in North America." },
    { "term": "Brent crude", "def": "The main international benchmark price for crude oil, used to price roughly two-thirds of the world's internationally traded oil." },
    { "term": "De-escalation", "def": "When a conflict's intensity decreases — fewer attacks, more diplomacy — the opposite of escalation, where a conflict intensifies." },
  ],
  "sources": [
    { "label": "Oil prices slide, Brent crude below $90 as pause to U.S.-Iran hostilities appears to hold — CNBC", "url": "https://www.cnbc.com/2026/07/27/oil-price-wti-brent-slide-as-iran-reportedly-may-halt-attacks.html" },
    { "label": "Oil Prices Just Posted Their Biggest One-Day Drop in Two Months — The Motley Fool", "url": "https://www.fool.com/investing/2026/07/27/oil-prices-just-posted-their-biggest-one-day-drop-in-two-months-heres-what-it-means-for-energy-investors/" },
    { "label": "WTI Crude Falls More Than 7% as US Pause in Iran Strikes Breaks July Uptrend — PrimeXBT", "url": "https://primexbt.com/news/wti-crude-falls-more-than-7-as-us-pause-in-iran-strikes-breaks-july-uptrend/" },
  ],
  "deepDive": {
    "serious_note": "The facts and figures below are about market and trading behavior only. They are not a substitute for real news coverage of the human and geopolitical dimensions of this conflict, which deserves to be read about seriously, not through a markets lens alone.",
    "facts": [
      { "text": "WTI crude for September delivery fell 7.5% to settle at $82.61 a barrel on July 27, 2026 — the largest one-day percentage drop for the U.S. crude benchmark since May 20.", "source": "PrimeXBT / CNBC", "url": "https://primexbt.com/news/wti-crude-falls-more-than-7-as-us-pause-in-iran-strikes-breaks-july-uptrend/" },
      { "text": "Brent crude for September delivery fell 8.7% to close at $88.36 a barrel the same day.", "source": "PrimeXBT", "url": "https://primexbt.com/news/wti-crude-falls-more-than-7-as-us-pause-in-iran-strikes-breaks-july-uptrend/" },
      { "text": "The drop followed the U.S. pausing strikes on Iran over the weekend, with Iran reportedly agreeing to suspend attacks as long as the pause holds, raising hopes for a diplomatic resolution and reopened shipping through the Strait of Hormuz.", "source": "CNBC", "url": "https://www.cnbc.com/2026/07/27/oil-price-wti-brent-slide-as-iran-reportedly-may-halt-attacks.html" },
      { "text": "U.S. stocks rose Monday, aided by the falling oil prices: the Dow gained 0.51% (262.83 points) to close at 52,210.08.", "source": "CNBC", "url": "https://www.cnbc.com/2026/07/27/oil-price-wti-brent-slide-as-iran-reportedly-may-halt-attacks.html" },
    ],
    "analysis": [
      "This comic is the mirror image of an earlier one on this site: back in July, escalating Iran conflict pushed oil and Treasury yields up together as traders priced in supply risk. Here, the exact same mechanism runs in reverse — a pause in fighting removes perceived risk, and the 'war premium' that had built into oil prices evaporates just as fast as it appeared. Nothing about actual oil supply changed on July 27; what changed was how much risk traders believed was still baked into the price.",
      "The size of the move is worth sitting with: a 7.5% one-day drop in WTI is enormous by historical standards — most trading days move a commodity like oil by well under 1%. Moves this size almost always trace back to a single, discrete piece of news rather than gradual supply-and-demand shifts, which is exactly the kind of one-headline-one-mechanism story that's easy to explain clearly in an interview.",
      "The 'pause, not peace' distinction matters for anyone trying to trade or invest around this story. A ceasefire that could break down at any time means the risk hasn't disappeared — it's just been repriced lower for now. If fighting resumes, the same mechanism could send oil right back up just as quickly, which is why energy traders don't treat a pause as a reason to stop watching the headlines.",
      "For sectors beyond energy, cheaper oil is a genuine tailwind: airlines, shipping, and consumer-discretionary companies all benefit from lower fuel costs, while oil producers and oil-services companies see the opposite effect on their own margins. A single geopolitical headline like this one doesn't just move an oil price — it quietly reshuffles winners and losers across a big chunk of the market.",
    ],
  },
  "clubRelevance": {
    "pmc": "Whether this pause is a durable turning point or a temporary reprieve before fighting resumes is a genuinely live, debatable question — exactly the kind of geopolitical-to-market reasoning PMC discussions are built around, and it directly continues the debate started in the earlier oil-and-bonds comic on this site.",
    "bta": "Commodities desks repriced oil within minutes of the pause news, and FX and rates desks watched for spillover into currencies and Treasuries — a clean, fast example of how geopolitical headlines move multiple asset classes at once, core trading-floor pattern recognition.",
    "maa": "Oil-price swings this large directly affect the economics of energy-sector M&A, like the Var Energi/BlueNord deal covered earlier on this site — a lower oil price changes how buyers and sellers value production assets almost overnight.",
    "wfa": "Being able to calmly explain why oil crashed 7%+ in a single day — and that a 'pause' is meaningfully different from a lasting resolution — is exactly the kind of clear, nuanced market storytelling WFA's Financial Literacy Committee coaches members to bring into interviews.",
  },
} as const;

export const iranCeasefireOilCrash20260727Comic = {
  ...existingFields,

  professionalSummary:
    "A U.S. pause in strikes on Iran, with Iran reportedly agreeing to hold off retaliating, sent crude oil into its steepest one-day decline in two months on July 27, 2026: WTI fell 7.5% to $82.61/barrel and Brent fell 8.7% to $88.36, unwinding weeks of war-driven price gains. The move is the mirror image of an earlier escalation-driven spike covered on this site, illustrating how quickly a geopolitical risk premium can build into — and drain out of — commodity prices.",
  thirtySecondSummary:
    "The U.S. and Iran paused their fighting over the weekend, and oil prices crashed more than 7% in a single day as traders decided the risk to oil shipments had suddenly gotten much smaller. It's the same mechanism that sent oil up during the conflict, just running backward.",
  eli5Summary:
    "When there's a war near an important oil-shipping route, oil gets more expensive because people worry supplies might get disrupted. When the US and Iran said they'd stop fighting for now, that worry mostly went away overnight — so the extra cost baked into oil prices disappeared just as fast as it showed up, and oil got a lot cheaper in a single day.",
  timeline: [
    {
      date: "Weekend of July 25–26, 2026",
      label: "U.S. pauses strikes on Iran",
      detail: "The U.S. halts its strikes on Iran; Iran reportedly agrees to hold off retaliating as long as the pause holds.",
    },
    {
      date: "July 27, 2026",
      label: "WTI crude falls 7.5%",
      detail: "WTI crude settles at $82.61/barrel, its biggest one-day drop since May 20.",
    },
    {
      date: "July 27, 2026",
      label: "Brent crude falls 8.7%",
      detail: "The international benchmark falls even harder, closing at $88.36/barrel.",
    },
    {
      date: "July 27, 2026",
      label: "U.S. stocks rise on cheaper oil",
      detail: "The Dow gains 0.51% (262.83 points) to 52,210.08, helped by falling energy costs.",
    },
  ],
  bullCase: [
    {
      point: "Cheaper oil is a broad tailwind for the economy and most sectors.",
      support: "Airlines, shipping, and consumer-discretionary companies all benefit directly from lower fuel costs, and lower energy costs can ease inflation pressure economy-wide.",
    },
    {
      point: "A negotiated pause, even if fragile, is still meaningfully better than active escalation.",
      support: "Reduced tanker risk through the Strait of Hormuz is a real, immediate benefit for global oil supply chains regardless of how long the pause ultimately lasts.",
    },
    {
      point: "The size of the reversal shows how much of the earlier price spike was pure risk premium, not a real supply shortage.",
      support: "Nothing about actual oil production or inventories changed on July 27 — the entire move was investors repricing perceived risk, meaning the 'real' price of oil without conflict risk may be closer to $82 than the elevated levels seen during escalation.",
    },
  ],
  bearCase: [
    {
      point: "A pause is not a resolution, and the risk could return just as fast as it left.",
      support: "Iran's agreement to hold off is explicitly contingent on the pause continuing — any resumption of fighting could send the same risk premium right back into oil prices with similarly little warning.",
    },
    {
      point: "Energy producers and oil-services companies take a direct hit from the same move that helps other sectors.",
      support: "A 7–8% one-day price drop meaningfully cuts near-term revenue expectations for oil-focused companies, the flip side of the relief felt by fuel-consuming industries.",
    },
    {
      point: "Extreme one-day volatility like this signals a market still trading heavily on headlines, not fundamentals.",
      support: "When a single geopolitical announcement can move a major commodity 7–8% in a day, it suggests the market remains highly reactive and could see similarly large swings in either direction on the next headline.",
    },
  ],
  longTermView:
    "The bigger question for long-term investors isn't whether oil fell 7.5% on July 27 — it's whether this pause is the start of a genuine de-escalation or just a temporary lull in a longer conflict. If the pause holds and diplomacy progresses, the 'war premium' that had built into oil prices over the prior weeks may simply stay gone, benefiting energy-consuming sectors broadly and easing one source of inflation pressure the Fed has been watching closely. If fighting resumes, expect the same sharp, fast repricing to happen in reverse. Investors with exposure to energy-sensitive sectors — airlines, shipping, industrials, or oil producers themselves — should treat headlines about the pause's durability as a genuine, ongoing input to their thesis, not a one-time event to file away.",
  quiz: [
    {
      question: "What triggered oil's biggest one-day drop in two months on July 27, 2026?",
      options: [
        "A surprise increase in U.S. oil production",
        "A U.S. pause in strikes on Iran, with Iran agreeing to hold off retaliating",
        "OPEC announcing a production increase",
        "A new U.S.-China trade deal",
      ],
      correctIndex: 1,
      explanation: "The U.S. paused its strikes on Iran over the weekend, and Iran reportedly agreed to hold off retaliating as long as the pause holds, sharply reducing the perceived risk to oil supply.",
    },
    {
      question: "By how much did WTI crude fall on July 27, 2026?",
      options: ["About 2%", "About 4%", "7.5%", "15%"],
      correctIndex: 2,
      explanation: "WTI crude fell 7.5% to settle at $82.61 a barrel, its biggest one-day drop since May 20.",
    },
    {
      question: "What is a 'war premium' or 'risk premium' in the context of oil prices?",
      options: [
        "A tax governments charge on oil during wartime",
        "The extra amount built into a commodity's price because of the risk that conflict disrupts supply",
        "A discount oil companies give during conflicts",
        "A type of oil futures contract",
      ],
      correctIndex: 1,
      explanation: "A war/risk premium is extra price built in because of perceived risk to supply — it can vanish quickly once that risk fades, which is exactly what happened here.",
    },
    {
      question: "Why is the Strait of Hormuz significant to this story?",
      options: [
        "It's where most U.S. oil is drilled",
        "It's a narrow shipping passage a large share of the world's oil exports must pass through",
        "It's the location of Iran's central bank",
        "It's a major stock exchange",
      ],
      correctIndex: 1,
      explanation: "The Strait of Hormuz is one of the most important chokepoints in global energy trade — conflict risk near it directly affects how safely oil tankers can move, which is why de-escalation eased oil prices so sharply.",
    },
    {
      question: "What's the key difference between a 'pause' and a lasting resolution to a conflict?",
      options: [
        "There is no meaningful difference",
        "A pause could break down and fighting could resume, while a resolution is more durable",
        "A pause only applies to oil markets",
        "A pause means the conflict is over",
      ],
      correctIndex: 1,
      explanation: "A pause is conditional and can end if either side resumes fighting, meaning the same risk that pushed oil prices up during escalation hasn't fully gone away — it's just been reduced for now.",
    },
  ],
  discussionQuestions: [
    "Is it rational for oil to swing 7-8% in a single day based on a pause in fighting that could still break down? Why or why not?",
    "Which sectors benefit most from this move, and which are hurt — and how would you position a portfolio differently depending on whether you believe the pause holds?",
    "How does this story connect to the Fed's inflation concerns covered elsewhere on this site — could falling oil prices actually make the Fed's job easier?",
    "What would you look for in the news over the following weeks to decide whether this pause is likely to hold or break down?",
  ],
  relatedHistoricalEvents: [
    {
      title: "The Fed Meeting Actually Happened. It Was Chaos.",
      date: "2026-07-30",
      connection: "Falling oil prices ease one source of inflation pressure the Fed has been watching closely — directly relevant to the rate-path debate covered in that comic.",
      internalSlug: "fed-decision-dissent-selloff-rebound-2026-07-30",
    },
    {
      title: "China Built Its Own Chip-Making Machine — and Asia's Markets Panicked",
      date: "2026-07-28",
      connection: "Both stories show how a single geopolitical or competitive-risk headline can move an entire asset class within a single trading session.",
      internalSlug: "china-duv-chip-selloff-2026-07-28",
    },
  ],
} as unknown as FlagshipComic;
