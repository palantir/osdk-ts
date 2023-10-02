import { LineStringCoordinates } from "./LineStringCoordinates";
import { BBox } from "./BBox";

/** */
export type MultiLineString = { coordinates: Array<LineStringCoordinates>; bbox?: BBox; };
