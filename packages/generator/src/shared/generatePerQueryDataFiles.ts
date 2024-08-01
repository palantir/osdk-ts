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
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import type { EnhancedQuery } from "../GenerateContext/EnhancedQuery.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";
import { formatTs } from "../util/test/formatTs.js";
import { getObjectDefIdentifier } from "./wireObjectTypeV2ToSdkObjectConst.js";
import { wireQueryDataTypeToQueryDataTypeDefinition } from "./wireQueryDataTypeToQueryDataTypeDefinition.js";
import {
  wireQueryParameterV2ToQueryParameterDefinition,
  wireQueryTypeV2ToSdkQueryDefinition,
  wireQueryTypeV2ToSdkQueryDefinitionNoParams,
} from "./wireQueryTypeV2ToSdkQueryDefinition.js";

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
      const relFilePath = path.join(relOutDir, `${query.shortApiName}.ts`);
      const objectTypes = getObjectTypesFromQuery(query);
      const importObjects = getObjectImports(
        ontology,
        objectTypes,
        relFilePath,
      );

      if (v2) {
        await fs.writeFile(
          path.join(outDir, `${query.shortApiName}.ts`),
          await formatTs(`
          import { QueryDefinition } from "@osdk/api";
          ${importObjects}
          export const ${query.shortApiName} = {
            ${
            stringify(
              deleteUndefineds(
                wireQueryTypeV2ToSdkQueryDefinitionNoParams(query.og),
              ),
            )
          },
              parameters: {${
            Object.entries(query.parameters).map((
              [name, parameter],
            ) => {
              return `${name} : {${
                stringify(deleteUndefineds(
                  wireQueryParameterV2ToQueryParameterDefinition(parameter),
                ))
              },
            ${
                parameter.dataType.type === "object"
                  || parameter.dataType.type === "objectSet"
                  ? getOsdkTargetTypeIfPresent(
                    parameter.dataType.objectTypeApiName!,
                    v2,
                  )
                  : ``
              }}`;
            })
          }},
              output: {${
            stringify(
              deleteUndefineds(
                wireQueryDataTypeToQueryDataTypeDefinition(query.output),
              ),
            )
          },
            ${
            query.output.type === "object" || query.output.type === "objectSet"
              ? getOsdkTargetTypeIfPresent(query.output.objectTypeApiName!, v2)
              : ``
          }}
          } ${getQueryDefSatisfies(query.fullApiName, objectTypes)}`),
        );
      } else {
        await fs.writeFile(
          path.join(outDir, `${query.shortApiName}.ts`),
          await formatTs(`
            import { QueryDefinition } from "@osdk/api";
    
            export const ${query.shortApiName} = ${
            JSON.stringify(wireQueryTypeV2ToSdkQueryDefinition(query.og))
          } ${getQueryDefSatisfies(query.fullApiName, objectTypes)}`),
        );
      }
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

function getObjectImports(
  enhancedOntology: EnhancedOntologyDefinition,
  objectTypes: string[],
  filePath: string,
) {
  let ret = "";

  for (const fqObjectApiName of objectTypes) {
    const obj = enhancedOntology.requireObjectType(fqObjectApiName);
    ret += `import { ${obj.shortApiName} } from "${
      obj.getImportPathRelTo(filePath)
    }";\n`;
  }

  return ret;
}

function getObjectTypesFromQuery(query: EnhancedQuery) {
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

function getQueryDefSatisfies(apiName: string, objectTypes: string[]): string {
  return `satisfies QueryDefinition<"${apiName}", ${
    objectTypes.length > 0
      ? objectTypes.map(apiNameObj => `"${apiNameObj}"`).join("|")
      : "never"
  }>;`;
}

function getOsdkTargetTypeIfPresent(
  objectTypeApiName: string,
  v2: boolean,
): string {
  return `
      __OsdkTargetType: ${
    getObjectDefIdentifier(
      objectTypeApiName,
      v2,
    )
  }
    `;
}
