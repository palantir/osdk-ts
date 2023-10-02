import { FeatureCollectionTypes } from "./FeatureCollectionTypes";
import { BBox } from "./BBox";

/** GeoJSon 'FeatureCollection' object */
export type FeatureCollection = { features: Array<FeatureCollectionTypes>; bbox?: BBox; };
