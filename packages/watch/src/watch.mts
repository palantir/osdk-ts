/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { watchTree } from "turbotree";
import type { PackageInfo, Trigger, WatchExpression } from "turbotree";
import { chalk } from "zx";

const q = [chalk.green, chalk.yellow, chalk.blue, chalk.magenta, chalk.cyan];
const nextChalk = () => {
  const c = q.shift()!;
  q.push(c);
  return c;
};

(async () => {
  const watchRootPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "..",
    "..",
  );

  const triggers = (p: PackageInfo): Trigger[] => {
    function logChangedFiles(
      files: readonly { name: string }[],
    ) {
      // eslint-disable-next-line no-console
      console.log(
        `${p.root}: changes detected: ${
          files.map((f) =>
            nextChalk()(`./${path.relative(watchRootPath, f.name)}`)
          )
            .join(", ")
        }\n`,
      );
    }

    const tsSourceFiles = ["anyof", [
      "match",
      `src/**/*.ts`,
      "wholename",
    ], [
      "match",
      `src/**/*.mts`,
      "wholename",
    ]] satisfies WatchExpression;

    const packageJsonFiles = [
      "match",
      "package.json",
      "basename",
    ] satisfies WatchExpression;

    const currentPackageDir = [
      "match",
      `${p.root}/**`,
      "wholename",
    ] satisfies WatchExpression;

    const ignoreNodeModules = ["not", [
      "dirname",
      "node_modules",
    ]] satisfies WatchExpression;

    const ignoreGeneratedNoCheckDirs = ["allof", ["not", [
      "match",
      "**/generatedNoCheck/**",
      "wholename",
    ]], ["not", [
      "match",
      "**/generatedNoCheck2/**",
      "wholename",
    ]]] satisfies WatchExpression;

    return [
      {
        expression: [
          "allof",
          ignoreNodeModules,
          ignoreGeneratedNoCheckDirs,
          currentPackageDir,
          ["anyof", tsSourceFiles, packageJsonFiles],
        ],
        retry: {
          retries: 0,
        },
        name: `${p.name}:check`,
        initialRun: false,
        onChange: async ({ spawn, files, first, attempt }) => {
          logChangedFiles(files);

          await spawn`npx turbo check --output-logs=new-only ${p.turboFilterFlags}`;
        },
      },
    ];
  };
  /**
   * @param {import("turbotree").KickstartContext} k
   * @returns
   */
  const kickstartCommand: Parameters<typeof watchTree>[2] = async (k) =>
    k.$`npx turbo transpile --output-logs=new-only ${k.turboFilterFlags}`;

  // eslint-disable-next-line no-console
  console.log(`watching root path: ${watchRootPath}`);

  watchTree(
    watchRootPath,
    triggers,
    kickstartCommand,
  );
})();
