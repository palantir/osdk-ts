import { GeoPoint } from "./GeoPoint";

export interface WithinBoundingBoxPoint_Point extends GeoPoint {
    type: "Point";
}

function isPoint(obj: WithinBoundingBoxPoint): obj is WithinBoundingBoxPoint_Point {
    return (obj.type === "Point");
}

function Point(obj: GeoPoint): WithinBoundingBoxPoint_Point {
    return {
        ...obj,
        type: "Point",
    };
}

export interface WithinBoundingBoxPointVisitor<T> {
    Point: (obj: GeoPoint) => T;
    unknown: (obj: WithinBoundingBoxPoint) => T;
}

function visit<T>(obj: WithinBoundingBoxPoint, visitor: WithinBoundingBoxPointVisitor<T>): T {
    if (isPoint(obj)) {
        return visitor.Point(obj);
    }

    return visitor.unknown(obj);
}

export type WithinBoundingBoxPoint = WithinBoundingBoxPoint_Point;

export const WithinBoundingBoxPoint = {
    isPoint: isPoint,
    Point: Point,
    visit: visit,
};
