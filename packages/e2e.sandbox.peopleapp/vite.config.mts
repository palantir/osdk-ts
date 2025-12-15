import { osdkDevTools } from "@osdk/react-devtools/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import https from "node:https";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import type { PluginOption } from "vite";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      osdkDevTools({ verbose: true }),
      visualizer({
        filename: "build/site-stats.html",
      }) as unknown as PluginOption,
      tailwindcss(),
    ],
    server: {
      port: 8080,
      proxy: {
        "/api/v2/ontologySubscriptions": {
          ws: true,
          target: `${env.VITE_FOUNDRY_URL}`,
          changeOrigin: true,
        },
        "/multipass": `${env.VITE_FOUNDRY_URL}`,
        "/api": `${env.VITE_FOUNDRY_URL}`,
        "/ontology-metadata": `${env.VITE_FOUNDRY_URL}`,
        "/object-set-watcher": `${env.VITE_FOUNDRY_URL}`,
        "/object-set-service": `${env.VITE_FOUNDRY_URL}`,
      },
    },
    resolve: {
      alias: {
        "@osdk/client/internal": resolve(
          __dirname,
          "../client/build/esm/public/internal.js",
        ),
        "@osdk/client/unstable-do-not-use": resolve(
          __dirname,
          "../client/build/esm/public/unstable-do-not-use.js",
        ),
        "@osdk/client": resolve(__dirname, "../client/build/esm/index.js"),
        "@osdk/react/experimental": resolve(
          __dirname,
          "../react/build/esm/public/experimental.js",
        ),
        "@osdk/react/devtools-registry": resolve(
          __dirname,
          "../react/build/esm/public/devtools-registry.js",
        ),
        "@osdk/react-devtools/register": resolve(
          __dirname,
          "../react-devtools/build/esm/register.js",
        ),
        "@osdk/react-devtools/build/esm/index.css": resolve(
          __dirname,
          "../react-devtools/build/esm/index.css",
        ),
      },
    },
    optimizeDeps: {
      // shared.client is a mixed package that needs to be properly processed by vite
      // but normally linked packages do not get that treatment so we have to explicitly add it here
      // and in the `commonjsOptions` below
    },
    build: {
      outDir: "build/site/",
    },
  };
});
