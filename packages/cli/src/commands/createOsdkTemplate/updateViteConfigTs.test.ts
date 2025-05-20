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

import { describe, expect, it } from "vitest";
import { updateViteConfigTs } from "./updateViteConfig.js";

describe("updateViteConfigTs", () => {
  it("should add resolve configuration to the Vite config when none exists", () => {
    const inputConfig = `
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
    `;

    const expectedOutputConfig = `
      import path from 'node:path';
      import { createRequire } from 'node:module';
      import react from "@vitejs/plugin-react";
      import { defineConfig } from 'vite';

      const require = createRequire(import.meta.url);

      // https://vitejs.dev/config/
      export default defineConfig({
        resolve: {
          alias: {
            "@tutorial-advance-to-do-application/sdk":
              path.resolve(__dirname, 'node_modules/@{{APPLICATION_PACKAGE_NAME}}/sdk'),
          },
        },
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
    `;

    const result = updateViteConfigTs(
      inputConfig,
      "@tutorial-advance-to-do-application/sdk",
    );

    const normalize = (str: string) => str.replace(/\s+/g, " ").trim();

    expect(normalize(result)).toBe(normalize(expectedOutputConfig));
  });

  it("should add the alias as the first entry if resolve section exists without it", () => {
    const inputConfig = `
      import path from 'node:path';
      import { defineConfig } from 'vite';

      export default defineConfig({
        resolve: {
          alias: {
            "@osdk-template-cli": path.resolve(__dirname, '../..'),
          },
        },
        plugins: [],
      });
    `;

    const expectedOutputConfig = `
      import path from 'node:path';
      import { defineConfig } from 'vite';

      export default defineConfig({
        resolve: {
          alias: {
            "@tutorial-advance-to-do-application/sdk":
              path.resolve(__dirname, 'node_modules/@{{APPLICATION_PACKAGE_NAME}}/sdk'),
            "@osdk-template-cli": path.resolve(__dirname, '../..'),
          },
        },
        plugins: [],
      });
    `;

    const result = updateViteConfigTs(
      inputConfig,
      "@tutorial-advance-to-do-application/sdk",
    );

    const normalize = (str: string) => str.replace(/\s+/g, " ").trim();

    expect(normalize(result)).toBe(normalize(expectedOutputConfig));
  });

  it("should not modify config if alias already exists", () => {
    const inputConfig = `
      import path from 'node:path';
      import { defineConfig } from 'vite';

      export default defineConfig({
        resolve: {
          alias: {
            "@tutorial-advance-to-do-application/sdk":
              path.resolve(__dirname, 'node_modules/@tutorial-advance-to-do-application/sdk'),
            "@osdk-template-cli": path.resolve(__dirname, '../..'),
          },
        },
        plugins: [],
      });
    `;

    const result = updateViteConfigTs(
      inputConfig,
      "@tutorial-advance-to-do-application/sdk",
    );

    const normalize = (str: string) => str.replace(/\s+/g, "").trim();

    expect(normalize(result)).toBe(normalize(inputConfig));
  });

  it("should add alias section if resolve exists without alias", () => {
    const inputConfig = `
      import path from 'node:path';
      import { defineConfig } from 'vite';

      export default defineConfig({
        resolve: {
          extensions: ['.js', '.ts', '.jsx', '.tsx'],
        },
        plugins: [],
      });
    `;

    const expectedOutputConfig = `
      import path from 'node:path';
      import { defineConfig } from 'vite';

      export default defineConfig({
        resolve: {
          alias: {
            "@tutorial-advance-to-do-application/sdk":
              path.resolve(__dirname, 'node_modules/@{{APPLICATION_PACKAGE_NAME}}/sdk'),
          },
          extensions: ['.js', '.ts', '.jsx', '.tsx'],
        },
        plugins: [],
      });
    `;

    const result = updateViteConfigTs(
      inputConfig,
      "@tutorial-advance-to-do-application/sdk",
    );

    const normalize = (str: string) => str.replace(/\s+/g, " ").trim();

    expect(normalize(result)).toBe(normalize(expectedOutputConfig));
  });
});
