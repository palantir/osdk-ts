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

import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import type { MinimalFs } from "../MinimalFs.js";
import { sanitizeMetadata } from "../shared/sanitizeMetadata.js";
import { verifyOutDir } from "../util/verifyOutDir.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateOntologyMetadataFile } from "./generateMetadata.js";
import { generatePerActionDataFiles } from "./generatePerActionDataFiles.js";
import { generatePerInterfaceDataFiles } from "./generatePerInterfaceDataFiles.js";
import { generatePerObjectDataFiles } from "./generatePerObjectDataFiles.js";
import { generatePerQueryDataFilesV2 } from "./generatePerQueryDataFiles.js";
import { generateRootIndexTsFile } from "./generateRootIndexTsFile.js";

export async function generateClientSdkVersionTwoPointZero(
  ontology: WireOntologyDefinition,
  userAgent: string,
  fs: MinimalFs,
  outDir: string,
  packageType: "module" | "commonjs" = "commonjs",
  externalObjects: Map<string, string> = new Map(),
  externalInterfaces: Map<string, string> = new Map(),
  externalSpts: Map<string, string> = new Map(),
) {
  const importExt = packageType === "module" ? ".js" : "";

  // Structurally, we need to have multiple ontologies read in
  // with one per package.

  await verifyOutDir(outDir, fs);

  const sanitizedOntology = sanitizeMetadata(ontology);

  await fs.mkdir(outDir, { recursive: true });
  const enhancedOntology = enhanceOntology({
    sanitized: sanitizedOntology,
    importExt,
    externalObjects,
    externalInterfaces,
    externalSpts,
  });

  const ctx: GenerateContext = {
    sanitizedOntology,
    ontology: enhancedOntology,
    importExt,
    fs,
    outDir,
  };

  await generateRootIndexTsFile(ctx);
  await generateOntologyMetadataFile(ctx, userAgent);
  await generatePerObjectDataFiles(ctx);
  await generatePerInterfaceDataFiles(ctx);
  await generatePerActionDataFiles(ctx);
  await generatePerQueryDataFilesV2(ctx, true);
}
