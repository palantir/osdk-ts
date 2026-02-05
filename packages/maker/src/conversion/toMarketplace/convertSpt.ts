/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { OntologyIrSharedPropertyType } from "@osdk/client.unstable";
import type { SharedPropertyType } from "../../api/properties/SharedPropertyType.js";
import { convertNullabilityToDataConstraint } from "./convertNullabilityToDataConstraint.js";
import { propertyTypeTypeToOntologyIrType } from "./propertyTypeTypeToOntologyIrType.js";

export function convertSpt(
  {
    type,
    array,
    description,
    apiName,
    displayName,
    visibility,
    gothamMapping,
    typeClasses,
    aliases,
    valueType,
    nullability,
    baseFormatter,
  }: SharedPropertyType,
): OntologyIrSharedPropertyType {
  const dataConstraint:
    | OntologyIrSharedPropertyType["dataConstraints"]
    | undefined = convertNullabilityToDataConstraint({ type, nullability });
  return {
    apiName,
    displayMetadata: {
      displayName: displayName ?? apiName,
      visibility: visibility ?? "NORMAL",
      description,
    },
    type: array
      ? {
        type: "array" as const,
        array: {
          subtype: propertyTypeTypeToOntologyIrType(type),
          reducers: [],
        },
      }
      : propertyTypeTypeToOntologyIrType(type),
    aliases: aliases ?? [],
    baseFormatter,
    dataConstraints: dataConstraint,
    gothamMapping: gothamMapping,
    indexedForSearch: true,
    typeClasses: typeClasses ?? [],
    valueType: valueType === undefined ? undefined : {
      apiName: valueType.apiName,
      version: valueType.version,
      packageNamespace: valueType.packageNamespace,
      displayMetadata: valueType.displayMetadata,
    },
  };
}
