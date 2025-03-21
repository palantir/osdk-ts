import type { BoundType } from "./BoundType.js";
import type { FilterValue } from "./FilterValue.js";
/**
* The bounds of a range filter.
*/
export interface Bound {
	value: FilterValue;
	type: BoundType;
}
