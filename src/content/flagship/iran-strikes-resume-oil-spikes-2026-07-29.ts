// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// copied verbatim from data.js, new Financial Storytelling fields authored
// below, fact-checked against the deepDive.facts/sources already ported.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "iran-strikes-resume-oil-spikes-2026-07-29",
  "date": "2026-07-29",
  "title": "The Oil Ceasefire Lasted Two Days",
  "hook": "The U.S.-Iran pause that crashed oil prices on Monday broke down by Wednesday night — fresh strikes sent oil right back up, exactly the risk this site warned about two days earlier.",
  "category": "Geopolitics & Markets",
  "clubs": ["pmc", "bta", "maa", "wfa"],
  "serious_intro": "This update covers a real escalation in the Iran conflict, which resumed after the brief pause covered in an earlier comic on this site. Iranian officials reported real casualties from the renewed strikes. That human cost is serious and is not the subject of the jokes below — this comic looks only at how markets reacted to the fighting resuming.",
  "backstory": [
    "An earlier comic on this site covered how a weekend pause in U.S. strikes on Iran sent oil crashing more than 7% on Monday, July 27, as traders priced out the 'war premium' that had built into oil during weeks of conflict. That comic's bear case explicitly warned: 'a pause is not a resolution, and the risk could return just as fast as it left.'",
    "It did — in under 48 hours. Iran reportedly attempted an attack on U.S. forces, and President Trump said Iran was 'going to get a beating.' The U.S. then completed a heavy wave of strikes against Iranian military targets, ending the five-night pause. Oil, which had just crashed on hopes for de-escalation, jumped right back up as that hope evaporated.",
  ],
  "panels": [
    {
      "scene": "Wednesday night, July 29 — the pause ends",
      "chars": [
        { "pose": "shocked", "label": "TRADER", "side": "left" },
        { "pose": "talking", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Iran reportedly attempts an attack on U.S. forces. President Trump says Iran is 'going to get a beating.'",
      "dialogue": [
        { "who": "TRADER", "text": "Wait, I thought this was paused?" },
        { "who": "ANALYST", "text": "Was. Past tense." },
      ],
    },
    {
      "scene": "Overnight — U.S. strikes resume",
      "chars": [{ "pose": "shocked", "label": "WTI CRUDE", "side": "left" }],
      "caption": "U.S. forces complete a heavy wave of strikes on Iranian targets, ending the five-night pause. Brent jumps 7.9% to $90.74, WTI jumps 6.6% to $84.46 — the biggest daily oil gain in over two weeks.",
      "dialogue": [
        { "who": "WTI CRUDE", "text": "Monday I crashed 7.5% on hopes for peace. Wednesday I un-crash almost as fast." },
      ],
    },
    {
      "scene": "Thursday — a partial pullback",
      "chars": [
        { "pose": "talking", "label": "ANALYST", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "Oil eases back slightly Thursday — Brent −2% to $88.93, WTI −1.6% to $83.09 — after Saudi Arabia proposes a naval coalition to protect shipping.",
      "dialogue": [
        { "who": "ANALYST", "text": "Not calm exactly. But not screaming panic either." },
        { "who": "TRADER", "text": "Just... watching every headline like it might move the price 5% again." },
      ],
    },
    {
      "scene": "Whiteboard recap",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "Exactly the risk this site flagged Monday: 'if fighting resumes, oil can just as easily spike right back.' It did — in under 48 hours.",
      "dialogue": [
        { "who": "NARRATOR", "text": "A pause was never a guarantee. This is what 'not a peace treaty' actually looks like in practice." },
      ],
    },
  ],
  "vocab": [
    { "term": "Escalation", "def": "When a conflict's intensity increases — more attacks, less diplomacy — the opposite of de-escalation." },
    { "term": "IRGC (Islamic Revolutionary Guard Corps)", "def": "A branch of Iran's armed forces, distinct from its regular military, that U.S. strikes in this conflict have specifically targeted." },
    { "term": "Naval coalition", "def": "A group of countries combining naval forces to protect shipping routes from attack — proposed here as a way to protect oil tankers without waiting for the underlying conflict to resolve." },
    { "term": "Pause discount", "def": "The amount a price has fallen because markets believe a specific risk (like war) has eased. When that belief reverses, the discount can unwind just as quickly as it appeared." },
    { "term": "Volatility", "def": "How sharply and how often an asset's price swings up or down over a given period." },
  ],
  "sources": [
    { "label": "US Launches New Strikes on Iran After Missile Attack on Military Base — Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-07-30/us-launches-fresh-strikes-against-iran-as-war-escalates-again" },
    { "label": "Oil prices move higher as Iran threatens response to latest U.S. strikes — CNBC", "url": "https://www.cnbc.com/2026/07/30/oil-prices-us-iran-war.html" },
    { "label": "July 29, 2026 — Trump says it's 'our turn' after intercepted Iranian attack, US completes Iran strikes — CNN", "url": "https://www.cnn.com/2026/07/29/world/live-news/iran-trump-news" },
  ],
  "deepDive": {
    "serious_note": "The facts and figures below are about market and trading behavior only. They are not a substitute for real news coverage of the human and geopolitical dimensions of this conflict, which deserves to be read about seriously, not through a markets lens alone.",
    "facts": [
      { "text": "U.S. forces completed a heavy wave of strikes against Iranian military targets on July 29–30, 2026, ending a five-night pause. The strikes followed a reported Iranian attempt to attack U.S. forces and President Trump's statement that Iran was 'going to get a beating.'", "source": "CNN / Bloomberg", "url": "https://www.cnn.com/2026/07/29/world/live-news/iran-trump-news" },
      { "text": "Brent crude jumped 7.9% to settle at $90.74 a barrel on July 29 — the biggest daily gain in more than two weeks — as WTI rose 6.6% to $84.46, unwinding most of Monday's 'pause discount.'", "source": "Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-07-30/us-launches-fresh-strikes-against-iran-as-war-escalates-again" },
      { "text": "Oil eased back somewhat on July 30, with Brent falling about 2% to $88.93 and WTI falling 1.6% to $83.09, after Saudi Arabia proposed a naval coalition to protect commercial shipping from attack.", "source": "CNBC", "url": "https://www.cnbc.com/2026/07/30/oil-prices-us-iran-war.html" },
      { "text": "Iranian officials reported casualties from the renewed strikes.", "source": "CNN", "url": "https://www.cnn.com/2026/07/29/world/live-news/iran-trump-news" },
    ],
    "analysis": [
      "This is a direct, fast-moving sequel to the earlier comic on this site — and it proves the bear-case warning right in under 48 hours. A pause built on a conditional, fragile agreement was always one incident away from breaking down, and that's exactly what happened.",
      "Structurally, this is the same mechanism as Monday's move, just running in the opposite direction. The 'war premium' that evaporated when the pause began came right back once the pause ended — traders aren't pricing in a fixed view of the conflict, they're pricing in the current probability of disruption, and that probability can swing hard in either direction within days.",
      "Thursday's partial pullback — oil easing back slightly after Saudi Arabia proposed a naval coalition — shows a market grasping for any signal of stabilization without full confidence in it. A coalition proposal is not the same as a resolved conflict.",
      "For anyone studying this for an interview, the real lesson isn't which direction oil moved — it's that headline geopolitical risk in an active, fluid conflict can whipsaw hard in either direction within the same week, and analysts need to stay genuinely flexible rather than committing to a fixed directional thesis.",
    ],
  },
  "clubRelevance": {
    "pmc": "This is exactly why PMC teaches members not to treat a single headline as the final word on a story — the same underlying conflict drove two opposite multi-percent oil swings within one week, and defending a position requires being ready to update it fast.",
    "bta": "Commodities and macro desks had to reprice risk twice in the same week in opposite directions — a clean, current example of how fast-moving geopolitical risk requires real-time desk judgment, not a fixed thesis held for convenience.",
    "maa": "Energy-sector M&A valuations get whipsawed by swings like this just as much as spot prices do — deal models built around a stable oil-price assumption are being genuinely tested in real time this week.",
    "wfa": "Being able to calmly walk an interviewer through 'markets reacted to a de-escalation, then reacted to the same conflict re-escalating two days later' shows real command of a fast-moving story — exactly what WFA's Financial Literacy Committee coaches members to demonstrate.",
  },
} as const;

export const iranStrikesResumeOilSpikes20260729Comic = {
  ...existingFields,

  professionalSummary:
    "A fragile pause in U.S.-Iran hostilities collapsed within 48 hours of the oil-crash covered in an earlier comic, after Iran reportedly attempted an attack on U.S. forces and the U.S. completed a heavy strike wave against Iranian military targets. Brent crude surged 7.9% to $90.74 and WTI rose 6.6% to $84.46 on July 29, unwinding most of Monday's decline, before both eased slightly on July 30 as Saudi Arabia proposed a naval coalition to protect shipping — a real-time confirmation of the fragility this site flagged when the pause first began.",
  thirtySecondSummary:
    "The Iran ceasefire lasted about two days. After an attempted attack on U.S. forces, the U.S. resumed strikes, and oil prices — which had just crashed on hopes for peace — jumped right back up almost as fast as they'd fallen.",
  eli5Summary:
    "Remember how oil got a lot cheaper because two countries stopped fighting for a bit? Well, they started fighting again just two days later, so oil got expensive again almost as fast as it got cheap. It's a good reminder that a 'pause' in a fight isn't the same as the fight actually being over.",
  timeline: [
    {
      date: "July 27, 2026",
      label: "Pause holds, oil crashes 7.5%",
      detail: "The weekend pause in U.S. strikes on Iran holds through Monday, and oil crashes on hopes for de-escalation (covered in an earlier comic).",
    },
    {
      date: "July 29, 2026 (day)",
      label: "Iran reportedly attempts attack on U.S. forces",
      detail: "President Trump says Iran is 'going to get a beating' in response.",
    },
    {
      date: "July 29–30, 2026 (overnight)",
      label: "U.S. resumes heavy strikes",
      detail: "U.S. forces complete a wave of strikes against Iranian military targets, ending the five-night pause. Brent jumps 7.9%, WTI jumps 6.6%.",
    },
    {
      date: "July 30, 2026",
      label: "Oil eases slightly on coalition proposal",
      detail: "Saudi Arabia proposes a naval coalition to protect shipping; Brent and WTI both pull back modestly.",
    },
  ],
  bullCase: [
    {
      point: "A proposed naval coalition shows regional actors are actively working on solutions beyond just U.S.-Iran negotiations.",
      support: "Saudi Arabia's proposal to protect shipping independent of whether the conflict itself resolves offers a potential path to stabilizing oil supply risk even if fighting continues intermittently.",
    },
    {
      point: "Markets have now shown they can reprice this risk quickly in both directions, which is itself informative.",
      support: "The speed of both the Monday crash and the Wednesday rebound suggests oil markets are functioning efficiently around this story, quickly incorporating new information rather than reacting slowly.",
    },
    {
      point: "Repeated cycles of escalation and de-escalation may eventually converge toward a more stable equilibrium.",
      support: "Each round of conflict and pause gives both sides more information about the other's tolerance for continued fighting, which can eventually produce a more durable resolution.",
    },
  ],
  bearCase: [
    {
      point: "A conflict that can restart within 48 hours of a pause demonstrates just how unstable the underlying situation remains.",
      support: "The speed of the breakdown — one intercepted attack and a single presidential statement were enough to end a five-night pause — suggests neither side has fundamentally de-escalated its posture.",
    },
    {
      point: "Repeated whipsaws make it hard for businesses and investors to plan around energy costs.",
      support: "Airlines, shippers, and other oil-consuming businesses can't easily hedge or budget around a price that might move 7%+ in either direction within 48 hours based on a single headline.",
    },
    {
      point: "Each cycle of escalation raises the odds of a mistake or miscalculation that's harder to walk back.",
      support: "The more times a conflict escalates and de-escalates, the more opportunities exist for an unintended escalation that neither side can easily reverse.",
    },
  ],
  longTermView:
    "This comic and its predecessor together make a single point clearly: in an active, unresolved conflict, market-moving 'de-escalation' headlines should be treated as provisional, not conclusive. The whipsaw from Monday's 7.5% crash to Wednesday's 7.9% rebound happened within the same trading week, driven by the same underlying conflict — a reminder that geopolitical risk premiums in oil don't resolve cleanly, they oscillate with the news cycle until there's an actual durable outcome. Long-term investors in energy-sensitive sectors should expect continued volatility until one of those durable outcomes actually materializes, and should be skeptical of any single headline — in either direction — until it's confirmed by what happens in the following days.",
  quiz: [
    {
      question: "How long did the pause in U.S.-Iran hostilities last before breaking down?",
      options: ["About two days", "About two weeks", "About two months", "It never actually held"],
      correctIndex: 0,
      explanation: "The pause held from the weekend of July 25–26 through Monday, July 27, before breaking down by Wednesday night, July 29 — roughly two days.",
    },
    {
      question: "What triggered the resumption of U.S. strikes on Iran?",
      options: ["A new UN resolution", "Iran reportedly attempting an attack on U.S. forces", "A change in oil prices", "A Saudi Arabian request"],
      correctIndex: 1,
      explanation: "Iran reportedly attempted an attack on U.S. forces, after which President Trump said Iran was 'going to get a beating,' and the U.S. resumed strikes.",
    },
    {
      question: "How did oil prices react to the resumed strikes?",
      options: ["They kept falling", "Brent jumped 7.9% and WTI jumped 6.6%", "They stayed flat", "Only WTI moved"],
      correctIndex: 1,
      explanation: "Brent crude jumped 7.9% to $90.74 and WTI rose 6.6% to $84.46 on July 29, unwinding most of Monday's decline.",
    },
    {
      question: "What did Saudi Arabia propose on July 30 that helped ease oil prices slightly?",
      options: ["A new oil production cut", "A naval coalition to protect shipping", "A ban on oil exports", "A new currency for oil trading"],
      correctIndex: 1,
      explanation: "Saudi Arabia proposed a naval coalition to protect commercial shipping from attack, which helped oil ease back modestly.",
    },
    {
      question: "What's the main lesson from this comic paired with the earlier one on the same conflict?",
      options: [
        "Oil prices never change quickly",
        "A pause in fighting is the same as a resolved conflict",
        "A pause is provisional and can break down quickly, so markets should treat de-escalation headlines cautiously",
        "Geopolitical events don't affect oil prices",
      ],
      correctIndex: 2,
      explanation: "The two comics together show that a pause is not a resolution — oil whipsawed both up and down within the same week as the underlying conflict evolved.",
    },
  ],
  discussionQuestions: [
    "Should traders treat a 'pause' in an active conflict as meaningfully different from ongoing conflict, given how quickly this one broke down?",
    "How would you hedge exposure to oil price risk if you were running an airline or shipping company through a week like this one?",
    "What would it take for you to believe a ceasefire or pause in this conflict is actually durable, rather than another temporary lull?",
    "Does the market's fast repricing in both directions this week represent efficient pricing, or overreaction? Defend your answer.",
  ],
  relatedHistoricalEvents: [
    {
      title: "Oil Just Had Its Worst Day in Two Months — Here's Why That's Good News",
      date: "2026-07-27",
      connection: "The direct predecessor to this story — the pause and oil crash that broke down just two days later.",
      internalSlug: "iran-ceasefire-oil-crash-2026-07-27",
    },
    {
      title: "The Fed Meeting Actually Happened. It Was Chaos.",
      date: "2026-07-30",
      connection: "Both stories show markets swinging sharply in response to fast-moving news within the same week, on completely different underlying stories.",
      internalSlug: "fed-decision-dissent-selloff-rebound-2026-07-30",
    },
  ],
} as unknown as FlagshipComic;
