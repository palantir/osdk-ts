import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectPropertyValue } from "./ParameterObjectPropertyValue.js";
export interface ParameterObjectPropertyValueOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterObjectPropertyValueOrEmpty_objectPropertyValue {
	type: "objectPropertyValue";
	objectPropertyValue: ParameterObjectPropertyValue;
}
/**
* Allows values that satisfy the objectPropertyValue. If empty, it will only allow empty values.
*/
export type ParameterObjectPropertyValueOrEmpty = ParameterObjectPropertyValueOrEmpty_empty | ParameterObjectPropertyValueOrEmpty_objectPropertyValue;
