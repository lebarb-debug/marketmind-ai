import type { ClubId } from "@/lib/types";

// Subset of data.js's CLUBS — just what the story pages need for chips/labels.
export const CLUBS: Record<ClubId, { name: string; short: string; color: string }> = {
  maa: { name: "M&A Advisors", short: "M&A Advisors", color: "#7c3aed" },
  wfa: { name: "Women's Financial Association", short: "WFA", color: "#e11d48" },
  pmc: { name: "Portfolio Management Club", short: "PMC", color: "#0891b2" },
  bta: { name: "Banking & Trading Association", short: "BTA", color: "#15803d" },
  ipo: { name: "IPO Investing at IU", short: "IPO Investing", color: "#ca8a04" },
};
