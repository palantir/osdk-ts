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

import type { SecurityGroupAndConditionModification } from "./SecurityGroupAndConditionModification.js";
import type { SecurityGroupComparisonConditionModification } from "./SecurityGroupComparisonConditionModification.js";
import type { SecurityGroupMarkingsConditionModification } from "./SecurityGroupMarkingsConditionModification.js";
import type { SecurityGroupNotConditionModification } from "./SecurityGroupNotConditionModification.js";
import type { SecurityGroupOrConditionModification } from "./SecurityGroupOrConditionModification.js";
import type { SecurityGroupTrueConditionModification } from "./SecurityGroupTrueConditionModification.js";
export interface SecurityGroupGranularConditionModification_not {
  type: "not";
  not: SecurityGroupNotConditionModification;
}

export interface SecurityGroupGranularConditionModification_true {
  type: "true";
  true: SecurityGroupTrueConditionModification;
}

export interface SecurityGroupGranularConditionModification_and {
  type: "and";
  and: SecurityGroupAndConditionModification;
}

export interface SecurityGroupGranularConditionModification_or {
  type: "or";
  or: SecurityGroupOrConditionModification;
}

export interface SecurityGroupGranularConditionModification_markings {
  type: "markings";
  markings: SecurityGroupMarkingsConditionModification;
}

export interface SecurityGroupGranularConditionModification_comparison {
  type: "comparison";
  comparison: SecurityGroupComparisonConditionModification;
}
export type SecurityGroupGranularConditionModification =
  | SecurityGroupGranularConditionModification_not
  | SecurityGroupGranularConditionModification_true
  | SecurityGroupGranularConditionModification_and
  | SecurityGroupGranularConditionModification_or
  | SecurityGroupGranularConditionModification_markings
  | SecurityGroupGranularConditionModification_comparison;
