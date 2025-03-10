import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Enables static export for Netlify
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
