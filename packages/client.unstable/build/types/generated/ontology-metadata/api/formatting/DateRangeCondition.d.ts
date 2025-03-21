import type { ValueReference } from "./ValueReference.js";
import type { ValueReferenceOrStringConstant } from "./ValueReferenceOrStringConstant.js";
export interface DateRangeCondition {
	property: ValueReference;
	since: ValueReferenceOrStringConstant | undefined;
	until: ValueReferenceOrStringConstant | undefined;
}
