/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { MarketplaceInterfacePropertyType } from "@osdk/client.unstable";
import type { InterfacePropertyType } from "@osdk/maker";
import {
  isInterfacePropertyRequired,
  isInterfaceSharedPropertyType,
  shouldBeIndexedForSearch,
  validateVectorProperty,
} from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { convertNullabilityToDataConstraint } from "./convertNullabilityToDataConstraint.js";
import { convertSpt } from "./convertSpt.js";
import { propertyTypeTypeToOntologyIrInterfaceType } from "./propertyTypeTypeToOntologyIrInterfaceType.js";

/**
 * The rid a property is keyed by on the wire, accounting for both interface-defined
 * and shared-property-backed properties.
 */
export function interfacePropertyWireRid(
  prop: InterfacePropertyType,
  apiName: string,
  interfaceApiName: string,
  ridGenerator: OntologyRidGenerator,
): string {
  return isInterfaceSharedPropertyType(prop)
    ? ridGenerator.generateIptRidFromSptRid(
        ridGenerator.generateSptRid(prop.sharedPropertyType.apiName),
      )
    : ridGenerator.generateInterfacePropertyTypeRid(apiName, interfaceApiName);
}

export function convertInterfaceProperty(
  prop: InterfacePropertyType,
  apiName: string,
  interfaceApiName: string,
  ridGenerator: OntologyRidGenerator,
): [string, MarketplaceInterfacePropertyType] {
  const rid = interfacePropertyWireRid(
    prop,
    apiName,
    interfaceApiName,
    ridGenerator,
  );
  if (isInterfaceSharedPropertyType(prop)) {
    const convertedSpt = convertSpt(prop.sharedPropertyType, ridGenerator);
    return [
      rid,
      {
        type: "sharedPropertyBasedPropertyType",
        sharedPropertyBasedPropertyType: {
          requireImplementation: isInterfacePropertyRequired(prop),
          sharedPropertyType: convertedSpt,
        },
      },
    ];
  } else {
    validateVectorProperty(apiName, prop.type, prop.array);
    return [
      rid,
      {
        type: "interfaceDefinedPropertyType",
        interfaceDefinedPropertyType: {
          apiName,
          displayMetadata: {
            displayName: prop.displayName ?? apiName,
            visibility: prop.visibility ?? "NORMAL",
            description: prop.description,
          },
          type: prop.array
            ? {
                type: "array" as const,
                array: {
                  subtype: propertyTypeTypeToOntologyIrInterfaceType(
                    prop.type,
                    apiName,
                    ridGenerator,
                  ),
                },
              }
            : propertyTypeTypeToOntologyIrInterfaceType(
                prop.type,
                apiName,
                ridGenerator,
              ),
          constraints: {
            primaryKeyConstraint: prop.primaryKeyConstraint ?? "NO_RESTRICTION",
            requireImplementation: isInterfacePropertyRequired(prop),
            indexedForSearch: shouldBeIndexedForSearch(prop.type),
            typeClasses: prop.typeClasses ?? [],
            dataConstraints: convertNullabilityToDataConstraint({
              type: prop.type,
              nullability: prop.nullability,
            }),
            valueType: prop.valueType
              ? ridGenerator.generateRidForValueType(
                  prop.valueType.apiName,
                  prop.valueType.version,
                )
              : undefined,
          },
          rid,
        },
      },
    ];
  }
}
