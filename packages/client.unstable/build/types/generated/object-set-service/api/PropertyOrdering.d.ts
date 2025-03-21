import type { MultiObjectTypePropertyOrdering } from "./MultiObjectTypePropertyOrdering.js";
import type { SingleObjectTypePropertyOrdering } from "./SingleObjectTypePropertyOrdering.js";
export interface PropertyOrdering_multiObjectTypeProperty {
	type: "multiObjectTypeProperty";
	multiObjectTypeProperty: MultiObjectTypePropertyOrdering;
}
export interface PropertyOrdering_singleObjectTypeProperty {
	type: "singleObjectTypeProperty";
	singleObjectTypeProperty: SingleObjectTypePropertyOrdering;
}
/**
* Ordering which causes objects to be returned in a specific order on the basis of the values of a property.
*/
export type PropertyOrdering = PropertyOrdering_multiObjectTypeProperty | PropertyOrdering_singleObjectTypeProperty;
