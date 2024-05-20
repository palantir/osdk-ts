import { BucketGroup, MetricValue, Metrics } from './Aggregations.js';

import { ComputeStep as OG_ComputeStep } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export const ComputeStep = OG_ComputeStep;

/** @deprecated submodule imports arent public api **/
export type ComputeStep<TBucketGroup extends BucketGroup, TMetrics extends Metrics | MetricValue> = OG_ComputeStep<
  TBucketGroup,
  TMetrics
>;

import type { AggregationComputeStep as OG_AggregationComputeStep } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type AggregationComputeStep<
  TBucketGroup extends BucketGroup,
  TMetrics extends Metrics | MetricValue,
> = OG_AggregationComputeStep<TBucketGroup, TMetrics>;
