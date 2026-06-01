import { osdkDevTools } from "@osdk/react-devtools/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import type { PluginOption } from "vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // Expose FOUNDRY_-prefixed vars (e.g. FOUNDRY_USER_TOKEN) to the client for local dev auth.
    envPrefix: ["VITE_", "FOUNDRY_"],
    plugins: [
      react(),
      osdkDevTools(),
      visualizer({
        filename: "build/site-stats.html",
      }) as unknown as PluginOption,
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
