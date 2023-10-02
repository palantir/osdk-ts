import { BoundingBoxValue } from "./BoundingBoxValue";

/**
 * Returns objects where the specified field intersects the bounding box provided.
 *
 */
export type IntersectsBoundingBoxQuery = { field: string; value: BoundingBoxValue; };
