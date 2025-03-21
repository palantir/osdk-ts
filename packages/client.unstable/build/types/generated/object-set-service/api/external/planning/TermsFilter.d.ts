import type { StringFilterValue } from "../../StringFilterValue.js";
import type { PropertySet } from "./PropertySet.js";
/**
* See com.palantir.object.set.api.TermsFilter.
*/
export interface TermsFilter {
	propertySet: PropertySet;
	terms: Array<StringFilterValue>;
}
