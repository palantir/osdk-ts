import type { GeoPointFilterValue } from "../../GeoPointFilterValue.js";
import type { GeoShapeSpatialFilterMode } from "../../GeoShapeSpatialFilterMode.js";
import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
/**
* See com.palantir.object.set.api.GeoPolygonFilter.
*/
export interface GeoPolygonFilter {
	property: PropertyTypeRid;
	polygon: Array<GeoPointFilterValue>;
	geoshapeMode: GeoShapeSpatialFilterMode | undefined;
}
