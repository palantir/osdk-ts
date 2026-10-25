import { createMDX } from "fumadocs-mdx/next";
import path from "node:path";
import { site } from "./lib/site.ts";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  basePath: site.basePath,
  trailingSlash: false,
  reactStrictMode: true,
  agentRules: false,
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(import.meta.dirname, ".."),
  },
};

export default withMDX(config);
