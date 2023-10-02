import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the maximum value for the provided field. */
export interface MaxAggregation {
    field: string;
    name?: AggregationMetricName;
}
