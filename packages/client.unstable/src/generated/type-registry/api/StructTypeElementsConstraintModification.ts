/**/
import type { StructElementName } from "./StructElementName.js";
import type { DataConstraintModification } from "./DataConstraintModification.js";

/**
 * Map of constraints declared on struct elements keyed by the struct field (element) name.
 */
export type StructTypeElementsConstraintModification = Record<StructElementName, DataConstraintModification>;
