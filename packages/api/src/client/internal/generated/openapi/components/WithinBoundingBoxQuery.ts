import { BoundingBoxValue } from "./BoundingBoxValue";

/**
 * Returns objects where the specified field contains a point within the bounding box provided.
 *
 */
export interface WithinBoundingBoxQuery {
    field: string;
    value: BoundingBoxValue;
}
