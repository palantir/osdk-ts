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

import type * as gateway from "@osdk/gateway";
import * as path from "node:path";

export interface OntologyDefinition {
  rid: string;
  apiName: string;
  description?: string;
  objectTypes: { [key: string]: gateway.components.ObjectTypeV2 };
  actionTypes: gateway.components.ActionTypeV2[]; // These are equivalent to the generated types I checked in
  queryTypes: gateway.components.QueryTypeV2[]; // These ar
}

export type WriteFileFn = (path: string, contents: string) => Promise<void>;

export async function generateClientSdkVersionOneDotOne(
  ontology: OntologyDefinition,
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  fs: { writeFile: WriteFileFn },
  outDir: string,
) {
  const { rid, apiName, description, objectTypes, actionTypes, queryTypes } =
    ontology;

  const q = await fs.writeFile(
    path.join(outDir, "index.ts"),
    `// Path: ${path.join(outDir, "index.ts")}
    export const ontologyRid = "${rid}";
    `,
  );
}
