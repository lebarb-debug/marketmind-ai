"use client";

import { motion, type Variants } from "framer-motion";
import type { Pose } from "@/lib/types";
import { getCharacterRole, isPersonifiedEntity } from "@/lib/characters";

// Per-pose entrance choreography — restrained (150-250ms, easeOut), not
// cartoonish. Each pose gets a motion signature that matches its meaning.
const POSE_VARIANTS: Record<Pose, Variants> = {
  neutral: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
  },
  talking: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: "easeOut" } },
  },
  pointing: {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: "easeOut" } },
  },
  whisper: {
    hidden: { opacity: 0, x: -14 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
  },
  "arms-crossed": {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  },
  shocked: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  },
  panic: {
    hidden: { opacity: 0, rotate: -4, y: 8 },
    visible: {
      opacity: 1,
      rotate: [0, -2.5, 2.5, -1.5, 0],
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  },
  celebrate: {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: [0.75, 1.08, 1],
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
};

type ActorProps = {
  pose: Pose;
  label: string;
  side: "left" | "right";
  size?: "md" | "lg";
};

export function Actor({ pose, label, side, size = "md" }: ActorProps) {
  const dims = size === "lg" ? { w: 140, h: 200 } : { w: 78, h: 110 };
  const entity = isPersonifiedEntity(label);
  const role = getCharacterRole(label);

  return (
    <div className="flex flex-col items-center" style={{ width: dims.w + 40 }}>
      <motion.svg
        viewBox="0 0 100 140"
        style={{
          width: dims.w,
          height: dims.h,
          color: side === "left" ? "var(--primary)" : "var(--foreground)",
        }}
        variants={POSE_VARIANTS[pose]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <use href={`#fig-${pose}`} />
      </motion.svg>
      <div className="mt-1.5 flex items-center gap-1">
        {role && <span aria-hidden>{role.icon}</span>}
        {entity && !role && (
          <span aria-hidden className="text-[10px] opacity-70">
            📈
          </span>
        )}
        <span className="rounded-md bg-foreground px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-background">
          {label}
        </span>
      </div>
    </div>
  );
}
