import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the average value for the provided field. */
export interface AvgAggregation {
    field: string;
    name?: AggregationMetricName;
}
