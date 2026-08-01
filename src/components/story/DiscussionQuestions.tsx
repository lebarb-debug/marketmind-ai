export function DiscussionQuestions({ questions }: { questions: string[] }) {
  return (
    <section>
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Discussion Questions</h2>
      <ol className="flex flex-col gap-3">
        {questions.map((q, i) => (
          <li key={i} className="flex gap-3 rounded-lg border border-border bg-card p-3 text-sm">
            <span className="font-semibold text-primary">{i + 1}.</span>
            <span className="text-foreground">{q}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
