import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEV JAMIL JUMA | Software Developer Portfolio",
  description: "Portfolio website for DEV JAMIL JUMA, a modern software developer.",
  keywords: [
    "DEV JAMIL JUMA",
    "Portfolio",
    "Software Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "UI/UX",
    "Web Developer",
  ],
  openGraph: {
    title: "DEV JAMIL JUMA | Software Developer Portfolio",
    description: "Portfolio website for DEV JAMIL JUMA, a modern software developer.",
    type: "website",
    url: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950">
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
