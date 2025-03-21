import type { DelegateToAllowedStructFieldValues } from "./DelegateToAllowedStructFieldValues.js";
import type { MustBeEmpty } from "./MustBeEmpty.js";
export interface ParameterStructOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterStructOrEmpty_delegateToAllowedStructFieldValues {
	type: "delegateToAllowedStructFieldValues";
	delegateToAllowedStructFieldValues: DelegateToAllowedStructFieldValues;
}
/**
* Allowed values that satisfy struct parameters. If empty, it will only allow empty values. Otherwise, indicates
* that AllowedStructFieldValues for each struct field should be checked.
*/
export type ParameterStructOrEmpty = ParameterStructOrEmpty_empty | ParameterStructOrEmpty_delegateToAllowedStructFieldValues;
