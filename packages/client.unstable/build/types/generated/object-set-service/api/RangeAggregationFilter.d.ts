import type { PropertyId } from "./PropertyId.js";
import type { RangeAggregationFilterValue } from "./RangeAggregationFilterValue.js";
/**
* An object matches iff the value of the provided property is within the provided bounds.
*/
export interface RangeAggregationFilter {
	propertyId: PropertyId;
	lt: RangeAggregationFilterValue | undefined;
	lte: RangeAggregationFilterValue | undefined;
	gt: RangeAggregationFilterValue | undefined;
	gte: RangeAggregationFilterValue | undefined;
}
