import type { StockProfile } from "@/lib/types";

export const msftProfile = {
  ticker: "MSFT",
  companyName: "Microsoft Corporation",
  sector: "Enterprise Software & Cloud Computing",
  stockType: ["Growth", "Large-Cap", "Blue-Chip", "Defensive Growth"],
  whatTheyDo:
    "Microsoft is a diversified technology company built around three main pillars: Intelligent Cloud (Azure and enterprise server products), Productivity and Business Processes (Microsoft 365, Teams, LinkedIn, Dynamics), and More Personal Computing (Windows, Xbox, Surface, search/advertising). Cloud and AI-driven products, especially Azure and Copilot, are now the company's primary growth engine.",
  whatsSpecial: [
    "Deep enterprise entrenchment: Microsoft 365, Windows, and Azure are embedded across the vast majority of large enterprises, giving Microsoft an unusually durable, recurring revenue base compared to most technology companies.",
    "Azure's growth has re-accelerated on AI demand — 43% constant-currency growth in its most recent quarter, ahead of the 40.26% consensus estimate — showing the AI capital-spending cycle translating into visible cloud revenue growth, not just cost.",
    "A large equity stake in AI lab Anthropic gives Microsoft direct financial exposure to frontier AI progress beyond its own products, similar to the strategic AI investments other hyperscalers have made.",
    "Copilot, Microsoft's AI assistant layered across its product suite, is a distribution advantage few competitors can match: it reaches an enterprise user base that's already paying for Microsoft software.",
  ],
  competitors: [
    { name: "Amazon (AWS)", note: "The largest cloud infrastructure competitor; Azure has been gaining share momentum on AI-driven demand but AWS remains the largest cloud provider by revenue." },
    { name: "Alphabet (Google Cloud / Workspace)", note: "Competes directly with Azure in cloud infrastructure and with Microsoft 365 in productivity software, and has its own frontier AI model efforts competing with Microsoft's OpenAI/Copilot strategy." },
    { name: "Salesforce", note: "A more focused competitor in enterprise SaaS and, increasingly, AI-driven business applications — a narrower but still relevant rival in Microsoft's Dynamics/Copilot enterprise push." },
  ],
  keyConsiderations: [
    "AI capital expenditure scale: Microsoft's data center and AI infrastructure spending is enormous and rising; the key question for investors is whether Azure/Copilot revenue growth continues to justify that spend, as it has in recent quarters.",
    "The Anthropic investment introduces the same kind of non-operating, mark-to-market earnings volatility increasingly seen across Big Tech — a $3.2 billion gain this quarter is not a repeatable, core-business result.",
    "Regulatory scrutiny: as one of the largest software and cloud companies globally, Microsoft faces ongoing antitrust and competition-policy attention in multiple jurisdictions.",
    "Diversification as a stability factor: because Microsoft's revenue spans cloud, productivity software, gaming, and search/advertising, it's generally less exposed to a single product cycle than more narrowly focused competitors.",
  ],
  newsUpdates: [
    {
      date: "2026-08-04",
      headline: "Microsoft expands Azure partnership with AMD, adding Helios systems and 6th-gen EPYC CPUs",
      takeaway:
        "Alongside AMD's Q2 earnings report, Microsoft announced an expanded collaboration to deploy AMD's new Helios rackscale AI infrastructure and 6th-generation EPYC CPUs at scale across Azure — broadening Microsoft's chip supply beyond NVIDIA for its cloud data centers. The move gives Azure a second major AI-hardware supplier as infrastructure demand continues to outstrip any single vendor's capacity.",
      sources: [
        { label: "AMD Sales Outlook Disappoints Investors After AI-Fueled Rally — Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-04/amd-sales-outlook-disappoints-investors-after-ai-fueled-rally" },
        { label: "AMD earnings report Q2 2026 — CNBC", url: "https://www.cnbc.com/2026/08/04/amd-earnings-report-q2-2026.html" },
      ],
    },
    {
      date: "2026-08-03",
      headline: "Microsoft shares extend rally, up 2% premarket on continued AI-cloud momentum",
      takeaway:
        "Microsoft shares rose about 2% in premarket trading Monday, extending the rally that followed last week's fiscal Q4 earnings beat. Separately, steelmaker ArcelorMittal announced it is deepening its technology partnership with Microsoft, using Azure as the backbone to modernize its plant technology systems — a small but concrete example of continued enterprise Azure adoption.",
      metric: "Shares +2% premarket",
      sources: [
        { label: "Microsoft shares are surging. Here's how to still make money — CNBC", url: "https://www.cnbc.com/2026/07/31/microsoft-shares-are-surging-heres-how-to-still-make-money-says-mike-khouw.html" },
        { label: "Microsoft (MSFT) Q4 earnings report 2026 — CNBC", url: "https://www.cnbc.com/2026/07/29/microsoft-msft-q4-earnings-report-2026.html" },
      ],
    },
    {
      date: "2026-07-30",
      headline: "Microsoft posts best day since 2008 on Azure/Copilot earnings beat",
      takeaway:
        "Microsoft reported fiscal Q4 revenue of $90 billion, up 18% year over year and ahead of consensus, with adjusted EPS of $4.74, up 30% year over year. Azure cloud revenue grew 43% on a constant-currency basis, beating the 40.26% consensus estimate. Results also included a $3.2 billion gain tied to Microsoft's investment in AI lab Anthropic and lower-than-expected costs from its first-ever voluntary retirement program.",
      metric: "Shares +15%, best single day since 2008; added ~$450B in market value",
      sources: [
        { label: "Meta sinks 8%, continuing record losing streak, while Microsoft jumps 15% — CNBC", url: "https://www.cnbc.com/2026/07/30/microsoft-msft-meta-stock-today-earnings.html" },
        { label: "Microsoft's AI spending guide is music to our ears — CNBC", url: "https://www.cnbc.com/2026/07/29/microsofts-ai-spending-guide-is-music-to-our-ears-quieting-the-bears-for-now.html" },
      ],
    },
  ],
} as unknown as StockProfile;
