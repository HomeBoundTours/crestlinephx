import type { NextConfig } from "next";

// Served from https://homeboundtours.github.io/crestlinephx/
// basePath only applies in production so local `npm run dev` stays at the root.
const isProd = process.env.NODE_ENV === "production";
const repo = "crestlinephx";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
