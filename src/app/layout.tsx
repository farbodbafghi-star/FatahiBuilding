import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    "Design-build custom homes in the Greater Toronto Area. Over 30 years of craftsmanship. We design it and we build it. Nothing gets lost in translation.",
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
      </body>
    </html>
  );
}
