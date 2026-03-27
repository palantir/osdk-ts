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

import type { IntervalRule } from "@osdk/api";
import type { SearchJsonQueryV2 } from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";

type IntervalQueryRule = Extract<
  SearchJsonQueryV2,
  { type: "interval" }
>["rule"];

export function toIntervalQueryRule(
  rule: IntervalRule,
): IntervalQueryRule {
  if (rule.$match != null) {
    if (rule.$prefixOnLastTerm) {
      return {
        type: "prefixOnLastToken",
        query: rule.$match,
      };
    }
    return {
      type: "match",
      query: rule.$match,
      ordered: rule.$ordered,
      maxGaps: rule.$maxGaps,
    };
  }
  if (rule.$and != null) {
    return {
      type: "allOf",
      rules: rule.$and.map(toIntervalQueryRule),
      ordered: rule.$ordered,
      maxGaps: rule.$maxGaps,
    };
  }
  if (rule.$or != null) {
    return {
      type: "anyOf",
      rules: rule.$or.map(toIntervalQueryRule),
    };
  }
  if (rule.$fuzzy != null) {
    return {
      type: "fuzzy",
      term: rule.$fuzzy,
      fuzziness: rule.$fuzziness,
    };
  }

  const _: never = rule;
  invariant(false, "Unknown interval rule type");
}
