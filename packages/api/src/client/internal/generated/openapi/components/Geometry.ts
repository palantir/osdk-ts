import { GeoPoint } from "./GeoPoint";
import { MultiPoint } from "./MultiPoint";
import { LineString } from "./LineString";
import { MultiLineString } from "./MultiLineString";
import { Polygon } from "./Polygon";
import { MultiPolygon } from "./MultiPolygon";
import { GeometryCollection } from "./GeometryCollection";

export interface Geometry_Point extends GeoPoint {
    type: "Point";
}

export interface Geometry_MultiPoint extends MultiPoint {
    type: "MultiPoint";
}

export interface Geometry_LineString extends LineString {
    type: "LineString";
}

export interface Geometry_MultiLineString extends MultiLineString {
    type: "MultiLineString";
}

export interface Geometry_Polygon extends Polygon {
    type: "Polygon";
}

export interface Geometry_MultiPolygon extends MultiPolygon {
    type: "MultiPolygon";
}

export interface Geometry_GeometryCollection extends GeometryCollection {
    type: "GeometryCollection";
}

export type Geometry = Geometry_Point | Geometry_MultiPoint | Geometry_LineString | Geometry_MultiLineString | Geometry_Polygon | Geometry_MultiPolygon | Geometry_GeometryCollection;
