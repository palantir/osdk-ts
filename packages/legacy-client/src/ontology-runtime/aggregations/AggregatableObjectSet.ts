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
import type { OntologyMetadata } from "../ontologyProvider";
import { isMultipleAggregationOperation } from ".";
import {
  type AggregatableObjectSetStep,
  type AggregatablePropertiesForResult,
  type AggregatableProperty,
  type AggregationBuilderResult,
  assertBucketingInternal,
  type Bucketing,
  type BucketKey,
  type BucketValue,
  type Double,
  type InternalBucketing,
  type MetricValue,
  type MultipleAggregationsOperations,
} from "./Aggregations";
import { type AggregationComputeStep, ComputeStep } from "./ComputeStep";
import { type CountOperation, isCountOperation } from "./CountOperation";
import { MetricValueType } from "./metrics";

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
  #auth: Auth;
  #stack: string;
  #objectType: BaseObjectType;
  #ontologyMetadata: OntologyMetadata;
  #aggregatableProperties: TAggregatableProperties;
  #multipleAggregationProperties: TMultipleAggregationProperties;
  #groupableProperties: TGroupableProperties;

  constructor(
    auth: Auth,
    stack: string,
    objectType: BaseObjectType,
    ontologyMetadata: OntologyMetadata,
    aggregatableProperties: TAggregatableProperties,
    multipleAggregationProperties: TMultipleAggregationProperties,
    groupableProperties: TGroupableProperties,
    protected definition: ObjectSetDefinition,
    protected groupByClauses: Array<InternalBucketing<BucketKey, BucketValue>> =
      [],
  ) {
    this.#auth = auth;
    this.#stack = stack;
    this.#objectType = objectType;
    this.#ontologyMetadata = ontologyMetadata;
    this.#aggregatableProperties = aggregatableProperties;
    this.#multipleAggregationProperties = multipleAggregationProperties;
    this.#groupableProperties = groupableProperties;
  }

  public groupBy<
    TBucketKey extends BucketKey,
    TBucketValue extends BucketValue,
  >(
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
    const groupByClause = propertySelector(this.#groupableProperties);
    assertBucketingInternal(groupByClause);
    this.groupByClauses.push(
      groupByClause as InternalBucketing<BucketKey, BucketValue>,
    );
    // @ts-ignore
    return this;
  }

  public count(): AggregationComputeStep<{}, number> {
    return new ComputeStep(
      this.#auth,
      this.#stack,
      this.#objectType,
      this.#ontologyMetadata,
      this.definition,
      this.groupByClauses,
      [
        {
          type: "count",
          name: "count",
          metricValueType: MetricValueType.NUMERIC,
          namedAggregation: true,
        },
      ],
    );
  }

  public max<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<{}, TResult> {
    const selectedProperty = propertySelector(this.#aggregatableProperties);
    return new ComputeStep(
      this.#auth,
      this.#stack,
      this.#objectType,
      this.#ontologyMetadata,
      this.definition,
      this.groupByClauses,
      [
        {
          type: "max",
          name: "max",
          field: selectedProperty.propertyApiName,
          metricValueType: selectedProperty.metricValueType,
          namedAggregation: true,
        },
      ],
    );
  }

  public min<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<{}, TResult> {
    const selectedProperty = propertySelector(this.#aggregatableProperties);
    return new ComputeStep(
      this.#auth,
      this.#stack,
      this.#objectType,
      this.#ontologyMetadata,
      this.definition,
      this.groupByClauses,
      [
        {
          type: "min",
          name: "min",
          field: selectedProperty.propertyApiName,
          metricValueType: selectedProperty.metricValueType,
          namedAggregation: true,
        },
      ],
    );
  }

  public approximateDistinct(
    propertySelector: (
      obj: TAggregatableProperties,
    ) => AggregatableProperty<any>,
  ): AggregationComputeStep<{}, Double> {
    const selectedProperty = propertySelector(this.#aggregatableProperties);
    return new ComputeStep(
      this.#auth,
      this.#stack,
      this.#objectType,
      this.#ontologyMetadata,
      this.definition,
      this.groupByClauses,
      [
        {
          type: "approximateDistinct",
          name: "distinctCount",
          field: selectedProperty.propertyApiName,
          metricValueType: MetricValueType.NUMERIC,
          namedAggregation: true,
        },
      ],
    );
  }

  public avg<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<{}, TResult> {
    const selectedProperty = propertySelector(this.#aggregatableProperties);
    return new ComputeStep(
      this.#auth,
      this.#stack,
      this.#objectType,
      this.#ontologyMetadata,
      this.definition,
      this.groupByClauses,
      [
        {
          type: "avg",
          name: "avg",
          field: selectedProperty.propertyApiName,
          metricValueType: selectedProperty.metricValueType,
          namedAggregation: true,
        },
      ],
    );
  }

  public sum<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<{}, TResult> {
    const selectedProperty = propertySelector(this.#aggregatableProperties);
    return new ComputeStep(
      this.#auth,
      this.#stack,
      this.#objectType,
      this.#ontologyMetadata,
      this.definition,
      this.groupByClauses,
      [
        {
          type: "sum",
          name: "sum",
          field: selectedProperty.propertyApiName,
          metricValueType: selectedProperty.metricValueType,
          namedAggregation: true,
        },
      ],
    );
  }

  public aggregate<
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
        MultipleAggregationsOperations<infer TResult> ? TResult
        : Double;
    }
  > {
    const aggregate = aggregateBuilder(this.#multipleAggregationProperties);
    return new ComputeStep(
      this.#auth,
      this.#stack,
      this.#objectType,
      this.#ontologyMetadata,
      this.definition,
      this.groupByClauses,
      Object.keys(aggregate).map(key => {
        const aggregation = aggregate[key]!;
        if (isCountOperation(aggregation)) {
          return {
            type: aggregation.operation,
            name: key,
            metricValueType: MetricValueType.NUMERIC,
            namedAggregation: false,
          };
        }

        if (isMultipleAggregationOperation(aggregation)) {
          return {
            type: aggregation.operation,
            name: key,
            field: aggregation.propertyApiName,
            metricValueType: aggregation.metricValueType,
            namedAggregation: false,
          };
        }

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(
          `Unknown aggregation type: ${(aggregation as any).type}`,
        );
      }),
    );
  }
}
