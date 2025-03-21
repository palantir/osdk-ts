/**
* The geo_shape data type facilitates the indexing of and searching with arbitrary geo shapes such as rectangles
* and polygons.
* Shapes must be represented as GeoJSON (see https://geojson.org for more information).
* We support the following types of GeoJson shape:
* - Point, A single geographic coordinate. Only WGS-84 coordinates are supported.
* - LineString, An arbitrary line given two or more points.
* - Polygon, A closed polygon whose first and last point must match, thus requiring n + 1 vertices to create an n-sided polygon and a minimum of 4 vertices.
* - MultiPoint, An array of unconnected, but likely related points.
* - MultiLineString, An array of separate linestrings.
* - MultiPolygon, An array of separate polygons.
* - GeometryCollection, A GeoJSON shape similar to the multi* shapes except that multiple types can coexist (e.g., a Point and a LineString).
* Note: we do not support the GeoJSON types Feature and FeatureCollection
* The underlying foundry type must be a string.
*/
export interface GeoshapePropertyType {}
