import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterValueOneOf } from "./ParameterValueOneOf.js";
export interface ParameterValueOneOfOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterValueOneOfOrEmpty_oneOf {
	type: "oneOf";
	oneOf: ParameterValueOneOf;
}
export type ParameterValueOneOfOrEmpty = ParameterValueOneOfOrEmpty_empty | ParameterValueOneOfOrEmpty_oneOf;
