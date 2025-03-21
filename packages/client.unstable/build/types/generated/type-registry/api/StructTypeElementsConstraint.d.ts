import type { DataConstraint } from "./DataConstraint.js";
import type { StructElementName } from "./StructElementName.js";
/**
* Map of constraints declared on struct elements keyed by the struct field (element) name.
*/
export type StructTypeElementsConstraint = Record<StructElementName, DataConstraint>;
