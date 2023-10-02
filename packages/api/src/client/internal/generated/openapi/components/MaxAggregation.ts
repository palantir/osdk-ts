import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the maximum value for the provided field. */
export type MaxAggregation = { field: string; name?: AggregationMetricName; };
