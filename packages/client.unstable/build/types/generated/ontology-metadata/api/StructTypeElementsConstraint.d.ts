import type { DataConstraints } from "./DataConstraints.js";
import type { StructFieldIdentifier } from "./types/StructFieldIdentifier.js";
/**
* Map of constraints declared on struct elements keyed by the struct field identifier.
*/
export type StructTypeElementsConstraint = Record<StructFieldIdentifier, DataConstraints>;
