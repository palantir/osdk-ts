/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import type { ModuleFormat, RollupBuild } from "rollup";
import { rollup } from "rollup";
import nodePolyfill from "rollup-plugin-polyfill-node";

async function createRollupBuild(
  absolutePackagePath: string,
  packageName: string,
) {
  const inputPath = `${absolutePackagePath}/${packageName}/index.js`;

  const { findUp } = await import("find-up");
  const nodeModulesPath = await findUp("node_modules", {
    cwd: __dirname,
    type: "directory",
  });

  return rollup({
    input: inputPath,
    plugins: [
      nodeResolve({
        browser: true,
        modulePaths: [nodeModulesPath!],
      }),
      ("default" in commonjs
        ? commonjs.default
        : (commonjs as any))({}),
      ("default" in nodePolyfill
        ? nodePolyfill.default
        : (nodePolyfill as any))(),
    ],
    onwarn: (warning, warn) => {
      // Ignore circular dependency warnings
      if (warning.code === "CIRCULAR_DEPENDENCY") {
        return;
      }

      // Pass through all other warnings
      warn(warning);
    },
  });
}

async function writeRollupBuild(
  rollupBuild: RollupBuild,
  absolutePackagePath: string,
  packageName: string,
  format: ModuleFormat,
) {
  const outputPath =
    `${absolutePackagePath}/${packageName}/dist/bundle/index.${format}.js`;

  await Promise.all([
    rollupBuild.write({
      file: outputPath,
      format,
      name: packageName,
      amd: {
        id: packageName,
      },
      plugins: [],
    }),
  ]);
}

async function generateEsmBuild(
  absolutePackagePath: string,
  packageName: string,
) {
  const umdBuild = await createRollupBuild(absolutePackagePath, packageName);
  await writeRollupBuild(umdBuild, absolutePackagePath, packageName, "esm");
}

export async function generateBundles(
  absolutePackagePath: string,
  packageName: string,
) {
  await Promise.all([generateEsmBuild(absolutePackagePath, packageName)]);
}
