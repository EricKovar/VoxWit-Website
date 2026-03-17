import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VoxWit — Write posts people actually enjoy reading",
  description:
    "VoxWit is an AI writing copilot that helps you craft sharper hooks, clearer writing, and a touch of wit for every post.",
  openGraph: {
    title: "VoxWit — AI writing copilot for engaging posts",
    description:
      "Write better LinkedIn posts with smarter hooks, stronger structure, and a touch of wit.",
    siteName: "VoxWit",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxWit — Write posts people enjoy reading",
    description:
      "An AI copilot for LinkedIn writers, founders, and creators. Sharpen hooks, add wit, and publish faster.",
    creator: "@voxwit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-midnight text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
