import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-da97f238.vercel.app"),
  title: "EverNet eSIM Vault | Lifetime Connectivity Research Hub",
  description:
    "Curated intelligence on lifetime and perpetual eSIM data plans, alternative strategies, and due diligence tips for always-on connectivity seekers.",
  keywords: [
    "lifetime esim",
    "free internet esim",
    "perpetual data plan",
    "global roaming",
    "connectivity intelligence",
  ],
  openGraph: {
    title: "EverNet eSIM Vault",
    description:
      "Explore strategic sourcing guides, vetted providers, and risk analysis for near-perpetual eSIM connectivity.",
    url: "https://agentic-da97f238.vercel.app",
    siteName: "EverNet eSIM Vault",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverNet eSIM Vault",
    description:
      "Lifetime eSIM research hub with curated offers, due diligence playbooks, and risk mitigation tactics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
