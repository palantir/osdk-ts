/**/
import type { StructFieldIdentifier } from "./StructFieldIdentifier.js";

/**
 * The base type of a struct field as defined in the top-level base type does not match the base type of a
 * struct field as defined in the top-level constraint's value type.
 */
export interface StructFieldBaseTypeAndConstraintBaseTypesDoNotMatchError {
mismatchedFieldIdentifiers: Array<StructFieldIdentifier>;
}