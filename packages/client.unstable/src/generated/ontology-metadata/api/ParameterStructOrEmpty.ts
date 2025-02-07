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

import type { DelegateToAllowedStructFieldValues } from "./DelegateToAllowedStructFieldValues.js";
import type { MustBeEmpty } from "./MustBeEmpty.js";
export interface ParameterStructOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterStructOrEmpty_delegateToAllowedStructFieldValues {
  type: "delegateToAllowedStructFieldValues";
  delegateToAllowedStructFieldValues: DelegateToAllowedStructFieldValues;
}
/**
 * Allowed values that satisfy struct parameters. If empty, it will only allow empty values. Otherwise, indicates
 * that AllowedStructFieldValues for each struct field should be checked.
 */
export type ParameterStructOrEmpty =
  | ParameterStructOrEmpty_empty
  | ParameterStructOrEmpty_delegateToAllowedStructFieldValues;
