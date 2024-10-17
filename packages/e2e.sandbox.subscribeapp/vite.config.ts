import react from "@vitejs/plugin-react";
import https from "node:https";
import type { PluginOption } from "vite";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    plugins: [
      react(),
    ],
    server: {
      port: 8080,
    },
    build: {
      outDir: "build/site/",
    },
  };
});
