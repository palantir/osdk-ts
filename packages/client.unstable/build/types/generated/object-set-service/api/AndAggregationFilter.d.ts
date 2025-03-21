import type { AggregationFilter } from "./AggregationFilter.js";
/**
* An object matches this filter iff it matches all of the contained filters.
*/
export interface AndAggregationFilter {
	filters: Array<AggregationFilter>;
}
