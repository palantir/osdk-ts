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

import type { OntologyIrStructMainValue } from "@osdk/client.unstable";
import {
  isStruct,
  type PropertyTypeType,
} from "../../api/properties/PropertyTypeType.js";
import type { SharedPropertyType } from "../../api/properties/SharedPropertyType.js";
import { propertyTypeTypeToOntologyIrType } from "./propertyTypeTypeToOntologyIrType.js";

export function convertMainValue(
  type: PropertyTypeType,
  apiName?: string,
  sharedPropertyType?: SharedPropertyType,
): OntologyIrStructMainValue | undefined {
  if (
    sharedPropertyType && isStruct(sharedPropertyType.type)
    && sharedPropertyType.type.mainValue
  ) {
    return {
      fields: Array.isArray(sharedPropertyType.type.mainValue.fields)
        ? sharedPropertyType.type.mainValue.fields
        : [sharedPropertyType.type.mainValue.fields],
      type: propertyTypeTypeToOntologyIrType(
        sharedPropertyType.type.mainValue.type,
      ),
    };
  }
  if (isStruct(type) && type.mainValue) {
    return {
      fields: Array.isArray(type.mainValue.fields)
        ? type.mainValue.fields
        : [type.mainValue.fields],
      type: propertyTypeTypeToOntologyIrType(type.mainValue.type),
    };
  }

  return undefined;
}
