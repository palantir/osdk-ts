import type { AggregationFilter } from "./AggregationFilter.js";
/**
* Total count of objects
*/
export interface CountMetric {
	filter: AggregationFilter | undefined;
}
