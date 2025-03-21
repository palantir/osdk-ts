import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { FilterParameter } from "./FilterParameter.js";
/**
* An object matches an ExactMatchFilter iff the value of the provided property is exactly equal to one of the provided terms.
* If the property is of string type, the index for that property must define a .raw multifield of type keyword.
* If no terms are provided, this filter will match ALL objects.
*/
export interface ParameterizedExactMatchFilter {
	propertyId: PropertyTypeId;
	terms: Array<FilterParameter>;
}
