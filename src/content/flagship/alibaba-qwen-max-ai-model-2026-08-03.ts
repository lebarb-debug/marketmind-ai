// Hand-added, mirroring scripts/convert-comic.mjs's pattern: existing fields
// authored fresh, fact-checked against multiple independent sources per figure.
import type { FlagshipComic } from "@/lib/types";

const existingFields = {
  "id": "alibaba-qwen-max-ai-model-2026-08-03",
  "date": "2026-08-03",
  "title": "Alibaba's Newest AI Model Just Rattled the 'America Leads AI' Assumption",
  "hook": "Alibaba unveiled a 2.4-trillion-parameter AI model claiming benchmark scores rivaling top U.S. labs — and said it would open-source the model's weights, sending the stock up sharply in both New York and Hong Kong trading.",
  "category": "Chips & Global Trade",
  "clubs": ["pmc", "bta"],
  "backstory": [
    "This site already covered how a Chinese breakthrough in chip-making machinery rattled Asian markets in late July — a reminder that competition between the U.S. and China in advanced technology isn't confined to any single layer of the AI stack (chips, models, or applications). Investors have increasingly treated Chinese AI progress as a swing factor for both Chinese tech stocks and, at times, the broader 'AI trade' in U.S. markets.",
    "On Monday, August 3, 2026, Alibaba released Qwen3.8-Max, its largest-ever AI model, with 2.4 trillion parameters and a context window of up to 1 million tokens. The company said the model's benchmark scores rival those of top global AI labs, and — notably — that it plans to release the model's weights for public download the following week, making it the first Max-class Qwen model to be open-sourced. Alibaba shares rose 4.5% in U.S. premarket trading and 7% in Hong Kong.",
  ],
  "panels": [
    {
      "scene": "Monday, August 3 — the announcement",
      "chars": [
        { "pose": "celebrate", "label": "ALIBABA", "side": "left" },
        { "pose": "shocked", "label": "ANALYST", "side": "right" },
      ],
      "caption": "Alibaba unveils Qwen3.8-Max — 2.4 trillion parameters, a 1-million-token context window, and benchmark scores it says rival top global AI labs.",
      "dialogue": [
        { "who": "ALIBABA", "text": "Our biggest model yet, and it's competitive with the best in the world." },
        { "who": "ANALYST", "text": "That's a bold claim to make in public." },
      ],
    },
    {
      "scene": "The open-source twist",
      "chars": [
        { "pose": "pointing", "label": "ALIBABA", "side": "left" },
        { "pose": "talking", "label": "DEVELOPER", "side": "right" },
      ],
      "caption": "Alibaba says it will release the model's weights for public download the following week — the first Max-class Qwen model to be open-sourced.",
      "dialogue": [
        { "who": "DEVELOPER", "text": "Wait, you're just going to let anyone download and use this?" },
        { "who": "ALIBABA", "text": "That's the plan." },
      ],
    },
    {
      "scene": "Markets react",
      "chars": [{ "pose": "celebrate", "label": "ALIBABA STOCK", "side": "left" }],
      "caption": "Alibaba shares rise 4.5% in U.S. premarket trading and 7% on the Hong Kong exchange.",
      "dialogue": [
        { "who": "ALIBABA STOCK", "text": "Investors like what they're hearing." },
      ],
    },
    {
      "scene": "The bigger picture",
      "chars": [{ "pose": "pointing", "label": "NARRATOR", "side": "left" }],
      "caption": "This is the second time in about a week this site has covered a Chinese tech advance rattling assumptions about who leads in AI and advanced technology.",
      "dialogue": [
        { "who": "NARRATOR", "text": "Chips one week, frontier AI models the next — the competition is playing out on multiple fronts at once." },
      ],
    },
  ],
  "vocab": [
    { "term": "Parameters", "def": "The internal numerical values an AI model learns during training — roughly, a proxy for a model's scale and complexity. More parameters generally (though not always) correlates with greater capability, at the cost of more computing power to run." },
    { "term": "Context window", "def": "The amount of text (measured in tokens) an AI model can consider at once when generating a response — a larger context window lets a model work with longer documents or conversations without losing track of earlier information." },
    { "term": "Open-source (open-weight) model", "def": "An AI model whose underlying parameters ('weights') are published publicly, letting anyone download, run, and modify it — as opposed to a 'closed' model only accessible through a company's paid API." },
    { "term": "Benchmark", "def": "A standardized test used to compare AI models' performance on specific tasks (reasoning, coding, knowledge, etc.) — companies often cite benchmark scores to support claims about how their model compares to competitors." },
  ],
  "sources": [
    { "label": "Alibaba's Qwen3.8-Max AI Model Claims Benchmark Scores Rivaling Anthropic — Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance" },
    { "label": "Alibaba shares rally after unveiling Qwen3.8-Max AI model — CNBC", "url": "https://www.cnbc.com/2026/08/03/alibaba-ai-model-qwen-rival-anthropic.html" },
    { "label": "Alibaba Qwen Releases Qwen3.8-Max: A 2.4 Trillion Parameter MoE Model — MarkTechPost", "url": "https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/" },
  ],
  "deepDive": {
    "facts": [
      { "text": "Alibaba released Qwen3.8-Max on August 3, 2026, its largest-ever AI model with 2.4 trillion total parameters and a context window of up to 1 million tokens.", "source": "MarkTechPost", "url": "https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/" },
      { "text": "Alibaba said the model's benchmark scores rival those of top global AI labs, and that Qwen3.8-Max ranks higher on several benchmarks than Moonshot's recently unveiled Kimi K3.", "source": "Bloomberg / MarkTechPost", "url": "https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance" },
      { "text": "Alibaba said it would release the model's weights for public download the following week, making it the first Max-class Qwen model to be open-sourced.", "source": "MarkTechPost", "url": "https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/" },
      { "text": "Alibaba shares rose 4.5% in U.S. premarket trading and 7% on the Hong Kong exchange following the announcement.", "source": "CNBC", "url": "https://www.cnbc.com/2026/08/03/alibaba-ai-model-qwen-rival-anthropic.html" },
    ],
    "analysis": [
      "The open-source detail is arguably more strategically significant than the benchmark claims themselves: releasing a frontier-scale model's weights publicly is a different competitive strategy than keeping a model closed and API-only, and it puts pressure on other model makers' pricing and differentiation, since developers can freely build on a capable open model instead of paying for API access to a closed one.",
      "This story connects directly to the chip story already covered on this site: both are examples of a Chinese technology company demonstrating capability that markets had priced as a U.S. or Western advantage, whether at the hardware layer (chip-making tools) or the model layer (frontier AI). Investors increasingly treat these announcements as signals about the broader U.S.-China technology competition, not just about the specific company involved.",
      "As with any company's own benchmark claims, some skepticism is warranted — benchmark scores are useful but imperfect proxies for real-world capability, and companies choose which benchmarks to highlight. The stock market reaction (a genuine, measurable data point) is a useful complement to the harder-to-verify performance claims themselves.",
    ],
  },
  "clubRelevance": {
    "pmc": "A useful example of how a single product announcement can move a stock meaningfully across two different exchanges simultaneously — and a chance to discuss how much weight to put on a company's own benchmark claims.",
    "bta": "Cross-border stock reactions (U.S. premarket and Hong Kong trading both moving on the same news) are a clean illustration of how global tech competition stories trade across multiple markets at once.",
  },
} as const;

export const alibabaQwenMaxAiModel20260803Comic = {
  ...existingFields,

  professionalSummary:
    "Alibaba released Qwen3.8-Max on August 3, 2026 — its largest-ever AI model, with 2.4 trillion parameters and a context window of up to 1 million tokens. The company said the model's benchmark scores rival those of top global AI labs and that it would release the model's weights publicly the following week, the first Max-class Qwen model to be open-sourced. Alibaba shares rose 4.5% in U.S. premarket trading and 7% on the Hong Kong exchange. The announcement follows this site's earlier coverage of a Chinese chip-manufacturing breakthrough, forming a second recent instance of Chinese technology advances moving global markets.",
  thirtySecondSummary:
    "Alibaba unveiled its biggest-ever AI model, claiming it performs on par with the world's top AI labs — and said it would make the model free to download and modify. The stock jumped in both U.S. and Hong Kong trading on the news.",
  eli5Summary:
    "A Chinese company called Alibaba built a huge new AI model and says it performs about as well as the best AI models from top American companies. They also said they're going to let anyone download and use it for free, which is a big deal — most powerful AI models are usually locked behind a paid service. Investors liked the news and bought more of Alibaba's stock, pushing its price up in both the U.S. and Hong Kong.",
  timeline: [
    {
      date: "July 28, 2026",
      label: "China chip breakthrough rattles markets",
      detail: "A separate story (covered elsewhere on this site) about Chinese chip-making progress hits Asian tech stocks.",
    },
    {
      date: "August 3, 2026",
      label: "Qwen3.8-Max unveiled",
      detail: "Alibaba releases its largest-ever AI model, claiming benchmark performance rivaling top global AI labs.",
    },
    {
      date: "August 3, 2026",
      label: "Stock reacts across two markets",
      detail: "Alibaba shares rise 4.5% in U.S. premarket trading and 7% in Hong Kong.",
    },
    {
      date: "Following week",
      label: "Planned open-source release",
      detail: "Alibaba says it will release the model's weights for public download, its first open-sourced Max-class model.",
    },
  ],
  bullCase: [
    {
      point: "An open-source strategy could accelerate developer adoption faster than a closed, API-only model.",
      support: "Making the weights freely downloadable removes a major adoption barrier, potentially building a larger developer ecosystem around Alibaba's models than a paid-access-only strategy would.",
    },
    {
      point: "A genuinely competitive frontier model strengthens Alibaba's broader cloud and AI infrastructure business.",
      support: "AI model capability and cloud-computing demand are closely linked; a stronger model can help justify Alibaba Cloud's infrastructure investments the way strong models have for U.S. hyperscalers.",
    },
  ],
  bearCase: [
    {
      point: "Company-reported benchmark claims should be treated cautiously until independently verified.",
      support: "Companies choose which benchmarks to highlight, and benchmark performance doesn't always translate directly into real-world usefulness or revenue.",
    },
    {
      point: "An open-source strategy could commoditize the underlying model, making it harder to monetize directly.",
      support: "If competitors and developers can freely use the model's weights, Alibaba may need to rely on cloud infrastructure and services revenue rather than the model itself to capture value.",
    },
  ],
  longTermView:
    "The more consequential long-term signal here may be the open-source decision rather than the benchmark claims: if Alibaba can sustain frontier-level model releases on an open basis, it could reshape competitive dynamics for AI model makers broadly, pressuring closed-model providers on pricing and differentiation. Investors should watch two things going forward: independent (not just company-reported) benchmark verification, and whether Alibaba's cloud and enterprise AI revenue actually grows as a result of the model's adoption, since that's the more durable business case than the initial stock pop on announcement day.",
  quiz: [
    {
      question: "How many parameters does Alibaba's Qwen3.8-Max have?",
      options: ["2.4 billion", "24 billion", "2.4 trillion", "24 trillion"],
      correctIndex: 2,
      explanation: "Qwen3.8-Max has 2.4 trillion total parameters, making it Alibaba's largest-ever AI model.",
    },
    {
      question: "What did Alibaba say it would do with the model in the following week?",
      options: [
        "Shut it down for further testing",
        "Release its weights publicly, making it open-source",
        "Sell exclusive access to one company",
        "Restrict it to internal use only",
      ],
      correctIndex: 1,
      explanation: "Alibaba said it would release the model's weights for public download, making it the first Max-class Qwen model to be open-sourced.",
    },
    {
      question: "How did Alibaba's stock react to the announcement?",
      options: [
        "It fell in both markets",
        "It was unchanged",
        "It rose 4.5% in U.S. premarket trading and 7% in Hong Kong",
        "Trading was halted",
      ],
      correctIndex: 2,
      explanation: "Alibaba shares rose 4.5% in U.S. premarket trading and 7% on the Hong Kong exchange following the announcement.",
    },
    {
      question: "Why should investors be somewhat cautious about a company's own benchmark claims?",
      options: [
        "Benchmarks are always fabricated",
        "Companies choose which benchmarks to highlight, and scores don't always reflect real-world performance",
        "Benchmarks are illegal to publish",
        "There's no reason for caution",
      ],
      correctIndex: 1,
      explanation: "Companies selectively highlight favorable benchmark results, and strong benchmark scores don't automatically guarantee real-world usefulness — independent verification matters.",
    },
  ],
  discussionQuestions: [
    "Why might a company choose to open-source a frontier-scale AI model instead of keeping it closed and charging for API access?",
    "How should investors weigh a company's own benchmark claims versus independently verified results?",
    "This is the second Chinese tech story this site has covered rattling assumptions about U.S. technology leadership. What pattern, if any, do you see forming?",
    "If you were analyzing Alibaba as an investment, would this announcement change your view of its cloud business? Why or why not?",
  ],
  relatedHistoricalEvents: [
    {
      title: "China Built Its Own Chip-Making Machine — and Asia's Markets Panicked",
      date: "2026-07-28",
      connection: "The same broader theme one layer down the technology stack — Chinese progress in chip-making tools rattled markets the way this AI model announcement did a week later.",
      internalSlug: "china-duv-chip-selloff-2026-07-28",
    },
    {
      title: "Tesla and Alphabet Just Lost Hundreds of Billions — On Purpose?",
      date: "2026-07-23",
      connection: "Part of the same summer-long story of markets recalibrating around AI capability and spending, this time triggered by a competitor's announcement rather than an earnings report.",
      internalSlug: "ai-capex-selloff-2026-07-23",
    },
  ],
} as unknown as FlagshipComic;
