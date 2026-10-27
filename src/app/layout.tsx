import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prajwala U | AI & Software Engineer",
  description:
    "Portfolio of Prajwala U - AI & Software Engineer with hands-on experience in Generative AI, QA Automation, Playwright, LLM-powered test automation, and Enterprise SaaS applications. BE in AI & ML from Global Academy of Technology, Bangalore.",
  keywords: [
    "Prajwala U",
    "AI Engineer",
    "Software Engineer",
    "Playwright Automation",
    "Machine Learning",
    "Generative AI",
    "LLM",
    "Python",
    "TypeScript",
    "QA Automation",
  ],
  openGraph: {
    title: "Prajwala U | AI & Software Engineer",
    description:
      "AI & Software Engineer experienced in Generative AI, QA Automation, Playwright, and Enterprise SaaS applications.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
