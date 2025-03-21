import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterMultipassUserModification } from "./ParameterMultipassUserModification.js";
export interface ParameterMultipassUserOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterMultipassUserOrEmptyModification_user {
	type: "user";
	user: ParameterMultipassUserModification;
}
export type ParameterMultipassUserOrEmptyModification = ParameterMultipassUserOrEmptyModification_empty | ParameterMultipassUserOrEmptyModification_user;
