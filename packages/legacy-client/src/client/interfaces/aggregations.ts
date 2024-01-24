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

import type {
  LocalDate,
  OntologyObject,
  Timestamp,
} from "../baseTypes/index.js";
import type { BooleanGroupBy } from "../objectSets/aggregations/groupBy/BooleanGroupBy.js";
import type { LocalDateGroupBy } from "../objectSets/aggregations/groupBy/LocalDateGroupBy.js";
import type { NumericGroupBy } from "../objectSets/aggregations/groupBy/NumericGroupBy.js";
import type { StringGroupBy } from "../objectSets/aggregations/groupBy/StringGroupBy.js";
import type { TimestampGroupBy } from "../objectSets/aggregations/groupBy/TimestampGroupBy.js";
import type {
  AggregatableProperty,
  Bucketing,
  BucketKey,
  BucketValue,
  CountOperation,
  Double,
} from "../objectSets/aggregations/index.js";
import type { ApproximateDistinctCountAggregatableProperty } from "../objectSets/aggregations/metrics/ApproximateDistinctCountAggregatableProperty.js";
import type { MultipleAggregatableProperty } from "../objectSets/aggregations/metrics/MultipleAggregatableProperty.js";
import type { OmitMetadataProperties } from "./utils/OmitProperties.js";

export declare type ObjectTypesGroupByFunction<
  T extends OntologyObject,
  K extends BucketKey,
  V extends BucketValue,
> = (
  objectType: ObjectSetGroupByArg<T>,
) => Bucketing<K, V>;

export type GroupableProperty =
  | number
  | LocalDate
  | Timestamp
  | string
  | boolean;

type IsGroupableProperty<T> = NonNullable<T> extends GroupableProperty ? true
  : NonNullable<T> extends Array<infer U>
    ? U extends GroupableProperty ? true : false
  : false;

type GroupableProperties<T extends OntologyObject> = {
  [K in keyof T as IsGroupableProperty<T[K]> extends true ? K : never]: T[K];
};

export declare type ObjectSetGroupByArg<T extends OntologyObject> = {
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

export declare type ObjectSetAggregateArg<T extends OntologyObject> = {
  [
    K in keyof OmitMetadataProperties<
      AggregatableProperties<T>
    >
  ]: AggregationFromType<
    T[K]
  >;
};

export declare type ObjectSetMultipleAggregateArg<T extends OntologyObject> =
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

export type GroupByFromType<T, N extends string> = NonNullable<T> extends number
  ? NumericGroupBy<N>
  : T extends string ? StringGroupBy<N>
  : T extends LocalDate ? LocalDateGroupBy<N>
  : T extends Timestamp ? TimestampGroupBy<N>
  : T extends boolean ? BooleanGroupBy<N>
  : T extends Array<infer U> ? GroupByFromType<U, N>
  : never;

export type AggregationFromType<T> = NonNullable<T> extends number
  ? AggregatableProperty<Double>
  : NonNullable<T> extends boolean ? AggregatableProperty<Double>
  : NonNullable<T> extends LocalDate ? AggregatableProperty<LocalDate>
  : NonNullable<T> extends Timestamp ? AggregatableProperty<Timestamp>
  : AggregatableProperty<never>;

export type MultipleAggregationFromType<T> = NonNullable<T> extends number
  ? MultipleAggregatableProperty<Double>
  : NonNullable<T> extends boolean ? MultipleAggregatableProperty<Double>
  : NonNullable<T> extends LocalDate ? MultipleAggregatableProperty<LocalDate>
  : NonNullable<T> extends Timestamp ? MultipleAggregatableProperty<Timestamp>
  : ApproximateDistinctCountAggregatableProperty;
