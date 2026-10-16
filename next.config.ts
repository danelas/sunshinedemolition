import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/:slug(page-sitemap|post-sitemap|category-sitemap).xml", destination: "/sitemap.xml", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "www.sunshinedemolition.com" }], destination: "https://sunshinedemolition.com/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
