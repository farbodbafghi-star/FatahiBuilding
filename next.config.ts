import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [75, 85, 95],
  },
  // Standard browser-safety headers, sent with every page.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Stop browsers guessing a file's type.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Do not let other sites show our pages inside a frame.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Share only our domain, not the full page address, with sites we link to.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // The site never needs these device features.
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // A deliberately small policy: it blocks framing, plugins and <base>
          // hijacking without restricting scripts, so analytics and the
          // contact form keep working.
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self'; base-uri 'self'; object-src 'none'",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The .ca domain served a full duplicate of the site; send it to the main domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?fatahibuilding\\.ca" }],
        destination: "https://www.fatahibuilding.com/:path*",
        permanent: true,
      },
      // These two were linked from the nav/footer but had no page.
      { source: "/process", destination: "/services/custom-homes", permanent: true },
      { source: "/services", destination: "/services/custom-homes", permanent: true },
      // Addresses from the earlier website that search engines still list.
      { source: "/transformations", destination: "/services/transformations", permanent: true },
      { source: "/servicesextensionsadditions", destination: "/services/additions", permanent: true },
      { source: "/renovate-or-rebuild", destination: "/insights/renovate-or-rebuild", permanent: true },
      // Area pages were regrouped into regions; send the earlier URLs to their region.
      { source: "/areas/willowdale", destination: "/areas/north-york", permanent: true },
      { source: "/areas/york-mills", destination: "/areas/north-york", permanent: true },
      { source: "/areas/vaughan", destination: "/areas/york-region", permanent: true },
      { source: "/areas/richmond-hill", destination: "/areas/york-region", permanent: true },
    ];
  },
};

export default nextConfig;
