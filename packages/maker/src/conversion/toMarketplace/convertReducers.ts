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

import type { OntologyIrArrayPropertyTypeReducer } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import type {
  PropertyTypeType,
} from "../../api/properties/PropertyTypeType.js";
import { isStruct } from "../../api/properties/PropertyTypeType.js";
import type { ReducerType } from "../../api/properties/ReducerType.js";
import type { SharedPropertyType } from "../../api/properties/SharedPropertyType.js";

export function convertReducers(
  type: PropertyTypeType,
  apiName: string,
  reducers?: Array<ReducerType>,
  sharedPropertyType?: SharedPropertyType,
): Array<OntologyIrArrayPropertyTypeReducer> {
  reducers?.forEach(reducer => {
    if (reducer.structField) {
      invariant(
        isStruct(type)
          && Object.keys(type.structDefinition).includes(reducer.structField),
        `Reducer structField ${reducer.structField} does not exist in struct definition`,
      );
    }
  });
  if (sharedPropertyType) {
    return mapReducers(sharedPropertyType.apiName, sharedPropertyType.reducers);
  } else {
    return mapReducers(apiName, reducers);
  }
}

export function mapReducers(
  apiName: string,
  reducers?: Array<ReducerType>,
): Array<OntologyIrArrayPropertyTypeReducer> {
  return reducers?.map(reducer => {
    switch (reducer.direction) {
      case "ascending":
        return {
          direction: "ASCENDING_NULLS_LAST",
          structApiName: reducer.structField ? apiName : undefined,
          fieldApiName: reducer.structField,
        };
      case "descending":
        return {
          direction: "DESCENDING_NULLS_LAST",
          structApiName: reducer.structField ? apiName : undefined,
          fieldApiName: reducer.structField,
        };
      default: {
        throw new Error(`Unsupported reducer direction: ${reducer.direction}`);
      }
    }
  }) ?? [];
}
