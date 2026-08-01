"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Reusable read-aloud control (Web Speech API — no external service, no
// account). Stops automatically on unmount, e.g. when Next.js navigates away
// from the page this button lives on.
export function ListenButton({ text, label }: { text: string; label?: string }) {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const [speaking, setSpeaking] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!supported) return null;

  function toggle() {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel(); // stop anything else currently reading
    const utter = new SpeechSynthesisUtterance(text);
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
    setSpeaking(true);
  }

  return (
    <Button variant="outline" size="sm" onClick={toggle} aria-label={speaking ? "Stop reading" : `Read ${label ?? "this"} aloud`}>
      {speaking ? "⏸ Stop" : "🔊 Listen"}
    </Button>
  );
}
