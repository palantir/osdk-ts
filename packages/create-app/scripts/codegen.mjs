#!/usr/bin/env node
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

// @ts-check
/// <reference types="node" />
import { consola } from "consola";
import { findUpSync } from "find-up";
import { readFileSync, writeFileSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const pnpmWorkspacePath = findUpSync("pnpm-workspace.yaml", {
  cwd: path.dirname(fileURLToPath(import.meta.url)),
});

if (!pnpmWorkspacePath) {
  consola.error("pnpm-workspace.yaml not found");
  process.exit(1);
}

for (const k of ["react", "next-static-export", "vue"]) {
  const packageJsonContents = JSON.parse(readFileSync(
    path.join(
      path.dirname(pnpmWorkspacePath),
      "examples",
      `example-${k}`,
      "package.json",
    ),
    "utf8",
  ));

  consola.info(`Generating code for ${k}...`);

  const dependencies = {
    "{{osdkPackage}}": "latest",
    ...packageJsonContents.dependencies,
  };
  delete dependencies["@osdk/examples.one.dot.one"];

  const devDependencies = packageJsonContents.devDependencies;

  writeFileSync(
    path.join(
      path.dirname(pnpmWorkspacePath),
      "packages",
      "create-app",
      "templates",
      `template-${k}`,
      "package.json.hbs",
    ),
    JSON.stringify(
      {
        name: "{{project}}",
        private: true,
        version: "0.0.0",
        scripts: packageJsonContents.scripts,
        dependencies,
        devDependencies,
        ...(packageJsonContents.type ? { type: packageJsonContents.type } : {}),
      },
      null,
      2,
    ) + "\n",
    "utf8",
  );
}
