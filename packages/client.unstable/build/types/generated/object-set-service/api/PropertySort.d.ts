import type { PropertyId } from "./PropertyId.js";
import type { SortOrder } from "./SortOrder.js";
/**
* Describes how an object set should be sorted by a property.
*
* For array properties, ASCENDING order compares the min element of the arrays, DESCENDING the max.
*/
export interface PropertySort {
	propertyId: PropertyId;
	sortOrder: SortOrder;
}
