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
import { generateObjectsInterfaceSupportFiles } from "./generateObjectsInterfaceSupportFiles";
import { generateOntologyIndexFile } from "./generateOntologyIndexFile";
import { generatePerActionDataFiles } from "./generatePerActionDataFiles";
import { generatePerObjectInterfaceAndDataFiles } from "./generatePerObjectInterfaceAndDataFiles";
import { generatePerQueryDataFiles } from "./generatePerQueryDataFiles";
import { generateQueries } from "./generateQueries";

export async function generateClientSdkVersionOneDotOne(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
) {
  const objectsDir = path.join(outDir, "ontology", "objects");
  const actionsDir = path.join(outDir, "ontology", "actions");
  const queriesDir = path.join(outDir, "ontology", "queries");

  const sanitizedOntology = sanitizeMetadata(ontology);
  await generateFoundryClientFile(fs, outDir);
  await generateMetadataFile(sanitizedOntology, fs, outDir);
  await generateOntologyIndexFile(fs, path.join(outDir, "ontology"));
  await generateObjectsInterfaceFile(sanitizedOntology, fs, objectsDir);
  await generateObjectsInterfaceSupportFiles(
    sanitizedOntology,
    fs,
    path.join(objectsDir, "objects-api"),
  );
  await generatePerObjectInterfaceAndDataFiles(
    sanitizedOntology,
    fs,
    objectsDir,
  );
  await generateActions(sanitizedOntology, fs, actionsDir);
  await generatePerActionDataFiles(
    sanitizedOntology,
    fs,
    actionsDir,
  );
  await generateQueries(sanitizedOntology, fs, queriesDir);
  await generatePerQueryDataFiles(
    sanitizedOntology,
    fs,
    queriesDir,
  );
  await generateIndexFile(fs, outDir);
}
