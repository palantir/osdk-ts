import viewManifestPlugin from "@osdk/views-manifest-vite-plugin";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viewManifestPlugin()],
  server: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        second: fileURLToPath(new URL("./second.html", import.meta.url)),
      },
    },
  },
});
