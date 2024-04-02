import react from "@vitejs/plugin-react";
import https from "node:https";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv, PluginOption } from "vite";

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
    build: {
      outDir: "build/site/",
    },
  };
});
