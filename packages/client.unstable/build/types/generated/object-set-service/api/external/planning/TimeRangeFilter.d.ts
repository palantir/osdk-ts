import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { Bound } from "./Bound.js";
/**
* An object matches a TimeRange iff the value of the provided date property is within the provided time range. The specified bounds will always have TimestampFilterValue as values. At least one of the bounds is guaranteed to be present.
*/
export interface TimeRangeFilter {
	property: PropertyTypeRid;
	lowerBound: Bound | undefined;
	upperBound: Bound | undefined;
}
