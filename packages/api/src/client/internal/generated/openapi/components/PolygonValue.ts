import { Polygon } from "./Polygon";

export interface PolygonValue_Polygon extends Polygon {
    type: "Polygon";
}

function isPolygon(obj: PolygonValue): obj is PolygonValue_Polygon {
    return (obj.type === "Polygon");
}

function Polygon(obj: Polygon): PolygonValue_Polygon {
    return {
        ...obj,
        type: "Polygon",
    };
}

export interface PolygonValueVisitor<T> {
    Polygon: (obj: Polygon) => T;
    unknown: (obj: PolygonValue) => T;
}

function visit<T>(obj: PolygonValue, visitor: PolygonValueVisitor<T>): T {
    if (isPolygon(obj)) {
        return visitor.Polygon(obj);
    }

    return visitor.unknown(obj);
}

export type PolygonValue = PolygonValue_Polygon;

export const PolygonValue = {
    isPolygon: isPolygon,
    Polygon: Polygon,
    visit: visit,
};
