/**/
import type { ValueTypeReference } from "./ValueTypeReference.js";
import type { ValueTypeIdInRequest } from "./ValueTypeIdInRequest.js";
export interface ValueTypeReferenceOrIdInRequest_reference {
type: "reference";
reference: ValueTypeReference
}

export interface ValueTypeReferenceOrIdInRequest_idInRequest {
type: "idInRequest";
idInRequest: ValueTypeIdInRequest
}
/**
 * Used when you want to refer to a collection of Value Types where some Value Types are already created and
 * some are being created in the same request. For example, used for struct value type creation where some
 * constraints may reference a struct field's value type being created at the same time.
 */
export type ValueTypeReferenceOrIdInRequest = ValueTypeReferenceOrIdInRequest_reference | ValueTypeReferenceOrIdInRequest_idInRequest