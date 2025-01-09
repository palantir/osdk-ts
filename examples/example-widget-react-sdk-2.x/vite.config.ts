import widgetManifestPlugin from "@osdk/widget.vite-plugin.unstable";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), widgetManifestPlugin()],
  server: {
    port: 8080,
  },
});
