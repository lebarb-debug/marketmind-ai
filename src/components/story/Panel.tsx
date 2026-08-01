"use client";

import { motion } from "framer-motion";
import { Actor } from "@/components/sprites/Actor";
import { Bubble } from "@/components/story/Bubble";
import type { Panel as PanelType } from "@/lib/types";

export function Panel({ panel, index }: { panel: PanelType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className="panel-shadow relative rounded-2xl border border-border bg-card p-5"
    >
      <span className="absolute -top-3 left-4 rounded-full border border-border bg-foreground px-2.5 py-0.5 text-[11px] font-bold text-background">
        Panel {index + 1}
      </span>
      <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        {panel.scene}
      </div>
      {panel.caption && (
        <div className="mb-3 inline-block rounded-lg border border-border bg-muted px-3 py-1.5 text-xs italic text-foreground">
          {panel.caption}
        </div>
      )}
      <div className="flex min-h-[150px] flex-wrap items-end justify-around gap-4">
        {panel.chars.map((c, i) => (
          <Actor key={i} pose={c.pose} label={c.label} side={c.side} />
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {panel.dialogue.map((line, i) => {
          const speaker = panel.chars.find((c) => c.label === line.who);
          return <Bubble key={i} who={line.who} text={line.text} alignRight={speaker?.side === "right"} />;
        })}
      </div>
    </motion.div>
  );
}
