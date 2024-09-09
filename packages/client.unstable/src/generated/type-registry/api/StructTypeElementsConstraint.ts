/**/
import type { StructElementName } from "./StructElementName.js";
import type { DataConstraint } from "./DataConstraint.js";

/**
 * Map of constraints declared on struct elements keyed by the struct field (element) name.
 */
export type StructTypeElementsConstraint = Record<StructElementName, DataConstraint>;
