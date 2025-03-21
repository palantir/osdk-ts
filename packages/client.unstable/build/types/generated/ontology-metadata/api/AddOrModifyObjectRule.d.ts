import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldLogicRuleValue } from "./StructFieldLogicRuleValue.js";
import type { StructFieldRid } from "./StructFieldRid.js";
export interface AddOrModifyObjectRule {
	objectTypeId: ObjectTypeId;
	propertyValues: Record<PropertyTypeId, LogicRuleValue>;
	structFieldValues: Record<PropertyTypeId, Record<StructFieldRid, StructFieldLogicRuleValue>>;
}
