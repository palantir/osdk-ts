import type { Interval } from "./Interval.js";
import type { TimeZoneId } from "./TimeZoneId.js";
/**
* Bucketing by a date or time interval.
*/
export interface DateBucketing {
	interval: Interval;
	timeZoneId: TimeZoneId | undefined;
	excludeEmptyBuckets: boolean | undefined;
}
