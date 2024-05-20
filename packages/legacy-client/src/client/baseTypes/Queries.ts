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
  BucketValue,
  Range,
  Rangeable,
} from "../objectSets/aggregations/index.js";

export type QueryResponse<T> = {
  value: T;
};

export interface BaseBucket<K, V> {
  key: K;
  value: V;
}

export type NestedBucket<TGroupKey, TSegmentKey, TValue extends BucketValue> =
  BaseBucket<
    TGroupKey,
    Array<BaseBucket<TSegmentKey, TValue>>
  >;

export type QueryBucketKey = string | boolean | Range<Rangeable>;

export interface TwoDimensionalAggregation<
  TGroupKey extends QueryBucketKey,
  TValue extends BucketValue = number,
> {
  groups: Array<BaseBucket<TGroupKey, TValue>>;
}

export interface ThreeDimensionalAggregation<
  TGroupKey extends QueryBucketKey,
  TSegmentKey extends QueryBucketKey,
  TValue extends BucketValue = number,
> {
  groups: Array<NestedBucket<TGroupKey, TSegmentKey, TValue>>;
}
