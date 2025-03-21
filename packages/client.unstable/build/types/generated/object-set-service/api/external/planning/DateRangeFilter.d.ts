import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { Bound } from "./Bound.js";
/**
* An object matches a DateRange iff the value of the provided date property is within the provided time range. The specified bounds will always have DateFilterValue as values. At least one of the bounds is guaranteed to be present.
*/
export interface DateRangeFilter {
	property: PropertyTypeRid;
	lowerBound: Bound | undefined;
	upperBound: Bound | undefined;
}
