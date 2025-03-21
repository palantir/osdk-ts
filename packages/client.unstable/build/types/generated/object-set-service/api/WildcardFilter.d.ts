import type { PropertyId } from "./PropertyId.js";
/**
* This filter does not analyze the query string.
*
* An object matches a WildcardFilter iff the tokens of the provided property matches the term with a wildcard
* suffix.
*
* For example, a query with value "The Quick Brown F" will search for tokens which match "The Quick Brown F*".
* If searched on a property with the default analyzer with value "The Quick Brown Fox", it will not match
* as the value tokens are ["the", "quick", "brown", "fox"].
* It is recommended to use filter only against properties which support exact matches.
*
* If no property is provided, this filter will consider the tokens for all properties.
*/
export interface WildcardFilter {
	propertyId: PropertyId | undefined;
	term: string;
}
