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

import type { BaseBucket, LocalDate, Timestamp } from "../../baseTypes";
import type { AggregationComputeStep } from "./ComputeStep";
import type { CountOperation } from "./CountOperation";
import type { GroupKeyType } from "./groupBy/GroupKeyType";
import type { MetricValueType, MultipleAggregatableProperty } from "./metrics";

export type Double = number;
export type Rangeable = Double | Timestamp | LocalDate;
export type MetricValue = Double | Timestamp | LocalDate;
export type Date = Timestamp | LocalDate;
/**
 * Range from `startValue` (inclusive) to `endValue` (exclusive) for bucketing and searching
 */
export type Range<T extends Rangeable> = {
  startValue: T;
  endValue?: T;
} | {
  startValue?: T;
  endValue: T;
};
export enum TimeUnit {
  MILLISECONDS = "MILLISECONDS",
  SECONDS = "SECONDS",
  MINUTES = "MINUTES",
  HOURS = "HOURS",
  DAYS = "DAYS",
  WEEKS = "WEEKS",
  MONTHS = "MONTHS",
  YEARS = "YEARS",
  QUARTERS = "QUARTERS",
}
export type Duration<_T extends Timestamp | LocalDate> = {
  unit: TimeUnit;
  value: number;
};
export type BucketKey = string;
export type BucketValue =
  | string
  | boolean
  | Double
  | Range<Rangeable>
  | Duration<Date>
  | Date;
export interface Bucketing<
  _TPropertyName extends BucketKey,
  _TBucketValue extends BucketValue,
> {
  type: "Bucketing";
}
export type BucketGroup = Record<string, BucketValue>;
export type Metrics = Record<string, MetricValue>;
export interface AggregatableProperty<_TResult extends MetricValue = Double> {
  type: "AggregatableProperty";
  propertyApiName: string;
  metricValueType: MetricValueType;
}

export interface MultipleAggregationsOperations<
  _TResult extends MetricValue = Double,
> {
  type: "MultipleAggregationsOperations";
  propertyApiName: string;
  metricValueType: MetricValueType;
  operation: "max" | "min" | "avg" | "sum" | "approximateDistinct";
}

export type AggregatableProperties = Record<
  string,
  AggregatableProperty<MetricValue>
>;
export type BucketedAggregationResponse<
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics,
> = Array<
  {
    [key in keyof TMetrics]: TMetrics[key];
  } & {
    group: TBucketGroup;
  }
>;
export type AggregationGroup<
  TMetrics extends Metrics | MetricValue,
  TBucketGroup extends BucketGroup,
> =
  & {
    [key in keyof TMetrics]: TMetrics[key];
  }
  & {
    group: keyof TBucketGroup extends never ? never : TBucketGroup;
  };
export type AggregationResult<
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics | MetricValue,
> = TMetrics extends MetricValue ? TMetrics : {
  excludedItems: number;
  groups: Array<AggregationGroup<TMetrics, TBucketGroup>>;
};
export type AggregationBuilderResult<
  T,
  TMultipleAggregationProperties,
> = {
  [key: string]: T extends CountOperation ? CountOperation
    : MultipleAggregationsOperations<
      TMultipleAggregationProperties[
        keyof TMultipleAggregationProperties
      ] extends MultipleAggregatableProperty<infer TResult> ? TResult : never
    >;
};
export interface AggregatableObjectSetStep<
  TAggregatableProperties,
  TMultipleAggregationProperties,
  TBucketableProperties,
  TBucketGroup extends BucketGroup = {},
> extends
  GroupedTerminalAggregationOperations<
    TAggregatableProperties,
    TMultipleAggregationProperties,
    TBucketGroup
  >
{
  /**
   * Group the results by a specified property
   *
   * @param propertySelector a function that selects the property to group by
   */
  groupBy<TGroupKey extends BucketValue, TPropertyName extends string>(
    propertySelector: (
      obj: TBucketableProperties,
    ) => Bucketing<TPropertyName, TGroupKey>,
  ): AggregatableObjectSetStep<
    TAggregatableProperties,
    TMultipleAggregationProperties,
    TBucketableProperties,
    & TBucketGroup
    & {
      [K in TPropertyName]: TGroupKey;
    }
  >;
}
export interface GroupedTerminalAggregationOperations<
  TAggregatableProperties,
  TMultipleAggregationProperties,
  TBucketGroup extends BucketGroup = {},
> {
  /**
   * Computes the count of total objects.
   */
  count(): AggregationComputeStep<
    TBucketGroup,
    keyof TBucketGroup extends never ? Double : {
      count: Double;
    }
  >;
  /**
   * Compute the maximum value of the specified property.
   *
   * @param propertySelector A function that selects the property to find the maximum of.
   */
  max<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<
    TBucketGroup,
    keyof TBucketGroup extends never ? TResult : {
      max: TResult;
    }
  >;
  /**
   * Computes the minimum of the specified property.
   *
   * @param propertySelector A function that selects the property to compute the minimum of.
   */
  min<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<
    TBucketGroup,
    keyof TBucketGroup extends never ? TResult : {
      min: TResult;
    }
  >;
  /**
   * Computes approximate count of distinct values of the specified property.
   *
   * @param propertySelector A function that selects the property to count.
   */
  approximateDistinct(
    propertySelector: (
      obj: TAggregatableProperties,
    ) => AggregatableProperty<any>,
  ): AggregationComputeStep<{}, Double>;
  /**
   * Compute the average of the specified property.
   *
   * @param propertySelector A function that selects the property to calculate the average of.
   */
  avg<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<
    TBucketGroup,
    keyof TBucketGroup extends never ? TResult : {
      sum: TResult;
    }
  >;
  /**
   * Compute the sum of the specified property.
   *
   * @param propertySelector A function that selects the property to calculate the sum of.
   */
  sum<TResult extends MetricValue>(
    propertySelector: (
      obj: AggregatablePropertiesForResult<
        TAggregatableProperties,
        MetricValue
      >,
    ) => AggregatableProperty<TResult>,
  ): AggregationComputeStep<
    TBucketGroup,
    keyof TBucketGroup extends never ? TResult : {
      sum: TResult;
    }
  >;
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
    TBucketGroup,
    {
      [K in keyof TAggregateResult]: TAggregateResult[K] extends
        MultipleAggregationsOperations<infer TResult> ? TResult : Double;
    }
  >;
}
export type BaseGroupBy<_T extends BucketValue> = {};

export interface BaseBucketing<
  TBucketKey extends BucketKey,
  TBucketValue extends BucketValue,
  Kind extends string,
> extends Bucketing<TBucketKey, TBucketValue> {
  kind: Kind;
  propertyApiName: string;
  keyDataType: GroupKeyType;
}

export interface ExactValueBucketing<
  TBucketKey extends BucketKey,
  TBucketValue extends BucketValue,
> extends BaseBucketing<TBucketKey, TBucketValue, "ExactValueBucketing"> {
  maxGroupCount?: number;
}
export interface RangeBucketing<
  TBucketKey extends BucketKey,
  TBucketValue extends Range<Rangeable>,
> extends BaseBucketing<TBucketKey, TBucketValue, "RangeBucketing"> {
  ranges: TBucketValue[];
}
export interface FixedWidthBucketing<
  TBucketKey extends BucketKey,
  TBucketValue extends Range<Rangeable>,
> extends BaseBucketing<TBucketKey, TBucketValue, "FixedWidthBucketing"> {
  fixedWidth: number;
}
export interface DurationBucketing<
  TBucketKey extends string,
  TBucketValue extends Date,
> extends BaseBucketing<TBucketKey, TBucketValue, "DurationBucketing"> {
  unit: TimeUnit;
  value: number;
}
export type AggregatablePropertyNamesForResult<
  TAggregatableProperties,
  TResult extends MetricValue,
> = {
  [P in keyof TAggregatableProperties]: TAggregatableProperties[P] extends
    AggregatableProperty<infer U> ? U extends TResult ? P : never : never;
}[keyof TAggregatableProperties];

export type AggregatablePropertiesForResult<
  TAggregatableProperties,
  TResult extends MetricValue,
> = Pick<
  TAggregatableProperties,
  AggregatablePropertyNamesForResult<TAggregatableProperties, TResult>
>;

export interface BucketedAggregation<
  TGroupKey extends BucketValue,
  TValue extends MetricValue = Double,
> {
  buckets: Array<BaseBucket<TGroupKey, TValue>>;
}
export interface AggregationClause {
  type: "max" | "min" | "avg" | "sum" | "count" | "approximateDistinct";
  field?: string;
  name: string;
  metricValueType: MetricValueType;
  namedAggregation: boolean;
}
export interface GroupByClause {
  type: string;
  field: string;
  [key: string]: any;
}
export type InternalBucketing<
  TBucketKey extends BucketKey,
  T extends BucketValue,
> =
  | ExactValueBucketing<TBucketKey, T>
  | (T extends Range<Rangeable>
    ? RangeBucketing<TBucketKey, T> | FixedWidthBucketing<TBucketKey, T>
    : never)
  | (T extends Date ? DurationBucketing<TBucketKey, T> : never);

export function assertBucketingInternal<
  TBucketKey extends BucketKey,
  T extends BucketValue,
>(
  bucketing: Bucketing<TBucketKey, T>,
): asserts bucketing is InternalBucketing<TBucketKey, T> {
  if (bucketing.type !== "Bucketing" || !(bucketing as any).kind) {
    throw new Error("The provided bucketing is not supported.");
  }
}

export type InternalBucketingVisitor<
  TBucketKey extends BucketKey,
  T extends BucketValue,
  R,
> = {
  onExactValue: (bucketing: ExactValueBucketing<TBucketKey, T>) => R;
  onRange: (
    bucketing: RangeBucketing<
      TBucketKey,
      T extends Range<Rangeable> ? T : never
    >,
  ) => R;
  onFixedWidth: (
    bucketing: FixedWidthBucketing<
      TBucketKey,
      T extends Range<Rangeable> ? T : never
    >,
  ) => R;
  onDuration: (
    bucketing: DurationBucketing<TBucketKey, T extends Date ? T : never>,
  ) => R;
};

export function visitInternalBucketing<
  TBucketKey extends BucketKey,
  T extends BucketValue,
  R,
>(
  bucketing: InternalBucketing<TBucketKey, T>,
  handlers: InternalBucketingVisitor<TBucketKey, T, R>,
): R {
  switch (bucketing.kind) {
    case "ExactValueBucketing":
      return handlers.onExactValue(bucketing);
    case "RangeBucketing":
      return handlers.onRange(
        bucketing as RangeBucketing<
          TBucketKey,
          T extends Range<Rangeable> ? T : never
        >,
      );
    case "FixedWidthBucketing":
      return handlers.onFixedWidth(
        bucketing as FixedWidthBucketing<
          TBucketKey,
          T extends Range<Rangeable> ? T : never
        >,
      );
    case "DurationBucketing":
      return handlers.onDuration(
        bucketing as DurationBucketing<TBucketKey, T extends Date ? T : never>,
      );
    default:
      // Exhaustive check to ensure all cases are handled
      const _: never = bucketing;
      throw new Error(`Unhandled bucketing: ${JSON.stringify(bucketing)}`);
  }
}

export interface QueryAggregation {
  key: any;
  value: any;
}

export interface NestedQueryAggregation {
  key: any;
  groups: Array<QueryAggregation>;
}

export interface QueryTwoDimensionalAggregation {
  groups: Array<QueryAggregation>;
}

export interface QueryThreeDimensionalAggregation {
  groups: Array<NestedQueryAggregation>;
}
