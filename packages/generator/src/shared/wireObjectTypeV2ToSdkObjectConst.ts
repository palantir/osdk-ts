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

import type { ObjectTypeFullMetadata } from "@osdk/gateway/types";
import { wireObjectTypeFullMetadataToSdkObjectTypeDefinition } from "@osdk/generator-converters";
import type { EnhancedObjectType } from "../GenerateContext/EnhancedObjectType.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";
import { propertyJsdoc } from "./propertyJsdoc.js";

export function getObjectDefIdentifier(name: string, v2: boolean) {
  return v2 ? name : `${name}Def`;
}

/** @internal */
export function wireObjectTypeV2ToSdkObjectConst(
  object: ObjectTypeFullMetadata,
  { ontology }: Pick<
    GenerateContext,
    "ontology"
  >,
  currentFilePath: string,
  v2: boolean = false,
) {
  const enhancedObject = ontology.requireObjectType(object.objectType.apiName);
  const uniqueLinkTargetTypes = new Set(
    object.linkTypes.map(a => ontology.requireObjectType(a.objectTypeApiName)),
  );

  const definition = deleteUndefineds(
    wireObjectTypeFullMetadataToSdkObjectTypeDefinition(
      enhancedObject.og,
      v2,
    ),
  );

  const objectDefIdentifier = enhancedObject.getObjectDefIdentifier(v2);

  function getV1Types() {
    return `
      export interface ${objectDefIdentifier} extends ObjectTypeDefinition<"${enhancedObject.fullApiName}", ${enhancedObject.uniqueImportName}> {
        ${
      stringify(definition, {
        osdkMetadata: () => undefined, // not used in v1
        links: (_value) =>
          `{
          ${
            stringify(definition.links, {
              "*": (definition) =>
                `ObjectTypeLinkDefinition<${
                  ontology
                    .objectTypes[definition.targetType].getObjectDefIdentifier(
                      v2,
                    )
                }, ${definition.multiplicity}>`,
            })
          }
        }`,
      })
    }
      }
    `;
  }

  function getV2Types() {
    return `
      export interface ${objectDefIdentifier} extends ObjectTypeDefinition<"${enhancedObject.fullApiName}", ${enhancedObject.uniqueImportName}>, VersionBound<$ExpectedClientVersion> {
        osdkMetadata: typeof $osdkMetadata;
        ${
      stringify(definition, {
        osdkMetadata: () => undefined, // we are going to reference another object instead
        type: () => undefined,
        apiName: () => undefined,
        links: (_value) =>
          `{
          ${
            stringify(definition.links, {
              "*": (definition) =>
                `ObjectTypeLinkDefinition<${
                  ontology
                    .objectTypes[definition.targetType].getObjectDefIdentifier(
                      v2,
                    )
                }, ${definition.multiplicity}>`,
            })
          }
        }`,
        properties: (_value) => (`{
          ${
          stringify(definition.properties, {
            "*": (propertyDefinition, _, apiName) => [
              `${propertyJsdoc(propertyDefinition, { apiName })}${apiName}`,
              `PropertyDef<"${propertyDefinition.type}", "${
                propertyDefinition.nullable ? "nullable" : "non-nullable"
              }", "${propertyDefinition.multiplicity ? "array" : "single"}">`,
            ],
          })
        }
        }`),
      })
    }
    
      }

    `;
  }

  const fullApiName = definition.apiName;
  const imports = getObjectImports(
    uniqueLinkTargetTypes,
    fullApiName,
    currentFilePath,
    v2,
  );

  return `${imports}

    ${v2 ? getV2Types() : getV1Types()}

    export const ${enhancedObject.shortApiName}: ${objectDefIdentifier} = {
      ${v2 ? `osdkMetadata: $osdkMetadata,` : ""}
      ${
    stringify(definition, {
      osdkMetadata: (value) => undefined,
    })
  }
    
    };`;
}

export function getObjectImports(
  objects: Set<EnhancedObjectType>,
  curApiName: string | undefined,
  currentFilePath: string,
  v2: boolean,
) {
  return Array.from(objects).filter(obj => obj.fullApiName !== curApiName)
    .map(obj => {
      const enhancedObj = obj;
      return `import type { ${enhancedObj.getObjectDefIdentifier(v2)} } from "${
        enhancedObj.getImportPathRelTo("./" + currentFilePath)
      }";`;
    }).join("\n");
}
