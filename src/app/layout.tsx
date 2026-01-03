import type { Metadata } from "next";
import "./globals.css";
import AIChatWidget from "@/components/AIChatWidget";

export const metadata: Metadata = {
  title: "Suryana Dhuchri - AI Engineer & Fullstack Developer",
  description: "I build intelligent systems that drive business value. Specialized in scalable fullstack systems, Agentic AI, and end-to-end product delivery.",
  keywords: ["AI Engineer", "Fullstack Developer", "Machine Learning", "RAG", "Next.js", "Python", "Go"],
  authors: [{ name: "Suryana Dhuchri" }],
  openGraph: {
    title: "Suryana Dhuchri - AI Engineer & Fullstack Developer",
    description: "I build intelligent systems that drive business value.",
    type: "website",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark bg-grid-pattern bg-aurora text-text-light dark:text-text-dark font-body transition-colors duration-300">
        {children}
        <AIChatWidget />
      </body>
    </html>
  );
}
