import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterCbacMarkingModification } from "./ParameterCbacMarkingModification.js";
export interface ParameterCbacMarkingOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterCbacMarkingOrEmptyModification_cbacMarking {
	type: "cbacMarking";
	cbacMarking: ParameterCbacMarkingModification;
}
/**
* Allows values that satisfy the cbacMarking max classification. If empty, it will only allow empty values.
*/
export type ParameterCbacMarkingOrEmptyModification = ParameterCbacMarkingOrEmptyModification_empty | ParameterCbacMarkingOrEmptyModification_cbacMarking;
