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

import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { AllPropertiesPropertySet } from "./AllPropertiesPropertySet.js";
export interface PropertyTypeIdSet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}

export interface PropertyTypeIdSet_specificProperties {
  type: "specificProperties";
  specificProperties: Array<PropertyTypeId>;
}
/**
 * Set of properties to either represent all available properties on the object type or a specific subset.
 */
export type PropertyTypeIdSet =
  | PropertyTypeIdSet_allProperties
  | PropertyTypeIdSet_specificProperties;
