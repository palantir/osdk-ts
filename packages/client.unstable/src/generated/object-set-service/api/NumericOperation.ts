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

import type { NumericBinaryOperation } from "./NumericBinaryOperation.js";
import type { NumericUnaryOperation } from "./NumericUnaryOperation.js";
export interface NumericOperation_add {
  type: "add";
  add: NumericBinaryOperation;
}

export interface NumericOperation_subtract {
  type: "subtract";
  subtract: NumericBinaryOperation;
}

export interface NumericOperation_divide {
  type: "divide";
  divide: NumericBinaryOperation;
}

export interface NumericOperation_multiply {
  type: "multiply";
  multiply: NumericBinaryOperation;
}

export interface NumericOperation_negate {
  type: "negate";
  negate: NumericUnaryOperation;
}

export interface NumericOperation_absolute {
  type: "absolute";
  absolute: NumericUnaryOperation;
}
/**
 * An operation on one or two property nodes for the purposes of defining a derived property.
 */
export type NumericOperation =
  | NumericOperation_add
  | NumericOperation_subtract
  | NumericOperation_divide
  | NumericOperation_multiply
  | NumericOperation_negate
  | NumericOperation_absolute;
