import type { StructListParameterFieldValue } from "./StructListParameterFieldValue.js";
import type { StructParameterFieldValue } from "./StructParameterFieldValue.js";
export interface StructFieldLogicRuleValueModification_structParameterFieldValue {
	type: "structParameterFieldValue";
	structParameterFieldValue: StructParameterFieldValue;
}
export interface StructFieldLogicRuleValueModification_structListParameterFieldValue {
	type: "structListParameterFieldValue";
	structListParameterFieldValue: StructListParameterFieldValue;
}
/**
* Modification objects for LogicRuleValues that are allowed for struct fields.
*/
export type StructFieldLogicRuleValueModification = StructFieldLogicRuleValueModification_structParameterFieldValue | StructFieldLogicRuleValueModification_structListParameterFieldValue;
