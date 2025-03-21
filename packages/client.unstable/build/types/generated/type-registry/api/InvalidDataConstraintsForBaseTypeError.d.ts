import type { BaseType } from "./BaseType.js";
import type { DataConstraintModification } from "./DataConstraintModification.js";
export interface InvalidDataConstraintsForBaseTypeError {
	baseType: BaseType;
	invalidDataConstraints: Array<DataConstraintModification>;
}
