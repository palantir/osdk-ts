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

import type { OntologyIrSecurityGroupAndCondition } from "./OntologyIrSecurityGroupAndCondition.js";
import type { OntologyIrSecurityGroupComparisonCondition } from "./OntologyIrSecurityGroupComparisonCondition.js";
import type { OntologyIrSecurityGroupMarkingsCondition } from "./OntologyIrSecurityGroupMarkingsCondition.js";
import type { OntologyIrSecurityGroupOrCondition } from "./OntologyIrSecurityGroupOrCondition.js";
export interface OntologyIrSecurityGroupGranularCondition_and {
  type: "and";
  and: OntologyIrSecurityGroupAndCondition;
}

export interface OntologyIrSecurityGroupGranularCondition_or {
  type: "or";
  or: OntologyIrSecurityGroupOrCondition;
}

export interface OntologyIrSecurityGroupGranularCondition_markings {
  type: "markings";
  markings: OntologyIrSecurityGroupMarkingsCondition;
}

export interface OntologyIrSecurityGroupGranularCondition_comparison {
  type: "comparison";
  comparison: OntologyIrSecurityGroupComparisonCondition;
}
/**
 * This definition is a subset of the full GPS policy definition language. It contains minimal supported conditions.
 * Note that more conditions can and will be added in the future, as the need arises.
 */
export type OntologyIrSecurityGroupGranularCondition =
  | OntologyIrSecurityGroupGranularCondition_and
  | OntologyIrSecurityGroupGranularCondition_or
  | OntologyIrSecurityGroupGranularCondition_markings
  | OntologyIrSecurityGroupGranularCondition_comparison;
