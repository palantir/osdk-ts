import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the average value for the provided field. */
export type AvgAggregation = { field: string; name?: AggregationMetricName; };
