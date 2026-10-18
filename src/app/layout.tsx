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
    default: "Raghav Chandna — AI/ML Developer & Researcher",
    template: "%s | Raghav Chandna",
  },
  description:
    "AI/ML and Full-Stack Developer working across spatio-temporal modelling, graph neural networks, sensor analytics, and research-oriented software development.",
  keywords: [
    "AI",
    "Machine Learning",
    "Graph Neural Networks",
    "Spatio-Temporal",
    "Transfer Learning",
    "Air Quality Monitoring",
    "SACAQM",
    "FastAPI",
    "React",
    "Research",
  ],
  authors: [{ name: "Raghav Chandna" }],
  openGraph: {
    title: "Raghav Chandna — AI/ML Developer & Researcher",
    description:
      "AI/ML and Full-Stack Developer working across spatio-temporal modelling, graph neural networks, sensor analytics, and research-oriented software development.",
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
