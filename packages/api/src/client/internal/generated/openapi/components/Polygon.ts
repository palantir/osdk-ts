import { LinearRing } from "./LinearRing";
import { BBox } from "./BBox";

export type Polygon = { coordinates: Array<LinearRing>; bbox?: BBox; };
