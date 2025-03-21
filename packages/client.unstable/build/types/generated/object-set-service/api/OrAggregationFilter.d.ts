import type { AggregationFilter } from "./AggregationFilter.js";
/**
* An object matches this filter iff it matches at least one of the contained filters.
*/
export interface OrAggregationFilter {
	filters: Array<AggregationFilter>;
}
