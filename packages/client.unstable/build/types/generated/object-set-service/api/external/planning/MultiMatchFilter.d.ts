import type { Fuzziness } from "../../Fuzziness.js";
import type { MultiMatchFilterOperator } from "../../MultiMatchFilterOperator.js";
import type { StringFilterValue } from "../../StringFilterValue.js";
import type { PropertySet } from "./PropertySet.js";
/**
* See com.palantir.object.set.api.MultiMatchFilter.
*/
export interface MultiMatchFilter {
	propertySet: PropertySet;
	query: StringFilterValue;
	fuzzy: boolean | undefined;
	fuzziness: Fuzziness | undefined;
	operator: MultiMatchFilterOperator;
}
