import type { StructElementName } from "./StructElementName.js";
import type { ValueTypeDataConstraintModification } from "./ValueTypeDataConstraintModification.js";
export interface StructTypeConstraintWithUnknownStructElementsError {
	invalidDataConstraint: ValueTypeDataConstraintModification;
	unknownElementNames: Array<StructElementName>;
}
