import type { OntologyIrObjectParameterStructFieldValue } from "./OntologyIrObjectParameterStructFieldValue.js";
import type { OntologyIrObjectParameterStructListFieldValue } from "./OntologyIrObjectParameterStructListFieldValue.js";
export interface OntologyIrStructFieldPrefill_objectParameterStructFieldValue {
	type: "objectParameterStructFieldValue";
	objectParameterStructFieldValue: OntologyIrObjectParameterStructFieldValue;
}
export interface OntologyIrStructFieldPrefill_objectParameterStructListFieldValue {
	type: "objectParameterStructListFieldValue";
	objectParameterStructListFieldValue: OntologyIrObjectParameterStructListFieldValue;
}
/**
* StructFieldPrefill specifies what should initially suggested to users for a struct parameter's field.
*/
export type OntologyIrStructFieldPrefill = OntologyIrStructFieldPrefill_objectParameterStructFieldValue | OntologyIrStructFieldPrefill_objectParameterStructListFieldValue;
