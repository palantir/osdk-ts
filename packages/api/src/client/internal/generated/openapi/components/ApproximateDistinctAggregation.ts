import { AggregationMetricName } from "./AggregationMetricName";

/** Computes an approximate number of distinct values for the provided field. */
export type ApproximateDistinctAggregation = { field: string; name?: AggregationMetricName; };
