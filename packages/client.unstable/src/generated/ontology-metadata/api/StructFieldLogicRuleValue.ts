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

import type { StructListParameterFieldValue } from "./StructListParameterFieldValue.js";
import type { StructParameterFieldValue } from "./StructParameterFieldValue.js";
export interface StructFieldLogicRuleValue_structParameterFieldValue {
  type: "structParameterFieldValue";
  structParameterFieldValue: StructParameterFieldValue;
}

export interface StructFieldLogicRuleValue_structListParameterFieldValue {
  type: "structListParameterFieldValue";
  structListParameterFieldValue: StructListParameterFieldValue;
}
/**
 * LogicRuleValues that are allowed for struct fields.
 */
export type StructFieldLogicRuleValue =
  | StructFieldLogicRuleValue_structParameterFieldValue
  | StructFieldLogicRuleValue_structListParameterFieldValue;
