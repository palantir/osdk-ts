/**/
import type { StructFieldIdentifier } from "./StructFieldIdentifier.js";

/**
 * A struct field identifier referenced in the top-level constraints map did not match any struct field
 * identifiers in the top-level base type map.
 */
export interface StructFieldIdentifierInConstraintsNotFoundInBaseTypeError {
missingFieldIdentifiers: Array<StructFieldIdentifier>;
}