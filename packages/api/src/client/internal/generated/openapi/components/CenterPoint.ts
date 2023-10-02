import { CenterPointTypes } from "./CenterPointTypes";
import { Distance } from "./Distance";

/**
 * The coordinate point to use as the center of the distance query.
 *
 */
export type CenterPoint = { center: CenterPointTypes; distance: Distance; };
