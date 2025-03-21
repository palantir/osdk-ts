import type { MetricName } from "./MetricName.js";
import type { OrderingDirection } from "./OrderingDirection.js";
/**
* An ordering by aggregation results.
*/
export interface ValueOrdering {
	metricName: MetricName;
	direction: OrderingDirection;
}
