import type { NextConfig } from "next";

// Static export so the site can be hosted for free on GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
