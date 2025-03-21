import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { OntologyIrParameterMultipassUser } from "./OntologyIrParameterMultipassUser.js";
export interface OntologyIrParameterMultipassUserOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface OntologyIrParameterMultipassUserOrEmpty_user {
	type: "user";
	user: OntologyIrParameterMultipassUser;
}
export type OntologyIrParameterMultipassUserOrEmpty = OntologyIrParameterMultipassUserOrEmpty_empty | OntologyIrParameterMultipassUserOrEmpty_user;
