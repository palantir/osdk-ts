import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldLogicRuleValue } from "./StructFieldLogicRuleValue.js";
import type { StructFieldRid } from "./StructFieldRid.js";
export interface ModifyObjectRule {
	objectToModify: ParameterId;
	propertyValues: Record<PropertyTypeId, LogicRuleValue>;
	structFieldValues: Record<PropertyTypeId, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}
