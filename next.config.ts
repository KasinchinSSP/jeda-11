import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    dirs: ["app", "components", "lib"],
  },
};

export default nextConfig;
