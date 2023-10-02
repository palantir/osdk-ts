import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the sum of values for the provided field. */
export interface SumAggregation {
    field: string;
    name?: AggregationMetricName;
}
