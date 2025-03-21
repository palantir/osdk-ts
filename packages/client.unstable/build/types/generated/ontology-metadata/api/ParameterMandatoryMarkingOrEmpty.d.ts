import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterMandatoryMarking } from "./ParameterMandatoryMarking.js";
export interface ParameterMandatoryMarkingOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterMandatoryMarkingOrEmpty_mandatoryMarking {
	type: "mandatoryMarking";
	mandatoryMarking: ParameterMandatoryMarking;
}
export type ParameterMandatoryMarkingOrEmpty = ParameterMandatoryMarkingOrEmpty_empty | ParameterMandatoryMarkingOrEmpty_mandatoryMarking;
