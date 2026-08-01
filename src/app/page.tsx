import Link from "next/link";
import { FLAGSHIP_COMICS } from "@/content/flagship";
import { CLUBS } from "@/lib/clubs";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-14 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">Financial Storytelling</p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          What happened. Why it happened. Why it matters.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Real market events, broken down the way a great analyst would — a professional summary, the 30-second
          version, the bull case, the bear case, and a comic strip that makes the mechanics stick.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Flagship Stories
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FLAGSHIP_COMICS.map((comic) => (
            <Link
              key={comic.id}
              href={`/story/${comic.id}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">{comic.date}</span>
                <Badge variant="secondary">{comic.category}</Badge>
              </div>
              <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                {comic.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{comic.hook}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {comic.clubs.map((id) => (
                  <Badge key={id} variant="outline" style={{ borderColor: CLUBS[id].color, color: CLUBS[id].color }}>
                    {CLUBS[id].short}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
