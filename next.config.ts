import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: '/work', destination: '/' },
      { source: '/services', destination: '/' },
      { source: '/about', destination: '/' },
      { source: '/tools', destination: '/' },
      { source: '/contact', destination: '/' },
    ];
  },
};

export default nextConfig;
