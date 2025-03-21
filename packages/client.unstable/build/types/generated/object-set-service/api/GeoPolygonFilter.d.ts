import type { PropertyId } from "./PropertyId.js";
/**
* An object matches a GeoPolygonFilter iff the value of the provided property is within bounds of the provided polygon.
* This filter is only supported on geo_point property types.
*/
export interface GeoPolygonFilter {
	propertyId: PropertyId;
	polygon: Array<string>;
}
