import type { Aggregation } from "./Aggregation.js";
import type { AggregationName } from "./AggregationName.js";
import type { Metric } from "./Metric.js";
import type { MetricName } from "./MetricName.js";
/**
* A container for all aggregations to compute in a batch.
*/
export interface RootAggregation {
	metrics: Record<MetricName, Metric>;
	subAggregations: Record<AggregationName, Aggregation>;
}
