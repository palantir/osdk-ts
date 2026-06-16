/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
import path from "node:path";
import { defineConfig } from "vite";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    sassDts({
      enabledMode: ["development", "production", "codegen"],
      esmExport: true,
      legacyFileFormat: false,
      sourceDir: path.resolve(__dirname, "src"),
      outputDir: path.resolve(__dirname, "build/scss-types"),
    }),
  ],
  build: {
    outDir: "build/site",
    write: mode !== "codegen",
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
}));
