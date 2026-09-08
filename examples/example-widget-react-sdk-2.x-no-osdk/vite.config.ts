import foundryWidgetPlugin from "@osdk/widget.vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), foundryWidgetPlugin()],
  server: {
    port: 8080,
    cors: true,
  },
  build: {
    rollupOptions: {
      input: ["./index.html"],
    },
  },
});
