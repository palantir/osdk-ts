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

import type { CalculatedPropertyDefinition } from "./CalculatedPropertyDefinition.js";
import type { LinkedObjectPropertyDefinition } from "./LinkedObjectPropertyDefinition.js";
import type { LinkedObjectsAggregationPropertyDefinition } from "./LinkedObjectsAggregationPropertyDefinition.js";
export interface DerivedPropertyDefinition_linkedObjectProperty {
  type: "linkedObjectProperty";
  linkedObjectProperty: LinkedObjectPropertyDefinition;
}

export interface DerivedPropertyDefinition_linkedObjectsAggregationProperty {
  type: "linkedObjectsAggregationProperty";
  linkedObjectsAggregationProperty: LinkedObjectsAggregationPropertyDefinition;
}

export interface DerivedPropertyDefinition_calculatedProperty {
  type: "calculatedProperty";
  calculatedProperty: CalculatedPropertyDefinition;
}

export type DerivedPropertyDefinition =
  | DerivedPropertyDefinition_linkedObjectProperty
  | DerivedPropertyDefinition_linkedObjectsAggregationProperty
  | DerivedPropertyDefinition_calculatedProperty;
