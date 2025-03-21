import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { FilterParameter } from "./FilterParameter.js";
/**
* An object matches a RangeFilter iff the value of the provided property is within provided bounds.
*/
export interface ParameterizedRangeFilter {
	propertyId: PropertyTypeId;
	lt: FilterParameter | undefined;
	lte: FilterParameter | undefined;
	gt: FilterParameter | undefined;
	gte: FilterParameter | undefined;
}
