// One-time migration: extracts the 3 flagship comics verbatim from the real
// data.js (byte-faithful — no hand-retyping of sourced facts/URLs) and emits
// typed .ts files with empty stubs for the new Financial Storytelling fields,
// which get hand-authored afterward directly in the generated files.
//
// Run once: node scripts/convert-comic.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..", "..");
const dataJsPath = path.join(projectRoot, "data.js");
const outDir = path.join(__dirname, "..", "src", "content", "flagship");

const FLAGSHIP_IDS = [
  "china-duv-chip-selloff-2026-07-28",
  "spacex-post-ipo-reality-check-2026-07-27",
  "ai-capex-selloff-2026-07-23",
];

// data.js assigns `const CLUBS = ...`, `const BENCHMARKS = ...`, `const COMICS = ...`
// as global script-style consts (no exports) — wrap it as CommonJS to load it safely.
const source = fs.readFileSync(dataJsPath, "utf8");
const tempPath = path.join(__dirname, "_data.generated.cjs");
fs.writeFileSync(tempPath, source + "\nmodule.exports = { CLUBS, BENCHMARKS, COMICS };\n", "utf8");

const { COMICS } = await import(`file://${tempPath.replace(/\\/g, "/")}`);
fs.unlinkSync(tempPath);

fs.mkdirSync(outDir, { recursive: true });

const NEW_FIELD_STUBS = `
  // ---- New Financial Storytelling fields — hand-authored below, fact-checked
  // against the deepDive.facts/sources already ported above. ----
  professionalSummary: "", // TODO(author): 1 dense analyst-memo paragraph
  thirtySecondSummary: "", // TODO(author): 2-3 sentence elevator pitch
  eli5Summary: "", // TODO(author): 1 short paragraph, zero jargon
  timeline: [], // TODO(author): TimelineEvent[] — at least 3 stops
  bullCase: [], // TODO(author): BullBearPoint[] — at least 2, each with point + support
  bearCase: [], // TODO(author): BullBearPoint[] — at least 2, each with point + support
  longTermView: "", // TODO(author): 1-2 paragraphs
  quiz: [], // TODO(author): QuizQuestion[] — 4-6 questions on the story's facts/reasoning
  discussionQuestions: [], // TODO(author): 3-5 open-ended prompts
  relatedHistoricalEvents: [], // TODO(author): RelatedEvent[] — 2-3, can cross-link the other flagship stories
`;

function toModuleName(id) {
  return id
    .split("-")
    .map((part, i) => (i === 0 ? part : part[0].toUpperCase() + part.slice(1)))
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");
}

for (const id of FLAGSHIP_IDS) {
  const comic = COMICS.find((c) => c.id === id);
  if (!comic) {
    console.error(`Flagship comic not found in data.js: ${id}`);
    process.exitCode = 1;
    continue;
  }

  const varName = toModuleName(id) + "Comic";
  // JSON.stringify round-trips all the sourced text/URLs byte-for-byte
  // (strings, arrays, plain objects only — exactly what data.js comics are).
  const serialized = JSON.stringify(comic, null, 2);

  const fileContent = `// Auto-extracted verbatim from ../../../../data.js by scripts/convert-comic.mjs
// Existing fields are byte-faithful to the source. New fields below are
// hand-authored, fact-checked against deepDive.facts/sources already here.
import type { FlagshipComic } from "@/lib/types";

const existingFields = ${serialized} as const;

export const ${varName}: FlagshipComic = {
  ...existingFields,
${NEW_FIELD_STUBS}} as FlagshipComic;
`;

  const outPath = path.join(outDir, `${id}.ts`);
  fs.writeFileSync(outPath, fileContent, "utf8");
  console.log(`Wrote ${outPath}`);
}
