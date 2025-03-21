import type { PropertyId } from "./PropertyId.js";
/**
* An object matches a RangeFilter iff the value of the provided property is within provided bounds.
*/
export interface RangeFilter {
	propertyId: PropertyId;
	lt: any | undefined;
	lte: any | undefined;
	gt: any | undefined;
	gte: any | undefined;
}
