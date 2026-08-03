import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Static favicon version of src/components/brand/Logo.tsx — hardcoded to
// the light-mode --primary/--primary-foreground hex equivalents since
// favicons render outside the site's own CSS (no theme variables available).
export default function Icon() {
  return new ImageResponse(
    (
      <svg width="32" height="32" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#206ae2" />
        <path
          d="M5 17 L9 7 L12 12 L15 5 L19 17"
          fill="none"
          stroke="#f7f9fa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    { ...size }
  );
}
