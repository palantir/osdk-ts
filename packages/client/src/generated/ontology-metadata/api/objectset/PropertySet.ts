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
import type { PropertyWhitelistPropertySet } from "./PropertyWhitelistPropertySet.js";
export interface PropertySet_propertyWhitelist {
  type: "propertyWhitelist";
  propertyWhitelist: PropertyWhitelistPropertySet;
}

export interface PropertySet_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySet;
}
export type PropertySet =
  | PropertySet_propertyWhitelist
  | PropertySet_allProperties;
