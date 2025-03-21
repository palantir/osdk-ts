import type { GeoPointFilterValue } from "../../GeoPointFilterValue.js";
import type { GeoShapeSpatialFilterMode } from "../../GeoShapeSpatialFilterMode.js";
import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
/**
* See com.palantir.object.set.api.GeoBoundingBoxFilter.
*/
export interface GeoBoundingBoxFilter {
	property: PropertyTypeRid;
	topLeft: GeoPointFilterValue;
	bottomRight: GeoPointFilterValue;
	geoshapeMode: GeoShapeSpatialFilterMode | undefined;
}
