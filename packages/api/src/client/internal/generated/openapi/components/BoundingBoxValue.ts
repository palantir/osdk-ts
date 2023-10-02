import { WithinBoundingBoxPoint } from "./WithinBoundingBoxPoint";

/**
 * The top left and bottom right coordinate points that make up the bounding box.
 *
 */
export type BoundingBoxValue = { topLeft: WithinBoundingBoxPoint; bottomRight: WithinBoundingBoxPoint; };
