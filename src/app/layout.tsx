import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Global/Navbar";
import Footer from "@/Components/Global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Updated SEO Metadata
export const metadata: Metadata = {
  title: "IslamicSite - Explore the Beauty of Islam",
  description: "A professional and spiritual Islamic website created with Next.js and TailwindCSS. Discover Islamic teachings, quotes, and resources beautifully presented.",
  keywords: [
    "Islamic Website",
    "IslamicSite",
    "Quran",
    "Hadith",
    "Islamic Quotes",
    "Learn Islam",
    "Next.js Islamic Project",
    "TailwindCSS Islamic Template",
    "Islamic Resources",
    "Muslim Website"
  ],
  authors: [{ name: "Your Name", url: "https://github.com/your-github" }],
  creator: "Your Name",
  publisher: "IslamicSite",
  openGraph: {
    title: "IslamicSite - Explore the Beauty of Islam",
    description: "Discover the beauty of Islam through beautifully crafted components, quotes, and teachings built with Next.js and TailwindCSS.",
    url: "https://your-site-url.com",
    siteName: "IslamicSite",
    images: [
      {
        url: "https://your-site-url.com/og-image.jpg", // 🔥 Add your OG image URL
        width: 1200,
        height: 630,
        alt: "IslamicSite - Explore the Beauty of Islam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IslamicSite - Explore the Beauty of Islam",
    description: "Discover Islamic teachings, quotes, and resources in a beautiful Next.js and TailwindCSS website.",
    images: ["https://your-site-url.com/twitter-image.jpg"], // 🔥 Add your Twitter image URL
    creator: "@your-twitter-handle",
  },
  metadataBase: new URL("https://your-site-url.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
