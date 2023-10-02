import { PolygonValue } from "./PolygonValue";

/**
 * Returns objects where the specified field contains a point within the polygon provided.
 *
 */
export interface WithinPolygonQuery {
    field: string;
    value: PolygonValue;
}
