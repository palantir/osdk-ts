import type { RelativeDateRangeTense } from "./RelativeDateRangeTense.js";
import type { TemporalUnit } from "./types/TemporalUnit.js";
export interface RelativeDateRangeValue {
	duration: number;
	unit: TemporalUnit;
	tense: RelativeDateRangeTense;
}
