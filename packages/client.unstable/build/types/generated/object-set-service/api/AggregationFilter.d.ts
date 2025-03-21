import type { AndAggregationFilter } from "./AndAggregationFilter.js";
import type { ExactMatchAggregationFilter } from "./ExactMatchAggregationFilter.js";
import type { HasPropertyAggregationFilter } from "./HasPropertyAggregationFilter.js";
import type { NotAggregationFilter } from "./NotAggregationFilter.js";
import type { OrAggregationFilter } from "./OrAggregationFilter.js";
import type { RangeAggregationFilter } from "./RangeAggregationFilter.js";
export interface AggregationFilter_or {
	type: "or";
	or: OrAggregationFilter;
}
export interface AggregationFilter_and {
	type: "and";
	and: AndAggregationFilter;
}
export interface AggregationFilter_not {
	type: "not";
	not: NotAggregationFilter;
}
export interface AggregationFilter_exactMatch {
	type: "exactMatch";
	exactMatch: ExactMatchAggregationFilter;
}
export interface AggregationFilter_range {
	type: "range";
	range: RangeAggregationFilter;
}
export interface AggregationFilter_hasProperty {
	type: "hasProperty";
	hasProperty: HasPropertyAggregationFilter;
}
/**
* Defines filtering of objects when computing an aggregated metric value.
*/
export type AggregationFilter = AggregationFilter_or | AggregationFilter_and | AggregationFilter_not | AggregationFilter_exactMatch | AggregationFilter_range | AggregationFilter_hasProperty;
