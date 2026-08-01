"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Flashcards } from "@/components/quiz/Flashcards";

type Term = { term: string; def: string };

export function VocabDecoder({ vocab }: { vocab: Term[] }) {
  const [studyMode, setStudyMode] = useState(false);

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Key Vocabulary</h2>
        <Button variant="outline" size="sm" onClick={() => setStudyMode((s) => !s)}>
          {studyMode ? "View list" : "Study flashcards"}
        </Button>
      </div>
      {studyMode ? (
        <Flashcards terms={vocab} />
      ) : (
        <dl className="grid gap-3 sm:grid-cols-2">
          {vocab.map((v, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-3">
              <dt className="text-sm font-semibold text-foreground">{v.term}</dt>
              <dd className="mt-0.5 text-sm text-muted-foreground">{v.def}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
