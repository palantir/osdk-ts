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

import type { SecurityGroupAndCondition } from "./SecurityGroupAndCondition.js";
import type { SecurityGroupComparisonCondition } from "./SecurityGroupComparisonCondition.js";
import type { SecurityGroupMarkingsCondition } from "./SecurityGroupMarkingsCondition.js";
import type { SecurityGroupOrCondition } from "./SecurityGroupOrCondition.js";
export interface SecurityGroupGranularCondition_and {
  type: "and";
  and: SecurityGroupAndCondition;
}

export interface SecurityGroupGranularCondition_or {
  type: "or";
  or: SecurityGroupOrCondition;
}

export interface SecurityGroupGranularCondition_markings {
  type: "markings";
  markings: SecurityGroupMarkingsCondition;
}

export interface SecurityGroupGranularCondition_comparison {
  type: "comparison";
  comparison: SecurityGroupComparisonCondition;
}
/**
 * This definition is a subset of the full GPS policy definition language. It contains minimal supported conditions.
 * Note that more conditions can and will be added in the future, as the need arises.
 */
export type SecurityGroupGranularCondition =
  | SecurityGroupGranularCondition_and
  | SecurityGroupGranularCondition_or
  | SecurityGroupGranularCondition_markings
  | SecurityGroupGranularCondition_comparison;
