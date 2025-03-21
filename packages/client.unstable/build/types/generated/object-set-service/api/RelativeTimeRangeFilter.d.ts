import type { PropertyId } from "./PropertyId.js";
/**
* An object matches a RelativeTimeRangeFilter iff the value of the provided timestamp property is within the provided time range.
*/
export interface RelativeTimeRangeFilter {
	propertyId: PropertyId;
	sinceRelativeMillis: number | undefined;
	untilRelativeMillis: number | undefined;
}
