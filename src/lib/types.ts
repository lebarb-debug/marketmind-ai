import { z } from "zod";

// ---------- Poses (mirrors sprites.js's 8 <symbol> defs) ----------
export const POSES = [
  "neutral",
  "talking",
  "shocked",
  "pointing",
  "arms-crossed",
  "panic",
  "celebrate",
  "whisper",
] as const;
export type Pose = (typeof POSES)[number];

export const CLUB_IDS = ["maa", "wfa", "pmc", "bta", "ipo"] as const;
export type ClubId = (typeof CLUB_IDS)[number];

// ---------- Existing comic shape, ported verbatim from data.js ----------
const CharacterSchema = z.object({
  pose: z.enum(POSES),
  label: z.string().min(1),
  side: z.enum(["left", "right"]),
});

const DialogueLineSchema = z.object({
  who: z.string().min(1),
  text: z.string().min(1),
});

const PanelSchema = z.object({
  scene: z.string().min(1),
  chars: z.array(CharacterSchema).min(1),
  dialogue: z.array(DialogueLineSchema),
  caption: z.string().optional(),
});

const VocabTermSchema = z.object({
  term: z.string().min(1),
  def: z.string().min(1),
});

const SourceSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
});

const FactSchema = z.object({
  text: z.string().min(1),
  source: z.string().min(1),
  url: z.string().url(),
});

const DeepDiveSchema = z.object({
  facts: z.array(FactSchema).min(1),
  analysis: z.array(z.string().min(1)).min(1),
  serious_note: z.string().optional(),
});

// ---------- New "Financial Storytelling" fields ----------
const TimelineEventSchema = z.object({
  date: z.string().min(1), // human-readable ("June 12, 2026") or ISO — display string, not necessarily parsed
  label: z.string().min(1),
  detail: z.string().min(1),
});

const BullBearPointSchema = z.object({
  point: z.string().min(1),
  support: z.string().min(1), // the reasoning/evidence behind the point — claims are argued, not just asserted
});

const QuizQuestionSchema = z.object({
  question: z.string().min(1),
  options: z.array(z.string().min(1)).length(4),
  correctIndex: z.number().int().min(0).max(3),
  explanation: z.string().min(1),
});

const RelatedEventSchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1),
  connection: z.string().min(1),
  url: z.string().url().optional(),
  internalSlug: z.string().optional(), // when the related event is one of our own flagship stories
});

export const FlagshipComicSchema = z.object({
  // Existing fields (verbatim from data.js)
  id: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  title: z.string().min(1),
  hook: z.string().min(1),
  category: z.string().min(1),
  clubs: z.array(z.enum(CLUB_IDS)).min(1),
  serious_intro: z.string().optional(),
  backstory: z.array(z.string().min(1)).min(1),
  panels: z.array(PanelSchema).min(3).max(5),
  vocab: z.array(VocabTermSchema).min(4),
  sources: z.array(SourceSchema).min(1),
  deepDive: DeepDiveSchema,
  // Only the clubs actually tagged in `clubs` have an entry here — a plain
  // string-keyed record (not an exhaustive enum record) allows that subset.
  clubRelevance: z.record(z.string(), z.string().min(1)),

  // New Financial Storytelling fields
  professionalSummary: z.string().min(1),
  thirtySecondSummary: z.string().min(1),
  eli5Summary: z.string().min(1),
  timeline: z.array(TimelineEventSchema).min(3),
  bullCase: z.array(BullBearPointSchema).min(2),
  bearCase: z.array(BullBearPointSchema).min(2),
  longTermView: z.string().min(1),
  quiz: z.array(QuizQuestionSchema).min(4).max(6),
  discussionQuestions: z.array(z.string().min(1)).min(3).max(5),
  relatedHistoricalEvents: z.array(RelatedEventSchema).min(2).max(3),
});

export type FlagshipComic = z.infer<typeof FlagshipComicSchema>;
export type TimelineEvent = z.infer<typeof TimelineEventSchema>;
export type BullBearPoint = z.infer<typeof BullBearPointSchema>;
export type QuizQuestion = z.infer<typeof QuizQuestionSchema>;
export type RelatedEvent = z.infer<typeof RelatedEventSchema>;
export type Panel = z.infer<typeof PanelSchema>;
export type Character = z.infer<typeof CharacterSchema>;
