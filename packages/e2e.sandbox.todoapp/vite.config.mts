import react from "@vitejs/plugin-react";
import https from "node:https";
import { visualizer } from "rollup-plugin-visualizer";
import type { PluginOption } from "vite";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      visualizer({
        filename: "build/site-stats.html",
      }) as unknown as PluginOption,
    ],
    server: {
      port: 8080,
      proxy: {
        "/multipass": `${env.VITE_FOUNDRY_URL}`,
        "/api": `${env.VITE_FOUNDRY_URL}`,
        "/ontology-metadata": `${env.VITE_FOUNDRY_URL}`,
        "/object-set-watcher": `${env.VITE_FOUNDRY_URL}`,
        "/object-set-service": `${env.VITE_FOUNDRY_URL}`,
      },
    },
    optimizeDeps: {
      // shared.client is a mixed package that needs to be properly processed by vite
      // but normally linked packages do not get that treatment so we have to explicitly add it here
      // and in the `commonjsOptions` below
    },
    build: {
      outDir: "build/site/",
    },
  };
});
