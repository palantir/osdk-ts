import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* An object matches a GeoBoundingBoxFilter iff the value of the provided property is within the provided bounds.
* Works on geohash properties.
*/
export interface GeoBoundingBoxFilter {
	propertyId: PropertyTypeId;
	topLeft: string;
	bottomRight: string;
}
