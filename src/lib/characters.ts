// Recurring-character infrastructure. Two tiers:
//
// 1. ROLE_CONFIG — a named-mascot roster (the brief's "Fed Owl" idea). None of
//    the 3 flagship comics actually feature the Fed, so this stays empty
//    infrastructure for now rather than forcing an unearned mascot — a future
//    comic that genuinely features one of these gets a real badge/accent for
//    free once added here.
// 2. ENTITY_LABELS — the pattern these 3 comics *already* use: a stock, index,
//    or company personified as a speaking character (KOSPI, SPCX STOCK,
//    ALPHABET...). Applying one consistent, subtle badge to that existing
//    pattern makes it read as a single deliberate device across all 3 comics.

export type CharacterRole = {
  theme: string;
  icon: string;
  accentVar: string; // CSS custom property, e.g. "--character-fed"
};

export const ROLE_CONFIG: Record<string, CharacterRole> = {
  "THE FED": { theme: "THE FED", icon: "🦉", accentVar: "--character-fed" },
};

// Personified market entities (indices, stocks, companies "speaking" in a
// panel) across the 3 flagship comics — exact panel labels.
const ENTITY_LABELS = new Set([
  "KOSPI",
  "SAMSUNG",
  "SK HYNIX",
  "ASML",
  "U.S. CHIP EQUIPMENT MAKERS",
  "SPCX STOCK",
  "ALPHABET",
  "TESLA",
]);

export function isPersonifiedEntity(label: string): boolean {
  return ENTITY_LABELS.has(label.toUpperCase());
}

export function getCharacterRole(label: string): CharacterRole | undefined {
  return ROLE_CONFIG[label.toUpperCase()];
}
