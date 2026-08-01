import { notFound } from "next/navigation";
import Link from "next/link";
import { FLAGSHIP_COMICS, getFlagshipComic } from "@/content/flagship";
import { CLUBS } from "@/lib/clubs";
import { Badge } from "@/components/ui/badge";
import { ProfessionalSummary } from "@/components/story/ProfessionalSummary";
import { AltitudeTabs } from "@/components/story/AltitudeTabs";
import { Timeline } from "@/components/story/Timeline";
import { PanelStrip } from "@/components/story/PanelStrip";
import { BullBearCase } from "@/components/story/BullBearCase";
import { LongTermView } from "@/components/story/LongTermView";
import { VocabDecoder } from "@/components/story/VocabDecoder";
import { Quiz } from "@/components/quiz/Quiz";
import { DiscussionQuestions } from "@/components/story/DiscussionQuestions";
import { RelatedHistoricalEvents } from "@/components/story/RelatedHistoricalEvents";
import { SourcesFooter } from "@/components/story/SourcesFooter";

export function generateStaticParams() {
  return FLAGSHIP_COMICS.map((c) => ({ slug: c.id }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comic = getFlagshipComic(slug);
  if (!comic) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="mb-6 inline-block text-sm font-medium text-muted-foreground hover:text-foreground">
        ← All stories
      </Link>

      <header className="mb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">{comic.date}</span>
          <Badge variant="secondary">{comic.category}</Badge>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{comic.title}</h1>
        <p className="mt-3 text-base text-muted-foreground">{comic.hook}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {comic.clubs.map((id) => (
            <Badge key={id} variant="outline" style={{ borderColor: CLUBS[id].color, color: CLUBS[id].color }}>
              {CLUBS[id].short}
            </Badge>
          ))}
        </div>
      </header>

      <div className="flex flex-col gap-16">
        <ProfessionalSummary text={comic.professionalSummary} />
        <AltitudeTabs thirtySecond={comic.thirtySecondSummary} eli5={comic.eli5Summary} />
        <Timeline events={comic.timeline} />
        <PanelStrip panels={comic.panels} />
        <BullBearCase bullCase={comic.bullCase} bearCase={comic.bearCase} />
        <LongTermView text={comic.longTermView} />
        <VocabDecoder vocab={comic.vocab} />
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Test Yourself</h2>
          <Quiz questions={comic.quiz} />
        </section>
        <DiscussionQuestions questions={comic.discussionQuestions} />
        <RelatedHistoricalEvents events={comic.relatedHistoricalEvents} />
        <SourcesFooter sources={comic.sources} />
      </div>
    </div>
  );
}
