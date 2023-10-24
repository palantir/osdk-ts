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
import type {
  AggregateObjectsError,
  OntologyMetadata,
  Result,
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
  #private;
  private stack;
  private objectType;
  private ontologyMetadata;
  private definition?;
  protected groupByClauses: Array<InternalBucketing<string, BucketValue>>;
  private aggregationClauses;
  private orderByClauses;
  constructor(
    authClient: Auth,
    stack: string,
    objectType: BaseObjectType,
    ontologyMetadata: OntologyMetadata,
    definition?: ObjectSetDefinition,
    groupByClauses?: Array<InternalBucketing<string, BucketValue>>,
    aggregationClauses?: AggregationClause[],
    orderByClauses?: OrderByClause[],
  ) {
    throw new Error("not implemented");
  }

  compute(): Promise<
    Result<AggregationResult<TBucketGroup, TMetrics>, AggregateObjectsError>
  > {
    throw new Error("not implemented");
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
