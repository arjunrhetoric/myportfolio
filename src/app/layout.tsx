import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, Noto_Sans_Malayalam } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "../components/Navigation";
import BottomNav from "../components/BottomNav";
import LoadingScreen from "../components/LoadingScreen";
import { siteMetadata } from "../data/portfolio";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = localFont({
  src: "../../public/instrument-serif/instrumentserif-regular.ttf",
  variable: "--font-instrument-serif",
  display: "swap",
});
const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  variable: "--font-noto-malayalam",
  display: "swap",
});
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: siteMetadata.siteTitle,
      template: "%s | Arjun Singh",
    },
    description: siteMetadata.siteDescription,
    keywords: siteMetadata.keywords,
    authors: [{ name: "Arjun Singh" }],
    robots: "index, follow",
    openGraph: {
      title: siteMetadata.siteTitle,
      description: siteMetadata.siteDescription,
      url: siteMetadata.siteUrl,
      siteName: "Arjun Singh",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: siteMetadata.siteTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.siteTitle,
      description: siteMetadata.siteDescription,
      images: ["/opengraph-image"],
      creator: `@${siteMetadata.twitterHandle.replace(/^@/, "")}`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${instrumentSerif.variable} ${notoMalayalam.variable} ${notoDevanagari.variable}`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <Navigation />
        <main className="content-area">
          {children}
        </main>
        <div className="bottom-vignette"></div>
        <BottomNav />
        <Analytics />
      </body>
    </html>
  );
}
