import { Geometry } from "./Geometry";
import { BBox } from "./BBox";

/**
 * GeoJSon geometry collection
 *
 * GeometryCollections composed of a single part or a number of parts of a
 * single type SHOULD be avoided when that single part or a single object
 * of multipart type (MultiPoint, MultiLineString, or MultiPolygon) could
 * be used instead.
 *
 */
export interface GeometryCollection {
    geometries: Array<Geometry>;
    bbox?: BBox;
}
