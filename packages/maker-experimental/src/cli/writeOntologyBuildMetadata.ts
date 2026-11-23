/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { randomUUID } from "node:crypto";
import * as fs from "node:fs/promises";
import * as path from "node:path";

import type {
  OntologyBlockDataV2,
  ValueTypeBlockData,
} from "@osdk/client.unstable";

import type { OntologyIrV2 } from "../api/OntologyIrV2.js";

export interface OntologyBuildMetadataSnapshot {
  schemaVersion: 1;
  importedOntology: OntologyBlockDataV2;
  transitiveImportedOntology: OntologyBlockDataV2;
  importedValueTypes: ValueTypeBlockData[];
}

export async function writeOntologyBuildMetadata(
  output: string,
  ontologyIr: OntologyIrV2,
): Promise<void> {
  const snapshot: OntologyBuildMetadataSnapshot = {
    schemaVersion: 1,
    importedOntology: ontologyIr.importedOntology,
    transitiveImportedOntology: ontologyIr.transitiveImportedOntology,
    importedValueTypes: ontologyIr.importedValueTypes,
  };
  const contents = JSON.stringify(snapshot, null, 2);
  await fs.mkdir(path.dirname(output), { recursive: true });
  const temporaryFile = `${output}.${randomUUID()}.tmp`;
  try {
    await fs.writeFile(temporaryFile, contents, { flag: "wx" });
    await fs.rename(temporaryFile, output);
  } finally {
    await fs.rm(temporaryFile, { force: true });
  }
}
