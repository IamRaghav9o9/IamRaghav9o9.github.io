import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Raghav Chandna — AI/ML Engineer & Researcher",
    template: "%s | Raghav Chandna",
  },
  description:
    "Applied AI/ML engineer with a research mindset. Working on spatio-temporal modeling, graph neural networks, and physics-inspired machine learning.",
  keywords: [
    "AI",
    "Machine Learning",
    "Graph Neural Networks",
    "Spatio-Temporal",
    "Physics-Informed ML",
    "Research",
  ],
  authors: [{ name: "Raghav Chandna" }],
  openGraph: {
    title: "Raghav Chandna — AI/ML Engineer & Researcher",
    description:
      "Applied AI/ML engineer working on spatio-temporal modeling, GNNs, and physics-inspired ML.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
