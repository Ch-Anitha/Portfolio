import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Enables static export for Netlify
  reactStrictMode: true,
};

export default nextConfig;
