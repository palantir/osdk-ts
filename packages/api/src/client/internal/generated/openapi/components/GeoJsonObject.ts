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

function isFeature(obj: GeoJsonObject): obj is GeoJsonObject_Feature {
    return (obj.type === "Feature");
}

function Feature(obj: Feature): GeoJsonObject_Feature {
    return {
        ...obj,
        type: "Feature",
    };
}

export interface GeoJsonObject_FeatureCollection extends FeatureCollection {
    type: "FeatureCollection";
}

function isFeatureCollection(obj: GeoJsonObject): obj is GeoJsonObject_FeatureCollection {
    return (obj.type === "FeatureCollection");
}

function FeatureCollection(obj: FeatureCollection): GeoJsonObject_FeatureCollection {
    return {
        ...obj,
        type: "FeatureCollection",
    };
}

export interface GeoJsonObject_Point extends GeoPoint {
    type: "Point";
}

function isPoint(obj: GeoJsonObject): obj is GeoJsonObject_Point {
    return (obj.type === "Point");
}

function Point(obj: GeoPoint): GeoJsonObject_Point {
    return {
        ...obj,
        type: "Point",
    };
}

export interface GeoJsonObject_MultiPoint extends MultiPoint {
    type: "MultiPoint";
}

function isMultiPoint(obj: GeoJsonObject): obj is GeoJsonObject_MultiPoint {
    return (obj.type === "MultiPoint");
}

function MultiPoint(obj: MultiPoint): GeoJsonObject_MultiPoint {
    return {
        ...obj,
        type: "MultiPoint",
    };
}

export interface GeoJsonObject_LineString extends LineString {
    type: "LineString";
}

function isLineString(obj: GeoJsonObject): obj is GeoJsonObject_LineString {
    return (obj.type === "LineString");
}

function LineString(obj: LineString): GeoJsonObject_LineString {
    return {
        ...obj,
        type: "LineString",
    };
}

export interface GeoJsonObject_MultiLineString extends MultiLineString {
    type: "MultiLineString";
}

function isMultiLineString(obj: GeoJsonObject): obj is GeoJsonObject_MultiLineString {
    return (obj.type === "MultiLineString");
}

function MultiLineString(obj: MultiLineString): GeoJsonObject_MultiLineString {
    return {
        ...obj,
        type: "MultiLineString",
    };
}

export interface GeoJsonObject_Polygon extends Polygon {
    type: "Polygon";
}

function isPolygon(obj: GeoJsonObject): obj is GeoJsonObject_Polygon {
    return (obj.type === "Polygon");
}

function Polygon(obj: Polygon): GeoJsonObject_Polygon {
    return {
        ...obj,
        type: "Polygon",
    };
}

export interface GeoJsonObject_MultiPolygon extends MultiPolygon {
    type: "MultiPolygon";
}

function isMultiPolygon(obj: GeoJsonObject): obj is GeoJsonObject_MultiPolygon {
    return (obj.type === "MultiPolygon");
}

function MultiPolygon(obj: MultiPolygon): GeoJsonObject_MultiPolygon {
    return {
        ...obj,
        type: "MultiPolygon",
    };
}

export interface GeoJsonObject_GeometryCollection extends GeometryCollection {
    type: "GeometryCollection";
}

function isGeometryCollection(obj: GeoJsonObject): obj is GeoJsonObject_GeometryCollection {
    return (obj.type === "GeometryCollection");
}

function GeometryCollection(obj: GeometryCollection): GeoJsonObject_GeometryCollection {
    return {
        ...obj,
        type: "GeometryCollection",
    };
}

export interface GeoJsonObjectVisitor<T> {
    Feature: (obj: Feature) => T;
    FeatureCollection: (obj: FeatureCollection) => T;
    Point: (obj: GeoPoint) => T;
    MultiPoint: (obj: MultiPoint) => T;
    LineString: (obj: LineString) => T;
    MultiLineString: (obj: MultiLineString) => T;
    Polygon: (obj: Polygon) => T;
    MultiPolygon: (obj: MultiPolygon) => T;
    GeometryCollection: (obj: GeometryCollection) => T;
    unknown: (obj: GeoJsonObject) => T;
}

function visit<T>(obj: GeoJsonObject, visitor: GeoJsonObjectVisitor<T>): T {
    if (isFeature(obj)) {
        return visitor.Feature(obj);
    }

    if (isFeatureCollection(obj)) {
        return visitor.FeatureCollection(obj);
    }

    if (isPoint(obj)) {
        return visitor.Point(obj);
    }

    if (isMultiPoint(obj)) {
        return visitor.MultiPoint(obj);
    }

    if (isLineString(obj)) {
        return visitor.LineString(obj);
    }

    if (isMultiLineString(obj)) {
        return visitor.MultiLineString(obj);
    }

    if (isPolygon(obj)) {
        return visitor.Polygon(obj);
    }

    if (isMultiPolygon(obj)) {
        return visitor.MultiPolygon(obj);
    }

    if (isGeometryCollection(obj)) {
        return visitor.GeometryCollection(obj);
    }

    return visitor.unknown(obj);
}

export type GeoJsonObject = GeoJsonObject_Feature | GeoJsonObject_FeatureCollection | GeoJsonObject_Point | GeoJsonObject_MultiPoint | GeoJsonObject_LineString | GeoJsonObject_MultiLineString | GeoJsonObject_Polygon | GeoJsonObject_MultiPolygon | GeoJsonObject_GeometryCollection;

export const GeoJsonObject = {
    isFeature: isFeature,
    Feature: Feature,
    isFeatureCollection: isFeatureCollection,
    FeatureCollection: FeatureCollection,
    isPoint: isPoint,
    Point: Point,
    isMultiPoint: isMultiPoint,
    MultiPoint: MultiPoint,
    isLineString: isLineString,
    LineString: LineString,
    isMultiLineString: isMultiLineString,
    MultiLineString: MultiLineString,
    isPolygon: isPolygon,
    Polygon: Polygon,
    isMultiPolygon: isMultiPolygon,
    MultiPolygon: MultiPolygon,
    isGeometryCollection: isGeometryCollection,
    GeometryCollection: GeometryCollection,
    visit: visit,
};
