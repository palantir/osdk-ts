import { Geometry } from "./Geometry";
import { FeaturePropertyKey } from "./FeaturePropertyKey";
import { BBox } from "./BBox";

/** GeoJSon 'Feature' object */
export interface Feature {
    geometry?: Geometry;
    /**
     * A `Feature` object has a member with the name "properties".  The
     * value of the properties member is an object (any JSON object or a
     * JSON null value).
     *
     */
    properties: Record<FeaturePropertyKey, any>;
    /**
     * If a `Feature` has a commonly used identifier, that identifier
     * SHOULD be included as a member of the Feature object with the name
     * "id", and the value of this member is either a JSON string or
     * number.
     *
     */
    id?: any;
    bbox?: BBox;
}
