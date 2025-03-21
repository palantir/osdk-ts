import type { ActionTypeSortBy } from "./ActionTypeSortBy.js";
import type { ActionTypeSortOrder } from "./ActionTypeSortOrder.js";
/**
* Sort order for ActionTypes.
*/
export interface ActionTypeSort {
	sortBy: ActionTypeSortBy;
	order: ActionTypeSortOrder;
}
