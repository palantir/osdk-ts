import { createMDX } from "fumadocs-mdx/next";
import path from "node:path";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  basePath: "/osdk-ts",
  trailingSlash: false,
  reactStrictMode: true,
  agentRules: false,
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(import.meta.dirname, ".."),
  },
};

export default withMDX(config);
