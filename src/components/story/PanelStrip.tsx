import { Panel } from "@/components/story/Panel";
import type { Panel as PanelType } from "@/lib/types";

export function PanelStrip({ panels }: { panels: PanelType[] }) {
  return (
    <div className="flex flex-col gap-6">
      {panels.map((panel, i) => (
        <Panel key={i} panel={panel} index={i} />
      ))}
    </div>
  );
}
