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

import type { PropertyType } from "@osdk/client.unstable";
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
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { convertNullabilityToDataConstraint } from "./convertNullabilityToDataConstraint.js";
import { convertValueType } from "./convertValueType.js";
import { convertValueTypeDataConstraints } from "./convertValueTypeDataConstraints.js";
import { propertyTypeTypeToOntologyIrType } from "./propertyTypeTypeToOntologyIrType.js";

export function convertObjectPropertyType(
  property: ObjectPropertyType,
  objectTypeApiName: string,
  ridGenerator: OntologyRidGenerator,
): PropertyType {
  const apiName = namespace + property.apiName;
  invariant(
    !shouldNotHaveRenderHints(property.type)
      || !hasRenderHints(property.typeClasses),
    `Property type ${apiName} of type '${
      getPropertyTypeName(property.type)
    }' should not have render hints`,
  );
  // TODO: Generate proper RID and ID based on object type and property API name
  const propertyRid = ridGenerator.generatePropertyRid(
    property.apiName,
    objectTypeApiName,
  );
  const output: PropertyType = {
    apiName: property.apiName,
    id: property.apiName, // TODO: Should this be different from apiName?
    rid: propertyRid,
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
          subtype: propertyTypeTypeToOntologyIrType(
            property.type,
            ridGenerator,
          ),
          //reducers: [],
        },
      }
      : propertyTypeTypeToOntologyIrType(property.type, ridGenerator),
    typeClasses: property.typeClasses
      ?? (shouldNotHaveRenderHints(property.type) ? [] : defaultTypeClasses),
    status: convertObjectStatus(property.status),
    inlineAction: undefined,
    dataConstraints: property.valueType
      ? convertValueTypeDataConstraints(property.valueType.constraints)
      : convertNullabilityToDataConstraint(property),
    // TODO: Convert sharedPropertyTypeRid from API name to RID
    sharedPropertyTypeRid: property.sharedPropertyType
      ? ridGenerator.generateSptRid(property.sharedPropertyType.apiName)
      : undefined,
    valueType: property.valueType
      ? convertValueType(property.valueType, ridGenerator)
      : undefined,
  };
  return output;
}
