import { GeoPoint } from "./GeoPoint";

export interface CenterPointTypes_Point extends GeoPoint {
    type: "Point";
}

function isPoint(obj: CenterPointTypes): obj is CenterPointTypes_Point {
    return (obj.type === "Point");
}

export interface CenterPointTypesVisitor<T> {
    Point: (obj: GeoPoint) => T;
    unknown: (obj: CenterPointTypes) => T;
}

function visit<T>(obj: CenterPointTypes, visitor: CenterPointTypesVisitor<T>): T {
    if (isPoint(obj)) {
        return visitor.Point(obj);
    }

    return visitor.unknown(obj);
}

export type CenterPointTypes = CenterPointTypes_Point;

export const CenterPointTypes = {
    isPoint: isPoint,
    visit: visit,
};
