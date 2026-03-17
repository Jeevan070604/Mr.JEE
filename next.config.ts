import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? '/Mr.JEE' : '',
  assetPrefix: isProd ? '/Mr.JEE' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
