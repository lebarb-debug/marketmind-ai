// Mechanical React port of ../../../../sprites.js — same 8 stick-figure poses,
// same 0 0 100 140 viewBox, same currentColor/--fig-fill technique. Mounted
// once in the root layout; panels reference poses via <use href="#fig-pose">.
export function SpriteDefs() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <defs>
        <symbol id="fig-neutral" viewBox="0 0 100 140">
          <circle cx="50" cy="20" r="14" stroke="currentColor" strokeWidth="5" fill="var(--fig-fill,#fff)" />
          <circle cx="44" cy="18" r="1.6" fill="currentColor" />
          <circle cx="56" cy="18" r="1.6" fill="currentColor" />
          <path d="M44 25 Q50 28 56 25" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <line x1="50" y1="34" x2="50" y2="85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="32" y2="72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="68" y2="72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="34" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="66" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </symbol>

        <symbol id="fig-talking" viewBox="0 0 100 140">
          <circle cx="50" cy="20" r="14" stroke="currentColor" strokeWidth="5" fill="var(--fig-fill,#fff)" />
          <circle cx="44" cy="18" r="1.6" fill="currentColor" />
          <circle cx="56" cy="18" r="1.6" fill="currentColor" />
          <ellipse cx="50" cy="26" rx="5" ry="4" fill="currentColor" opacity="0.85" />
          <line x1="50" y1="34" x2="50" y2="85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="78" y2="55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="30" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="34" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="66" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </symbol>

        <symbol id="fig-shocked" viewBox="0 0 100 140">
          <circle cx="50" cy="20" r="14" stroke="currentColor" strokeWidth="5" fill="var(--fig-fill,#fff)" />
          <circle cx="44" cy="17" r="2" fill="currentColor" />
          <circle cx="56" cy="17" r="2" fill="currentColor" />
          <line x1="40" y1="10" x2="46" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="10" x2="54" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="50" cy="27" r="4.5" fill="currentColor" opacity="0.85" />
          <line x1="50" y1="34" x2="50" y2="85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="28" y2="24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="72" y2="24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="34" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="66" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </symbol>

        <symbol id="fig-pointing" viewBox="0 0 100 140">
          <circle cx="50" cy="20" r="14" stroke="currentColor" strokeWidth="5" fill="var(--fig-fill,#fff)" />
          <circle cx="44" cy="18" r="1.6" fill="currentColor" />
          <circle cx="56" cy="18" r="1.6" fill="currentColor" />
          <path d="M44 26 Q50 24 56 26" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <line x1="50" y1="34" x2="50" y2="85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="92" y2="40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="34" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="34" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="66" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </symbol>

        <symbol id="fig-arms-crossed" viewBox="0 0 100 140">
          <circle cx="50" cy="20" r="14" stroke="currentColor" strokeWidth="5" fill="var(--fig-fill,#fff)" />
          <circle cx="44" cy="18" r="1.6" fill="currentColor" />
          <circle cx="56" cy="18" r="1.6" fill="currentColor" />
          <line x1="43" y1="27" x2="57" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="50" y1="34" x2="50" y2="85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M50 48 Q66 58 34 66" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M50 48 Q34 58 66 66" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
          <line x1="50" y1="85" x2="36" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="64" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </symbol>

        <symbol id="fig-panic" viewBox="0 0 100 140">
          <circle cx="50" cy="20" r="14" stroke="currentColor" strokeWidth="5" fill="var(--fig-fill,#fff)" />
          <circle cx="44" cy="17" r="2" fill="currentColor" />
          <circle cx="56" cy="17" r="2" fill="currentColor" />
          <circle cx="50" cy="27" r="4" fill="currentColor" opacity="0.85" />
          <ellipse cx="66" cy="9" rx="3" ry="4.5" fill="#38bdf8" opacity="0.9" />
          <line x1="50" y1="34" x2="50" y2="82" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="20" y2="30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="82" y2="30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="82" x2="24" y2="128" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="82" x2="76" y2="128" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </symbol>

        <symbol id="fig-celebrate" viewBox="0 0 100 140">
          <circle cx="50" cy="20" r="14" stroke="currentColor" strokeWidth="5" fill="var(--fig-fill,#fff)" />
          <circle cx="44" cy="18" r="1.6" fill="currentColor" />
          <circle cx="56" cy="18" r="1.6" fill="currentColor" />
          <path d="M43 25 Q50 32 57 25" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <line x1="50" y1="34" x2="50" y2="85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="22" y2="12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="45" x2="78" y2="12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="32" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="68" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </symbol>

        <symbol id="fig-whisper" viewBox="0 0 100 140">
          <circle cx="52" cy="20" r="14" stroke="currentColor" strokeWidth="5" fill="var(--fig-fill,#fff)" />
          <circle cx="47" cy="18" r="1.6" fill="currentColor" />
          <circle cx="58" cy="18" r="1.6" fill="currentColor" />
          <line x1="50" y1="34" x2="46" y2="85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="48" y1="45" x2="66" y2="28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="46" y1="45" x2="28" y2="68" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="46" y1="85" x2="30" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="46" y1="85" x2="62" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </symbol>
      </defs>
    </svg>
  );
}
