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

import type { AggregationGroupByV2 } from "@osdk/gateway/types";
import type { ObjectTypesFrom, OntologyDefinition } from "../../../ontology";
import type { AllGroupByValues, GroupByClause } from "../../query";

export function modernToLegacyGroupByClause<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(groupByClause: GroupByClause<O, K> | undefined) {
  if (!groupByClause) return [];

  return Object.entries(
    groupByClause as Record<string, AllGroupByValues>,
  ).flatMap<AggregationGroupByV2>(([field, type]) => {
    if (type === "exact") {
      return [{ type, field }];
    } else if (type.exactWithLimit) {
      return [
        {
          type: "exact",
          field,
          maxGroupCount: type.exactWithLimit,
        },
      ];
    } else {
      return [];
    }
  });
}
