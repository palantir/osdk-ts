import type { ExampleValue } from "./ExampleValue.js";
import type { ValueTypeDataConstraintModification } from "./ValueTypeDataConstraintModification.js";
export interface CreateValueTypeVersionRequest {
	constraints: Array<ValueTypeDataConstraintModification>;
	exampleValues: Array<ExampleValue>;
}
