import type { Distance } from "./Distance.js";
import type { PropertyId } from "./PropertyId.js";
/**
* An object matches a GeoDistanceFilter iff the value of the provided property is within the provided distance
* of the provided location i.e. sits within a circle centered at the provided location.
*/
export interface GeoDistanceFilter {
	propertyId: PropertyId;
	location: string;
	distance: Distance;
}
