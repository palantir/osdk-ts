import { AggregationMetricName } from "./AggregationMetricName";

/** Computes the total count of objects. */
export interface CountAggregation {
    name?: AggregationMetricName;
}
