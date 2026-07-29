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

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";

export const ONTOLOGY_METADATA_JSON_PATH =
  "UNSTABLE_DO_NOT_USE/ontology-metadata.json";
export const ONTOLOGY_METADATA_DTS_PATH =
  "UNSTABLE_DO_NOT_USE/ontology-metadata.d.ts";

const typeFileContent =
  `import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";

declare const ontologyFullMetadata: OntologyFullMetadata;

export = ontologyFullMetadata;
`;

export async function generateOntologyMetadata(options: {
  metadata: OntologyFullMetadata;
  path: string;
  typePath: string;
}): Promise<void> {
  await mkdir(dirname(options.path), { recursive: true });
  await writeFile(options.path, JSON.stringify(options.metadata, null, 2));
  await mkdir(dirname(options.typePath), { recursive: true });
  await writeFile(options.typePath, typeFileContent);
}
