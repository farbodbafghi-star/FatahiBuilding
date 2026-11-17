import type { Metadata } from "next";

// Share-preview tags (Open Graph and Twitter) for one page: what LinkedIn,
// iMessage, WhatsApp and AI crawlers show when the page is linked.
//
// Spread it into the page's metadata:   ...social({ path: "/about" })
//
// The preview title and description come from the page's own `title` and
// `description`, so they are not repeated here. Without this line a page
// falls back to the homepage's preview.

type ShareImage = { url: string; width: number; height: number; alt: string };

export const DEFAULT_SHARE_IMAGE: ShareImage = {
  url: "/images/share/default.jpg",
  width: 1200,
  height: 630,
  alt: "A custom home by Fatahi Building in North York, Toronto",
};

type SocialOptions = {
  path: string;
  image?: ShareImage;
  // Set these on insight articles only.
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function social({
  path,
  image = DEFAULT_SHARE_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
}: SocialOptions): Pick<Metadata, "openGraph" | "twitter"> {
  const shared = {
    url: path,
    siteName: "Fatahi Building",
    locale: "en_CA",
    images: [image],
  };

  return {
    openGraph:
      type === "article"
        ? { ...shared, type: "article", publishedTime, modifiedTime }
        : { ...shared, type: "website" },
    twitter: { card: "summary_large_image", images: [image] },
  };
}
