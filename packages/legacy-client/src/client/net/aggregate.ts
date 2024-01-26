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

import type { OntologyDefinition } from "@osdk/api";
import { aggregateObjectSetV2 } from "@osdk/gateway/requests";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type { ObjectSetDefinition } from "../baseTypes";
import type { AggregateObjectsError } from "../errors";
import {
  AggregateObjectsErrorHandler,
  handleAggregateObjectsError,
} from "../errors";
import type {
  AggregationClause,
  AggregationResult,
  BucketGroup,
  BucketKey,
  BucketValue,
  InternalBucketing,
  Metrics,
  MetricValue,
} from "../objectSets/aggregations";
import { convertToAggregationResult } from "../objectSets/aggregations/aggregationConverters";
import {
  mapAggregation,
  mapBucketing,
} from "../objectSets/aggregations/AggregationUtils";
import type { Result } from "../Result";
import { wrapResult } from "./util/wrapResult";

export function aggregate<
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics | MetricValue,
>(client: ClientContext<OntologyDefinition<any>>, body: {
  objectSet: ObjectSetDefinition;
  aggregation: AggregationClause[];
  groupBy?: Array<InternalBucketing<BucketKey, BucketValue>>;
}): Promise<
  Result<AggregationResult<TBucketGroup, TMetrics>, AggregateObjectsError>
> {
  return wrapResult(
    async () => {
      const remappedGroups = body.groupBy
        ? body.groupBy.map(group => mapBucketing(group))
        : [];

      const remappedAggregation = body.aggregation.map(aggregationClause =>
        mapAggregation(aggregationClause)
      );

      const response = await aggregateObjectSetV2(
        createOpenApiRequest(
          client.stack,
          client.fetch,
        ),
        client.ontology.metadata.ontologyApiName,
        {
          objectSet: body.objectSet,
          groupBy: remappedGroups,
          aggregation: remappedAggregation,
        },
      );
      const processedResponse = convertToAggregationResult<
        TBucketGroup,
        TMetrics
      >(response, body);
      return processedResponse;
    },
    e =>
      handleAggregateObjectsError(
        new AggregateObjectsErrorHandler(),
        e,
        e.parameters,
      ),
  );
}
