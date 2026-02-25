import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com','spaceonesurfaces.com'],
  },
};

export default nextConfig;
