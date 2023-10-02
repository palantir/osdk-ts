import { PolygonValue } from "./PolygonValue";

/**
 * Returns objects where the specified field does not intersect the polygon provided.
 *
 */
export interface DoesNotIntersectPolygonQuery {
    field: string;
    value: PolygonValue;
}
