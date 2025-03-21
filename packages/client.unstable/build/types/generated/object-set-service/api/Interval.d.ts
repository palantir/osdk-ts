import type { TimeUnit } from "./TimeUnit.js";
/**
* A date or time interval.
*/
export interface Interval {
	value: number;
	unit: TimeUnit;
}
