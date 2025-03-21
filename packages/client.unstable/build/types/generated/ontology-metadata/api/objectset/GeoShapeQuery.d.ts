import type { GeoBoundingBoxFilter } from "./GeoBoundingBoxFilter.js";
import type { GeoPolygonFilter } from "./GeoPolygonFilter.js";
export interface GeoShapeQuery_geoBoundingBoxFilter {
	type: "geoBoundingBoxFilter";
	geoBoundingBoxFilter: GeoBoundingBoxFilter;
}
export interface GeoShapeQuery_geoPolygonFilter {
	type: "geoPolygonFilter";
	geoPolygonFilter: GeoPolygonFilter;
}
/**
* Union type for valid queries over geo shape properties.
*/
export type GeoShapeQuery = GeoShapeQuery_geoBoundingBoxFilter | GeoShapeQuery_geoPolygonFilter;
