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

import type { AndConditionModification } from "./AndConditionModification.js";
import type { ComparisonConditionModification } from "./ComparisonConditionModification.js";
import type { MarkingsConditionModification } from "./MarkingsConditionModification.js";
import type { NotConditionModification } from "./NotConditionModification.js";
import type { OrConditionModification } from "./OrConditionModification.js";
import type { Redacted } from "./Redacted.js";
import type { RegexConditionModification } from "./RegexConditionModification.js";
import type { TrueCondition } from "./TrueCondition.js";
export interface ConditionModification_true {
  type: "true";
  true: TrueCondition;
}

export interface ConditionModification_or {
  type: "or";
  or: OrConditionModification;
}

export interface ConditionModification_and {
  type: "and";
  and: AndConditionModification;
}

export interface ConditionModification_not {
  type: "not";
  not: NotConditionModification;
}

export interface ConditionModification_comparison {
  type: "comparison";
  comparison: ComparisonConditionModification;
}

export interface ConditionModification_markings {
  type: "markings";
  markings: MarkingsConditionModification;
}

export interface ConditionModification_regex {
  type: "regex";
  regex: RegexConditionModification;
}

export interface ConditionModification_redacted {
  type: "redacted";
  redacted: Redacted;
}
export type ConditionModification =
  | ConditionModification_true
  | ConditionModification_or
  | ConditionModification_and
  | ConditionModification_not
  | ConditionModification_comparison
  | ConditionModification_markings
  | ConditionModification_regex
  | ConditionModification_redacted;
