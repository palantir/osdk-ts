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
import type { ClientContext } from "@osdk/shared.net";
import { aggregate } from "../../../client/net/aggregate";
import type { ObjectSetDefinition } from "../../baseTypes";
import type { AggregateObjectsError } from "../../errors";
import type { Result } from "../../Result";
import type {
  AggregationClause,
  AggregationResult,
  BucketGroup,
  BucketValue,
  InternalBucketing,
  Metrics,
  MetricValue,
} from "./Aggregations";

export class ComputeStep<
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics | MetricValue,
> implements AggregationComputeStep<TBucketGroup, TMetrics> {
  #client: ClientContext<OntologyDefinition<any>>;
  #definition: ObjectSetDefinition;
  #aggregationClauses: AggregationClause[];
  #groupByClauses: Array<InternalBucketing<string, BucketValue>>;

  constructor(
    client: ClientContext<OntologyDefinition<any>>,
    definition: ObjectSetDefinition,
    groupByClauses: Array<InternalBucketing<string, BucketValue>> = [],
    aggregationClauses: AggregationClause[] = [],
  ) {
    this.#client = client;
    this.#definition = definition;
    this.#groupByClauses = groupByClauses;
    this.#aggregationClauses = aggregationClauses;
  }

  public async compute(): Promise<
    Result<AggregationResult<TBucketGroup, TMetrics>, AggregateObjectsError>
  > {
    const result = await aggregate<TBucketGroup, TMetrics>(
      this.#client,
      {
        objectSet: this.#definition,
        aggregation: this.#aggregationClauses,
        groupBy: this.#groupByClauses,
      },
    );

    return result;
  }
}

export interface AggregationComputeStep<
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics | MetricValue,
> {
  /** Compute the specified aggregation(s) */
  compute(): Promise<
    Result<AggregationResult<TBucketGroup, TMetrics>, AggregateObjectsError>
  >;
}
