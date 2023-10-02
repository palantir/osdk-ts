import { LinearRing } from "./LinearRing";
import { BBox } from "./BBox";

export type MultiPolygon = { coordinates: Array<Array<LinearRing>>; bbox?: BBox; };
