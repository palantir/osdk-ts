import type { FilterParameter } from "./FilterParameter.js";
import type { PropertyId } from "./PropertyId.js";
/**
* An object matches a RangeFilter iff the value of the provided property is within provided bounds.
*/
export interface ParameterizedRangeFilter {
	propertyId: PropertyId;
	lt: FilterParameter | undefined;
	lte: FilterParameter | undefined;
	gt: FilterParameter | undefined;
	gte: FilterParameter | undefined;
}
