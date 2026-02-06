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

import type { DataConstraints } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import type { Nullability } from "../../api/properties/Nullability.js";
import type { PropertyTypeType } from "../../api/properties/PropertyTypeType.js";

export function convertNullabilityToDataConstraint(
  prop: { type: PropertyTypeType; nullability?: Nullability },
): DataConstraints | undefined {
  if (typeof prop.type === "object" && prop.type.type === "marking") {
    if (prop.nullability === undefined) {
      return {
        propertyTypeConstraints: [],
        nullability: undefined,
        nullabilityV2: { noNulls: true },
      };
    }
    invariant(
      prop.nullability?.noNulls,
      "Marking property type has noNulls set to false, marking properties must not be nullable",
    );
    return {
      propertyTypeConstraints: [],
      nullability: undefined,
      nullabilityV2: prop.nullability,
    };
  }
  return prop.nullability === undefined ? undefined : {
    propertyTypeConstraints: [],
    nullability: undefined,
    nullabilityV2: prop.nullability,
  };
}
