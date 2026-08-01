"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@/lib/types";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const done = qIdx >= questions.length;

  function choose(i: number) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    const q = questions[qIdx];
    if (i === q.correctIndex) setScore((s) => s + 1);
    setTimeout(() => {
      setQIdx((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    }, 1300);
  }

  function retake() {
    setQIdx(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
  }

  if (done) {
    const pct = score / questions.length;
    const msg = pct === 1 ? "Perfect score! 🎉" : pct >= 0.7 ? "Solid work." : "Worth another round.";
    return (
      <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-6 text-center">
        <h3 className="text-lg font-semibold">
          You scored {score} / {questions.length}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{msg}</p>
        <Button className="mt-4" onClick={retake}>
          Retake Quiz
        </Button>
      </div>
    );
  }

  const q = questions[qIdx];

  return (
    <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-6">
      <div className="mb-3 text-center text-xs font-medium text-muted-foreground">
        Question {qIdx + 1} / {questions.length} · Score: {score}
      </div>
      <h3 className="mb-4 text-center text-base font-semibold text-foreground">{q.question}</h3>
      <div className="flex flex-col gap-2">
        {q.options.map((opt, i) => {
          let stateClasses = "border-border bg-background hover:border-primary";
          if (answered) {
            if (i === q.correctIndex) stateClasses = "border-bull bg-bull/10";
            else if (i === selected) stateClasses = "border-bear bg-bear/10";
            else stateClasses = "border-border bg-background opacity-60";
          }
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => choose(i)}
              className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${stateClasses}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <p className="mt-3 text-xs text-muted-foreground">{q.explanation}</p>
      )}
    </div>
  );
}
