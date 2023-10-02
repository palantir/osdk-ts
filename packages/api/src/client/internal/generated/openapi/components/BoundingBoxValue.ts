import { WithinBoundingBoxPoint } from "./WithinBoundingBoxPoint";

/**
 * The top left and bottom right coordinate points that make up the bounding box.
 *
 */
export interface BoundingBoxValue {
    topLeft: WithinBoundingBoxPoint;
    bottomRight: WithinBoundingBoxPoint;
}
