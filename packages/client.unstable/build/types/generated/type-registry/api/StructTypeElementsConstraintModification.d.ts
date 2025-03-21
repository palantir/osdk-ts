import type { DataConstraintModification } from "./DataConstraintModification.js";
import type { StructElementName } from "./StructElementName.js";
/**
* Map of constraints declared on struct elements keyed by the struct field (element) name.
*/
export type StructTypeElementsConstraintModification = Record<StructElementName, DataConstraintModification>;
