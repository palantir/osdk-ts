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

import type { AggregatedPropertiesDefinition } from "./AggregatedPropertiesDefinition.js";
import type { LinkedPropertiesDefinition } from "./LinkedPropertiesDefinition.js";
export interface DerivedPropertiesDefinition_linkedProperties {
  type: "linkedProperties";
  linkedProperties: LinkedPropertiesDefinition;
}

export interface DerivedPropertiesDefinition_aggregatedProperties {
  type: "aggregatedProperties";
  aggregatedProperties: AggregatedPropertiesDefinition;
}
export type DerivedPropertiesDefinition =
  | DerivedPropertiesDefinition_linkedProperties
  | DerivedPropertiesDefinition_aggregatedProperties;
