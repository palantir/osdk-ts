import type { MultiMatchFilterOperator } from "./MultiMatchFilterOperator.js";
import type { PropertySet } from "./PropertySet.js";
/**
* An object matches a MultiMatchFilter iff any of the fields matches the query, or in the case where a
* property whitelist is provided - iff any of the specifed fields matches the query.
*/
export interface MultiMatchFilter {
	query: string;
	propertySet: PropertySet;
	fuzzy: boolean;
	operator: MultiMatchFilterOperator | undefined;
}
