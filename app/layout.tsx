import type { Metadata } from "next";
import "./globals.css";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata: Metadata = {
  title: "Web AI Local LLM Demo",
  description: "Client-side chat with MediaPipe Web LLM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Product+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">{children}</body>
    </html>
  );
}