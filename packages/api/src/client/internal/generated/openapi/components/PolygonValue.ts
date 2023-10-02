import { Polygon } from "./Polygon";

export interface PolygonValue_Polygon extends Polygon {
    type: "Polygon";
}

export type PolygonValue = PolygonValue_Polygon;
