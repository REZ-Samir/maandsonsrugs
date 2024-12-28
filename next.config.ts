import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output:"export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./my/image/loader.js",
  },
};

export default nextConfig;
