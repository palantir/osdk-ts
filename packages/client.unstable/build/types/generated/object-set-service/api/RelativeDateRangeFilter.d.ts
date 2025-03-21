import type { PropertyId } from "./PropertyId.js";
import type { RelativePointInTime } from "./RelativePointInTime.js";
import type { TimeZoneId } from "./TimeZoneId.js";
/**
* An object matches a RelativeDateRangeFilter iff the value of the provided date property is within the provided time range.
*/
export interface RelativeDateRangeFilter {
	propertyId: PropertyId;
	sinceRelativePointInTime: RelativePointInTime | undefined;
	untilRelativePointInTime: RelativePointInTime | undefined;
	timeZoneId: TimeZoneId;
}
