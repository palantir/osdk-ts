import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { StringFilterValue } from "../../StringFilterValue.js";
/**
* See com.palantir.object.set.api.PrefixOnLastTokenFilter.
*/
export interface PrefixOnLastTokenFilter {
	property: PropertyTypeRid;
	query: StringFilterValue;
}
