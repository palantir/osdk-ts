import { GeoPoint } from "./GeoPoint";

export interface WithinBoundingBoxPoint_Point extends GeoPoint {
    type: "Point";
}

export type WithinBoundingBoxPoint = WithinBoundingBoxPoint_Point;
