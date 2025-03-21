import type { PropertyId } from "./PropertyId.js";
/**
* This filter does not analyze the query string.
*
* An object matches a TermsFilter iff the tokens of the provided property match any of the provided terms.
*
* For example, a property with value "The Quick Brown Fox", using the default analyzer, would produce the tokens
* ["the", "quick", "brown", "fox"], and would therefore match a terms filter with "brown" as a term,
* but not one with "Brown" or "Brown Fox" as a term.
* It is recommended to use filter only against properties which support exact matches.
*
* If no property is provided, this filter will consider the tokens for all properties.
* If no terms are provided, this filter will match all objects.
*/
export interface TermsFilter {
	propertyId: PropertyId | undefined;
	terms: Array<any>;
}
