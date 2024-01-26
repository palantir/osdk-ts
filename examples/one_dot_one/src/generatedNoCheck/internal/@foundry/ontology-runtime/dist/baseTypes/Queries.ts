import { BucketValue } from '../aggregations';

import type { QueryResponse as OG_QueryResponse } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type QueryResponse<T> = OG_QueryResponse<T>;

import type { BaseBucket as OG_BaseBucket } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type BaseBucket<K, V> = OG_BaseBucket<K, V>;

import type { NestedBucket as OG_NestedBucket } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type NestedBucket<TGroupKey, TSegmentKey, TValue extends BucketValue> = OG_NestedBucket<
  TGroupKey,
  TSegmentKey,
  TValue
>;

import type { TwoDimensionalAggregation as OG_TwoDimensionalAggregation } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type TwoDimensionalAggregation<
  TGroupKey extends QueryBucketKey,
  TValue extends BucketValue = number,
> = OG_TwoDimensionalAggregation<TGroupKey, TValue>;

import type { ThreeDimensionalAggregation as OG_ThreeDimensionalAggregation } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type ThreeDimensionalAggregation<
  TGroupKey extends QueryBucketKey,
  TSegmentKey extends QueryBucketKey,
  TValue extends BucketValue = number,
> = OG_ThreeDimensionalAggregation<TGroupKey, TSegmentKey, TValue>;

import type { QueryBucketKey as OG_QueryBucketKey } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type QueryBucketKey = OG_QueryBucketKey;
