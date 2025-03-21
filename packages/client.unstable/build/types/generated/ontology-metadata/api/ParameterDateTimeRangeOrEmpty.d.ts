import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterDateTimeRange } from "./ParameterDateTimeRange.js";
export interface ParameterDateTimeRangeOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterDateTimeRangeOrEmpty_datetime {
	type: "datetime";
	datetime: ParameterDateTimeRange;
}
export type ParameterDateTimeRangeOrEmpty = ParameterDateTimeRangeOrEmpty_empty | ParameterDateTimeRangeOrEmpty_datetime;
