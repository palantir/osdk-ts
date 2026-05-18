import path from "node:path";
import { ontologyAsCode } from "@osdk/vite-plugin-oac";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    ontologyAsCode({ ontologyDir: ".ontology" }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@osdk-local": path.resolve(__dirname, "./.osdk/src/index.ts"),
    },
  },
  server: {
    port: 8080,
  },
});
