import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [75, 95],
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
    ];
  },
};

export default nextConfig;
