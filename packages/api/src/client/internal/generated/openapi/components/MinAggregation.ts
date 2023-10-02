import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the minimum value for the provided field. */
export interface MinAggregation {
    field: string;
    name?: AggregationMetricName;
}
