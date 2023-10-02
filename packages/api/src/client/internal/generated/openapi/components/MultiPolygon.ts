import { LinearRing } from "./LinearRing";
import { BBox } from "./BBox";

export interface MultiPolygon {
    coordinates: Array<Array<LinearRing>>;
    bbox?: BBox;
}
