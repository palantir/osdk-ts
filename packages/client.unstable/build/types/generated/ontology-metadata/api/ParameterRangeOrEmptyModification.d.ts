import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterRangeModification } from "./ParameterRangeModification.js";
export interface ParameterRangeOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterRangeOrEmptyModification_range {
	type: "range";
	range: ParameterRangeModification;
}
export type ParameterRangeOrEmptyModification = ParameterRangeOrEmptyModification_empty | ParameterRangeOrEmptyModification_range;
