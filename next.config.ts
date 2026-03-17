import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  distDir: 'dist',
  basePath: '/Mr.JEE',
  assetPrefix: '/Mr.JEE',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
