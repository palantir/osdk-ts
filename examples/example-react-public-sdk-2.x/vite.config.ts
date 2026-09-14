import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 8080,
      proxy: {
        "^/.*api-proxy.*": {
          target: "https://example.com",
          changeOrigin: true,
          secure: true,
          rewrite: (path) => {
            const match = path.match(/\/api-proxy(.*)$/);
            if (match) {
              return `/proxy${match[1]}`;
            }
            return path;
          },
        },
      },
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
  };
});
