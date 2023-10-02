import { CenterPoint } from "./CenterPoint";

/**
 * Returns objects where the specified field contains a point within the distance provided of the center point.
 *
 */
export type WithinDistanceOfQuery = { field: string; value: CenterPoint; };
