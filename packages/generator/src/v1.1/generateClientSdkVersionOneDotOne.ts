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

import * as path from "node:path";
import type { MinimalFs } from "../MinimalFs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";
import { generateActions } from "./generateActions";
import { generateFoundryClientFile } from "./generateFoundryClientFile";
import { generateIndexFile } from "./generateIndexFile";
import { generateMetadataFile } from "./generateMetadataFile";
import { generateObjectsInterfaceFile } from "./generateObjectsInterfaceFile";
import { generatePerActionDataFiles } from "./generatePerActionDataFiles";
import { generatePerObjectInterfaceAndDataFiles } from "./generatePerObjectInterfaceAndDataFiles";
import { generateQueries } from "./generateQueries";

export async function generateClientSdkVersionOneDotOne(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  await generateFoundryClientFile(fs, outDir);
  await generateMetadataFile(ontology, fs, outDir);
  await generateObjectsInterfaceFile(ontology, fs, outDir);
  await generatePerObjectInterfaceAndDataFiles(
    ontology,
    fs,
    path.join(outDir, "objects"),
  );
  await generateActions(ontology, fs, outDir);
  await generateQueries(ontology, fs, outDir);
  await generatePerActionDataFiles(ontology, fs, path.join(outDir, "actions"));
  await generateIndexFile(fs, outDir);
}
