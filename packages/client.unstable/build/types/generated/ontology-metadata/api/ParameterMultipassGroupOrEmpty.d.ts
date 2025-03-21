import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterMultipassGroup } from "./ParameterMultipassGroup.js";
export interface ParameterMultipassGroupOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterMultipassGroupOrEmpty_group {
	type: "group";
	group: ParameterMultipassGroup;
}
export type ParameterMultipassGroupOrEmpty = ParameterMultipassGroupOrEmpty_empty | ParameterMultipassGroupOrEmpty_group;
