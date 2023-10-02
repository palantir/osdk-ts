import { BoundingBoxValue } from "./BoundingBoxValue";

/**
 * Returns objects where the specified field does not intersect the bounding box provided.
 *
 */
export type DoesNotIntersectBoundingBoxQuery = { field: string; value: BoundingBoxValue; };
