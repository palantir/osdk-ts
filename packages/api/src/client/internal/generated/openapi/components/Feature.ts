import { Geometry } from "./Geometry";
import { FeaturePropertyKey } from "./FeaturePropertyKey";
import { BBox } from "./BBox";

/** GeoJSon 'Feature' object */
export type Feature = { geometry?: Geometry; properties: Record<FeaturePropertyKey, any>; id?: any; bbox?: BBox; };
