import type { NoRetentionPolicy } from "./NoRetentionPolicy.js";
import type { TimeBasedRetentionPolicy } from "./TimeBasedRetentionPolicy.js";
export interface RetentionPolicy_time {
	type: "time";
	time: TimeBasedRetentionPolicy;
}
export interface RetentionPolicy_none {
	type: "none";
	none: NoRetentionPolicy;
}
export type RetentionPolicy = RetentionPolicy_time | RetentionPolicy_none;
