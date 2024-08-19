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
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import type { MinimalFs } from "../MinimalFs.js";
import { generatePerActionDataFiles } from "../shared/generatePerActionDataFiles.js";
import { sanitizeMetadata } from "../shared/sanitizeMetadata.js";
import { verifyOutDir } from "../util/verifyOutDir.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateActions } from "./generateActions.js";
import { generateBackCompatDeprecatedExports } from "./generateBackCompatDeprecatedExports.js";
import { generateBatchActions } from "./generateBatchActions.js";
import { generateBulkActions } from "./generateBulkActions.js";
import { generateFoundryClientFile } from "./generateFoundryClientFile.js";
import { generateIndexFile } from "./generateIndexFile.js";
import { generateMetadataFile } from "./generateMetadataFile.js";
import { generateObjectsInterfaceFile } from "./generateObjectsInterfaceFile.js";
import { generateObjectsInterfaceSupportFiles } from "./generateObjectsInterfaceSupportFiles.js";
import { generateOntologyIndexFile } from "./generateOntologyIndexFile.js";
import { generatePerObjectInterfaceAndDataFiles } from "./generatePerObjectInterfaceAndDataFiles.js";
import { generatePerQueryDataFiles } from "./generatePerQueryDataFiles.js";
import { generateQueries } from "./generateQueries.js";

export async function generateClientSdkVersionOneDotOne(
  ontology: WireOntologyDefinition,
  userAgent: string,
  fs: MinimalFs,
  outDir: string,
  packageType: "commonjs" | "module" = "commonjs",
) {
  const importExt = packageType === "module" ? ".js" : "";
  const objectsDir = path.join(outDir, "ontology", "objects");
  const actionsDir = path.join(outDir, "ontology", "actions");
  const queriesDir = path.join(outDir, "ontology", "queries");

  await verifyOutDir(outDir, fs);
  await fs.mkdir(outDir, { recursive: true });

  const sanitizedOntology = sanitizeMetadata(ontology);
  const enhancedOntology = enhanceOntology(
    sanitizedOntology,
    undefined,
    new Map(),
    importExt,
  );
  await generateFoundryClientFile(fs, outDir, importExt);
  await generateMetadataFile(
    sanitizedOntology,
    userAgent,
    fs,
    outDir,
    importExt,
  );
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
    enhancedOntology,
    fs,
    objectsDir,
    importExt,
  );

  const common = {
    sanitizedOntology,
    fs,
    outDir,
    ontology: enhancedOntology,
  };

  await generateActions(sanitizedOntology, fs, actionsDir, importExt);
  await generateBatchActions(sanitizedOntology, fs, actionsDir, importExt);
  await generateBulkActions(sanitizedOntology, fs, actionsDir, importExt);
  await generatePerActionDataFiles(common, false);
  await generateQueries(sanitizedOntology, fs, queriesDir, importExt);
  await generatePerQueryDataFiles(common, false);
  await generateIndexFile(fs, outDir, importExt);
  await generateBackCompatDeprecatedExports(fs, outDir, importExt);
}
