import { AggregationMetricName } from "./AggregationMetricName";

/** Computes an approximate number of distinct values for the provided field. */
export interface ApproximateDistinctAggregation {
    field: string;
    name?: AggregationMetricName;
}
