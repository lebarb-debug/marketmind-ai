import type { StockProfile } from "@/lib/types";

export const nvdaProfile = {
  ticker: "NVDA",
  companyName: "NVIDIA Corporation",
  sector: "Semiconductors — AI Infrastructure & Data Center Compute",
  stockType: ["Growth", "Large-Cap", "Cyclical", "AI Infrastructure Bellwether"],
  whatTheyDo:
    "NVIDIA designs graphics processing units (GPUs) and the surrounding hardware and software stack that power most of the world's AI model training and inference. What started as a gaming-graphics chip company has become, by revenue mix, primarily a data center company: in NVIDIA's most recent fiscal year, data center revenue accounted for over 90% of total sales, with the remainder split across gaming, professional visualization, and automotive.",
  whatsSpecial: [
    "CUDA, NVIDIA's proprietary software platform for programming its GPUs, has over 5 million developers building on it — a deep, sticky software moat that keeps AI training workloads locked to NVIDIA hardware even when a competitor's chip matches or beats it on raw throughput.",
    "NVIDIA controls roughly 86% of data center GPU revenue and remains the default choice for large-scale AI model training, giving it pricing power and first access to leading AI labs' and hyperscalers' capital spending.",
    "The company ships a full-stack platform — chips, networking (InfiniBand/NVLink), and software — not just silicon, which raises switching costs for customers beyond just the GPU itself.",
    "Revenue and margins have compounded extremely fast during the AI infrastructure buildout: fiscal 2026 revenue reached $215.9 billion, up 65% year over year, with the most recent quarter's data center networking revenue alone up 199% year over year.",
  ],
  competitors: [
    { name: "AMD", note: "The most credible direct GPU rival, with roughly $5.8 billion in quarterly data center revenue and large infrastructure commitments from Meta and OpenAI; AMD's MI355X reportedly beats NVIDIA's B200 on some inference benchmarks, though it lacks CUDA's software ecosystem depth." },
    { name: "Intel", note: "Still a minor player in AI GPUs today but preparing a 2026 product relaunch — a longer-term watch item rather than a near-term threat." },
    { name: "Custom AI chips (hyperscaler ASICs)", note: "Google's TPUs, Amazon's Trainium, and other custom silicon designed in-house by cloud providers are growing faster than the merchant GPU market broadly, reducing some hyperscalers' reliance on NVIDIA over time even as overall AI compute demand keeps growing." },
  ],
  keyConsiderations: [
    "Customer concentration: a small number of hyperscalers (Microsoft, Amazon, Google, Meta, and a handful of AI labs) represent an outsized share of NVIDIA's revenue — any pullback in their capital spending plans is a direct risk.",
    "Valuation sensitivity: as one of the largest companies in the world by market capitalization, NVIDIA's stock is highly sensitive to any sign that AI infrastructure spending growth is decelerating, not just to its own quarterly results.",
    "Export controls and geopolitics: U.S. restrictions on advanced chip sales to China have already affected NVIDIA's addressable market and remain an ongoing policy risk.",
    "Rising custom-silicon competition: even without a single competitor matching NVIDIA's full stack, the cumulative shift toward hyperscaler-designed chips is a structural trend worth monitoring over a multi-year horizon.",
  ],
  newsUpdates: [
    {
      date: "2026-08-03",
      headline: "NVIDIA rises 3% as broad tech rally follows Iran de-escalation",
      takeaway:
        "NVIDIA shares rose roughly 3% Monday as part of a broad technology rally after President Trump called off a planned strike on Iran, easing geopolitical risk. The move builds on Friday's 2.9% gain, which was driven by renewed confidence in AI infrastructure spending following strong cloud results from Microsoft and Amazon.",
      metric: "Shares +3% intraday; market cap approximately $4.9 trillion",
      sources: [
        { label: "Stocks making the biggest moves premarket — CNBC", url: "https://www.cnbc.com/2026/08/03/stocks-making-the-biggest-moves-premarket-baba-azn-ebay-more.html" },
        { label: "Nvidia Market Cap — companiesmarketcap.com", url: "https://companiesmarketcap.com/nvidia/marketcap/" },
      ],
    },
  ],
} as unknown as StockProfile;
