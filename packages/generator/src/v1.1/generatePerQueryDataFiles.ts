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

import type { QueryDataType, QueryTypeV2 } from "@osdk/gateway/types";
import path from "node:path";
import type { MinimalFs } from "../MinimalFs.js";
import { wireQueryTypeV2ToSdkQueryDefinition } from "../shared/wireQueryTypeV2ToSdkQueryDefinition.js";
import { formatTs } from "../util/test/formatTs.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";

export async function generatePerQueryDataFiles(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  importExt: string = "",
) {
  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(
    Object.values(ontology.queryTypes).map(async query => {
      const objectTypes = getObjectTypesFromQuery(query);
      await fs.writeFile(
        path.join(outDir, `${query.apiName}.ts`),
        await formatTs(`
        import { QueryDefinition } from "@osdk/api";

        export const ${query.apiName} = ${
          JSON.stringify(wireQueryTypeV2ToSdkQueryDefinition(query))
        } satisfies QueryDefinition<"${query.apiName}", ${
          objectTypes.length > 0
            ? objectTypes.map(apiName => `"${apiName}"`).join("|")
            : "never"
        }>;`),
      );
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
  `),
  );
}

function getObjectTypesFromQuery(query: QueryTypeV2) {
  const types = new Set<string>();

  for (const { dataType } of Object.values(query.parameters)) {
    getObjectTypesFromDataType(dataType, types);
  }
  getObjectTypesFromDataType(query.output, types);

  return Array.from(types);
}

function getObjectTypesFromDataType(
  dataType: QueryDataType,
  types: Set<string>,
) {
  switch (dataType.type) {
    case "array":
    case "set":
      getObjectTypesFromDataType(dataType.subType, types);
      return;

    case "object":
      types.add(dataType.objectTypeApiName);
      return;

    case "objectSet":
      types.add(dataType.objectTypeApiName!);
      return;

    case "struct":
      for (const prop of Object.values(dataType.fields)) {
        getObjectTypesFromDataType(prop.fieldType, types);
      }
      return;

    case "union":
      for (const type of dataType.unionTypes) {
        getObjectTypesFromDataType(type, types);
      }
      return;

    case "attachment":
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "null":
    case "string":
    case "threeDimensionalAggregation":
    case "timestamp":
    case "twoDimensionalAggregation":
    case "unsupported":
      /* complete no-op */
      return;

    default:
      const _: never = dataType;
      throw new Error(
        `Cannot find object types from unsupported QueryDataType ${
          (dataType as any).type
        }`,
      );
  }
}
