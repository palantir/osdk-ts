import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterMultipassUser } from "./ParameterMultipassUser.js";
export interface ParameterMultipassUserOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterMultipassUserOrEmpty_user {
	type: "user";
	user: ParameterMultipassUser;
}
export type ParameterMultipassUserOrEmpty = ParameterMultipassUserOrEmpty_empty | ParameterMultipassUserOrEmpty_user;
