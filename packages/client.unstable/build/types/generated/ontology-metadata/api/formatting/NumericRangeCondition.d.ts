import type { ValueReference } from "./ValueReference.js";
import type { ValueReferenceOrDoubleConstant } from "./ValueReferenceOrDoubleConstant.js";
export interface NumericRangeCondition {
	property: ValueReference;
	from: ValueReferenceOrDoubleConstant | undefined;
	until: ValueReferenceOrDoubleConstant | undefined;
}
