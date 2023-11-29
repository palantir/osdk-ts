import { LocalDate, Timestamp } from '@osdk/legacy-client';

import type {
  AggregatableProperties as OG_AggregatableProperties,
  AggregationClause as OG_AggregationClause,
  BucketGroup as OG_BucketGroup,
  BucketKey as OG_BucketKey,
  BucketValue as OG_BucketValue,
  Date as OG_Date,
  Double as OG_Double,
  MetricValue as OG_MetricValue,
  Metrics as OG_Metrics,
  Rangeable as OG_Rangeable,
  TimeUnit as OG_TimeUnit,
} from '@osdk/legacy-client';

/** @deprecated **/
export type Double = OG_Double;

/** @deprecated **/
export type Rangeable = OG_Rangeable;

/** @deprecated **/
export type MetricValue = OG_MetricValue;

/** @deprecated **/
export type Date = OG_Date;

/** @deprecated **/
export type BucketKey = OG_BucketKey;

/** @deprecated **/
export type BucketValue = OG_BucketValue;

/** @deprecated **/
export type TimeUnit = OG_TimeUnit;

/** @deprecated **/
export type BucketGroup = OG_BucketGroup;

/** @deprecated **/
export type Metrics = OG_Metrics;

/** @deprecated **/
export type AggregatableProperties = OG_AggregatableProperties;

/** @deprecated **/
export type AggregationClause = OG_AggregationClause;

import type { Range as OG_Range } from '@osdk/legacy-client';

/** @deprecated **/
export type Range<T extends Rangeable> = OG_Range<T>;

import type { BaseGroupBy as OG_BaseGroupBy } from '@osdk/legacy-client';

/** @deprecated **/
export type BaseGroupBy<_T extends BucketValue = BucketValue> = OG_BaseGroupBy<_T>;

import type { Duration as OG_Duration } from '@osdk/legacy-client';

/** @deprecated **/
export type Duration<_T extends Timestamp | LocalDate = Timestamp | LocalDate> = OG_Duration<_T>;

import type {
  AggregatableProperty as OG_AggregatableProperty,
  MultipleAggregationsOperations as OG_MultipleAggregationsOperations,
} from '@osdk/legacy-client';

/** @deprecated **/
export type AggregatableProperty<_T extends MetricValue = MetricValue> = OG_AggregatableProperty<_T>;

/** @deprecated **/
export type MultipleAggregationsOperations<_T extends MetricValue = MetricValue> =
  OG_MultipleAggregationsOperations<_T>;

import type { AggregationGroup as OG_AggregationGroup } from '@osdk/legacy-client';

/** @deprecated **/
export type AggregationGroup<
  TMetrics extends Metrics | MetricValue,
  TBucketGroup extends BucketGroup,
> = OG_AggregationGroup<TMetrics, TBucketGroup>;

import type { Bucketing as OG_Bucketing } from '@osdk/legacy-client';

/** @deprecated **/
export type Bucketing<_T extends string, _X extends BucketValue> = OG_Bucketing<_T, _X>;

import type { AggregationResult as OG_AggregationResult } from '@osdk/legacy-client';

/** @deprecated **/
export type AggregationResult<
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics | MetricValue,
> = OG_AggregationResult<TBucketGroup, TMetrics>;

import type { BaseBucketing as OG_BaseBucketing } from '@osdk/legacy-client';

/** @deprecated **/
export type BaseBucketing<
  TBucketKey extends BucketKey,
  TBucketValue extends BucketValue,
  Kind extends string,
> = OG_BaseBucketing<TBucketKey, TBucketValue, Kind>;

import type {
  ExactValueBucketing as OG_ExactValueBucketing,
  InternalBucketing as OG_InternalBucketing,
} from '@osdk/legacy-client';

/** @deprecated **/
export type ExactValueBucketing<
  TBucketKey extends BucketKey,
  TBucketValue extends BucketValue,
> = OG_ExactValueBucketing<TBucketKey, TBucketValue>;

/** @deprecated **/
export type InternalBucketing<TBucketKey extends BucketKey, TBucketValue extends BucketValue> = OG_InternalBucketing<
  TBucketKey,
  TBucketValue
>;

import type {
  FixedWidthBucketing as OG_FixedWidthBucketing,
  RangeBucketing as OG_RangeBucketing,
} from '@osdk/legacy-client';

/** @deprecated **/
export type RangeBucketing<TBucketKey extends BucketKey, TBucketValue extends Range<Rangeable>> = OG_RangeBucketing<
  TBucketKey,
  TBucketValue
>;

/** @deprecated **/
export type FixedWidthBucketing<
  TBucketKey extends BucketKey,
  TBucketValue extends Range<Rangeable>,
> = OG_FixedWidthBucketing<TBucketKey, TBucketValue>;

import type { DurationBucketing as OG_DurationBucketing } from '@osdk/legacy-client';

/** @deprecated **/
export type DurationBucketing<TBucketKey extends BucketKey, TBucketValue extends Date> = OG_DurationBucketing<
  TBucketKey,
  TBucketValue
>;

import type { InternalBucketingVisitor as OG_InternalBucketingVisitor } from '@osdk/legacy-client';

/** @deprecated **/
export type InternalBucketingVisitor<
  TBucketKey extends BucketKey,
  T extends BucketValue,
  R,
> = OG_InternalBucketingVisitor<TBucketKey, T, R>;

import type { AggregationBuilderResult as OG_AggregationBuilderResult } from '@osdk/legacy-client';

/** @deprecated **/
export type AggregationBuilderResult<T, TMultipleAggregationProperties> = OG_AggregationBuilderResult<
  T,
  TMultipleAggregationProperties
>;

import type {
  AggregatablePropertiesForResult as OG_AggregatablePropertiesForResult,
  AggregatablePropertyNamesForResult as OG_AggregatablePropertyNamesForResult,
} from '@osdk/legacy-client';

/** @deprecated **/
export type AggregatablePropertiesForResult<
  TAggregatableProperties,
  TResult extends MetricValue,
> = OG_AggregatablePropertiesForResult<TAggregatableProperties, TResult>;

/** @deprecated **/
export type AggregatablePropertyNamesForResult<
  TAggregatableProperties,
  TResult extends MetricValue,
> = OG_AggregatablePropertyNamesForResult<TAggregatableProperties, TResult>;

import {
  assertBucketingInternal as OG_assertBucketingInternal,
  visitInternalBucketing as OG_visitInternalBucketing,
} from '@osdk/legacy-client';

/** @deprecated **/
export const assertBucketingInternal = OG_assertBucketingInternal;

/** @deprecated **/
export const visitInternalBucketing = OG_visitInternalBucketing;

import type { AggregatableObjectSetStep as OG_AggregatableObjectSetStep } from '@osdk/legacy-client';

/** @deprecated **/
export type AggregatableObjectSetStep<
  TAggregatableProperties,
  TMultipleAggregationProperties,
  TBucketableProperties,
  TBucketGroup extends BucketGroup = {},
> = OG_AggregatableObjectSetStep<
  TAggregatableProperties,
  TMultipleAggregationProperties,
  TBucketableProperties,
  TBucketGroup
>;

import type { GroupedTerminalAggregationOperations as OG_GroupedTerminalAggregationOperations } from '@osdk/legacy-client';

/** @deprecated **/
export type GroupedTerminalAggregationOperations<
  TAggregatableProperties,
  TMultipleAggregationProperties,
  TBucketGroup extends BucketGroup = {},
> = OG_GroupedTerminalAggregationOperations<TAggregatableProperties, TMultipleAggregationProperties, TBucketGroup>;
