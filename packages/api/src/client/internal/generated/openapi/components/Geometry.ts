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

function isPoint(obj: Geometry): obj is Geometry_Point {
    return (obj.type === "Point");
}

function Point(obj: GeoPoint): Geometry_Point {
    return {
        ...obj,
        type: "Point",
    };
}

export interface Geometry_MultiPoint extends MultiPoint {
    type: "MultiPoint";
}

function isMultiPoint(obj: Geometry): obj is Geometry_MultiPoint {
    return (obj.type === "MultiPoint");
}

function MultiPoint(obj: MultiPoint): Geometry_MultiPoint {
    return {
        ...obj,
        type: "MultiPoint",
    };
}

export interface Geometry_LineString extends LineString {
    type: "LineString";
}

function isLineString(obj: Geometry): obj is Geometry_LineString {
    return (obj.type === "LineString");
}

function LineString(obj: LineString): Geometry_LineString {
    return {
        ...obj,
        type: "LineString",
    };
}

export interface Geometry_MultiLineString extends MultiLineString {
    type: "MultiLineString";
}

function isMultiLineString(obj: Geometry): obj is Geometry_MultiLineString {
    return (obj.type === "MultiLineString");
}

function MultiLineString(obj: MultiLineString): Geometry_MultiLineString {
    return {
        ...obj,
        type: "MultiLineString",
    };
}

export interface Geometry_Polygon extends Polygon {
    type: "Polygon";
}

function isPolygon(obj: Geometry): obj is Geometry_Polygon {
    return (obj.type === "Polygon");
}

function Polygon(obj: Polygon): Geometry_Polygon {
    return {
        ...obj,
        type: "Polygon",
    };
}

export interface Geometry_MultiPolygon extends MultiPolygon {
    type: "MultiPolygon";
}

function isMultiPolygon(obj: Geometry): obj is Geometry_MultiPolygon {
    return (obj.type === "MultiPolygon");
}

function MultiPolygon(obj: MultiPolygon): Geometry_MultiPolygon {
    return {
        ...obj,
        type: "MultiPolygon",
    };
}

export interface Geometry_GeometryCollection extends GeometryCollection {
    type: "GeometryCollection";
}

function isGeometryCollection(obj: Geometry): obj is Geometry_GeometryCollection {
    return (obj.type === "GeometryCollection");
}

function GeometryCollection(obj: GeometryCollection): Geometry_GeometryCollection {
    return {
        ...obj,
        type: "GeometryCollection",
    };
}

export interface GeometryVisitor<T> {
    Point: (obj: GeoPoint) => T;
    MultiPoint: (obj: MultiPoint) => T;
    LineString: (obj: LineString) => T;
    MultiLineString: (obj: MultiLineString) => T;
    Polygon: (obj: Polygon) => T;
    MultiPolygon: (obj: MultiPolygon) => T;
    GeometryCollection: (obj: GeometryCollection) => T;
    unknown: (obj: Geometry) => T;
}

function visit<T>(obj: Geometry, visitor: GeometryVisitor<T>): T {
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

export type Geometry = Geometry_Point | Geometry_MultiPoint | Geometry_LineString | Geometry_MultiLineString | Geometry_Polygon | Geometry_MultiPolygon | Geometry_GeometryCollection;

export const Geometry = {
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
