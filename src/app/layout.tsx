import type { Metadata } from "next";
import "./globals.css";
import AIChatWidget from "@/components/AIChatWidget";

export const metadata: Metadata = {
  title: "Suryana Dhuchri — AI Engineer & Fullstack Developer",
  description:
    "Suryana Dhuchri — AI Engineer & Fullstack Developer. Building intelligent, agentic systems at the intersection of enterprise banking and modern AI.",
  keywords: [
    "AI Engineer",
    "Fullstack Developer",
    "Agentic AI",
    "MCP Tools",
    "LangGraph",
    "Mastra",
    "RAG",
    "LLM",
    "Next.js",
    "Go",
    "Core Banking",
  ],
  authors: [{ name: "Suryana Dhuchri" }],
  openGraph: {
    title: "Suryana Dhuchri — AI Engineer & Fullstack Developer",
    description:
      "Building intelligent, agentic systems at the intersection of enterprise banking and modern AI.",
    type: "website",
  },
  icons: [],
};

// Set theme before first paint to avoid a flash of the wrong theme.
const THEME_INIT = `(function(){try{var k='sd-theme';var t=localStorage.getItem(k);if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var r=document.documentElement;r.setAttribute('data-theme',t);if(t==='dark'){r.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        {children}
        <AIChatWidget />
      </body>
    </html>
  );
}
