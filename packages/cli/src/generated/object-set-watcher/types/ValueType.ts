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

import type { DecimalType } from "./DecimalType.js";
import type { MarkingType } from "./MarkingType.js";
import type { PrimitiveType } from "./PrimitiveType.js";
import type { VectorType } from "./VectorType.js";
export interface ValueType_array {
  type: "array";
  array: ValueType;
}

export interface ValueType_primitive {
  type: "primitive";
  primitive: PrimitiveType;
}

export interface ValueType_decimal {
  type: "decimal";
  decimal: DecimalType;
}

export interface ValueType_marking {
  type: "marking";
  marking: MarkingType;
}

export interface ValueType_vector {
  type: "vector";
  vector: VectorType;
}

export type ValueType =
  | ValueType_array
  | ValueType_primitive
  | ValueType_decimal
  | ValueType_marking
  | ValueType_vector;
