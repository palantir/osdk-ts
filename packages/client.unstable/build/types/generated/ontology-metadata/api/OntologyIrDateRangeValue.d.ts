import type { OntologyIrConditionValue } from "./OntologyIrConditionValue.js";
import type { RelativeDateRangeValue } from "./RelativeDateRangeValue.js";
import type { NowValue } from "./types/NowValue.js";
export interface OntologyIrDateRangeValue_fixed {
	type: "fixed";
	fixed: OntologyIrConditionValue;
}
export interface OntologyIrDateRangeValue_relative {
	type: "relative";
	relative: RelativeDateRangeValue;
}
export interface OntologyIrDateRangeValue_now {
	type: "now";
	now: NowValue;
}
export type OntologyIrDateRangeValue = OntologyIrDateRangeValue_fixed | OntologyIrDateRangeValue_relative | OntologyIrDateRangeValue_now;
