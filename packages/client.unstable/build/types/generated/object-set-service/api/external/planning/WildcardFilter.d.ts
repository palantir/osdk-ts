import type { StringFilterValue } from "../../StringFilterValue.js";
import type { PropertySet } from "./PropertySet.js";
/**
* See com.palantir.object.set.api.WildcardFilter.
*/
export interface WildcardFilter {
	propertySet: PropertySet;
	query: StringFilterValue;
}
