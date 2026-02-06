/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { InterfaceMetadata } from "@osdk/api";
import type { InterfaceType } from "@osdk/foundry.ontologies";
import { wirePropertyV2ToSdkPropertyDefinition } from "./wirePropertyV2ToSdkPropertyDefinition.js";

export function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(
  interfaceType: InterfaceType,
  v2: boolean,
  log?: { info: (msg: string) => void },
): InterfaceMetadata {
  return {
    type: "interface",
    rid: interfaceType.rid,
    apiName: interfaceType.apiName,
    displayName: interfaceType.displayName,
    description: interfaceType.description,
    implements: interfaceType.allExtendsInterfaces
      ? [...interfaceType.allExtendsInterfaces].sort((a, b) =>
        a.localeCompare(b)
      )
      : interfaceType.extendsInterfaces
      ? [...interfaceType.extendsInterfaces].sort((a, b) => a.localeCompare(b))
      : undefined,
    properties: Object.fromEntries(
      Object.entries(
        // prefer V2 if available and non-empty, otherwise fall back to V1
        (interfaceType.allPropertiesV2
            && Object.keys(interfaceType.allPropertiesV2).length > 0)
          ? interfaceType.allPropertiesV2
          : (interfaceType.allProperties ?? interfaceType.properties),
      )
        .map((
          [key, value],
        ) => {
          return [
            key,
            wirePropertyV2ToSdkPropertyDefinition(
              value,
              true,
              log,
            ),
          ];
        }).filter(([_, value]) => value != null),
    ),
    links: Object.fromEntries(
      Object.entries(interfaceType.allLinks ?? interfaceType.links ?? {}).map(
        (
          [linkApiName, linkType],
        ) => [linkApiName, {
          multiplicity: linkType.cardinality === "MANY",
          targetTypeApiName: linkType.linkedEntityApiName.apiName,
          targetType: linkType.linkedEntityApiName.type === "objectTypeApiName"
            ? "object"
            : "interface",
        }],
      ),
    ),
    implementedBy: interfaceType.implementedByObjectTypes
      ? [...interfaceType.implementedByObjectTypes].sort((a, b) =>
        a.localeCompare(b)
      )
      : interfaceType.implementedByObjectTypes,
  };
}
