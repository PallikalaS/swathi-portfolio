import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

// Font setup


const headingFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swathi Pallikala – AI Portfolio",
  description: "Portfolio of Swathi Pallikala – AI Engineer, LLM Systems Architect, and Researcher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans bg-background text-text`}>

        {children}
      </body>
    </html>
  );
}

