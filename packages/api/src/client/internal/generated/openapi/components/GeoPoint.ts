import { Position } from "./Position";
import { BBox } from "./BBox";

export interface GeoPoint {
    coordinates: Position;
    bbox?: BBox;
}
