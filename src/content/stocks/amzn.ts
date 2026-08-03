import type { StockProfile } from "@/lib/types";

export const amznProfile = {
  ticker: "AMZN",
  companyName: "Amazon.com, Inc.",
  sector: "E-Commerce, Cloud Computing & Digital Advertising",
  stockType: ["Growth", "Large-Cap", "Blue-Chip", "Diversified Conglomerate"],
  whatTheyDo:
    "Amazon operates across three main businesses: North America and International e-commerce retail, Amazon Web Services (AWS) — its cloud-computing and AI-infrastructure division — and a fast-growing digital advertising business layered across its retail platform. AWS is the smallest segment by revenue but historically the company's primary profit engine.",
  whatsSpecial: [
    "AWS remains the largest cloud infrastructure provider globally, and its growth has re-accelerated on AI demand — 36.7% year-over-year revenue growth in its most recent quarter, the fastest pace in 18 quarters, beating consensus estimates.",
    "Amazon's logistics and fulfillment network, built over two decades, is a scale advantage that's extremely difficult for competitors to replicate, underpinning both its retail margins and newer services like same-day delivery.",
    "A large investment stake in AI lab Anthropic gives Amazon direct financial exposure to frontier AI progress, contributing meaningfully (via mark-to-market gains) to recent reported profits alongside AWS's operating growth.",
    "Amazon crossed $3 trillion in market capitalization on August 3, 2026, becoming only the fifth company in history to do so — a milestone reflecting sustained, multi-day investor conviction following its Q2 earnings report, not a single-day spike.",
  ],
  competitors: [
    { name: "Microsoft (Azure) & Google (Google Cloud)", note: "Amazon's two main cloud infrastructure rivals; AWS remains the largest by revenue but both competitors have shown strong recent AI-driven growth of their own." },
    { name: "Walmart", note: "Amazon's largest direct competitor in U.S. retail and e-commerce, with a large physical-store footprint Amazon doesn't have, but a smaller cloud/advertising business." },
    { name: "Alibaba", note: "A major global e-commerce and cloud competitor, particularly relevant in Asian markets, and increasingly a competitor in frontier AI model development as well." },
  ],
  keyConsiderations: [
    "Segment interdependence: Amazon's profitability has historically leaned heavily on AWS; investors need to track AWS margins and growth specifically, not just consolidated results, to judge the health of the business.",
    "Capital expenditure scale: Amazon raised its 2026 capex guidance to $220 billion, driven partly by higher memory/component costs — a very large, ongoing investment that needs to keep translating into AWS growth to be justified.",
    "The Anthropic investment gain ($53.4 billion in a recent quarter) is non-operating and not repeatable in the same form each quarter — investors should separate it from AWS's organic operating performance when evaluating results.",
    "Retail margins remain structurally thinner than AWS margins, meaning shifts in the revenue mix between segments meaningfully affect overall profitability, independent of top-line growth.",
  ],
  newsUpdates: [
    {
      date: "2026-08-03",
      headline: "Amazon tops $3 trillion market cap, becomes fifth company ever to reach the milestone",
      takeaway:
        "Amazon shares rose as much as 5.3% Monday morning, pushing its market capitalization above $3 trillion for the first time and making it only the fifth company in history to reach that level, joining Nvidia, Alphabet, Microsoft, and Apple. The move extends last week's post-earnings rally, driven by AWS's accelerating cloud growth. Several major banks raised their price targets following the milestone: Goldman Sachs to $375, Barclays and JPMorgan to $365, Citi to $350, Bank of America to $320, and Roth Capital to $325.",
      metric: "Shares +5.3% intraday; market cap crosses $3 trillion",
      sources: [
        { label: "Amazon tops $3 trillion market cap as stock continues post-earnings surge — CNBC", url: "https://www.cnbc.com/2026/08/03/amazon-amzn-stock-market-cap-earnings.html" },
        { label: "Amazon Joins Elite List of Stocks to Top $3 Trillion in Value — Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-03/amazon-joins-elite-list-of-stocks-to-top-3-trillion-in-value" },
      ],
    },
    {
      date: "2026-07-30",
      headline: "Amazon's AWS grows 37% in Q2, its fastest pace in five years",
      takeaway:
        "Amazon reported Q2 2026 EPS of $5.75 on revenue of $200.6 billion, both far ahead of consensus. AWS revenue grew 36.7% year over year to $42.2 billion, its fastest pace in 18 quarters and above the 31% growth analysts expected. The company also raised its 2026 capex guidance to $220 billion, citing higher memory costs, and disclosed a $53.4 billion non-operating gain tied to its Anthropic investment stake contributing to the quarter's headline profit figure.",
      metric: "Shares +9% after-hours",
      sources: [
        { label: "Amazon hikes 2026 capex to $220 billion due to higher memory costs — CNBC", url: "https://www.cnbc.com/2026/07/30/amazon-amzn-q2-earnings-report-2026.html" },
        { label: "Amazon soars after CEO Andy Jassy makes the case for its massive AI investment — CNBC", url: "https://www.cnbc.com/2026/07/30/amazon-soars-after-ceo-makes-the-case-for-its-massive-ai-investment.html" },
      ],
    },
  ],
} as unknown as StockProfile;
