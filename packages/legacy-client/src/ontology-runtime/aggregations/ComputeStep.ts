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

import type { Auth } from "../../oauth-client";
import type { BaseObjectType, ObjectSetDefinition } from "../baseTypes";
import type { OrderByClause } from "../filters";
import {
  type AggregateObjectsError,
  type OntologyMetadata,
  OntologyProvider,
  type Result,
} from "../ontologyProvider";
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
  constructor(
    private auth: Auth,
    private stack: string,
    private objectType: BaseObjectType,
    private ontologyMetadata: OntologyMetadata,
    private definition: ObjectSetDefinition,
    protected groupByClauses: Array<InternalBucketing<string, BucketValue>> =
      [],
    private aggregationClauses: AggregationClause[] = [],
  ) {
  }

  public async compute(): Promise<
    Result<AggregationResult<TBucketGroup, TMetrics>, AggregateObjectsError>
  > {
    const provider = new OntologyProvider(
      this.auth,
      this.stack,
      this.ontologyMetadata,
    );

    const result = await provider.aggregate<TBucketGroup, TMetrics>(
      {
        objectSet: this.definition,
        aggregation: this.aggregationClauses,
        groupBy: this.groupByClauses,
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
