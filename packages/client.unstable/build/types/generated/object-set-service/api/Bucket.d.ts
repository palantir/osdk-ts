import type { AggregationName } from "./AggregationName.js";
import type { MetricName } from "./MetricName.js";
import type { MetricResult } from "./MetricResult.js";
import type { SubAggregateResult } from "./SubAggregateResult.js";
/**
* A bucket that data was grouped into and the aggregations computed for the data in that bucket.
*/
export interface Bucket {
	key: string;
	metrics: Record<MetricName, MetricResult | undefined>;
	subAggregations: Record<AggregationName, SubAggregateResult>;
}
