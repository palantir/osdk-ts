import type { Aggregation } from "./Aggregation.js";
import type { AggregationFilter } from "./AggregationFilter.js";
import type { AggregationName } from "./AggregationName.js";
import type { Dimension } from "./Dimension.js";
import type { KeyOrdering } from "./KeyOrdering.js";
/**
* An intermediate grouping that does not collect any metrics, but only has sub-aggregations.
*/
export interface NestedAggregation {
	dimension: Dimension;
	ordering: Array<KeyOrdering>;
	filter: AggregationFilter | undefined;
	subAggregations: Record<AggregationName, Aggregation>;
}
