import type { ConditionValueModification } from "./ConditionValueModification.js";
import type { RelativeDateRangeValue } from "./RelativeDateRangeValue.js";
import type { NowValue } from "./types/NowValue.js";
export interface DateRangeValueModification_fixed {
	type: "fixed";
	fixed: ConditionValueModification;
}
export interface DateRangeValueModification_relative {
	type: "relative";
	relative: RelativeDateRangeValue;
}
export interface DateRangeValueModification_now {
	type: "now";
	now: NowValue;
}
export type DateRangeValueModification = DateRangeValueModification_fixed | DateRangeValueModification_relative | DateRangeValueModification_now;
