import type { ArrayTypeElementsUniqueConstraint } from "./ArrayTypeElementsUniqueConstraint.js";
import type { ArrayTypeSizeConstraint } from "./ArrayTypeSizeConstraint.js";
import type { DataConstraint } from "./DataConstraint.js";
export interface ArrayTypeDataConstraints {
	size: ArrayTypeSizeConstraint | undefined;
	elementsConstraint: DataConstraint | undefined;
	elementsUnique: ArrayTypeElementsUniqueConstraint | undefined;
}
