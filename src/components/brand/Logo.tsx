// The MarketMind AI mark: an ascending zigzag that reads as both an "M"
// monogram and a rising line chart — each peak taller than the last, left
// to right. Colors use the site's theme tokens so it adapts automatically
// between light and dark mode; see globals.css for --primary / --primary-foreground.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="var(--primary)" />
      <path
        d="M5 17 L9 7 L12 12 L15 5 L19 17"
        fill="none"
        stroke="var(--primary-foreground)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
