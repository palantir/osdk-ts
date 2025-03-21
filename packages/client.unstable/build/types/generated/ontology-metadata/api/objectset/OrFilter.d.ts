import type { ObjectSetFilter } from "./ObjectSetFilter.js";
/**
* An ObjectSetFilter used to combine multiple ObjectSetFilters.
* An object matches an OrFilter iff it matches at least one of the filters.
*/
export interface OrFilter {
	filters: Array<ObjectSetFilter>;
}
