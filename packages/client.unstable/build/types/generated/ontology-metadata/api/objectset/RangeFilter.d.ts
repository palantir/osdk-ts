import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* An object matches a RangeFilter iff the value of the provided property is within provided bounds.
*/
export interface RangeFilter {
	propertyId: PropertyTypeId;
	lt: any | undefined;
	lte: any | undefined;
	gt: any | undefined;
	gte: any | undefined;
}
