import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterBoolean } from "./ParameterBoolean.js";
export interface ParameterBooleanOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterBooleanOrEmpty_boolean {
	type: "boolean";
	boolean: ParameterBoolean;
}
export type ParameterBooleanOrEmpty = ParameterBooleanOrEmpty_empty | ParameterBooleanOrEmpty_boolean;
