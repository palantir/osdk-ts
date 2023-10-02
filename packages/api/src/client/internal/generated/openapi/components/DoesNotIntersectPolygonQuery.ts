import { PolygonValue } from "./PolygonValue";

/**
 * Returns objects where the specified field does not intersect the polygon provided.
 *
 */
export type DoesNotIntersectPolygonQuery = { field: string; value: PolygonValue; };
