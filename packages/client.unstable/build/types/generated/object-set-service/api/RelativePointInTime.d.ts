import type { RelativeTimeUnit } from "./RelativeTimeUnit.js";
/**
* A point in time specified in terms of distance from the time of query.
*/
export interface RelativePointInTime {
	value: number;
	timeUnit: RelativeTimeUnit;
}
