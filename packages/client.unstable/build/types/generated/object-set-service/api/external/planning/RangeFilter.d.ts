import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { Bound } from "./Bound.js";
/**
* See com.palantir.object.set.api.RangeFilter. At least one of the bounds is guaranteed to be present.
*/
export interface RangeFilter {
	property: PropertyTypeRid;
	lowerBound: Bound | undefined;
	upperBound: Bound | undefined;
}
