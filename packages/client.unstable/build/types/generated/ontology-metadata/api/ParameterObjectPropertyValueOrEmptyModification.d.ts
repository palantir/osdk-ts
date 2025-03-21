import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectPropertyValueModification } from "./ParameterObjectPropertyValueModification.js";
export interface ParameterObjectPropertyValueOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterObjectPropertyValueOrEmptyModification_objectPropertyValue {
	type: "objectPropertyValue";
	objectPropertyValue: ParameterObjectPropertyValueModification;
}
/**
* Allows values that satisfy the objectPropertyValue. If empty, it will only allow empty values.
*/
export type ParameterObjectPropertyValueOrEmptyModification = ParameterObjectPropertyValueOrEmptyModification_empty | ParameterObjectPropertyValueOrEmptyModification_objectPropertyValue;
