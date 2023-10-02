import { GeoPoint } from "./GeoPoint";

export interface CenterPointTypes_Point extends GeoPoint {
    type: "Point";
}

export type CenterPointTypes = CenterPointTypes_Point;
