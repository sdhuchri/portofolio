import type { Metadata } from "next";
import "./globals.css";
import AIChatWidget from "@/components/AIChatWidget";

export const metadata: Metadata = {
  title: "Suryana Dhuchri - AI Engineer & Fullstack Developer",
  description: "Building intelligent systems at the intersection of enterprise banking and modern AI. Agentic systems, RAG pipelines, LLM integrations — grounded by 7+ years in core banking and full-stack delivery.",
  keywords: ["AI Engineer", "Fullstack Developer", "Agentic AI", "RAG", "LLM", "Next.js", "Go", "Core Banking"],
  authors: [{ name: "Suryana Dhuchri" }],
  openGraph: {
    title: "Suryana Dhuchri - AI Engineer & Fullstack Developer",
    description: "Building intelligent systems at the intersection of enterprise banking and modern AI.",
    type: "website",
  },
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="text-text-light dark:text-text-dark font-body transition-colors duration-300">
        {children}
        <AIChatWidget />
      </body>
    </html>
  );
}
