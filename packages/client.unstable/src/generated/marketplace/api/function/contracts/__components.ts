/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { FunctionContractReference as _api_FunctionContractReference } from "../../__components.js";

/**
 * Logical AND - destination function must satisfy ALL nested expressions.
 */
export interface AndExpression {
  expressions: Array<ContractExpression>;
}
export interface ContractExpression_and {
  type: "and";
  and: AndExpression;
}

export interface ContractExpression_or {
  type: "or";
  or: OrExpression;
}

export interface ContractExpression_contract {
  type: "contract";
  contract: ContractReference;
}
/**
 * A boolean expression tree for specifying contract requirements. Parallel to ContractExpressionIdentifier,
 * but uses FunctionContractReference (BlockInternalId) for leaf nodes instead of FunctionContractIdentifier.
 */
export type ContractExpression =
  | ContractExpression_and
  | ContractExpression_or
  | ContractExpression_contract;

/**
 * Leaf node referring to a single contract that must be implemented.
 */
export interface ContractReference {
  contract: _api_FunctionContractReference;
}
/**
 * Logical OR - destination function must satisfy AT LEAST ONE nested expression.
 */
export interface OrExpression {
  expressions: Array<ContractExpression>;
}
