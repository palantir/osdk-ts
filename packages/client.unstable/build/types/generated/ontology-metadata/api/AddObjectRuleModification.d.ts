import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldLogicRuleValueMappingModification } from "./StructFieldLogicRuleValueMappingModification.js";
import type { StructFieldLogicRuleValueModification } from "./StructFieldLogicRuleValueModification.js";
export interface AddObjectRuleModification {
	objectTypeId: ObjectTypeId;
	propertyValues: Record<PropertyTypeId, LogicRuleValueModification>;
	structFieldValues: Record<PropertyTypeId, Record<ObjectTypeFieldApiName, StructFieldLogicRuleValueModification>>;
	structFieldValuesV2: Record<PropertyTypeId, Array<StructFieldLogicRuleValueMappingModification>>;
}
