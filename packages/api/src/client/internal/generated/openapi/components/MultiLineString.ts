import { LineStringCoordinates } from "./LineStringCoordinates";
import { BBox } from "./BBox";

export interface MultiLineString {
    coordinates: Array<LineStringCoordinates>;
    bbox?: BBox;
}
