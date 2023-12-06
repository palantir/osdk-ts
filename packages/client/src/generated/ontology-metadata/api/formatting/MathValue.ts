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

import type { MathBinaryOperation } from "./MathBinaryOperation.js";
import type { MathUnaryOperation } from "./MathUnaryOperation.js";
import type { ValueReference } from "./ValueReference.js";
export interface MathValue_reference {
  type: "reference";
  reference: ValueReference;
}

export interface MathValue_constant {
  type: "constant";
  constant: string;
}

export interface MathValue_binaryOperation {
  type: "binaryOperation";
  binaryOperation: MathBinaryOperation;
}

export interface MathValue_unaryOperation {
  type: "unaryOperation";
  unaryOperation: MathUnaryOperation;
}
export type MathValue =
  | MathValue_reference
  | MathValue_constant
  | MathValue_binaryOperation
  | MathValue_unaryOperation;
