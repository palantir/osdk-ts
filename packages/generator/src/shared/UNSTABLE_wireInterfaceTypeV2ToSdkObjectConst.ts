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

import type { InterfaceType } from "@osdk/gateway/types";

import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition } from "@osdk/generator-converters";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";
import { getObjectDefIdentifier } from "./wireObjectTypeV2ToSdkObjectConst.js";

/** @internal */
export function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
  interfaceDef: InterfaceType,
  v2: boolean = false,
) {
  const definition = deleteUndefineds(
    __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
      interfaceDef,
      v2,
    ),
  );

  const objectDefIdentifier = getObjectDefIdentifier(
    interfaceDef.apiName,
    v2,
  );

  function getV2Types() {
    return `
  export interface ${objectDefIdentifier} extends InterfaceDefinition<"${interfaceDef.apiName}", ${interfaceDef.apiName}>, VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    ${
      stringify(definition, {
        osdkMetadata: () => undefined,
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

  // FIXME: We need to fill in the imports
  // if we want links to work
  const imports: string[] = [];

  return `${imports.join("\n")}

    ${v2 ? getV2Types() : ""}

    export const ${definition.apiName}: ${objectDefIdentifier} = {
      osdkMetadata: $osdkMetadata,
      ${
    stringify(definition, {
      osdkMetadata: () => undefined,
    })
  }
      
    };`;
}
