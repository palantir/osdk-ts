import type { ArrayTypeElementsUniqueConstraint } from "./ArrayTypeElementsUniqueConstraint.js";
import type { ArrayTypeSizeConstraint } from "./ArrayTypeSizeConstraint.js";
import type { PropertyTypeDataConstraints } from "./PropertyTypeDataConstraints.js";
export interface ArrayTypeDataConstraints {
	size: ArrayTypeSizeConstraint | undefined;
	elementsConstraint: PropertyTypeDataConstraints | undefined;
	elementsUnique: ArrayTypeElementsUniqueConstraint | undefined;
}
