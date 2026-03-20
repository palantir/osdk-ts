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

type IntervalQueryRule = Extract<
  SearchJsonQueryV2,
  { type: "interval" }
>["rule"];

export function toIntervalQueryRule(
  rule: IntervalRule,
): IntervalQueryRule {
  switch (rule.type) {
    case "match":
      return rule;
    case "startsWith":
      return {
        ...rule,
        type: "prefixOnLastToken",
      };
    case "and": {
      return {
        ...rule,
        type: "allOf",
        rules: rule.rules.map(toIntervalQueryRule),
      };
    }
    case "or": {
      return {
        ...rule,
        type: "anyOf",
        rules: rule.rules.map(toIntervalQueryRule),
      };
    }
    case "fuzzy":
      return rule;
  }
}
