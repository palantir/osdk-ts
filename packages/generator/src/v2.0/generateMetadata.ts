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
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { formatTs } from "../util/test/formatTs.js";

// BEGIN: THIS IS GENERATED CODE. DO NOT EDIT.
const ExpectedOsdkVersion = "2.0.13";
// END: THIS IS GENERATED CODE. DO NOT EDIT.

export async function generateOntologyMetadataFile(
  { fs, outDir, ontology, ontologyApiNamespace }: GenerateContext,
  userAgent: string,
) {
  fs.writeFile(
    path.join(outDir, "OntologyMetadata.ts"),
    await formatTs(
      `
      export type $ExpectedClientVersion = "${ExpectedOsdkVersion}";
      export const $osdkMetadata = { extraUserAgent: "${userAgent}" };
      ${
        ontologyApiNamespace == null
          ? `
        export const $ontologyRid = "${ontology.ontology.rid}";
        `
          : ""
      }
      `,
    ),
  );
}
