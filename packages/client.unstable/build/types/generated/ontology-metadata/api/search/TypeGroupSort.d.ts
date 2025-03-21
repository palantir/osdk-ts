import type { TypeGroupSortBy } from "./TypeGroupSortBy.js";
import type { TypeGroupSortOrder } from "./TypeGroupSortOrder.js";
/**
* Sort order for TypeGroups.
*/
export interface TypeGroupSort {
	sortBy: TypeGroupSortBy;
	order: TypeGroupSortOrder;
}
