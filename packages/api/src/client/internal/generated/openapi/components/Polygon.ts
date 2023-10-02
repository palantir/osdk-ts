import { LinearRing } from "./LinearRing";
import { BBox } from "./BBox";

export interface Polygon {
    coordinates: Array<LinearRing>;
    bbox?: BBox;
}
