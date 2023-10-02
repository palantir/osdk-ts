import { Feature } from "./Feature";
import { FeatureCollection } from "./FeatureCollection";
import { GeoPoint } from "./GeoPoint";
import { MultiPoint } from "./MultiPoint";
import { LineString } from "./LineString";
import { MultiLineString } from "./MultiLineString";
import { Polygon } from "./Polygon";
import { MultiPolygon } from "./MultiPolygon";
import { GeometryCollection } from "./GeometryCollection";

export interface GeoJsonObject_Feature extends Feature {
    type: "Feature";
}

export interface GeoJsonObject_FeatureCollection extends FeatureCollection {
    type: "FeatureCollection";
}

export interface GeoJsonObject_Point extends GeoPoint {
    type: "Point";
}

export interface GeoJsonObject_MultiPoint extends MultiPoint {
    type: "MultiPoint";
}

export interface GeoJsonObject_LineString extends LineString {
    type: "LineString";
}

export interface GeoJsonObject_MultiLineString extends MultiLineString {
    type: "MultiLineString";
}

export interface GeoJsonObject_Polygon extends Polygon {
    type: "Polygon";
}

export interface GeoJsonObject_MultiPolygon extends MultiPolygon {
    type: "MultiPolygon";
}

export interface GeoJsonObject_GeometryCollection extends GeometryCollection {
    type: "GeometryCollection";
}

export type GeoJsonObject = GeoJsonObject_Feature | GeoJsonObject_FeatureCollection | GeoJsonObject_Point | GeoJsonObject_MultiPoint | GeoJsonObject_LineString | GeoJsonObject_MultiLineString | GeoJsonObject_Polygon | GeoJsonObject_MultiPolygon | GeoJsonObject_GeometryCollection;
