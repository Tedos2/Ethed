import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Empty turbopack config to silence Turbopack warning
  turbopack: {},
};

export default nextConfig;
