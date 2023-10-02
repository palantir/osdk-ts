import { PolygonValue } from "./PolygonValue";

/**
 * Returns objects where the specified field intersects the polygon provided.
 *
 */
export interface IntersectsPolygonQuery {
    field: string;
    value: PolygonValue;
}
