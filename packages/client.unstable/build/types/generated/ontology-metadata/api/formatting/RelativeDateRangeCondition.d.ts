import type { RelativePointInTime } from "./RelativePointInTime.js";
import type { TimeZoneId } from "./TimeZoneId.js";
import type { ValueReference } from "./ValueReference.js";
export interface RelativeDateRangeCondition {
	property: ValueReference;
	sinceRelative: RelativePointInTime | undefined;
	untilRelative: RelativePointInTime | undefined;
	timeZoneId: TimeZoneId;
}
