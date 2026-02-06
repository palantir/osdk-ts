import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import type { PluginOption } from "vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      visualizer({
        filename: "build/site-stats.html",
      }) as unknown as PluginOption,
      tailwindcss(),
    ],
    server: {
      port: 8080,
      proxy: {
        "/api/v2/ontologySubscriptions": {
          ws: true,
          target: `${env.VITE_FOUNDRY_URL}`,
          changeOrigin: true,
        },
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
