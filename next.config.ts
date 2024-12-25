import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_APP_API_URL: "https://axiontrade.aeks.one",
    // REACT_APP_API_URL: "http://13.228.102.184",

  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "axiontrade.aeks.one",
        // port: "1337", // Ensure the port is specified
        pathname: "/uploads/**", // Match the image path
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
