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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { legacyToModernSingleAggregationResult } from "../internal/conversions/legacyToModernSingleAggregationResult.js";
import { modernToLegacyAggregationClause } from "../internal/conversions/modernToLegacyAggregationClause.js";
import { modernToLegacyGroupByClause } from "../internal/conversions/modernToLegacyGroupByClause.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { resolveBaseObjectSetType } from "../util/objectSetUtils.js";

/** @internal */
export async function aggregate(clientCtx, objectType, objectSet = resolveBaseObjectSetType(objectType), req) {
  resolveBaseObjectSetType(objectType);
  const body = {
    aggregation: modernToLegacyAggregationClause(req.$select),
    groupBy: [],
    where: undefined
  };
  if (req.$groupBy) {
    body.groupBy = modernToLegacyGroupByClause(req.$groupBy);
  }
  const result = await OntologiesV2.OntologyObjectSets.aggregate(addUserAgentAndRequestContextHeaders(clientCtx, objectType), await clientCtx.ontologyRid, {
    objectSet,
    groupBy: body.groupBy,
    aggregation: body.aggregation
  });
  if (!req.$groupBy) {
    !(result.data.length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, "no group by clause should mean only one data result") : invariant(false) : void 0;
    return {
      ...aggregationToCountResult(result.data[0]),
      ...legacyToModernSingleAggregationResult(result.data[0])
    };
  }
  const ret = result.data.map(entry => {
    return {
      $group: entry.group,
      ...aggregationToCountResult(entry),
      ...legacyToModernSingleAggregationResult(entry)
    };
  }); // fixme

  return ret; // FIXME
}
function aggregationToCountResult(entry) {
  for (const aggregateResult of entry.metrics) {
    if (aggregateResult.name === "count") {
      return {
        $count: aggregateResult.value
      };
    }
  }
}
//# sourceMappingURL=aggregate.js.map