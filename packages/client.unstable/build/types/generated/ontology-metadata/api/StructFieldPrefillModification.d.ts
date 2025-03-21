import type { ObjectParameterStructFieldValueModification } from "./ObjectParameterStructFieldValueModification.js";
import type { ObjectParameterStructListFieldValueModification } from "./ObjectParameterStructListFieldValueModification.js";
export interface StructFieldPrefillModification_objectParameterStructFieldValue {
	type: "objectParameterStructFieldValue";
	objectParameterStructFieldValue: ObjectParameterStructFieldValueModification;
}
export interface StructFieldPrefillModification_objectParameterStructListFieldValue {
	type: "objectParameterStructListFieldValue";
	objectParameterStructListFieldValue: ObjectParameterStructListFieldValueModification;
}
/**
* StructFieldPrefillModification specifies what should initially suggested to users for a struct parameter's field.
*/
export type StructFieldPrefillModification = StructFieldPrefillModification_objectParameterStructFieldValue | StructFieldPrefillModification_objectParameterStructListFieldValue;
