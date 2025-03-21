import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* An object matches a GeoPolygonFilter iff the value of the provided property is within bounds of the provided polygon.
*/
export interface GeoPolygonFilter {
	propertyId: PropertyTypeId;
	polygon: Array<string>;
}
