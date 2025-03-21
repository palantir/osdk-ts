import type { BaseType } from "./BaseType.js";
import type { ExampleValue } from "./ExampleValue.js";
import type { ValueTypeDataConstraintModification } from "./ValueTypeDataConstraintModification.js";
export interface CreateValueTypeVersionRequestV2 {
	baseType: BaseType;
	constraints: Array<ValueTypeDataConstraintModification>;
	exampleValues: Array<ExampleValue>;
}
