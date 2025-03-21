import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
* no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
* If no terms are provided, this filter will match ALL objects.
*/
export interface TermsFilter {
	propertyId: PropertyTypeId | undefined;
	terms: Array<any>;
}
