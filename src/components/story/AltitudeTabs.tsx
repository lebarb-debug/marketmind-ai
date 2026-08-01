import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListenButton } from "@/components/story/ListenButton";

// "Pick your altitude" — a one-click toggle between the 30-second elevator
// pitch and the assume-nothing ELI5 explanation, instead of a scroll.
export function AltitudeTabs({ thirtySecond, eli5 }: { thirtySecond: string; eli5: string }) {
  return (
    <section>
      <Tabs defaultValue="thirty-second">
        <TabsList>
          <TabsTrigger value="thirty-second">30-Second Summary</TabsTrigger>
          <TabsTrigger value="eli5">Explain Like I&apos;m 5</TabsTrigger>
        </TabsList>
        <TabsContent value="thirty-second" className="mt-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">
          <p>{thirtySecond}</p>
          <div className="mt-3">
            <ListenButton text={thirtySecond} label="the 30-second summary" />
          </div>
        </TabsContent>
        <TabsContent value="eli5" className="mt-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">
          <p>{eli5}</p>
          <div className="mt-3">
            <ListenButton text={eli5} label="the ELI5 summary" />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
