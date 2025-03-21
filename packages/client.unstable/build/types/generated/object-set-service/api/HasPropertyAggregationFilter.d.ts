import type { PropertyId } from "./PropertyId.js";
/**
* An object matches iff the value of the provided property exists and is not null.
*/
export interface HasPropertyAggregationFilter {
	propertyId: PropertyId;
}
