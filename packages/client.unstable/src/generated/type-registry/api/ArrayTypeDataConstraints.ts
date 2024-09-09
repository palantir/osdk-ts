/**/
import type { ArrayTypeSizeConstraint } from "./ArrayTypeSizeConstraint.js";
import type { DataConstraint } from "./DataConstraint.js";
import type { ArrayTypeElementsUniqueConstraint } from "./ArrayTypeElementsUniqueConstraint.js";
export interface ArrayTypeDataConstraints {
size: ArrayTypeSizeConstraint | undefined;
elementsConstraint: DataConstraint | undefined;
elementsUnique: ArrayTypeElementsUniqueConstraint | undefined;
}