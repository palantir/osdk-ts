import { PolygonValue } from "./PolygonValue";

/**
 * Returns objects where the specified field intersects the polygon provided.
 *
 */
export type IntersectsPolygonQuery = { field: string; value: PolygonValue; };
