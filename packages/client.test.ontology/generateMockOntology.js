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

// @ts-check

import { LegacyFauxFoundry } from "@osdk/shared.test";
import { execa } from "execa";
import { promises as fs, rmSync } from "node:fs";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const version = process.argv[2];
const packageName = "@osdk/generator";

async function installAndImport(packageName, version) {
  const tmpDir = join(__dirname, "tmp");
  await mkdir(tmpDir, { recursive: true });

  await execa("pnpm", [
    "install",
    `${packageName}@${version}`,
    "--prefix=./tmp",
    "--lockfile=false",
  ], {
    cwd: __dirname,
  });

  const packageJsonPath = join(
    tmpDir,
    "node_modules",
    packageName,
    "package.json",
  );
  const packageJsonContent = await fs.readFile(packageJsonPath, "utf8");
  const packageJson = JSON.parse(packageJsonContent);
  const mainEntry = packageJson.main;

  const packageMainFile = join(tmpDir, "node_modules", packageName, mainEntry);

  const importedModule = await import(packageMainFile);

  return importedModule;
}

const outDir = join(__dirname, "src", `generatedNoCheck`);

try {
  rmSync(outDir, { recursive: true, force: true });
} catch (e) {
  // ignored, only needed for regeneration
}

const fullOntology = new LegacyFauxFoundry()
  .getDefaultOntology()
  .getOntologyFullMetadata();

const ontologyWithoutUnsupportedAction = {
  ...fullOntology,
  actionTypes: {
    ...fullOntology.actionTypes,
  },
};

delete ontologyWithoutUnsupportedAction.actionTypes["unsupportedAction"];

let generateClientSdkVersionTwoPointZero;
if (version) {
  const generatorModule = await installAndImport(packageName, version);
  generateClientSdkVersionTwoPointZero =
    generatorModule.generateClientSdkVersionTwoPointZero;
} else {
  ({ generateClientSdkVersionTwoPointZero } = await import("@osdk/generator"));
}

await generateClientSdkVersionTwoPointZero(
  ontologyWithoutUnsupportedAction,
  `typescript-sdk/dev osdk-cli/dev`,
  {
    writeFile: (path, contents) => {
      return writeFile(path, contents, "utf-8");
    },
    mkdir: async (path, options) => {
      await mkdir(path, options);
    },
    readdir: async (path) => readdir(path),
  },
  outDir,
  "module",
  undefined,
  undefined,
  undefined,
  true,
);
