import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { AREAS_SERVED, BUSINESS_ID, SITE } from "@/lib/schema";

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
  metadataBase: new URL("https://www.fatahibuilding.com"),
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
    url: "https://www.fatahibuilding.com",
    siteName: "Fatahi Building",
  },
};

// Tells Google who the business is. Service-area business: no public street address.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": BUSINESS_ID,
  name: "Fatahi Building",
  legalName: "Fatahi Building Inc.",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Majid Fatahi",
    jobTitle: "Founder, Lead Designer & Builder",
  },
  knowsAbout: [
    "Custom home building",
    "Design-build",
    "Whole-home renovation",
    "Home additions",
    "Committee of Adjustment minor variances",
  ],
  url: "https://www.fatahibuilding.com",
  logo: "https://www.fatahibuilding.com/icon.png",
  image: "https://www.fatahibuilding.com/icon.png",
  telephone: "+1-647-631-1211",
  email: "info@fatahibuilding.com",
  description:
    "Design-build firm for custom homes, whole-home transformations and additions in Toronto and North York.",
  areaServed: AREAS_SERVED,
  // Add each new official profile here as it goes live (Houzz, Bing Places, Yelp...).
  sameAs: [
    "https://instagram.com/fatahibuilding",
    "https://www.linkedin.com/company/fatahi-building-inc/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fatahi Building",
  url: SITE,
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "en-CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <JsonLd data={[businessSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
