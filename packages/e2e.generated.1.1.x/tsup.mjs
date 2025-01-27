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

import { findUp } from "find-up";
import { readFile } from "fs/promises";
import * as path from "node:path";

/**
 * @param {import('tsup').Options} options
 * @param {{cjsExtension?: ".cjs" | ".js", esmOnly?: boolean }} ourOptions
 * @returns {Promise<import('tsup').Options | import('tsup').Options[]>}
 */
export default async (options, ourOptions) => {
  const babel = (await import("esbuild-plugin-babel")).default;

  const packageJson = await readFile("package.json", "utf-8").then(f =>
    JSON.parse(f)
  );

  /** @type {import("tsup").Options} */
  const baseConfig = {
    entry: [
      "src/index.ts",
      "src/public/*.ts",
      "src/public/*.mts",
    ],
    outExtension: ({ format }) => {
      return {
        js: ".js",
      };
    },
    env: {
      PACKAGE_VERSION: packageJson.version,
      PACKAGE_API_VERSION: await readPackageVersion("packages/api"),
      PACKAGE_CLIENT_VERSION: await readPackageVersion("packages/client"),
      PACKAGE_CLI_VERSION: await readPackageVersion("packages/cli"),
      TARGET: "node",
      MODE: process.env.production ? "production" : "development",
    },
    clean: false, // we do this ourselves so its granular
    silent: true,
    sourcemap: true,
    splitting: true,
    shims: true, // so we can use __dirname in both esm and cjs
    minify: false, // !options.watch,
    onSuccess: async () => {
      // eslint-disable-next-line no-console
      console.log("👍");
    },
    keepNames: false,
    treeshake: true,
    target: "es2022",

    esbuildPlugins: [
      /** @type {any} */ (babel({
        config: {
          presets: ["@babel/preset-typescript"],
          plugins: ["babel-plugin-dev-expression"],
        },
      })),
    ],
  };

  /** @type {import("tsup").Options} */
  const esmConfig = {
    ...baseConfig,
    format: ["esm"],
    outDir: "build/esm",
  };

  /** @type {import("tsup").Options} */
  const cjsConfig = {
    ...esmConfig,
    format: ["cjs"],
    outExtension: () => {
      return {
        js: ".cjs",
      };
    },
    outDir: "build/cjs",
  };

  /** @type {import("tsup").Options} */
  const browserConfig = {
    ...baseConfig,
    format: ["esm"],
    outDir: "build/browser",
    env: {
      ...baseConfig.env,
      TARGET: "browser",
    },
  };

  const ret = [esmConfig, browserConfig];
  if (!ourOptions.esmOnly) ret.push(cjsConfig);
  return ret;
};

async function readPackageVersion(k) {
  const workspaceFile = await findUp("pnpm-workspace.yaml");
  if (!workspaceFile) throw "couldn't find workspace file";
  const workspaceRoot = path.dirname(workspaceFile);
  return await readFile(path.join(workspaceRoot, k, "package.json"), "utf-8")
    .then(f => JSON.parse(f).version);
}
