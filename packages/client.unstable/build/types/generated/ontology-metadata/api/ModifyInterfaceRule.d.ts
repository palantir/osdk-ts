import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { ParameterId } from "./ParameterId.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
import type { StructFieldLogicRuleValue } from "./StructFieldLogicRuleValue.js";
import type { StructFieldRid } from "./StructFieldRid.js";
export interface ModifyInterfaceRule {
	interfaceObjectToModify: ParameterId;
	sharedPropertyValues: Record<SharedPropertyTypeRid, LogicRuleValue>;
	structFieldValues: Record<SharedPropertyTypeRid, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}
