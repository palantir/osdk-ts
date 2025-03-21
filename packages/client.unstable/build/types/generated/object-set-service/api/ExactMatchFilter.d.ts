import type { PropertyId } from "./PropertyId.js";
/**
* An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
* If the property is of string type, it should have `supportsExactMatching` set to true on the object type definition in OMS.
* If no terms are provided, this filter will match ALL objects.
*/
export interface ExactMatchFilter {
	propertyId: PropertyId;
	terms: Array<any>;
}
