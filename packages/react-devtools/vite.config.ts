/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        register: resolve(__dirname, "src/register.ts"),
        setup: resolve(__dirname, "src/setup.ts"),
        "vite/index": resolve(__dirname, "src/vite/index.ts"),
        styles: resolve(__dirname, "src/styles.ts"),
      },
      formats: ["es"],
    },
    outDir: "build/esm",
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@blueprintjs/core",
        "@blueprintjs/icons",
        /^@osdk\//,
        "classnames",
        "zustand",
        "vite",
        /^node:/,
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        assetFileNames: (assetInfo) => {
          // Rename CSS output to index.css to match the documented import path
          if (assetInfo.name?.endsWith(".css")) {
            return "index.css";
          }
          return "[name][extname]";
        },
      },
    },
    target: "es2022",
    sourcemap: true,
  },
});
