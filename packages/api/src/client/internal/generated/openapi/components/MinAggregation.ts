import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the minimum value for the provided field. */
export type MinAggregation = { field: string; name?: AggregationMetricName; };
