import type { ValueReferenceOrStringConstant } from "./ValueReferenceOrStringConstant.js";
/**
* Value used for string operators. If there is more than one value in the `values`
* property, the operator will OR all the values.
*/
export interface StringConditionValue {
	values: Array<ValueReferenceOrStringConstant>;
}
