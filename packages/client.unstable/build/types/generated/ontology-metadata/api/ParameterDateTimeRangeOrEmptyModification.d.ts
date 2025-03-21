import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterDateTimeRangeModification } from "./ParameterDateTimeRangeModification.js";
export interface ParameterDateTimeRangeOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterDateTimeRangeOrEmptyModification_datetime {
	type: "datetime";
	datetime: ParameterDateTimeRangeModification;
}
export type ParameterDateTimeRangeOrEmptyModification = ParameterDateTimeRangeOrEmptyModification_empty | ParameterDateTimeRangeOrEmptyModification_datetime;
