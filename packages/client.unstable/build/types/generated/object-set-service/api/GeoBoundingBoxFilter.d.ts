import type { PropertyId } from "./PropertyId.js";
/**
* An object matches a GeoBoundingBoxFilter iff the value of the provided property is within the provided bounds.
* This filter is only supported on geo_point property types.
*/
export interface GeoBoundingBoxFilter {
	propertyId: PropertyId;
	topLeft: string;
	bottomRight: string;
}
