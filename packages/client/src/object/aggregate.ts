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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type {
  AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationResultsWithGroups,
  AggregationsResults,
} from "@osdk/client.api";
import { OntologiesV2 } from "@osdk/internal.foundry";
import type {
  AggregateObjectsRequestV2,
  AggregateObjectsResponseV2,
  ObjectSet,
} from "@osdk/internal.foundry.core";
import invariant from "tiny-invariant";
import { legacyToModernSingleAggregationResult } from "../internal/conversions/legacyToModernSingleAggregationResult.js";
import { modernToLegacyAggregationClause } from "../internal/conversions/modernToLegacyAggregationClause.js";
import { modernToLegacyGroupByClause } from "../internal/conversions/modernToLegacyGroupByClause.js";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import type { ArrayElement } from "../util/ArrayElement.js";

/** @deprecated use `aggregate` @internal */
export async function aggregateOrThrow<
  Q extends ObjectOrInterfaceDefinition,
  AO extends AggregateOpts<Q>,
>(
  clientCtx: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
  req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Q, AO>,
): Promise<AggregationsResults<Q, AO>> {
  return aggregate<Q, AO>(clientCtx, objectType, objectSet, req);
}

/** @internal */
export async function aggregate<
  Q extends ObjectOrInterfaceDefinition,
  AO extends AggregateOpts<Q>,
>(
  clientCtx: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
  req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Q, AO>,
): Promise<AggregationsResults<Q, AO>> {
  const body: AggregateObjectsRequestV2 = {
    aggregation: modernToLegacyAggregationClause<AO["$select"]>(
      req.$select,
    ),
    groupBy: [],
    where: undefined,
  };

  if (req.$groupBy) {
    body.groupBy = modernToLegacyGroupByClause(req.$groupBy);
  }
  if (req.$where) {
    body.where = modernToLegacyWhereClause(req.$where);
  }
  const result = await OntologiesV2.OntologyObjectSets.aggregateObjectSetV2(
    addUserAgentAndRequestContextHeaders(clientCtx, objectType),
    await clientCtx.ontologyRid,
    {
      objectSet,
      groupBy: body.groupBy,
      aggregation: body.aggregation,
    },
  );

  if (!req.$groupBy) {
    invariant(
      result.data.length === 1,
      "no group by clause should mean only one data result",
    );

    return {
      ...aggregationToCountResult(result.data[0]),
      ...legacyToModernSingleAggregationResult(
        result.data[0],
      ),
    } as any;
  }

  const ret: AggregationResultsWithGroups<Q, AO["$select"], any> = result.data
    .map((entry) => {
      return {
        $group: entry.group as any,
        ...aggregationToCountResult(entry),
        ...legacyToModernSingleAggregationResult(entry),
      };
    }) as any; // fixme

  return ret as any; // FIXME
}

function aggregationToCountResult(
  entry: ArrayElement<AggregateObjectsResponseV2["data"]>,
): { $count: number } | undefined {
  for (const aggregateResult of entry.metrics) {
    if (aggregateResult.name === "count") {
      return { $count: aggregateResult.value };
    }
  }
}
