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

import type { QueryTypeV2 } from "@osdk/gateway/types";
import path from "node:path";
import type { MinimalFs } from "../MinimalFs.js";
import { getObjectTypeApiNamesFromQuery } from "../shared/getObjectTypeApiNamesFromQuery.js";
import {
  wireQueryTypeV2ToSdkQueryDefinition,
} from "../shared/wireQueryTypeV2ToSdkQueryDefinition.js";
import { formatTs } from "../util/test/formatTs.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";

export async function generatePerQueryDataFiles(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  importExt: string = "",
  v2: boolean = false,
) {
  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(
    Object.values(ontology.queryTypes).map(async query => {
      await generateV1QueryFile(fs, outDir, query);
    }),
  );

  await fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(`
  ${
      Object.values(ontology.queryTypes).map(query =>
        `export * from "./${query.apiName}${importExt}";`
      )
        .join("\n")
    }
    ${Object.keys(ontology.queryTypes).length === 0 ? "export {};" : ""}
  `),
  );
}

async function generateV1QueryFile(
  fs: MinimalFs,
  outDir: string,
  query: QueryTypeV2,
) {
  const objectTypes = getObjectTypeApiNamesFromQuery(query);
  await fs.writeFile(
    path.join(outDir, `${query.apiName}.ts`),
    await formatTs(`
            import { QueryDefinition } from "@osdk/api";
    
            export const ${query.apiName} = ${
      JSON.stringify(wireQueryTypeV2ToSdkQueryDefinition(query))
    } ${getQueryDefSatisfies(query.apiName, objectTypes)}`),
  );
}

function getQueryDefSatisfies(apiName: string, objectTypes: string[]): string {
  return `satisfies QueryDefinition<"${apiName}", ${
    objectTypes.length > 0
      ? objectTypes.map(apiNameObj => `"${apiNameObj}"`).join("|")
      : "never"
  }>;`;
}
