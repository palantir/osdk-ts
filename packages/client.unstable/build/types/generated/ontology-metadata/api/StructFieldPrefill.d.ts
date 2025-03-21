import type { ObjectParameterStructFieldValue } from "./ObjectParameterStructFieldValue.js";
import type { ObjectParameterStructListFieldValue } from "./ObjectParameterStructListFieldValue.js";
export interface StructFieldPrefill_objectParameterStructFieldValue {
	type: "objectParameterStructFieldValue";
	objectParameterStructFieldValue: ObjectParameterStructFieldValue;
}
export interface StructFieldPrefill_objectParameterStructListFieldValue {
	type: "objectParameterStructListFieldValue";
	objectParameterStructListFieldValue: ObjectParameterStructListFieldValue;
}
/**
* StructFieldPrefill specifies what should initially suggested to users for a struct parameter's field.
*/
export type StructFieldPrefill = StructFieldPrefill_objectParameterStructFieldValue | StructFieldPrefill_objectParameterStructListFieldValue;
