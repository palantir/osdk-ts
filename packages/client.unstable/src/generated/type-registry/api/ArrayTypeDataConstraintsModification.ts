/**/
import type { ArrayTypeSizeConstraint } from "./ArrayTypeSizeConstraint.js";
import type { DataConstraintModification } from "./DataConstraintModification.js";
import type { ArrayTypeElementsUniqueConstraint } from "./ArrayTypeElementsUniqueConstraint.js";
export interface ArrayTypeDataConstraintsModification {
size: ArrayTypeSizeConstraint | undefined;
elementsConstraint: DataConstraintModification | undefined;
elementsUnique: ArrayTypeElementsUniqueConstraint | undefined;
}