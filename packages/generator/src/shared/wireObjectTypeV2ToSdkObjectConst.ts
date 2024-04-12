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
import { deleteUndefineds } from "../util/deleteUndefineds";
import { stringify } from "../util/stringify";

export function getObjectDefIdentifier(name: string, v2: boolean) {
  return v2 ? name : `${name}Def`;
}

/** @internal */
export function wireObjectTypeV2ToSdkObjectConst(
  object: ObjectTypeFullMetadata,
  importExt: string,
  v2: boolean = false,
) {
  const uniqueLinkTargetTypes = new Set(
    object.linkTypes.map(a => a.objectTypeApiName),
  );

  const definition = deleteUndefineds(
    wireObjectTypeFullMetadataToSdkObjectTypeDefinition(
      object,
      v2,
    ),
  );

  const objectDefIdentifier = getObjectDefIdentifier(
    object.objectType.apiName,
    v2,
  );

  function getV1Types() {
    return `
      export interface ${objectDefIdentifier} extends ObjectTypeDefinition<"${object.objectType.apiName}", ${object.objectType.apiName}> {
        ${
      stringify(definition, {
        osdkMetadata: () => undefined, // not used in v1
        links: (_value) =>
          `{
          ${
            stringify(definition.links, {
              "*": (definition) =>
                `ObjectTypeLinkDefinition<${
                  getObjectDefIdentifier(definition.targetType, v2)
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
      export interface ${objectDefIdentifier} extends ObjectTypeDefinition<"${object.objectType.apiName}", ${object.objectType.apiName}>, VersionBound<$ExpectedClientVersion> {
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
                  getObjectDefIdentifier(definition.targetType, v2)
                }, ${definition.multiplicity}>`,
            })
          }
        }`,
        properties: (_value) => (`{
          ${
          stringify(definition.properties, {
            "*": (propertyDefinition) =>
              `PropertyDef<"${propertyDefinition.type}", "${
                propertyDefinition.nullable ? "nullable" : "non-nullable"
              }", "${propertyDefinition.multiplicity ? "array" : "single"}">`,
          })
        }
        }`),
      })
    }
    
      }

    `;
  }

  const imports = Array.from(uniqueLinkTargetTypes).filter(type =>
    type !== definition.apiName
  ).map(type =>
    `import type { ${
      getObjectDefIdentifier(type, v2)
    } } from "./${type}${importExt}";`
  );

  return `${imports.join("\n")}

    ${v2 ? getV2Types() : getV1Types()}

    export const ${object.objectType.apiName}: ${objectDefIdentifier} = {
      ${v2 ? `osdkMetadata: $osdkMetadata,` : ""}
      ${
    stringify(definition, {
      osdkMetadata: (value) => undefined,
    })
  }
    
    };`;
}
