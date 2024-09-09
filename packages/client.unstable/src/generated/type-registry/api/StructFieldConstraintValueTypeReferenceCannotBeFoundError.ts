/**/
import type { ValueTypeReference } from "./ValueTypeReference.js";
import type { ValueTypeIdInRequest } from "./ValueTypeIdInRequest.js";

/**
 * A value type reference or `IdInRequest` from in the top-level struct constraints map cannot be found. Any
 * value type IDs referenced in the request must be present in the same creation request.
 */
export interface StructFieldConstraintValueTypeReferenceCannotBeFoundError {
referencesNotFound: Array<ValueTypeReference>;
idsInRequestNotFound: Array<ValueTypeIdInRequest>;
}