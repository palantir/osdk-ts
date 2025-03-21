import type { MetricsAggregation } from "./MetricsAggregation.js";
import type { NestedAggregation } from "./NestedAggregation.js";
export interface Aggregation_metrics {
	type: "metrics";
	metrics: MetricsAggregation;
}
export interface Aggregation_nested {
	type: "nested";
	nested: NestedAggregation;
}
/**
* Either metrics or a nested aggregation.
*/
export type Aggregation = Aggregation_metrics | Aggregation_nested;
