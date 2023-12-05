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

import type { NumericLiteral } from "./NumericLiteral.mjs";
import type { NumericOperation } from "./NumericOperation.mjs";
import type { PropertyId } from "./PropertyId.mjs";
export interface NumericCalculation_operation {
  type: "operation";
  operation: NumericOperation;
}

export interface NumericCalculation_literal {
  type: "literal";
  literal: NumericLiteral;
}

export interface NumericCalculation_propertyId {
  type: "propertyId";
  propertyId: PropertyId;
}

export type NumericCalculation =
  | NumericCalculation_operation
  | NumericCalculation_literal
  | NumericCalculation_propertyId;
