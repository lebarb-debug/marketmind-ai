// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh (not ported from data.js — this comic didn't exist there),
// fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "jersey-mikes-ipo-debut-2026-07-30",
  "date": "2026-07-30",
  "title": "Jersey Mike's Raised $1 Billion Going Public — Then Opened Below Its IPO Price",
  "hook": "One of the largest restaurant IPOs in years was 10 times oversubscribed and priced at $23 a share — but the stock opened at $21 on its first day of trading, and Blackstone kept control of the vote either way.",
  "category": "IPOs & Public Markets",
  "clubs": ["ipo", "pmc", "wfa"],
  "backstory": [
    "Jersey Mike's, the sandwich chain, is majority-owned by private equity firm Blackstone. Taking a company public lets a private-equity owner cash out some of its investment while still often keeping significant control — a common structure worth understanding, since it shapes who actually benefits from an IPO and who keeps decision-making power afterward.",
    "Jersey Mike's priced its IPO at $23 per share on Wednesday, July 29, 2026 — the midpoint of its $21–$25 marketed range — selling 43.5 million shares to raise roughly $1 billion and valuing the company at $7.3 billion. Demand was strong: the deal was reportedly 10 times oversubscribed, meaning investor orders for shares outstripped the number of shares available by 10 to 1. But when trading actually opened on the NYSE under ticker JMKE on Thursday, July 30, the stock opened at $21 — below its IPO price — a reminder that strong order-book demand doesn't always translate into a strong opening trade.",
  ],
  "panels": [
    {
      "scene": "IPO pricing — Wednesday night, July 29",
      "chars": [
        { "pose": "celebrate", "label": "JERSEY MIKE'S", "side": "left" },
        { "pose": "talking", "label": "BANKER", "side": "right" },
      ],
      "caption": "Priced at $23/share — the midpoint of the $21–$25 range. 43.5 million shares sold, raising about $1 billion at a $7.3 billion valuation.",
      "dialogue": [
        { "who": "BANKER", "text": "Order book was 10 times oversubscribed. This is a hot deal." },
        { "who": "JERSEY MIKE'S", "text": "Feels good to be one of the biggest restaurant IPOs in years." },
      ],
    },
    {
      "scene": "NYSE opening bell — Thursday morning, July 30",
      "chars": [
        { "pose": "shocked", "label": "JERSEY MIKE'S", "side": "left" },
        { "pose": "neutral", "label": "TRADER", "side": "right" },
      ],
      "caption": "Stock opens at $21 per share — below the $23 IPO price — trading (JMKE, NYSE).",
      "dialogue": [
        { "who": "TRADER", "text": "You were oversubscribed 10 to 1 and you opened below your own IPO price?" },
        { "who": "JERSEY MIKE'S", "text": "Strong demand for the deal doesn't always mean a strong first trade." },
      ],
    },
    {
      "scene": "Who actually controls the company now",
      "chars": [
        { "pose": "arms-crossed", "label": "BLACKSTONE", "side": "left" },
        { "pose": "pointing", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Blackstone, Jersey Mike's private-equity owner, retained voting control of the company even after the IPO.",
      "dialogue": [
        { "who": "ANALYST", "text": "So public shareholders own a piece — but Blackstone still calls the shots?" },
        { "who": "BLACKSTONE", "text": "That's the deal we structured, yes." },
      ],
    },
    {
      "scene": "First-day close",
      "chars": [{ "pose": "neutral", "label": "JERSEY MIKE'S STOCK", "side": "left" }],
      "caption": "Shares were trading down roughly 2% by Thursday afternoon, still below the $23 IPO price.",
      "dialogue": [
        { "who": "JERSEY MIKE'S STOCK", "text": "A billion dollars raised, a lot of hype — and a rough first day on the tape." },
      ],
    },
  ],
  "vocab": [
    { "term": "Oversubscribed", "def": "When investor demand for IPO shares exceeds the number of shares being offered — a 10-times oversubscribed deal means orders were 10 times larger than the available supply, a sign of strong interest before trading begins." },
    { "term": "IPO pop / break issue", "def": "Slang for a stock's first-day performance relative to its IPO price — a 'pop' means it opens above that price; a 'break issue' (as happened here) means it opens below it." },
    { "term": "Dual-class / controlled company structure", "def": "A public-company arrangement where the original owner (often a founder or private-equity firm) keeps enough voting power to control key decisions, even after selling a large economic stake to public shareholders." },
    { "term": "Valuation", "def": "The total estimated worth of a company, often calculated as share price times total shares outstanding at the time of the IPO — here, $7.3 billion." },
  ],
  "sources": [
    { "label": "Jersey Mike's IPO: JMKE stock opens below $23 price on NYSE — Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/jersey-mikes-ipo-jmke-stock-172115792.html" },
    { "label": "Jersey Mike's Goes Public at $23, but Blackstone Keeps Control of Your Vote — Tech Times", "url": "https://www.techtimes.com/articles/322142/20260729/jersey-mikes-goes-public-23-blackstone-keeps-control-your-vote.htm" },
    { "label": "Jersey Mike's debuts on NYSE with $1B IPO — Restaurant Dive", "url": "https://www.restaurantdive.com/news/jersey-mikes-initial-public-offering-NYSE-debut-1-billion/826573/" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Jersey Mike's priced its IPO at $23.00 per share, the midpoint of its marketed $21–$25 range, selling 43.5 million shares to raise approximately $1 billion at a $7.3 billion valuation.", "source": "Restaurant Dive", "url": "https://www.restaurantdive.com/news/jersey-mikes-initial-public-offering-NYSE-debut-1-billion/826573/" },
      { "text": "The IPO was reported to be 10 times oversubscribed, making it one of the largest restaurant IPOs in recent years.", "source": "Restaurant Dive", "url": "https://www.restaurantdive.com/news/jersey-mikes-initial-public-offering-NYSE-debut-1-billion/826573/" },
      { "text": "Shares began trading on the NYSE under ticker JMKE on July 30, 2026, opening at $21 per share — below the $23 IPO price — and were trading down roughly 2% by Thursday afternoon.", "source": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/articles/jersey-mikes-ipo-jmke-stock-172115792.html" },
      { "text": "Blackstone, Jersey Mike's private-equity owner, retained voting control of the company following the IPO.", "source": "Tech Times", "url": "https://www.techtimes.com/articles/322142/20260729/jersey-mikes-goes-public-23-blackstone-keeps-control-your-vote.htm" },
    ],
    "analysis": [
      "The gap between 'oversubscribed 10 times' and 'opened below the IPO price' is the core lesson of this story: strong demand in the order-building process (where bankers gauge institutional interest before pricing) doesn't guarantee a strong first trade once the stock is actually available to the broader market. The two numbers measure different things — pre-IPO institutional appetite versus real-time public market pricing.",
      "The Blackstone voting-control detail matters beyond this one company: it's a common structure in private-equity-backed IPOs, where the sponsor sells a meaningful economic stake to the public (raising cash and creating liquidity) while retaining enough voting power to keep control over major decisions. Public shareholders in a deal like this are buying economic exposure to the business, not necessarily a proportional say in how it's run.",
      "A soft opening-day trade doesn't necessarily mean the IPO was mispriced or the business is troubled — it can simply reflect broader market conditions on debut day, sector sentiment toward restaurant/consumer stocks, or short-term profit-taking by early allocated investors. It's one data point, not a verdict on the company's long-term prospects.",
      "This comic pairs naturally with the SpaceX post-IPO story already on this site: both show that a well-received, heavily-marketed IPO doesn't guarantee strong post-IPO stock performance, and that investors need to separate IPO hype from actual trading dynamics once a stock is public.",
    ],
  },
  "clubRelevance": {
    "ipo": "A direct, current example of the gap between IPO order-book demand and actual first-day trading performance — plus a clean real-world illustration of how private-equity-controlled companies structure IPOs to retain voting power.",
    "pmc": "Raises a genuinely debatable question: does a break-issue debut on a 10x-oversubscribed deal signal a buying opportunity (mispriced dip) or a warning sign (overhyped deal), a good prompt for an argued portfolio discussion.",
    "wfa": "A ready-made example for explaining dual-class/controlled-company structures in an interview — a concept that comes up constantly in IPO and private equity-adjacent roles but is often only understood abstractly.",
  },
} as const;

export const jerseyMikesIpoDebut20260730Comic = {
  ...existingFields,

  professionalSummary:
    "Jersey Mike's priced its IPO at $23.00 per share on July 29, 2026 — the midpoint of its $21–$25 marketed range — selling 43.5 million shares to raise approximately $1 billion at a $7.3 billion valuation. The deal was reported to be 10 times oversubscribed, one of the largest restaurant IPOs in recent years. Shares began trading on the NYSE under ticker JMKE on July 30, opening at $21 — below the IPO price — and were trading down roughly 2% by Thursday afternoon. Blackstone, the company's private-equity owner, retained voting control following the offering.",
  thirtySecondSummary:
    "Jersey Mike's went public at $23 a share after huge investor demand (10x oversubscribed), raising about $1 billion. But the stock actually opened below that price on its first trading day and stayed down. Blackstone, the sandwich chain's private-equity owner, kept control of the company's votes either way.",
  eli5Summary:
    "Jersey Mike's (the sandwich shop chain) sold shares of itself to the public for the first time, at $23 each. Tons of investors wanted in — way more than there were shares available. But when the stock actually started trading, its price went down below $23 instead of up, which surprised people given how popular the offering seemed. Also, even though regular investors can now buy shares, the company that owned Jersey Mike's before (Blackstone) still gets to make the big decisions, because of how the deal was set up.",
  timeline: [
    {
      date: "July 29, 2026",
      label: "IPO priced",
      detail: "Jersey Mike's prices its IPO at $23 per share, the midpoint of its $21–$25 range, raising roughly $1 billion at a $7.3 billion valuation.",
    },
    {
      date: "July 29, 2026",
      label: "Deal reported 10x oversubscribed",
      detail: "Investor demand for shares reportedly outstrips supply by 10 to 1 ahead of trading.",
    },
    {
      date: "July 30, 2026",
      label: "JMKE opens on the NYSE",
      detail: "Shares open at $21, below the $23 IPO price, and trade down roughly 2% by Thursday afternoon.",
    },
  ],
  bullCase: [
    {
      point: "Heavy oversubscription reflects genuine long-term investor interest in the business, independent of the first day's price action.",
      support: "A 10x oversubscribed deal signals institutional investors see real value in Jersey Mike's growth story — first-day trading noise doesn't erase that underlying demand.",
    },
    {
      point: "A below-IPO-price open can represent a buying opportunity if the business fundamentals are sound.",
      support: "If nothing about Jersey Mike's actual operating performance changed between pricing and the open, the dip may reflect market-wide or sector sentiment rather than company-specific problems.",
    },
    {
      point: "The IPO still achieved its primary financial goal: raising roughly $1 billion at a solid $7.3 billion valuation.",
      support: "Even with a soft first-day trade, the company and its early investors secured meaningful capital and liquidity at a valuation within its marketed range.",
    },
  ],
  bearCase: [
    {
      point: "A break-issue debut on a heavily oversubscribed deal raises real questions about how the IPO was priced and allocated.",
      support: "If demand was genuinely 10 times supply, an open below the IPO price suggests either aggressive pricing by underwriters or that early allocated investors were quick to sell, both worth scrutinizing.",
    },
    {
      point: "Blackstone's retained voting control limits how much influence new public shareholders actually have.",
      support: "Investors buying JMKE shares are purchasing economic exposure to Jersey Mike's, not a proportional say in major company decisions, which some investors specifically avoid for governance reasons.",
    },
    {
      point: "A weak debut can affect sentiment toward the deal and make follow-on trading more volatile in the near term.",
      support: "Investors who bought at or near the IPO price are already sitting on a loss on day one, which can create additional selling pressure if they look to exit rather than wait out volatility.",
    },
  ],
  longTermView:
    "The near-term question — why a 10x-oversubscribed deal opened below its IPO price — matters less for long-term investors than the underlying business trajectory and how Blackstone's continued voting control shapes future capital allocation and strategic decisions. Investors considering a long-term position should look past the first day's trading noise and focus on Jersey Mike's actual same-store sales growth, unit expansion, and margins in its first several quarters as a public company — the same signals that matter for any newly public consumer business, regardless of how its debut day went.",
  quiz: [
    {
      question: "What was Jersey Mike's IPO priced at, and where did that fall in its marketed range?",
      options: ["$21, the low end", "$23, the midpoint", "$25, the high end", "$30, above the range"],
      correctIndex: 1,
      explanation: "Jersey Mike's priced its IPO at $23.00 per share, the midpoint of its $21–$25 marketed range.",
    },
    {
      question: "How oversubscribed was the IPO order book, according to reports?",
      options: ["2 times", "5 times", "10 times", "It was undersubscribed"],
      correctIndex: 2,
      explanation: "The deal was reported to be 10 times oversubscribed, meaning investor demand for shares was 10 times the number of shares offered.",
    },
    {
      question: "How did JMKE stock perform on its first day of trading relative to its IPO price?",
      options: [
        "Opened above the IPO price and stayed there",
        "Opened at exactly the IPO price",
        "Opened below the IPO price and traded down further",
        "Trading was halted and never opened",
      ],
      correctIndex: 2,
      explanation: "Shares opened at $21, below the $23 IPO price, and were trading down roughly 2% by Thursday afternoon.",
    },
    {
      question: "Who retained voting control of Jersey Mike's after the IPO?",
      options: ["Public shareholders, proportional to shares owned", "The company's founder alone", "Blackstone, its private-equity owner", "The New York Stock Exchange"],
      correctIndex: 2,
      explanation: "Blackstone, Jersey Mike's private-equity owner, retained voting control of the company even after selling shares to the public.",
    },
    {
      question: "What does 'oversubscribed' mean in the context of an IPO?",
      options: [
        "The company sold more shares than it originally planned",
        "Investor demand for shares exceeded the number of shares available",
        "The stock price fell after the IPO",
        "The IPO was canceled due to lack of interest",
      ],
      correctIndex: 1,
      explanation: "An oversubscribed IPO means investor orders for shares exceed the supply being offered — a 10x oversubscribed deal had 10 times more demand than shares available.",
    },
  ],
  discussionQuestions: [
    "Why might a heavily oversubscribed IPO still open below its offering price? List at least two possible explanations.",
    "Would you personally be comfortable buying shares in a company where the original owner retains voting control? Why or why not?",
    "Compare Jersey Mike's debut to SpaceX's post-IPO reality check, covered elsewhere on this site. What's similar, and what's different about the two situations?",
    "If you were advising Jersey Mike's on this IPO, would you consider it a success? What metric would you use to judge that?",
  ],
  relatedHistoricalEvents: [
    {
      title: "SpaceX Just Had Its Post-IPO Reality Check",
      date: "2026-07-27",
      connection: "Another recent, heavily-anticipated IPO where the public market's actual reaction diverged from the pre-IPO hype — a recurring lesson about separating IPO demand from post-IPO stock performance.",
      internalSlug: "spacex-post-ipo-reality-check-2026-07-27",
    },
    {
      title: "Apple Beat Every Estimate. Its Stock Still Crashed 7%.",
      date: "2026-07-31",
      connection: "A different mechanism, same broader theme this earnings season: strong headline metrics (an oversubscribed IPO; a beat-and-raise earnings report) don't guarantee a strong market reaction.",
      internalSlug: "apple-earnings-services-china-miss-2026-07-31",
    },
  ],
} as unknown as FlagshipComic;
