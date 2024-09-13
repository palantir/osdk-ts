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

import type { QueryParameterDefinition } from "@osdk/api";
import type { QueryDataType } from "@osdk/internal.foundry.core";
import path from "node:path";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import type { EnhancedQuery } from "../GenerateContext/EnhancedQuery.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import type { MinimalFs } from "../MinimalFs.js";
import { getObjectTypeApiNamesFromQuery } from "../shared/getObjectTypeApiNamesFromQuery.js";
import { wireQueryDataTypeToQueryDataTypeDefinition } from "../shared/wireQueryDataTypeToQueryDataTypeDefinition.js";
import {
  wireQueryParameterV2ToQueryParameterDefinition as paramToDef,
  wireQueryTypeV2ToSdkQueryDefinitionNoParams,
} from "../shared/wireQueryTypeV2ToSdkQueryDefinition.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";
import { formatTs } from "../util/test/formatTs.js";
import { getDescriptionIfPresent } from "./getDescriptionIfPresent.js";

export async function generatePerQueryDataFilesV2(
  {
    fs,
    outDir: rootOutDir,
    ontology,
    importExt = "",
  }: Pick<
    GenerateContext,
    | "fs"
    | "outDir"
    | "importExt"
    | "ontology"
  >,
  v2: boolean,
) {
  const relOutDir = path.join(".", "ontology", "queries");
  const outDir = path.join(rootOutDir, "ontology", "queries");
  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(
    Object.values(ontology.queryTypes).map(async query => {
      await generateV2QueryFile(
        fs,
        outDir,
        relOutDir,
        query,
        importExt,
        ontology,
      );
    }),
  );

  const indexFilePath = `${outDir}.ts`;
  await fs.writeFile(
    indexFilePath,
    await formatTs(`
    ${
      Object.values(ontology.queryTypes).map(query =>
        `export * from "${query.getImportPathRelTo(relOutDir)}";`
      )
        .join("\n")
    }
      ${Object.keys(ontology.queryTypes).length === 0 ? "export {};" : ""}
    `),
  );
}

async function generateV2QueryFile(
  fs: MinimalFs,
  outDir: string,
  relOutDir: string,
  query: EnhancedQuery,
  importExt: string,
  ontology: EnhancedOntologyDefinition,
) {
  const relFilePath = path.join(relOutDir, `${query.shortApiName}.ts`);
  const objectTypes = getObjectTypeApiNamesFromQuery(query);
  const importObjects = getObjectImports(
    ontology,
    objectTypes,
    relFilePath,
  );

  const baseProps = deleteUndefineds(
    wireQueryTypeV2ToSdkQueryDefinitionNoParams(query.raw),
  );

  const outputBase = deleteUndefineds(
    wireQueryDataTypeToQueryDataTypeDefinition(query.output),
  );

  const referencedObjectTypes = objectTypes.length > 0
    ? objectTypes.map(apiNameObj => `"${apiNameObj}"`).join("|")
    : "never";

  await fs.writeFile(
    path.join(outDir, `${query.shortApiName}.ts`),
    await formatTs(`
        import type { QueryDefinition , VersionBound} from "@osdk/api";
        import type { QueryParam, QueryResult } from "@osdk/client.api";
        import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
        ${importObjects}

        export namespace ${query.shortApiName} {
          export interface Signature {
            ${getDescriptionIfPresent(query.description)}
            (${
      Object.keys(query.parameters).length > 0
        ? `query: ${query.paramsIdentifier}`
        : ""
    }): Promise<${
      getQueryParamType(
        ontology,
        paramToDef({ dataType: query.output }),
        "Result",
      )
    }>
          }

        ${
      Object.keys(query.parameters).length > 0
        ? `
            export interface Parameters {
            ${
          stringify(query.parameters, {
            "*": (parameter, formatter, apiName) => {
              const q = paramToDef(parameter);
              return [
                `
                ${
                  queryParamJsDoc(paramToDef(parameter), { apiName })
                }readonly "${apiName}"${q.nullable ? "?" : ""}`,
                `${getQueryParamType(ontology, q, "Param")}`,
              ];
            },
          })
        }
            }
    
            `
        : ""
    }

        export interface Definition extends QueryDefinition<
          "${query.fullApiName}", 
          ${referencedObjectTypes},
          ${query.shortApiName}.Signature
        >, VersionBound<$ExpectedClientVersion>{
            ${stringify(baseProps)},
            parameters: {
            ${parameterDefsForType(ontology, query)}
            };
            output: {
            ${stringify(outputBase)},
            ${getLineFor__OsdkTargetType(ontology, query.output)}
            };
        }

        }

        /** @deprecated use \`${query.shortApiName}.Signature\' instead */
        export type ${query.shortApiName} = ${query.shortApiName}.Signature;





        export const ${query.shortApiName}: ${query.definitionIdentifier} = {
            ${stringify(baseProps)},
            parameters: {
            ${parametersForConst(query)}
            },
            output: {
            ${stringify(outputBase)},
            }
        };
        `),
  );
}

function parametersForConst(query: EnhancedQuery) {
  return stringify(query.parameters, {
    "*": (parameter, formatter) =>
      formatter(deleteUndefineds(paramToDef(parameter))),
  });
}

function parameterDefsForType(
  ontology: EnhancedOntologyDefinition,
  query: EnhancedQuery,
) {
  return stringify(query.parameters, {
    "*": (parameter, valueFormatter, apiName) => [
      `${queryParamJsDoc(paramToDef(parameter), { apiName })} ${apiName}`,
      ` {
          ${stringify(deleteUndefineds(paramToDef(parameter)))},
          ${getLineFor__OsdkTargetType(ontology, parameter.dataType)}
        }`,
    ],
  });
}

function getLineFor__OsdkTargetType(
  ontology: EnhancedOntologyDefinition,
  qdt: QueryDataType,
) {
  if (qdt.type === "object" || qdt.type === "objectSet") {
    return `__OsdkTargetType?: ${
      ontology.requireObjectType(
        qdt.objectTypeApiName!,
      ).getImportedDefinitionIdentifier(true)
    }`;
  }
  return "";
}

export function queryParamJsDoc(
  param: QueryParameterDefinition<any>,
  { apiName }: { apiName: string },
) {
  let ret = `/**\n`;

  if (param.description) {
    if (param.description) {
      ret += ` *   description: ${param.description}\n`;
    }
  } else {
    ret += ` * (no ontology metadata)\n`;
  }

  ret += ` */\n`;
  return ret;
}

function getObjectImports(
  enhancedOntology: EnhancedOntologyDefinition,
  objectTypes: string[],
  filePath: string,
) {
  let ret = "";

  for (const fqObjectApiName of objectTypes) {
    const obj = enhancedOntology.requireObjectType(fqObjectApiName);
    ret += `import type { ${obj.getDefinitionIdentifier(true)} as ${
      obj.getImportedDefinitionIdentifier(true)
    } } from "${obj.getImportPathRelTo(filePath)}";\n`;
  }

  return ret;
}

export function getQueryParamType(
  enhancedOntology: EnhancedOntologyDefinition,
  input: QueryParameterDefinition<any, any>,
  type: "Param" | "Result",
): string {
  let inner = `unknown /* ${
    (input as QueryParameterDefinition<any, any>).type
  } */`;

  switch (input.type) {
    case "date":
      inner = `Query${type}.PrimitiveType<${JSON.stringify("datetime")}>`;
      break;

    case "attachment":
    case "boolean":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
    case "struct":
    case "threeDimensionalAggregation":
    case "timestamp":
    case "twoDimensionalAggregation":
      inner = `Query${type}.PrimitiveType<${JSON.stringify(input.type)}>`;
      break;

    case "object":
      inner = `Query${type}.ObjectType<${
        enhancedOntology.requireObjectType(input.object)
          .getImportedDefinitionIdentifier(true)
      }>`;
      break;

    case "objectSet":
      inner = `Query${type}.ObjectSetType<${
        enhancedOntology.requireObjectType(input.objectSet)
          .getImportedDefinitionIdentifier(true)
      }>`;
      break;

    case "set":
      inner = `${type === "Param" ? "Readonly" : ""}Set<${
        getQueryParamType(enhancedOntology, input.set, type)
      }>`;
      break;

    case "union":
      inner = input.union.map((u) =>
        getQueryParamType(enhancedOntology, u, type)
      ).join(" | ");
      break;
  }

  if (input.multiplicity && type === "Param") {
    return `ReadonlyArray<${inner}>`;
  } else if (input.multiplicity) {
    return `Array<${inner}>`;
  }
  return inner;
}
