import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.sunshinedemolition.com" }], destination: "https://sunshinedemolition.com/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
