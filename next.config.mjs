const basePath = "/causewaymotors";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },
};

export default nextConfig;
