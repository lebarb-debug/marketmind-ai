// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// copied verbatim from data.js, new Financial Storytelling fields authored
// below, fact-checked against the deepDive.facts/sources already ported.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "ice-acquires-marketaxess-2026-07-30",
  "date": "2026-07-30",
  "title": "The NYSE's Parent Company Just Bought a Bond-Trading Platform for $6 Billion",
  "hook": "Intercontinental Exchange is acquiring MarketAxess in an all-cash deal at a 33% premium — a bet that owning bond trading, not just stock trading, is the next edge in exchange competition.",
  "category": "M&A",
  "clubs": ["maa", "bta", "pmc"],
  "backstory": [
    "Intercontinental Exchange (ICE) is a company that owns and runs financial exchanges — most notably the New York Stock Exchange — along with clearinghouses and market-data businesses. Exchange operators like ICE make money by charging fees on trading activity and by selling data about that activity, so owning more of the 'infrastructure' that trades flow through is directly valuable to them. MarketAxess is a company that built one of the leading electronic platforms specifically for trading corporate bonds — a part of the market that, unlike stocks, has historically still relied heavily on phone calls and manual negotiation rather than instant electronic trading.",
    "On July 30, 2026, ICE announced it would acquire MarketAxess for $167 per share in cash — a 33% premium to MarketAxess's prior closing price — in a deal worth roughly $6.0 billion in equity value. The boards of both companies unanimously approved the deal, which is expected to close in the first half of 2027 pending shareholder and regulatory approval.",
  ],
  "panels": [
    {
      "scene": "Wednesday evening, July 29 — the deal is announced",
      "chars": [
        { "pose": "pointing", "label": "ICE", "side": "left" },
        { "pose": "neutral", "label": "MARKETAXESS", "side": "right" },
      ],
      "caption": "ICE agrees to buy MarketAxess for $167 a share in cash — a 33% premium to Tuesday's closing price.",
      "dialogue": [
        { "who": "ICE", "text": "We already run the New York Stock Exchange. Now we want to run bond trading too." },
        { "who": "MARKETAXESS", "text": "...my board is going to like that premium a lot." },
      ],
    },
    {
      "scene": "What MarketAxess actually does",
      "chars": [
        { "pose": "talking", "label": "ANALYST", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "Total deal value: about $6.0 billion in equity, $5.7 billion including debt.",
      "dialogue": [
        { "who": "ANALYST", "text": "Bonds used to trade mostly over the phone. MarketAxess helped move that online." },
        { "who": "TRADER", "text": "And now the company that already dominates electronic stock trading wants a piece of that too." },
      ],
    },
    {
      "scene": "Both boardrooms",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "Unanimously approved by both companies' boards. Deal expected to close in the first half of 2027, pending regulatory and shareholder approval.",
      "dialogue": [
        { "who": "NARRATOR", "text": "A 33% premium and a unanimous vote on both sides — this is a deal neither side is fighting over." },
      ],
    },
    {
      "scene": "Whiteboard recap",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "Exchanges make money on trading volume and data. Owning both stock AND bond trading infrastructure means more of every trade flows through the same company.",
      "dialogue": [
        { "who": "NARRATOR", "text": "This isn't a flashy AI story. It's a quieter bet that controlling market infrastructure itself is its own kind of moat." },
      ],
    },
  ],
  "vocab": [
    { "term": "Exchange operator", "def": "A company that runs a marketplace where financial assets (stocks, bonds, derivatives) are bought and sold, earning fees on trading activity and market data. NYSE's parent, ICE, is a classic example." },
    { "term": "Electronic trading platform", "def": "A system that lets buyers and sellers trade an asset directly online instead of over the phone or in person. MarketAxess pioneered this for corporate bonds." },
    { "term": "All-cash deal", "def": "An acquisition paid for entirely in cash rather than partly or wholly in the buyer's own shares." },
    { "term": "Acquisition premium", "def": "The extra amount a buyer pays above a target's current market value — the price of convincing shareholders to sell and give up control." },
    { "term": "Enterprise value", "def": "The theoretical full takeover price of a company: equity value plus debt, minus cash. Distinct from equity value, which is just the value of a company's shares." },
  ],
  "sources": [
    { "label": "ICE to buy MarketAxess in $5.7 billion deal to expand fixed-income offerings — CNBC", "url": "https://www.cnbc.com/2026/07/30/intercontinental-exchange-to-buy-marketaxess.html" },
    { "label": "ICE to Acquire MarketAxess — Markets Media", "url": "https://www.marketsmedia.com/ice-to-acquire-marketaxess/" },
    { "label": "MarketAxess (Nasdaq: MKTX) agrees to $167 per share all-cash sale to ICE — StockTitan (SEC filing)", "url": "https://www.stocktitan.net/sec-filings/MKTX/8-k-marketaxess-holdings-inc-reports-material-event-cb1eda509fcd.html" },
  ],
  "deepDive": {
    "facts": [
      { "text": "ICE agreed to acquire MarketAxess for $167 per share in an all-cash deal, a 33% premium to MarketAxess's closing price on July 29, 2026, representing approximately $6.0 billion in equity value and $5.7 billion in total enterprise value.", "source": "CNBC", "url": "https://www.cnbc.com/2026/07/30/intercontinental-exchange-to-buy-marketaxess.html" },
      { "text": "The deal was unanimously approved by the boards of directors of both ICE and MarketAxess.", "source": "Markets Media", "url": "https://www.marketsmedia.com/ice-to-acquire-marketaxess/" },
      { "text": "The transaction is expected to close in the first half of 2027, subject to shareholder and regulatory approval.", "source": "Markets Media", "url": "https://www.marketsmedia.com/ice-to-acquire-marketaxess/" },
      { "text": "MarketAxess operates one of the leading electronic trading platforms for corporate bonds; ICE already owns and operates the New York Stock Exchange along with other exchanges, clearinghouses, and data and analytics businesses.", "source": "CNBC", "url": "https://www.cnbc.com/2026/07/30/intercontinental-exchange-to-buy-marketaxess.html" },
    ],
    "analysis": [
      "Exchange operators like ICE are, at their core, in the business of owning market 'plumbing' — the infrastructure trades flow through — and collecting fees and data revenue from every transaction that uses it. Owning MarketAxess extends that same playbook from stocks into corporate bonds, a part of the market that has electronified more slowly.",
      "The 33% premium is a useful, concrete number for understanding how acquisitions get priced: MarketAxess shareholders own something that traded at a specific price the day before the deal, and ICE had to offer meaningfully more than that to convince them to sell and give up control.",
      "This deal is a useful contrast to the flashier, AI-driven headlines dominating the same week (Microsoft's record rally, the Fed dissent, Apple's earnings reaction). Not every consequential deal is about artificial intelligence — recognizing that distinction is part of building real market literacy beyond whatever story is loudest that week.",
      "For anyone interested in the M&A process specifically, this deal has clean, teachable structure: strategic buyer (not a financial buyer like private equity), all-cash consideration (not stock), and a roughly year-long timeline to close pending regulatory review — all standard features worth being able to name and explain in an interview.",
    ],
  },
  "clubRelevance": {
    "maa": "This is a textbook strategic-buyer acquisition: a large exchange operator buying a smaller, complementary platform to expand into an adjacent asset class, complete with a clear premium and unanimous board approval — directly relevant to how M&A Advisors teaches deal rationale and premium analysis.",
    "bta": "Bond trading, unlike stock trading, is still only partially electronic — this deal is a direct bet on where market structure is headed, and it's exactly the kind of market-infrastructure story Banking & Trading Association members interested in trading technology and market structure should know cold.",
    "pmc": "Is 'owning market infrastructure across asset classes' a durable competitive advantage, or just empire-building that adds complexity without much synergy? A good, less AI-hype-driven debate for PMC to sink its teeth into this week, using real premium and valuation numbers.",
  },
} as const;

export const iceAcquiresMarketaxess20260730Comic = {
  ...existingFields,

  professionalSummary:
    "Intercontinental Exchange (ICE), parent of the New York Stock Exchange, agreed on July 30, 2026 to acquire MarketAxess, a leading electronic corporate-bond trading platform, for $167 per share in an all-cash deal — a 33% premium representing approximately $6.0 billion in equity value and $5.7 billion in enterprise value. Unanimously approved by both boards and expected to close in the first half of 2027, the deal extends ICE's exchange-infrastructure playbook from equities into fixed income, a segment of the market that remains only partially electronified.",
  thirtySecondSummary:
    "The company that owns the New York Stock Exchange is buying MarketAxess, a platform for trading bonds electronically, for about $6 billion in cash — a 33% premium. It's a bet that owning the infrastructure behind bond trading is just as valuable as owning stock-trading infrastructure.",
  eli5Summary:
    "A company called ICE owns the New York Stock Exchange, which is basically a giant marketplace where people buy and sell shares of companies. Now ICE is buying a different company that runs a similar kind of marketplace, but for bonds instead of stocks. ICE is paying a lot more than the company was worth the day before, because that's usually how it works when one company wants to convince another company's owners to sell.",
  timeline: [
    {
      date: "July 29, 2026",
      label: "MarketAxess closes at pre-deal price",
      detail: "MarketAxess shares close at their last price before the acquisition announcement, setting the baseline for the deal premium.",
    },
    {
      date: "July 30, 2026",
      label: "ICE announces $167/share all-cash acquisition",
      detail: "ICE agrees to acquire MarketAxess for $167 per share in cash — a 33% premium — worth about $6.0 billion in equity value.",
    },
    {
      date: "July 30, 2026",
      label: "Both boards unanimously approve",
      detail: "The deal receives unanimous approval from the boards of directors of both ICE and MarketAxess.",
    },
    {
      date: "H1 2027 (expected)",
      label: "Deal expected to close",
      detail: "Subject to shareholder and regulatory approval, the transaction is expected to close in the first half of 2027.",
    },
  ],
  bullCase: [
    {
      point: "Owning bond-trading infrastructure alongside stock-trading infrastructure creates real cross-selling and data advantages.",
      support: "ICE can bundle market data, analytics, and trading access across asset classes for the same institutional clients, deepening relationships and capturing more fee revenue per customer.",
    },
    {
      point: "Corporate bond trading is still less electronified than stocks, leaving real room for growth.",
      support: "MarketAxess is a leader in a market segment that hasn't fully transitioned online yet — ICE is buying exposure to that ongoing shift rather than a fully mature, saturated market.",
    },
    {
      point: "A unanimous board vote on both sides signals a well-negotiated, mutually beneficial transaction.",
      support: "Both companies' independent boards, with fiduciary duties to their own shareholders, agreed the terms were fair — a meaningful signal compared to a contested or hostile deal.",
    },
  ],
  bearCase: [
    {
      point: "A 33% premium is a real cost that ICE has to earn back through synergies or growth.",
      support: "Paying meaningfully more than the pre-deal market price raises the bar for the acquisition to be value-accretive; if the expected cross-selling or growth doesn't materialize, ICE overpaid.",
    },
    {
      point: "Regulatory approval isn't guaranteed, and the deal has nearly a year before an expected close.",
      support: "A lot can change in market conditions, competitive dynamics, or regulatory posture between now and a first-half-2027 close, adding real execution risk to the timeline.",
    },
    {
      point: "Consolidating market infrastructure into fewer large players raises questions about competition and fees over time.",
      support: "As exchange operators acquire more of the trading 'stack,' regulators and market participants may scrutinize whether this reduces competitive pressure on fees over the long run.",
    },
  ],
  longTermView:
    "This deal is a useful reminder that not all significant M&A activity is tied to flashy trends like AI — sometimes the most consequential deals are quieter bets on market structure itself. If ICE successfully integrates MarketAxess and captures real cross-selling value across its equities and fixed-income businesses, this could set a template for further exchange-operator consolidation into adjacent asset classes. Long-term investors and finance-club members should watch two things over the next year: whether the deal clears regulatory review without significant concessions, and whether ICE's execution post-close actually delivers the synergies that justified the 33% premium — the real test of whether this was a smart strategic bet or an expensive one.",
  quiz: [
    {
      question: "What does Intercontinental Exchange (ICE) already own?",
      options: ["Nasdaq", "The New York Stock Exchange", "The Chicago Board of Trade only", "Nothing — it's a new company"],
      correctIndex: 1,
      explanation: "ICE owns and operates the New York Stock Exchange, along with other exchanges, clearinghouses, and data businesses.",
    },
    {
      question: "What does MarketAxess do?",
      options: ["Operates a leading electronic trading platform for corporate bonds", "Manufactures trading terminals", "Runs a cryptocurrency exchange", "Provides accounting software"],
      correctIndex: 0,
      explanation: "MarketAxess operates one of the leading electronic platforms for trading corporate bonds.",
    },
    {
      question: "What premium is ICE paying for MarketAxess?",
      options: ["3%", "13%", "33%", "63%"],
      correctIndex: 2,
      explanation: "ICE is paying $167 per share, a 33% premium to MarketAxess's prior closing price.",
    },
    {
      question: "How is the deal being paid for?",
      options: ["All stock", "All cash", "Half cash, half stock", "Cryptocurrency"],
      correctIndex: 1,
      explanation: "It's an all-cash deal — MarketAxess shareholders receive cash, not ICE stock.",
    },
    {
      question: "Why would an exchange operator want to own bond-trading infrastructure in addition to stock-trading infrastructure?",
      options: [
        "It's required by law",
        "To capture more trading fees and data revenue across asset classes",
        "Bonds are more popular than stocks",
        "There's no strategic reason",
      ],
      correctIndex: 1,
      explanation: "Exchange operators earn fees on trading activity and data — owning infrastructure across more asset classes means capturing more of that revenue from the same institutional customers.",
    },
  ],
  discussionQuestions: [
    "Why might ICE prefer an all-cash deal instead of paying with its own stock?",
    "What risks does ICE take on by paying a 33% premium, and what would need to be true for the deal to be worth it?",
    "How does this deal compare in strategic logic to other exchange or market-infrastructure consolidation you've seen?",
    "If you were on MarketAxess's board, what would you weigh in deciding whether to accept ICE's offer versus staying independent?",
  ],
  relatedHistoricalEvents: [
    {
      title: "Microsoft Just Had the Best Day Any Stock Has Ever Had",
      date: "2026-07-30",
      connection: "Both stories happened the same week — one a quiet infrastructure deal, one a historic earnings reaction — showing the range of what 'big financial news' can look like within a single week.",
      internalSlug: "microsoft-record-market-cap-gain-2026-07-30",
    },
    {
      title: "Coinbase Just Posted a $359 Million Loss — And Still Grew Its Market Share",
      date: "2026-07-30",
      connection: "Both stories involve companies whose core business is trading infrastructure and fees — a useful pairing for understanding exchange- and platform-style business models.",
      internalSlug: "coinbase-earnings-miss-2026-07-30",
    },
  ],
} as unknown as FlagshipComic;
