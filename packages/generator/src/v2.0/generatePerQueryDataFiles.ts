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

import type {
  QueryDataTypeDefinition,
  QueryParameterDefinition,
} from "@osdk/api";
import type { QueryDataType, QueryTypeV2 } from "@osdk/foundry.ontologies";
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

  const typeRefContext = buildTypeRefContext(query.raw);
  const typeReferences = query.raw.typeReferences ?? {};
  const typeRefInterfaces = generateTypeReferenceInterfaces(
    ontology,
    typeReferences,
    typeRefContext,
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
          ${typeRefInterfaces}

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
                wrapExpand(
                  getQueryParamType(ontology, q, "Param", typeRefContext),
                ),
              ];
            },
          })
        }
            }`
        : ""
    }

            ${
      (() => {
        const outputDef = paramToDef({ dataType: query.output });
        const outputType = wrapExpand(
          getQueryParamType(ontology, outputDef, "Result", typeRefContext),
        );
        if (query.output.type === "struct") {
          return `export interface ReturnType ${outputType}`;
        }
        return `export type ReturnType = ${outputType};`;
      })()
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

function getQueryParamType(
  enhancedOntology: EnhancedOntologyDefinition,
  input: QueryDataTypeDefinition,
  type: "Param" | "Result",
  typeRefContext?: TypeRefContext,
  isMapKey = false,
): string {
  const recurse = (child: QueryDataTypeDefinition, mapKey = false) =>
    getQueryParamType(enhancedOntology, child, type, typeRefContext, mapKey);

  switch (input.type) {
    case "array":
      return `${type === "Param" ? "Readonly" : ""}Array<${
        recurse(input.array)
      }>`;

    case "date":
      return `Query${type}.PrimitiveType<${JSON.stringify("datetime")}>`;

    case "attachment":
    case "boolean":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
    case "timestamp":
      return `Query${type}.PrimitiveType<${JSON.stringify(input.type)}>`;

    case "mediaReference":
      return type === "Param"
        ? `Query${type}.PrimitiveType<${JSON.stringify(input.type)}>`
        : `Query${type}.MediaType`;

    case "struct":
      return `{
            ${
        stringify(input.struct, {
          "*": (p, formatter, apiName) => [
            `\n${type === "Param" ? "readonly " : ""}"${apiName}"${
              p.nullable ? "?" : ""
            }`,
            recurse(p),
          ],
        })
      }
            }`;

    case "twoDimensionalAggregation":
      return `Query${type}.TwoDimensionalAggregationType<${
        input.twoDimensionalAggregation.keyType === "range"
          ? `Query${type}.RangeKey<"${input.twoDimensionalAggregation.keySubtype}">`
          : `"${input.twoDimensionalAggregation.keyType}"`
      }, "${input.twoDimensionalAggregation.valueType}">`;

    case "threeDimensionalAggregation":
      return `Query${type}.ThreeDimensionalAggregationType<${
        input.threeDimensionalAggregation.keyType === "range"
          ? `Query${type}.RangeKey<"${input.threeDimensionalAggregation.keySubtype}">`
          : `"${input.threeDimensionalAggregation.keyType}"`
      },${
        input.threeDimensionalAggregation.valueType.keyType === "range"
          ? `Query${type}.RangeKey<"${input.threeDimensionalAggregation.valueType.keySubtype}">`
          : `"${input.threeDimensionalAggregation.valueType.keyType}"`
      },
        "${input.threeDimensionalAggregation.valueType.valueType}">`;

    case "object":
      if (isMapKey) {
        return `ObjectSpecifier<${
          enhancedOntology.requireObjectType(input.object)
            .getImportedDefinitionIdentifier(true)
        }>`;
      }
      return `Query${type}.ObjectType<${
        enhancedOntology.requireObjectType(input.object)
          .getImportedDefinitionIdentifier(true)
      }>`;

    case "interface":
      return `Query${type}.InterfaceType<${
        enhancedOntology.requireInterfaceType(input.interface)
          .getImportedDefinitionIdentifier(true)
      }>`;

    case "objectSet":
      return `Query${type}.ObjectSetType<${
        enhancedOntology.requireObjectType(input.objectSet)
          .getImportedDefinitionIdentifier(true)
      }>`;

    case "interfaceObjectSet":
      return `Query${type}.ObjectSetType<${
        enhancedOntology.requireInterfaceType(input.objectSet)
          .getImportedDefinitionIdentifier(true)
      }>`;

    case "set":
      return `${type === "Param" ? "Readonly" : ""}Set<${recurse(input.set)}>`;

    case "union":
      return input.union.map((u) => recurse(u)).join(" | ");

    case "map":
      return `Partial<Record<${recurse(input.keyType, true)}, ${
        recurse(input.valueType)
      }>>`;

    case "typeReference": {
      const sanitizedName = typeRefContext?.typeIdToSanitizedName.get(
        input.typeId,
      );
      if (!sanitizedName) {
        return `unknown /* typeRef: ${input.typeId} */`;
      }
      const suffix = type === "Result"
          && typeRefContext?.paramTypeIds.has(input.typeId)
        ? "_Output"
        : "";
      return `CustomTypes.${sanitizedName}${suffix}`;
    }
  }
}

function wrapExpand(typeStr: string): string {
  return typeStr.replace(
    /CustomTypes\.(\$[a-zA-Z0-9_]+)/g,
    "CustomTypes.Expand<CustomTypes.$1>",
  );
}

interface TypeRefContext {
  paramTypeIds: Set<string>;
  outputTypeIds: Set<string>;
  typeIdToSanitizedName: Map<string, string>;
}

function sanitizeTypeId(typeId: string): string {
  return `$${typeId.replace(/-/g, "_")}`;
}

function collectTypeIdsFromDataType(
  dataType: QueryDataType,
  collected: Set<string>,
  typeReferences: Record<string, QueryDataType>,
): void {
  if (dataType.type === "typeReference") {
    if (collected.has(dataType.typeId)) {
      return;
    }
    collected.add(dataType.typeId);

    const referencedType = typeReferences[dataType.typeId];
    if (referencedType) {
      collectTypeIdsFromDataType(referencedType, collected, typeReferences);
    }
    return;
  }

  switch (dataType.type) {
    case "array":
    case "set":
      collectTypeIdsFromDataType(
        dataType.subType,
        collected,
        typeReferences,
      );
      break;
    case "struct":
      for (const field of dataType.fields) {
        collectTypeIdsFromDataType(
          field.fieldType,
          collected,
          typeReferences,
        );
      }
      break;
    case "union":
      for (const unionType of dataType.unionTypes) {
        collectTypeIdsFromDataType(unionType, collected, typeReferences);
      }
      break;
    case "entrySet":
      collectTypeIdsFromDataType(
        dataType.keyType,
        collected,
        typeReferences,
      );
      collectTypeIdsFromDataType(
        dataType.valueType,
        collected,
        typeReferences,
      );
      break;
  }
}

function buildTypeRefContext(query: QueryTypeV2): TypeRefContext {
  const typeReferences = query.typeReferences ?? {};

  const paramTypeIds = new Set<string>();
  for (const param of Object.values(query.parameters)) {
    collectTypeIdsFromDataType(param.dataType, paramTypeIds, typeReferences);
  }

  const outputTypeIds = new Set<string>();
  collectTypeIdsFromDataType(query.output, outputTypeIds, typeReferences);

  const typeIdToSanitizedName = new Map<string, string>();
  for (const typeId of new Set([...paramTypeIds, ...outputTypeIds])) {
    typeIdToSanitizedName.set(typeId, sanitizeTypeId(typeId));
  }

  return {
    paramTypeIds,
    outputTypeIds,
    typeIdToSanitizedName,
  };
}

function generateTypeReferenceInterfaces(
  ontology: EnhancedOntologyDefinition,
  typeReferences: Record<string, QueryDataType>,
  context: TypeRefContext,
): string {
  const interfaces: string[] = [];

  for (const typeId of context.paramTypeIds) {
    const dataType = typeReferences[typeId];
    if (!dataType) continue;

    const sanitizedName = context.typeIdToSanitizedName.get(typeId)!;
    const converted = wireQueryDataTypeToQueryDataTypeDefinition(dataType);
    const typeString = getQueryParamType(ontology, converted, "Param", context);

    if (converted.type === "struct") {
      interfaces.push(
        `export interface ${sanitizedName} ${typeString}`,
      );
    }
  }

  for (const typeId of context.outputTypeIds) {
    const dataType = typeReferences[typeId];
    if (!dataType) continue;

    const sanitizedName = context.typeIdToSanitizedName.get(typeId)!;
    const suffix = context.paramTypeIds.has(typeId) ? "_Output" : "";
    const converted = wireQueryDataTypeToQueryDataTypeDefinition(dataType);
    const typeString = getQueryParamType(
      ontology,
      converted,
      "Result",
      context,
    );

    if (converted.type === "struct") {
      interfaces.push(
        `export interface ${sanitizedName}${suffix} ${typeString}`,
      );
    }
  }

  if (interfaces.length === 0) {
    return "";
  }

  return `namespace CustomTypes {
    export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

    ${interfaces.join("\n\n")}
  }`;
}
