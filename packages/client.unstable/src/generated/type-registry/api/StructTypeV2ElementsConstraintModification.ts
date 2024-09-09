/**/
import type { StructFieldIdentifier } from "./StructFieldIdentifier.js";
import type { ValueTypeReferenceOrIdInRequest } from "./ValueTypeReferenceOrIdInRequest.js";

/**
 * Map of value types declared on struct elements keyed by the struct field identifier.
 */
export type StructTypeV2ElementsConstraintModification = Record<StructFieldIdentifier, ValueTypeReferenceOrIdInRequest>;
