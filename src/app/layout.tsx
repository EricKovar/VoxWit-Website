import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.voxwit.com"),
  title: "VoxWit — Optimize for attention",
  description:
    "Turn everyday writing into measurable engagement. Stronger posts, smarter comments, and a feedback loop powered by VW Score.",
  openGraph: {
    title: "VoxWit — Optimize for attention",
    description:
      "Turn everyday writing into measurable engagement. Stronger posts, smarter comments, and a feedback loop powered by VW Score.",
    siteName: "VoxWit",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "VoxWit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxWit — Optimize for attention",
    description:
      "Turn everyday writing into measurable engagement.",
    creator: "@voxwit",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
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
