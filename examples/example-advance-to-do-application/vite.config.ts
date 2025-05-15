import path from 'node:path';
import { createRequire } from 'node:module';
import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base:
    process.env.NODE_ENV === "development"
      ? process.env.DEV_SERVER_BASE_PATH
      : undefined,
  server: {
    port: Number(process.env.DEV_SERVER_PORT ?? 8080),
    host: process.env.DEV_SERVER_HOST,
    allowedHosts: process.env.DEV_SERVER_DOMAIN != null
        ? [process.env.DEV_SERVER_DOMAIN]
        : undefined,
  },
});
