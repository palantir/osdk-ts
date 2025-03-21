import type { ValueReference } from "./ValueReference.js";
import type { ValueReferenceOrDatetimeConstant } from "./ValueReferenceOrDatetimeConstant.js";
export interface TimestampRangeCondition {
	property: ValueReference;
	from: ValueReferenceOrDatetimeConstant | undefined;
	until: ValueReferenceOrDatetimeConstant | undefined;
}
