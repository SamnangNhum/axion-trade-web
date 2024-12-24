import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_APP_API_URL: "http://109.123.235.57:1337",
    // REACT_APP_API_URL: "http://13.228.102.184",

  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "109.123.235.57",
      },
    ],
  },
};

export default nextConfig;
