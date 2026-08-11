import foundryWidgetPlugin from "@osdk/widget.vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ["./index.html"],
    },
  },
  plugins: [react(), foundryWidgetPlugin()],
  server: {
    cors: true,
    port: 8080,
  },
});
