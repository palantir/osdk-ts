import { LineStringCoordinates } from "./LineStringCoordinates";
import { BBox } from "./BBox";

export interface LineString {
    coordinates?: LineStringCoordinates;
    bbox?: BBox;
}
