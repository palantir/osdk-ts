import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "build/site-stats.html",
    }) as unknown as PluginOption,
  ],
  server: {
    port: 8080,
  },
  build: {
    outDir: "build/site/",
  },
});
