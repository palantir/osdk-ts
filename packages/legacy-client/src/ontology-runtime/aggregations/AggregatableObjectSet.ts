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
import type { OntologyMetadata } from "../ontologyProvider";
import type {
  AggregatableObjectSetStep,
  AggregatablePropertiesForResult,
  AggregatableProperty,
  AggregationBuilderResult,
  Bucketing,
  BucketKey,
  BucketValue,
  Double,
  InternalBucketing,
  MetricValue,
  MultipleAggregationsOperations,
} from "./Aggregations";
import type { AggregationComputeStep } from "./ComputeStep";
import type { CountOperation } from "./CountOperation";
export abstract class AggregatableObjectSet<
  TAggregatableProperties,
  TMultipleAggregationProperties extends
    & Omit<TMultipleAggregationProperties, "count">
    & {
      count: () => CountOperation;
    },
  TGroupableProperties,
> implements
  AggregatableObjectSetStep<
    TAggregatableProperties,
    TMultipleAggregationProperties,
    TGroupableProperties
  >
{
  #private;
  private stack;
  protected objectTypeProvider: () => BaseObjectType;
  private ontologyMetadata;
  private aggregatableProperties;
  private multipleAggregationProperties;
  private groupableProperties;
  protected definition?: ObjectSetDefinition;
  protected orderByClauses: OrderByClause[];
  protected groupByClauses: Array<InternalBucketing<BucketKey, BucketValue>>;
  constructor(
    authClient: Auth,
    stack: string,
    objectTypeProvider: () => BaseObjectType,
    ontologyMetadata: OntologyMetadata,
    aggregatableProperties: TAggregatableProperties,
    multipleAggregationProperties: TMultipleAggregationProperties,
    groupableProperties: TGroupableProperties,
    definition?: ObjectSetDefinition,
    orderByClauses?: OrderByClause[],
    groupByClauses?: Array<InternalBucketing<BucketKey, BucketValue>>,
  ) {
    throw new Error("not implemented");
  }

  groupBy<TBucketKey extends BucketKey, TBucketValue extends BucketValue>(
    propertySelector: (
      obj: TGroupableProperties,
    ) => Bucketing<TBucketKey, TBucketValue>,
  ): AggregatableObjectSetStep<
    TAggregatableProperties,
    TMultipleAggregationProperties,
    TGroupableProperties,
    {
      [K in TBucketKey]: TBucketValue;
    }
  > {
    throw new Error("not implemented");
  }

  count(): AggregationComputeStep<{}, number> {
    throw new Error("not implemented");
  }

  max<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<{}, TResult> {
    throw new Error("not implemented");
  }

  min<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<{}, TResult> {
    throw new Error("not implemented");
  }

  approximateDistinct(
    propertySelector: (
      obj: TAggregatableProperties,
    ) => AggregatableProperty<any>,
  ): AggregationComputeStep<{}, Double> {
    throw new Error("not implemented");
  }

  avg<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<{}, TResult> {
    throw new Error("not implemented");
  }

  sum<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<{}, TResult> {
    throw new Error("not implemented");
  }

  aggregate<
    TOperation extends
      | MultipleAggregationsOperations<MetricValue>
      | CountOperation,
    TAggregateResult extends AggregationBuilderResult<
      TOperation,
      TMultipleAggregationProperties
    >,
  >(
    aggregateBuilder: (
      aggregate: TMultipleAggregationProperties & {
        count: () => CountOperation;
      },
    ) => TAggregateResult,
  ): AggregationComputeStep<
    {},
    {
      [K in keyof TAggregateResult]: TAggregateResult[K] extends
        MultipleAggregationsOperations<infer TResult> ? TResult : Double;
    }
  > {
    throw new Error("not implemented");
  }
}
