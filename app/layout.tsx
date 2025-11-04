import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Prompt } from "next/font/google";
import "@/styles/globals.css";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "GIDA 11 (Sample)",
    template: "%s — GIDA 11 (Sample)",
  },
  description: "Sample-only demo landing page for GIDA 11.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "GIDA 11 (Sample)",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIDA 11 (Sample)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={`${prompt.variable} ${inter.variable} bg-neutral-50 text-neutral-900 antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
