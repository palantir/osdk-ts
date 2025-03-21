import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { FilterValue } from "./FilterValue.js";
/**
* See com.palantir.object.set.api.ExactMatchFilter.
*/
export interface ExactMatchFilter {
	property: PropertyTypeRid;
	values: Array<FilterValue>;
}
