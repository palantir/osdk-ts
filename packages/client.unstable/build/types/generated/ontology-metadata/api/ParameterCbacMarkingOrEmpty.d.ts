import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterCbacMarking } from "./ParameterCbacMarking.js";
export interface ParameterCbacMarkingOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterCbacMarkingOrEmpty_cbacMarking {
	type: "cbacMarking";
	cbacMarking: ParameterCbacMarking;
}
/**
* Allows values that satisfy the cbacMarking max classification. If empty, it will only allow empty values.
*/
export type ParameterCbacMarkingOrEmpty = ParameterCbacMarkingOrEmpty_empty | ParameterCbacMarkingOrEmpty_cbacMarking;
