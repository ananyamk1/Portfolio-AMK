import type { NextConfig } from "next";

// Static export for GitHub Pages. The base path (e.g. /Portfolio-AMK) is set by the deploy workflow.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
