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

import path from "path";
import type { MinimalFs } from "../MinimalFs";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";

// BEGIN: THIS IS GENERATED CODE. DO NOT EDIT.
const ExpectedOsdkVersion = "0.18.0";
// END: THIS IS GENERATED CODE. DO NOT EDIT.

export async function generateOntologyMetadataFile(
  ontology: WireOntologyDefinition,
  userAgent: string,
  fs: MinimalFs,
  outDir: string,
) {
  fs.writeFile(
    path.join(outDir, "OntologyMetadata.ts"),
    await formatTs(
      `
      import { OntologyMetadata as OM } from "@osdk/api";

      export type $ExpectedClientVersion = "${ExpectedOsdkVersion}";
      export const $osdkMetadata = { extraUserAgent: "${userAgent}" };

      export interface OntologyMetadata extends OM<$ExpectedClientVersion> {};

      export const OntologyMetadata: OntologyMetadata = {
        expectsClientVersion: "${ExpectedOsdkVersion}",
        ontologyRid: "${ontology.ontology.rid}",
        ontologyApiName: "${ontology.ontology.apiName}",
        userAgent: "${userAgent}",
      };
      `,
    ),
  );
}
