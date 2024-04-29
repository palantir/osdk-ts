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

import type { AllPropertiesPropertySet } from "./AllPropertiesPropertySet.js";
import type { SelectedPropertiesPropertySet } from "./SelectedPropertiesPropertySet.js";
export interface PropertySet_selected {
  type: "selected";
  selected: SelectedPropertiesPropertySet;
}

export interface PropertySet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}
/**
 * Specification of a subset of properties to use.
 */
export type PropertySet = PropertySet_selected | PropertySet_allProperties;
