import { ListenButton } from "@/components/story/ListenButton";

export function ProfessionalSummary({ text }: { text: string }) {
  return (
    <section>
      <div className="mb-2 flex items-center justify-between gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Professional Summary</h2>
        <ListenButton text={text} label="the professional summary" />
      </div>
      <p className="text-base leading-relaxed text-foreground">{text}</p>
    </section>
  );
}
