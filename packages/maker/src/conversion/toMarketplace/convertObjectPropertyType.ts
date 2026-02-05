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

import type { OntologyIrPropertyType } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { convertObjectStatus, namespace } from "../../api/defineOntology.js";
import type { ObjectPropertyType } from "../../api/object/ObjectPropertyType.js";
import {
  defaultTypeClasses,
  getPropertyTypeName,
  hasRenderHints,
  shouldBeIndexedForSearch,
  shouldNotHaveRenderHints,
} from "../../api/propertyConversionUtils.js";
import { convertNullabilityToDataConstraint } from "./convertNullabilityToDataConstraint.js";
import { convertValueType } from "./convertValueType.js";
import { convertValueTypeDataConstraints } from "./convertValueTypeDataConstraints.js";
import { propertyTypeTypeToOntologyIrType } from "./propertyTypeTypeToOntologyIrType.js";

export function convertObjectPropertyType(
  property: ObjectPropertyType,
): OntologyIrPropertyType {
  const apiName = namespace + property.apiName;
  invariant(
    !shouldNotHaveRenderHints(property.type)
      || !hasRenderHints(property.typeClasses),
    `Property type ${apiName} of type '${
      getPropertyTypeName(property.type)
    }' should not have render hints`,
  );
  const output: OntologyIrPropertyType = {
    apiName: property.apiName,
    sharedPropertyTypeApiName: property.sharedPropertyType?.apiName,
    displayMetadata: {
      displayName: property.displayName,
      description: property.description,
      visibility: property.visibility ?? "NORMAL",
    },
    indexedForSearch: property.indexedForSearch
      ?? shouldBeIndexedForSearch(property.type),
    ruleSetBinding: undefined,
    baseFormatter: property.baseFormatter,
    type: property.array
      ? {
        type: "array" as const,
        array: {
          subtype: propertyTypeTypeToOntologyIrType(property.type),
          reducers: [],
        },
      }
      : propertyTypeTypeToOntologyIrType(property.type),
    typeClasses: property.typeClasses
      ?? (shouldNotHaveRenderHints(property.type) ? [] : defaultTypeClasses),
    status: convertObjectStatus(property.status),
    inlineAction: undefined,
    dataConstraints: property.valueType
      ? convertValueTypeDataConstraints(property.valueType.constraints)
      : convertNullabilityToDataConstraint(property),
    sharedPropertyTypeRid: property.sharedPropertyType?.apiName,
    valueType: property.valueType
      ? convertValueType(property.valueType)
      : undefined,
  };
  return output;
}
