import { Position } from "./Position";
import { BBox } from "./BBox";

export interface MultiPoint {
    coordinates: Array<Position>;
    bbox?: BBox;
}
