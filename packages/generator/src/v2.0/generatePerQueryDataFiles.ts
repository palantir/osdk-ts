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
import type { QueryDataType } from "@osdk/foundry.ontologies";
import {
  wireQueryDataTypeToQueryDataTypeDefinition,
  wireQueryParameterV2ToQueryParameterDefinition as paramToDef,
  wireQueryTypeV2ToSdkQueryDefinitionNoParams,
} from "@osdk/generator-converters";
import path from "node:path";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import type { EnhancedQuery } from "../GenerateContext/EnhancedQuery.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import type { MinimalFs } from "../MinimalFs.js";
import { getInterfaceTypeApiNamesFromQuery } from "../shared/getInterfaceTypeApiNamesFromQuery.js";
import { getObjectImports } from "../shared/getObjectImports.js";
import { getObjectTypeApiNamesFromQuery } from "../shared/getObjectTypeApiNamesFromQuery.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";
import { formatTs } from "../util/test/formatTs.js";
import { getDescriptionIfPresent } from "./getDescriptionIfPresent.js";

export async function generatePerQueryDataFilesV2(
  {
    fs,
    outDir: rootOutDir,
    ontology,
    fixedVersionQueryTypes,
    importExt = "",
    forInternalUse = false,
  }: Pick<
    GenerateContext,
    | "fs"
    | "outDir"
    | "importExt"
    | "ontology"
    | "forInternalUse"
    | "fixedVersionQueryTypes"
  >,
  v2: boolean,
): Promise<void> {
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
        forInternalUse,
        fixedVersionQueryTypes,
      );
    }),
  );

  const indexFilePath = `${outDir}.ts`;
  await fs.writeFile(
    indexFilePath,
    await formatTs(`
    ${
      Object.values(ontology.queryTypes).map(query =>
        `export {${query.shortApiName}} from "${
          query.getImportPathRelTo(relOutDir)
        }";`
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
  forInternalUse: boolean,
  fixedVersionQueryTypes: string[],
) {
  const relFilePath = path.join(relOutDir, `${query.shortApiName}.ts`);
  const objectTypes = getObjectTypeApiNamesFromQuery(query);
  const interfaceTypes = getInterfaceTypeApiNamesFromQuery(query);
  const interfaceAndObjectTypes = new Set(
    [
      ...objectTypes.map(o => ontology.requireObjectType(o)),
      ...interfaceTypes.map(o => ontology.requireInterfaceType(o)),
    ],
  );

  const importObjects = getObjectImports(
    interfaceAndObjectTypes,
    "",
    relFilePath,
    true,
  );

  const baseProps = deleteUndefineds(
    wireQueryTypeV2ToSdkQueryDefinitionNoParams(query.raw),
  );

  const outputBase = deleteUndefineds(
    wireQueryDataTypeToQueryDataTypeDefinition(query.output),
  );

  const isUsingFixedVersion = fixedVersionQueryTypes.includes(
    query.fullApiName,
  );

  await fs.writeFile(
    path.join(outDir, `${query.shortApiName}.ts`),
    await formatTs(`
        import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound} from "${
      forInternalUse ? "@osdk/api" : "@osdk/client"
    }";
        import type { $ExpectedClientVersion } from "../../OntologyMetadata${importExt}";
        import { $osdkMetadata} from "../../OntologyMetadata${importExt}";
        ${importObjects}

        export namespace ${query.shortApiName} {
          export interface Signature {
            ${getDescriptionIfPresent(query.description)}
            (${
      Object.keys(query.parameters).length > 0
        ? `query: ${query.paramsIdentifier}`
        : ""
    }): Promise<${query.shortApiName}.ReturnType>
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
                getQueryParamType(ontology, q, "Param"),
              ];
            },
          })
        }
            }`
        : ""
    }

            ${
      query.output.type === "struct"
        ? `
            export interface ReturnType 
            ${
          getQueryParamType(
            ontology,
            paramToDef({ dataType: query.output }),
            "Result",
          )
        }
        `
        : `
        export type ReturnType = ${
          getQueryParamType(
            ontology,
            paramToDef({ dataType: query.output }),
            "Result",
          )
        }
          `
    }
      }

        ${getDescriptionIfPresent(query.description)}
        export interface ${query.shortApiName} extends QueryDefinition<
          ${query.shortApiName}.Signature
        >, VersionBound<$ExpectedClientVersion>{
         __DefinitionMetadata?: {
             ${stringify(baseProps)}
             isFixedVersion: ${isUsingFixedVersion};
            parameters: {
            ${parameterDefsForType(ontology, query)}
            };
            output: {
            ${stringify(outputBase)},
            ${getLineFor__OsdkTargetType(ontology, query.output)}
            };
            signature: ${query.shortApiName}.Signature;
        }, 
        ${
      stringify(baseProps, {
        "description": () => undefined,
        "displayName": () => undefined,
        "rid": () => undefined,
      })
    }, 
          osdkMetadata: typeof $osdkMetadata;
              }

        ${getDescriptionIfPresent(query.description)}
        export const ${query.shortApiName}: ${query.definitionIdentifier} = {
            ${
      stringify(baseProps, {
        "description": () => undefined,
        "displayName": () => undefined,
        "rid": () => undefined,
      })
    },
    isFixedVersion: ${isUsingFixedVersion},
    osdkMetadata: $osdkMetadata
        };
        `),
  );
}

function parameterDefsForType(
  ontology: EnhancedOntologyDefinition,
  query: EnhancedQuery,
) {
  return stringify(query.parameters, {
    "*": (parameter, valueFormatter, apiName) => [
      `${queryParamJsDoc(paramToDef(parameter), { apiName })} "${apiName}"`,
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
): string {
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

export function getQueryParamType(
  enhancedOntology: EnhancedOntologyDefinition,
  input: QueryParameterDefinition,
  type: "Param" | "Result",
  isMapKey = false,
): string {
  let paramType = `unknown /* ${input.type} */`;

  switch (input.type) {
    case "array":
      paramType = `${type === "Param" ? "Readonly" : ""}Array<${
        getQueryParamType(enhancedOntology, input.array, type)
      }>`;
      break;
    case "date":
      paramType = `Query${type}.PrimitiveType<${JSON.stringify("datetime")}>`;
      break;

    case "attachment":
    case "boolean":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
    case "timestamp":
      paramType = `Query${type}.PrimitiveType<${JSON.stringify(input.type)}>`;
      break;
    case "struct":
      paramType = `{
            ${
        stringify(input.struct, {
          "*": (p, formatter, apiName) => {
            return [
              `
                ${type === "Param" ? "readonly " : ""}"${apiName}"${
                p.nullable ? "?" : ""
              }`,
              getQueryParamType(enhancedOntology, p, type),
            ];
          },
        })
      }
            }`;
      break;
    case "twoDimensionalAggregation":
      paramType = `Query${type}.TwoDimensionalAggregationType<${
        input.twoDimensionalAggregation.keyType === "range"
          ? `Query${type}.RangeKey<"${input.twoDimensionalAggregation.keySubtype}">`
          : `"${input.twoDimensionalAggregation.keyType}"`
      }, "${input.twoDimensionalAggregation.valueType}">`;
      break;

    case "threeDimensionalAggregation":
      paramType = `Query${type}.ThreeDimensionalAggregationType<${
        input.threeDimensionalAggregation.keyType === "range"
          ? `Query${type}.RangeKey<"${input.threeDimensionalAggregation.keySubtype}">`
          : `"${input.threeDimensionalAggregation.keyType}"`
      },${
        input.threeDimensionalAggregation.valueType.keyType === "range"
          ? `Query${type}.RangeKey<"${input.threeDimensionalAggregation.valueType.keySubtype}">`
          : `"${input.threeDimensionalAggregation.valueType.keyType}"`
      }, 
        "${input.threeDimensionalAggregation.valueType.valueType}">`;
      break;
    case "object":
      if (isMapKey) {
        paramType = `ObjectSpecifier<${
          enhancedOntology.requireObjectType(input.object)
            .getImportedDefinitionIdentifier(true)
        }>`;
        break;
      }
      paramType = `Query${type}.ObjectType<${
        enhancedOntology.requireObjectType(input.object)
          .getImportedDefinitionIdentifier(true)
      }>`;
      break;
    case "interface":
      paramType = `Query${type}.InterfaceType<${
        enhancedOntology.requireInterfaceType(input.interface)
          .getImportedDefinitionIdentifier(true)
      }>`;
      break;

    case "objectSet":
      paramType = `Query${type}.ObjectSetType<${
        enhancedOntology.requireObjectType(input.objectSet)
          .getImportedDefinitionIdentifier(true)
      }>`;
      break;

    case "interfaceObjectSet":
      paramType = `Query${type}.ObjectSetType<${
        enhancedOntology.requireInterfaceType(input.objectSet)
          .getImportedDefinitionIdentifier(true)
      }>`;
      break;

    case "set":
      paramType = `${type === "Param" ? "Readonly" : ""}Set<${
        getQueryParamType(enhancedOntology, input.set, type)
      }>`;
      break;

    case "union":
      paramType = input.union.map((u) =>
        getQueryParamType(enhancedOntology, u, type)
      ).join(" | ");
      break;

    case "map":
      paramType = `Partial<Record<${
        getQueryParamType(enhancedOntology, input.keyType, type, true)
      }, ${getQueryParamType(enhancedOntology, input.valueType, type)}>>`;
  }

  return paramType;
}
