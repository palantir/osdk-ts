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

import type {
  OntologyIrCondition,
  OntologyIrConditionValue,
} from "@osdk/client.unstable";

// TODO(ethana): add more commonly used conditions - parameter matching, organizations, etc.

export type ConditionDefinition =
  | UnionCondition
  | OntologyIrCondition
  | GroupValidationRule
  | ParameterValidationRule;

export type UnionCondition = {
  type: "and" | "or";
  conditions: Array<ConditionDefinition>;
};

export type GroupValidationRule = {
  type: "group";
  name: string;
};

export type ParameterValidationRule = {
  type: "parameter";
  parameterId: string;
  matches: OntologyIrConditionValue;
};
