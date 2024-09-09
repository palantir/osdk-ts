/**/
import type { StructFieldIdentifier } from "./StructFieldIdentifier.js";
import type { ValueTypeReference } from "./ValueTypeReference.js";

/**
 * Map of value types declared on struct elements keyed by the struct field identifier.
 */
export type StructTypeV2ElementsConstraint = Record<StructFieldIdentifier, ValueTypeReference>;
