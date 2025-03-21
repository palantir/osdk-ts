import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { OntologyIrParameterObjectPropertyValue } from "./OntologyIrParameterObjectPropertyValue.js";
export interface OntologyIrParameterObjectPropertyValueOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface OntologyIrParameterObjectPropertyValueOrEmpty_objectPropertyValue {
	type: "objectPropertyValue";
	objectPropertyValue: OntologyIrParameterObjectPropertyValue;
}
/**
* Allows values that satisfy the objectPropertyValue. If empty, it will only allow empty values.
*/
export type OntologyIrParameterObjectPropertyValueOrEmpty = OntologyIrParameterObjectPropertyValueOrEmpty_empty | OntologyIrParameterObjectPropertyValueOrEmpty_objectPropertyValue;
