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
import { aggregateObjectSetV2 } from "@osdk/gateway/requests";
import type { AggregateObjectsRequestV2, ObjectSet } from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import invariant from "tiny-invariant";
import {
  legacyToModernSingleAggregationResult,
  modernToLegacyAggregationClause,
  modernToLegacyGroupByClause,
  modernToLegacyWhereClause,
} from "../internal/conversions/index.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type {
  AggregationResultsWithGroups,
  AggregationsResults,
} from "../query/index.js";

export async function aggregateOrThrow<
  Q extends ObjectOrInterfaceDefinition,
  const AO extends AggregateOpts<Q, any>,
>(
  clientCtx: ClientContext<any>,
  objectType: Q,
  objectSet: ObjectSet = {
    type: "base",
    objectType: objectType["apiName"] as string,
  },
  req: AO,
): Promise<AggregationsResults<Q, AO>> {
  const body: AggregateObjectsRequestV2 = {
    aggregation: modernToLegacyAggregationClause<AO["select"]>(
      req.select,
    ),
    groupBy: [],
    where: undefined,
  };

  if (req.groupBy) {
    body.groupBy = modernToLegacyGroupByClause(req.groupBy);
  }
  if (req.where) {
    body.where = modernToLegacyWhereClause(req.where);
  }
  const result = await aggregateObjectSetV2(
    createOpenApiRequest(
      clientCtx.stack,
      clientCtx.fetch,
    ),
    clientCtx.ontology.metadata.ontologyApiName,
    {
      objectSet,
      groupBy: body.groupBy,
      aggregation: body.aggregation,
    },
  );

  if (!req.groupBy) {
    invariant(
      result.data.length === 1,
      "no group by clause should mean only one data result",
    );

    return legacyToModernSingleAggregationResult<AO["select"]>(
      result.data[0],
    ) as any;
  }

  const ret: AggregationResultsWithGroups<Q, AO["select"], any> = result.data
    .map((entry) => {
      return {
        $group: entry.group as any,
        ...legacyToModernSingleAggregationResult(entry),
      };
    }) as any; // fixme

  return ret as any; // FIXME
}
