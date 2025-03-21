import type { AggregationFilter } from "./AggregationFilter.js";
/**
* An object matches this filter iff it does not match the contained filter.
*/
export interface NotAggregationFilter {
	filter: AggregationFilter;
}
