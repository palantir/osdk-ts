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

import { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition } from "@osdk/generator-converters";
import fastDeepEqual from "fast-deep-equal";
import invariant from "tiny-invariant";
import type { EnhancedInterfaceType } from "../GenerateContext/EnhancedInterfaceType.js";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import { propertyJsdoc } from "../shared/propertyJsdoc.js";
import { getObjectDefIdentifier } from "../shared/wireObjectTypeV2ToSdkObjectConst.js";
import { deleteUndefineds } from "../util/deleteUndefineds.js";
import { stringify } from "../util/stringify.js";

/** @internal */
export function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectConst(
  interfaceDef: EnhancedInterfaceType,
  ontology: EnhancedOntologyDefinition,
  v2: boolean = false,
) {
  const definition = deleteUndefineds(
    __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
      interfaceDef.og,
      v2,
    ),
  );

  const objectDefIdentifier = interfaceDef.getDefinitionIdentifier(v2);

  const parents = definition.implements?.map(p => {
    invariant(
      ontology.interfaceTypes[p] != null,
      `Expected to find a parent interface named ${p} in the ontology and did not.`,
    );

    const it = deleteUndefineds(
      __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
        ontology.requireInterfaceType(p, true).og,
        v2,
      ),
    );

    return it;
  }) ?? [];

  const mergedProperties = { ...definition.properties };
  for (const parent of parents) {
    for (const apiName of Object.keys(parent.properties)) {
      if (definition.properties[apiName] != null) {
        invariant(
          fastDeepEqual(
            definition.properties[apiName],
            parent.properties[apiName],
          ),
          `Interface ${definition.apiName} redefines property '${apiName}' from parent '${parent.apiName}' but the properties do not match`,
        );
      } else if (mergedProperties[apiName] != null) {
        invariant(
          fastDeepEqual(
            mergedProperties[apiName],
            parent.properties[apiName],
          ),
          `Some interface defines a conflicting property '${apiName}' that does not match property from parent '${parent.apiName}'`,
        );
      }
      mergedProperties[apiName] = parent.properties[apiName];
    }
  }

  const ogProperties = definition.properties;
  definition.properties = mergedProperties;

  function localPropertyJsdoc(apiName: string) {
    const property = definition.properties[apiName]!;
    const isInherited = ogProperties[apiName] == null;

    return propertyJsdoc(property, { isInherited, apiName });
  }

  function maybeStripNamespace(q: string) {
    if (
      interfaceDef.apiNamespace && q.startsWith(`${interfaceDef.apiNamespace}.`)
    ) {
      return q.slice(interfaceDef.apiNamespace.length + 1);
    } else {
      return q;
    }
  }

  function getV2Types() {
    return `
  export interface ${
      interfaceDef.getDefinitionIdentifier(true)
    } extends InterfaceDefinition<"${interfaceDef.fullApiName}", ${interfaceDef.shortApiName}>, VersionBound<$ExpectedClientVersion> {
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
        properties: (properties) => (`{
      ${
          stringify(properties, {
            "*": (
              propertyDefinition,
              _,
              key,
            ) => [
              `${localPropertyJsdoc(key)}"${maybeStripNamespace(key)}"`,
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

  // FIXME: We need to fill in the imports
  // if we want links to work
  const imports: string[] = [];

  return `${imports.join("\n")}

    ${v2 ? getV2Types() : ""}

    export const ${interfaceDef.shortApiName}: ${objectDefIdentifier} = {
      osdkMetadata: $osdkMetadata,
      ${
    stringify(definition, {
      osdkMetadata: () => undefined,
      properties: (properties) => (`{
        ${
        stringify(properties, {
          "*": (
            propertyDefinition,
            _,
            key,
          ) => [
            `"${maybeStripNamespace(key)}"`,
            _(propertyDefinition),
          ],
        })
      }
      }`),
    })
  }
      
    };`;
}
