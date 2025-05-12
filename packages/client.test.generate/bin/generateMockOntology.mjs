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
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = await yargs(hideBin(process.argv))
  .usage("Usage: $0 --outDir [dir] [--version version]")
  .option("outDir", {
    alias: "o",
    describe: "Output directory to generate the mock ontology",
    type: "string",
    demandOption: true,
  })
  .option("generatorVersion", {
    alias: "v",
    describe: "Version of the @osdk/generator package to use",
    type: "string",
  })
  .help()
  .argv;

(async () => {
  await generateMockOntologyAtDir(argv.outDir, argv.generatorVersion);
})();

export async function generateMockOntologyAtDir(outDir, version) {
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
    const generatorModule = await installAndImport("@osdk/generator", version);
    generateClientSdkVersionTwoPointZero =
      generatorModule.generateClientSdkVersionTwoPointZero;
  } else {
    ({ generateClientSdkVersionTwoPointZero } = await import(
      "@osdk/generator"
    ));
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
}

async function installAndImport(packageName, version) {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const tmpDir = join(__dirname, "..", "build", "fauxInstall");
  await mkdir(tmpDir, { recursive: true });

  await execa("pnpm", [
    "install",
    `${packageName}@${version}`,
    `--prefix=${tmpDir}`,
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
  const moduleEntry = packageJson.module;

  const packageMainFile = join(
    tmpDir,
    "node_modules",
    packageName,
    moduleEntry,
  );

  const importedModule = await import(packageMainFile);

  return importedModule;
}
