import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Set NEXT_PUBLIC_GA_ID in Vercel (Project → Settings → Environment Variables).
// Until it exists, no analytics script loads at all — nothing breaks.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fatahi Building | Custom Home Builder | Toronto & GTA",
  description:
    "Design-build custom homes in the Greater Toronto Area. Over 30 years of craftsmanship. One team. Concept to completion.",
  keywords: [
    "custom home builder",
    "Toronto",
    "GTA",
    "design build",
    "luxury homes",
    "custom homes North York",
    "home builder Toronto",
  ],
  openGraph: {
    title: "Fatahi Building | Custom Home Builder | Toronto & GTA",
    description:
      "Design-build custom homes in the Greater Toronto Area. Over 30 years of craftsmanship.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
