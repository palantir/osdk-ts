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

import type { LocalDate, OntologyObject, Timestamp } from "../baseTypes";
import type {
  AggregatableProperty,
  ApproximateDistinctCountAggregatableProperty,
  BooleanGroupBy,
  Bucketing,
  BucketKey,
  BucketValue,
  CountOperation,
  Double,
  LocalDateGroupBy,
  MultipleAggregatableProperty,
  NumericGroupBy,
  StringGroupBy,
  TimestampGroupBy,
} from "../objectSets/aggregations";
import type { OmitMetadataProperties } from "./utils/OmitProperties";

export declare type ObjectTypesGroupByFunction<
  T extends OntologyObject,
  K extends BucketKey,
  V extends BucketValue,
> = (
  objectType: GroupBySelections<T>,
) => Bucketing<K, V>;

type groupableProperties = number | LocalDate | Timestamp | string | boolean;

type IsGroupableProperty<T> = NonNullable<T> extends groupableProperties ? true
  : false;

type GroupableProperties<T extends OntologyObject> = {
  [K in keyof T as IsGroupableProperty<T[K]> extends true ? K : never]: T[K];
};

export declare type GroupBySelections<T extends OntologyObject> = {
  [
    K in keyof OmitMetadataProperties<
      GroupableProperties<T>
    >
  ]: GroupByFromType<
    T[K],
    K & string
  >;
};

type IsAggregatableProperty<T> = NonNullable<T> extends
  number | LocalDate | Timestamp | string | boolean ? true : false;

type AggregatableProperties<T extends OntologyObject> = {
  [K in keyof T as IsAggregatableProperty<T[K]> extends true ? K : never]: T[K];
};

export declare type AggregateSelection<T extends OntologyObject> = {
  [
    K in keyof OmitMetadataProperties<
      AggregatableProperties<T>
    >
  ]: AggregationFromType<
    T[K]
  >;
};

export declare type MultipleAggregateSelection<T extends OntologyObject> =
  & {
    [
      K in keyof OmitMetadataProperties<
        AggregatableProperties<T>
      >
    ]: MultipleAggregationFromType<
      T[K]
    >;
  }
  & {
    count: () => CountOperation;
  };

type GroupByFromType<T, N extends string> = NonNullable<T> extends number
  ? NumericGroupBy<N>
  : T extends string ? StringGroupBy<N>
  : T extends LocalDate ? LocalDateGroupBy<N>
  : T extends Timestamp ? TimestampGroupBy<N>
  : T extends boolean ? BooleanGroupBy<N>
  : never;

type AggregationFromType<T> = NonNullable<T> extends number
  ? AggregatableProperty<Double>
  : NonNullable<T> extends boolean ? AggregatableProperty<Double>
  : NonNullable<T> extends LocalDate ? AggregatableProperty<LocalDate>
  : NonNullable<T> extends Timestamp ? AggregatableProperty<Timestamp>
  : AggregatableProperty<never>;

type MultipleAggregationFromType<T> = NonNullable<T> extends number
  ? MultipleAggregatableProperty<Double>
  : NonNullable<T> extends boolean ? MultipleAggregatableProperty<Double>
  : NonNullable<T> extends LocalDate ? MultipleAggregatableProperty<LocalDate>
  : NonNullable<T> extends Timestamp ? MultipleAggregatableProperty<Timestamp>
  : ApproximateDistinctCountAggregatableProperty;
