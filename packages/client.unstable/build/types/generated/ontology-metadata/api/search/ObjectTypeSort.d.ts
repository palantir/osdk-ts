import type { ObjectTypeSortBy } from "./ObjectTypeSortBy.js";
import type { ObjectTypeSortOrder } from "./ObjectTypeSortOrder.js";
/**
* Sort order for ObjectTypes.
*/
export interface ObjectTypeSort {
	sortBy: ObjectTypeSortBy;
	order: ObjectTypeSortOrder;
}
