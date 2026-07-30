import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [45, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
