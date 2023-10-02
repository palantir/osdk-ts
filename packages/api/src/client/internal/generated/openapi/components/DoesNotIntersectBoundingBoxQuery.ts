import { BoundingBoxValue } from "./BoundingBoxValue";

/**
 * Returns objects where the specified field does not intersect the bounding box provided.
 *
 */
export interface DoesNotIntersectBoundingBoxQuery {
    field: string;
    value: BoundingBoxValue;
}
