import type { AggregationFilterValue } from "./AggregationFilterValue.js";
import type { PropertyId } from "./PropertyId.js";
/**
* An object matches iff the value of the provided property is exactly equal to one of the provided terms.
*
* If the property is of string type, it should have `supportsExactMatching` set to true on the object type definition in OMS.
*
* Throws if no terms are provided.
*/
export interface ExactMatchAggregationFilter {
	propertyId: PropertyId;
	terms: Array<AggregationFilterValue>;
}
