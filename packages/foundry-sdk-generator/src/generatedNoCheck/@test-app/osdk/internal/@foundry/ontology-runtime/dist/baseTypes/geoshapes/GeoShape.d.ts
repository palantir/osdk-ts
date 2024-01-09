import { GeoShape as OG_GeoShape } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export declare const GeoShape: {
    isGeoPoint(obj: any): obj is import("@osdk/legacy-client").GeoPoint;
    isPolygon(obj: any): obj is import("@osdk/legacy-client").Polygon;
    isLineString(obj: any): obj is import("@osdk/legacy-client").LineString;
    isMultiGeoPoint(obj: any): obj is import("@osdk/legacy-client").MultiGeoPoint;
    isMultiPolygon(obj: any): obj is import("@osdk/legacy-client").MultiPolygon;
    isMultiLineString(obj: any): obj is import("@osdk/legacy-client").MultiLineString;
    isGeometryCollection(obj: any): obj is import("@osdk/legacy-client").GeometryCollection;
    isGeoShape(obj: any): obj is OG_GeoShape;
    fromGeoJson(geoJson: import("@osdk/legacy-client").GeoJson): OG_GeoShape;
};
/** @deprecated submodule imports arent public api **/
export type GeoShape = OG_GeoShape;
