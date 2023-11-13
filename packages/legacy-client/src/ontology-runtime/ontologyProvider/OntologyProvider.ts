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

import type { OntologyDefinition, ThinClient } from "@osdk/api";
import { createOpenApiRequest } from "@osdk/api";
import { aggregateObjectSetV2 } from "@osdk/gateway/requests";

import type {
  AggregationClause,
  AggregationResult,
  BucketGroup,
  BucketKey,
  BucketValue,
  InternalBucketing,
  Metrics,
  MetricValue,
} from "../aggregations";
import { convertToAggregationResult } from "../aggregations/aggregationConverters";
import type { ObjectSetDefinition, TimeSeriesPoint } from "../baseTypes";

import { mapAggregation, mapBucketing } from "./AggregationUtils";
import { wrapResult } from "./calls/util/wrapResult";
import {
  AggregateObjectsErrorHandler,
  handleAggregateObjectsError,
} from "./ErrorHandlers";
import type { AggregateObjectsError } from "./Errors";
import type { OntologyObjectFactory } from "./OntologyObjectFactory";

import type { Result } from "./Result";

export class OntologyProvider {
  #client: ThinClient<OntologyDefinition<any>>;
  #objectFactory?: OntologyObjectFactory;

  constructor(
    client: ThinClient<OntologyDefinition<any>>,
    objectFactory?: OntologyObjectFactory,
    // TODO contextPath for createOpenApiRequest?
  ) {
    this.#client = client;
    this.#objectFactory = objectFactory;
  }

  aggregate<
    TBucketGroup extends BucketGroup,
    TMetrics extends Metrics | MetricValue,
  >(body: {
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
          createOpenApiRequest(this.#client.stack, this.#client.fetch),
          this.#client.ontology.metadata.ontologyApiName,
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

  private async processStream<T extends string | number>(
    streamIterator: AsyncGenerator<any, any, unknown>,
  ): Promise<any[]> {
    const allPoints: Array<TimeSeriesPoint<T>> = [];
    for await (const points of streamIterator) {
      Array.prototype.push.apply(allPoints, points);
    }
    return allPoints;
  }
}
