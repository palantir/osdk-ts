import type { ObjectSetFilter } from "./ObjectSetFilter.js";
/**
* An ObjectSetFilter used to combine multiple ObjectSetFilters.
* An object matches an AndFilter iff it matches all of the filters.
*/
export interface AndFilter {
	filters: Array<ObjectSetFilter>;
}
