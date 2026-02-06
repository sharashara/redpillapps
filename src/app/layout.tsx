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
  title: "Red Pill Apps | AI & Automation Solutions",
  description:
    "Red Pill Apps LLC — A boutique AI and automations app developer. We build intelligent systems that automate and elevate your business. AI agents, workflow automation, and custom development.",
  keywords: [
    "AI development",
    "automation",
    "AI agents",
    "workflow automation",
    "custom AI solutions",
    "boutique AI studio",
  ],
  openGraph: {
    title: "Red Pill Apps | AI & Automation Solutions",
    description:
      "A boutique AI and automations app developer. We build intelligent systems that automate and elevate your business.",
    url: "https://redpillapps.com",
    siteName: "Red Pill Apps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Pill Apps | AI & Automation Solutions",
    description:
      "A boutique AI and automations app developer. We build intelligent systems that automate and elevate your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
