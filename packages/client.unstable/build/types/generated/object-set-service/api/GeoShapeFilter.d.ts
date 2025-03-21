import type { GeoShapeQuery } from "./GeoShapeQuery.js";
import type { GeoShapeSpatialFilterMode } from "./GeoShapeSpatialFilterMode.js";
/**
* Filter properties of type geo_shape or geo_point.
*/
export interface GeoShapeFilter {
	geoShapeQuery: GeoShapeQuery;
	spatialFilterMode: GeoShapeSpatialFilterMode;
}
