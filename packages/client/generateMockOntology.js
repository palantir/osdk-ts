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

import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import { stubData } from "@osdk/shared.test";
import { rmSync } from "node:fs";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "src", "generatedNoCheck");

try {
  rmSync(outDir, { recursive: true, force: true });
} catch (e) {
  // ignored, only needed for regeneration
}

const ontologyWithoutUnsupportedAction = {
  ...stubData.fullOntology,
  actionTypes: {
    ...stubData.fullOntology.actionTypes,
  },
};

// the generator does not correctly handle actions that point to object types outside of the ontology
// this step is typically handled by code upstream of the actual generator
delete ontologyWithoutUnsupportedAction.actionTypes["unsupported-action"];

await generateClientSdkVersionTwoPointZero(
  ontologyWithoutUnsupportedAction,
  "@osdk/cli/0.0.0",
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
);
