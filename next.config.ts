import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // we are doing a static export for IONOS
  output: "export",

  // IMPORTANT: disable the image optimizer for static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
