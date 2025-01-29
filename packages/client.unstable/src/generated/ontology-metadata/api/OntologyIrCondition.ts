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

import type { OntologyIrAndCondition } from "./OntologyIrAndCondition.js";
import type { OntologyIrComparisonCondition } from "./OntologyIrComparisonCondition.js";
import type { OntologyIrMarkingsCondition } from "./OntologyIrMarkingsCondition.js";
import type { OntologyIrNotCondition } from "./OntologyIrNotCondition.js";
import type { OntologyIrOrCondition } from "./OntologyIrOrCondition.js";
import type { OntologyIrRegexCondition } from "./OntologyIrRegexCondition.js";
import type { Redacted } from "./Redacted.js";
import type { TrueCondition } from "./TrueCondition.js";
export interface OntologyIrCondition_true {
  type: "true";
  true: TrueCondition;
}

export interface OntologyIrCondition_or {
  type: "or";
  or: OntologyIrOrCondition;
}

export interface OntologyIrCondition_and {
  type: "and";
  and: OntologyIrAndCondition;
}

export interface OntologyIrCondition_not {
  type: "not";
  not: OntologyIrNotCondition;
}

export interface OntologyIrCondition_comparison {
  type: "comparison";
  comparison: OntologyIrComparisonCondition;
}

export interface OntologyIrCondition_markings {
  type: "markings";
  markings: OntologyIrMarkingsCondition;
}

export interface OntologyIrCondition_regex {
  type: "regex";
  regex: OntologyIrRegexCondition;
}

export interface OntologyIrCondition_redacted {
  type: "redacted";
  redacted: Redacted;
}
export type OntologyIrCondition =
  | OntologyIrCondition_true
  | OntologyIrCondition_or
  | OntologyIrCondition_and
  | OntologyIrCondition_not
  | OntologyIrCondition_comparison
  | OntologyIrCondition_markings
  | OntologyIrCondition_regex
  | OntologyIrCondition_redacted;
