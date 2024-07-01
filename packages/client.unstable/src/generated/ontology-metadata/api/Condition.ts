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

import type { AndCondition } from "./AndCondition.js";
import type { ComparisonCondition } from "./ComparisonCondition.js";
import type { MarkingsCondition } from "./MarkingsCondition.js";
import type { NotCondition } from "./NotCondition.js";
import type { OrCondition } from "./OrCondition.js";
import type { Redacted } from "./Redacted.js";
import type { RegexCondition } from "./RegexCondition.js";
import type { TrueCondition } from "./TrueCondition.js";
export interface Condition_true {
  type: "true";
  true: TrueCondition;
}

export interface Condition_or {
  type: "or";
  or: OrCondition;
}

export interface Condition_and {
  type: "and";
  and: AndCondition;
}

export interface Condition_not {
  type: "not";
  not: NotCondition;
}

export interface Condition_comparison {
  type: "comparison";
  comparison: ComparisonCondition;
}

export interface Condition_markings {
  type: "markings";
  markings: MarkingsCondition;
}

export interface Condition_regex {
  type: "regex";
  regex: RegexCondition;
}

export interface Condition_redacted {
  type: "redacted";
  redacted: Redacted;
}
export type Condition =
  | Condition_true
  | Condition_or
  | Condition_and
  | Condition_not
  | Condition_comparison
  | Condition_markings
  | Condition_regex
  | Condition_redacted;
