import type { ConditionValue } from "./ConditionValue.js";
import type { RelativeDateRangeValue } from "./RelativeDateRangeValue.js";
import type { NowValue } from "./types/NowValue.js";
export interface DateRangeValue_fixed {
	type: "fixed";
	fixed: ConditionValue;
}
export interface DateRangeValue_relative {
	type: "relative";
	relative: RelativeDateRangeValue;
}
export interface DateRangeValue_now {
	type: "now";
	now: NowValue;
}
export type DateRangeValue = DateRangeValue_fixed | DateRangeValue_relative | DateRangeValue_now;
