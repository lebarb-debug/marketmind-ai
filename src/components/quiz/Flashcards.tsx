"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Term = { term: string; def: string };

export function Flashcards({ terms }: { terms: Term[] }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = terms[idx];

  function go(delta: number) {
    setFlipped(false);
    setIdx((i) => (i + delta + terms.length) % terms.length);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-xs font-medium text-muted-foreground">
        {idx + 1} / {terms.length}
      </div>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="h-44 w-full max-w-sm cursor-pointer [perspective:1200px]"
        aria-label="Click to flip"
      >
        <div
          className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "none" }}
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-border bg-card p-5 text-center text-lg font-semibold shadow-sm [backface-visibility:hidden]">
            {card.term}
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center rounded-xl border border-border bg-card p-5 text-center text-sm text-muted-foreground shadow-sm [backface-visibility:hidden]"
            style={{ transform: "rotateY(180deg)" }}
          >
            {card.def}
          </div>
        </div>
      </button>
      <p className="text-xs text-muted-foreground">Click the card to flip</p>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => go(-1)}>
          ← Prev
        </Button>
        <Button variant="outline" size="sm" onClick={() => go(1)}>
          Next →
        </Button>
      </div>
    </div>
  );
}
