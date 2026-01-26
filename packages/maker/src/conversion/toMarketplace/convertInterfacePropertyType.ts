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

import type { OntologyIrMarketplaceInterfacePropertyType } from "@osdk/client.unstable";
import {
  type InterfacePropertyType,
  isInterfaceSharedPropertyType,
} from "../../api/interface/InterfacePropertyType.js";
import { convertNullabilityToDataConstraint } from "./convertNullabilityToDataConstraint.js";
import { convertSpt } from "./convertSpt.js";
import { propertyTypeTypeToOntologyIrInterfaceType } from "./propertyTypeTypeToOntologyIrInterfaceType.js";

export function convertInterfaceProperty(
  prop: InterfacePropertyType,
  apiName: string,
): [string, OntologyIrMarketplaceInterfacePropertyType] {
  if (isInterfaceSharedPropertyType(prop)) {
    return [prop.sharedPropertyType.apiName, {
      type: "sharedPropertyBasedPropertyType",
      sharedPropertyBasedPropertyType: {
        requireImplementation: prop.required,
        sharedPropertyType: convertSpt(prop.sharedPropertyType),
      },
    }];
  } else {
    return [apiName, {
      type: "interfaceDefinedPropertyType",
      interfaceDefinedPropertyType: {
        apiName: apiName,
        displayMetadata: {
          displayName: prop.displayName ?? apiName,
          visibility: prop.visibility ?? "NORMAL",
          description: prop.description,
        },
        type: prop.array
          ? {
            type: "array" as const,
            array: {
              subtype: propertyTypeTypeToOntologyIrInterfaceType(prop.type),
            },
          }
          : propertyTypeTypeToOntologyIrInterfaceType(prop.type),
        constraints: {
          primaryKeyConstraint: prop.primaryKeyConstraint ?? "NO_RESTRICTION",
          requireImplementation: prop.required ?? true,
          indexedForSearch: true,
          typeClasses: prop.typeClasses ?? [],
          dataConstraints: convertNullabilityToDataConstraint({
            type: prop.type,
            nullability: prop.nullability,
          }),
          valueType: prop.valueType
            ? {
              apiName: prop.valueType.apiName,
              version: prop.valueType.version,
              packageNamespace: prop.valueType.packageNamespace,
              displayMetadata: prop.valueType.displayMetadata,
            }
            : undefined,
        },
      },
    }];
  }
}
