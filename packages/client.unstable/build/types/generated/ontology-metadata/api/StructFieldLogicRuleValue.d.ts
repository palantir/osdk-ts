import type { StructListParameterFieldValue } from "./StructListParameterFieldValue.js";
import type { StructParameterFieldValue } from "./StructParameterFieldValue.js";
export interface StructFieldLogicRuleValue_structParameterFieldValue {
	type: "structParameterFieldValue";
	structParameterFieldValue: StructParameterFieldValue;
}
export interface StructFieldLogicRuleValue_structListParameterFieldValue {
	type: "structListParameterFieldValue";
	structListParameterFieldValue: StructListParameterFieldValue;
}
/**
* LogicRuleValues that are allowed for struct fields.
*/
export type StructFieldLogicRuleValue = StructFieldLogicRuleValue_structParameterFieldValue | StructFieldLogicRuleValue_structListParameterFieldValue;
