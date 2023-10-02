import { FeatureCollectionTypes } from "./FeatureCollectionTypes";
import { BBox } from "./BBox";

/** GeoJSon 'FeatureCollection' object */
export interface FeatureCollection {
    features: Array<FeatureCollectionTypes>;
    bbox?: BBox;
}
