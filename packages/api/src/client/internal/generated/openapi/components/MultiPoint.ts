import { Position } from "./Position";
import { BBox } from "./BBox";

/** */
export type MultiPoint = { coordinates: Array<Position>; bbox?: BBox; };
