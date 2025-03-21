import type { ValueReference } from "./ValueReference.js";
import type { ValueReferenceOrDoubleConstant } from "./ValueReferenceOrDoubleConstant.js";
export interface ExactNumericMatchCondition {
	property: ValueReference;
	value: ValueReferenceOrDoubleConstant;
}
