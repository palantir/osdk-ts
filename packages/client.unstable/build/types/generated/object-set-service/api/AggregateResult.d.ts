import type { AggregationName } from "./AggregationName.js";
import type { MetricName } from "./MetricName.js";
import type { MetricResult } from "./MetricResult.js";
import type { SubAggregateResult } from "./SubAggregateResult.js";
/**
* The result of an aggregation.
*/
export interface AggregateResult {
	metrics: Record<MetricName, MetricResult | undefined>;
	subAggregations: Record<AggregationName, SubAggregateResult>;
}
