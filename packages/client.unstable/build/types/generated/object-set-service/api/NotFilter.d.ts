import type { ObjectSetFilter } from "./ObjectSetFilter.js";
/**
* An object matches a NotFilter iff it does not match the provided filter.
*/
export interface NotFilter {
	filter: ObjectSetFilter;
}
