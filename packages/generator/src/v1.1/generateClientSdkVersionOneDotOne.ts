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
import { sanitizeMetadata } from "../shared/sanitizeMetadata";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";
import { generateActions } from "./generateActions";
import { generateFoundryClientFile } from "./generateFoundryClientFile";
import { generateIndexFile } from "./generateIndexFile";
import { generateMetadataFile } from "./generateMetadataFile";
import { generateObjectsInterfaceFile } from "./generateObjectsInterfaceFile";
import { generatePerActionDataFiles } from "./generatePerActionDataFiles";
import { generatePerObjectInterfaceAndDataFiles } from "./generatePerObjectInterfaceAndDataFiles";
import { generatePerQueryDataFiles } from "./generatePerQueryDataFiles";
import { generateQueries } from "./generateQueries";

export async function generateClientSdkVersionOneDotOne(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  const sanitizedOntology = sanitizeMetadata(ontology);
  await generateFoundryClientFile(fs, outDir);
  await generateMetadataFile(sanitizedOntology, fs, outDir);
  await generateObjectsInterfaceFile(sanitizedOntology, fs, outDir);
  await generatePerObjectInterfaceAndDataFiles(
    sanitizedOntology,
    fs,
    path.join(outDir, "objects"),
  );
  await generateActions(sanitizedOntology, fs, outDir);
  await generatePerActionDataFiles(
    sanitizedOntology,
    fs,
    path.join(outDir, "actions"),
  );
  await generateQueries(sanitizedOntology, fs, outDir);
  await generatePerQueryDataFiles(
    sanitizedOntology,
    fs,
    path.join(outDir, "queries"),
  );
  await generateIndexFile(fs, outDir);
}
