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
import { verifyOutdir } from "../util/verifyOutdir";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";
import { generateActions } from "./generateActions";
import { generateBackCompatDeprecatedExports } from "./generateBackCompatDeprecatedExports";
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
  packageType: "commonjs" | "module" = "commonjs",
) {
  const importExt = packageType === "module" ? ".js" : "";
  const objectsDir = path.join(outDir, "ontology", "objects");
  const actionsDir = path.join(outDir, "ontology", "actions");
  const queriesDir = path.join(outDir, "ontology", "queries");

  await verifyOutdir(outDir, fs);

  const sanitizedOntology = sanitizeMetadata(ontology);
  await generateFoundryClientFile(fs, outDir, importExt);
  await generateMetadataFile(sanitizedOntology, fs, outDir, importExt);
  await generateOntologyIndexFile(
    fs,
    path.join(outDir, "ontology"),
  );
  await generateObjectsInterfaceFile(
    sanitizedOntology,
    fs,
    objectsDir,
    importExt,
  );
  await generateObjectsInterfaceSupportFiles(
    sanitizedOntology,
    fs,
    path.join(objectsDir, "objects-api"),
    importExt,
  );
  await generatePerObjectInterfaceAndDataFiles(
    sanitizedOntology,
    fs,
    objectsDir,
    importExt,
  );
  await generateActions(sanitizedOntology, fs, actionsDir, importExt);
  await generatePerActionDataFiles(
    sanitizedOntology,
    fs,
    actionsDir,
    importExt,
  );
  await generateQueries(sanitizedOntology, fs, queriesDir, importExt);
  await generatePerQueryDataFiles(
    sanitizedOntology,
    fs,
    queriesDir,
    importExt,
  );
  await generateIndexFile(fs, outDir, importExt);
  await generateBackCompatDeprecatedExports(fs, outDir, importExt);
}
