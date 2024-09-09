/**/
import type { ValueTypeDataConstraintModification } from "./ValueTypeDataConstraintModification.js";
import type { StructElementName } from "./StructElementName.js";
export interface StructTypeConstraintWithUnknownStructElementsError {
invalidDataConstraint: ValueTypeDataConstraintModification;
unknownElementNames: Array<StructElementName>;
}