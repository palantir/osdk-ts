import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
* no property is provided - iff any of the properties match the provided term.
*/
export interface WildcardFilter {
	propertyId: PropertyTypeId | undefined;
	term: string;
}
