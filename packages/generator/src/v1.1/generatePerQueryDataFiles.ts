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

import path from "node:path";
import type { EnhancedQuery } from "../GenerateContext/EnhancedQuery.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import type { MinimalFs } from "../MinimalFs.js";
import { getObjectTypeApiNamesFromQuery } from "../shared/getObjectTypeApiNamesFromQuery.js";
import {
  wireQueryTypeV2ToSdkQueryDefinition,
} from "../shared/wireQueryTypeV2ToSdkQueryDefinition.js";
import { formatTs } from "../util/test/formatTs.js";

export async function generatePerQueryDataFiles(
  {
    fs,
    outDir: rootOutDir,
    ontology,
  }: Pick<
    GenerateContext,
    | "fs"
    | "outDir"
    | "ontology"
  >,
  v2: boolean,
) {
  const relOutDir = path.join(".", "ontology", "queries");
  const outDir = path.join(rootOutDir, "ontology", "queries");

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
        `export * from "${
          query.getImportPathRelTo(path.join(relOutDir, "index.ts"))
        }";`
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
  query: EnhancedQuery,
) {
  const objectTypes = getObjectTypeApiNamesFromQuery(query);

  await fs.writeFile(
    path.join(outDir, `${query.shortApiName}.ts`),
    await formatTs(`
      import { QueryDefinition } from "@osdk/api";

      export const ${query.shortApiName} = ${
      JSON.stringify(wireQueryTypeV2ToSdkQueryDefinition(query.og))
    } ${getQueryDefSatisfies(query.fullApiName, objectTypes)}`),
  );
}

export function getQueryDefSatisfies(
  apiName: string,
  objectTypes: string[],
): string {
  return `satisfies QueryDefinition<"${apiName}", ${
    objectTypes.length > 0
      ? objectTypes.map(apiNameObj => `"${apiNameObj}"`).join("|")
      : "never"
  }>;`;
}
