import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterRange } from "./ParameterRange.js";
export interface ParameterRangeOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterRangeOrEmpty_range {
	type: "range";
	range: ParameterRange;
}
export type ParameterRangeOrEmpty = ParameterRangeOrEmpty_empty | ParameterRangeOrEmpty_range;
