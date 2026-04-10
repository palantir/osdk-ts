import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import https from "node:https";
import { visualizer } from "rollup-plugin-visualizer";
import type { PluginOption } from "vite";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      visualizer({
        filename: "build/site-stats.html",
      }) as unknown as PluginOption,
      tailwindcss(),
    ],
    // Resolve workspace packages to .ts source for instant HMR during dev.
    // The "source" condition is a custom export condition defined in each package's
    // package.json. It has no effect on production builds or npm consumers — only
    // tooling that explicitly opts in via resolve.conditions will use it.
    resolve: {
      conditions: ["source"],
    },
    // @osdk/client uses process.env.PACKAGE_VERSION and process.env.MODE which are
    // normally injected by Babel during transpilation. When resolving to source via
    // the "source" condition, Babel doesn't run, so we provide them here.
    define: {
      "process.env.PACKAGE_VERSION": JSON.stringify("dev"),
      "process.env.MODE": JSON.stringify("development"),
    },
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
