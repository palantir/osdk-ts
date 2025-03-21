import type { Distance } from "../../Distance.js";
import type { GeoPointFilterValue } from "../../GeoPointFilterValue.js";
import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
/**
* See com.palantir.object.set.api.GeoDistanceFilter.
*/
export interface GeoDistanceFilter {
	property: PropertyTypeRid;
	geopoint: GeoPointFilterValue;
	distance: Distance;
}
