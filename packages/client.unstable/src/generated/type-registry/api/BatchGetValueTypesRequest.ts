/**/
import type { ValueTypeReference } from "./ValueTypeReference.js";

/**
 * Request to get multiple Value Type Rids at once. If more than 500 VersionedValueTypeReferences are provided in request,
 * service will throw an error.
 * 
 * Any requested references or descendant referenced types which the user does not have permission to view
 * will be ommitted from the response.
 */
export interface BatchGetValueTypesRequest {
valueTypes: Array<ValueTypeReference>;
returnReferencedTypes: boolean | undefined;
}