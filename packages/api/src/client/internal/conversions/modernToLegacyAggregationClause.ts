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

import type { Aggregation } from "@osdk/gateway/types";
import type { ObjectTypesFrom, OntologyDefinition } from "../../../ontology";
import type { AggregationClause } from "../../query";

export function modernToLegacyAggregationClause<
  T extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<T>,
  AC extends AggregationClause<T, K>,
>(select: AC) {
  return Object.entries(select).flatMap<Aggregation>(([k, v]) => {
    if (Array.isArray(v)) {
      return v.map((v2) => {
        return {
          type: v2,
          name: `${k}.${v2}`,
          field: k,
        };
      });
    } else {
      return [
        {
          type: v as "min" | "max" | "sum" | "avg" | "approximateDistinct", // FIXME v has additional possible values
          name: `${k}.${v}`,
          field: k,
        },
      ];
    }
  });
}
