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

import type { FilterValue } from "../components/FilterValue.js";
import type { PropertyApiName } from "../components/PropertyApiName.js";
import type { PropertyFilter } from "../components/PropertyFilter.js";
import type { ValueType } from "../components/ValueType.js";

/**
 * The value of the given property filter is invalid. For instance, 2 is an invalid value for
 * `isNull` in `properties.address.isNull=2` because the `isNull` filter expects a value of boolean type.
 */
export interface InvalidPropertyFilterValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyFilterValue";
  errorInstanceId: string;
  parameters: {
    expectedType: ValueType;
    propertyFilter: PropertyFilter;
    propertyFilterValue: FilterValue;
    property: PropertyApiName;
  };
}
