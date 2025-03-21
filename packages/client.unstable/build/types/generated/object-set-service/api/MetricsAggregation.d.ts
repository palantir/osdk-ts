import type { Aggregation } from "./Aggregation.js";
import type { AggregationFilter } from "./AggregationFilter.js";
import type { AggregationName } from "./AggregationName.js";
import type { Dimension } from "./Dimension.js";
import type { Metric } from "./Metric.js";
import type { MetricName } from "./MetricName.js";
import type { Ordering } from "./Ordering.js";
/**
* A grouping of items that collects metrics for each bucket, and possibly has sub-aggregations.
*/
export interface MetricsAggregation {
	dimension: Dimension;
	ordering: Array<Ordering>;
	metrics: Record<MetricName, Metric>;
	filter: AggregationFilter | undefined;
	subAggregations: Record<AggregationName, Aggregation>;
}
