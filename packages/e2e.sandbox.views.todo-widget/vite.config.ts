import viewManifestPlugin from "@osdk/views-manifest-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viewManifestPlugin()],
  server: {
    port: 8080,
  },
});
