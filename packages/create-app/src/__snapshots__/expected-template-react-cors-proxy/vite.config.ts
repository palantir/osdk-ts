import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      "^(/multipass|/api)": {
        target: "https://example.palantirfoundry.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
