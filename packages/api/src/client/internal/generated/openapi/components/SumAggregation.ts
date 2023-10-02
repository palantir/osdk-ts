import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the sum of values for the provided field. */
export type SumAggregation = { field: string; name?: AggregationMetricName; };
