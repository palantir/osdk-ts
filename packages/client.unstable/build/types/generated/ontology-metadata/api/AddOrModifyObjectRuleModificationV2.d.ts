import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { ParameterId } from "./ParameterId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldLogicRuleValueMappingModification } from "./StructFieldLogicRuleValueMappingModification.js";
import type { StructFieldLogicRuleValueModification } from "./StructFieldLogicRuleValueModification.js";
export interface AddOrModifyObjectRuleModificationV2 {
	objectToModify: ParameterId;
	propertyValues: Record<PropertyTypeId, LogicRuleValueModification>;
	structFieldValues: Record<PropertyTypeId, Record<ObjectTypeFieldApiName, StructFieldLogicRuleValueModification>>;
	structFieldValuesV2: Record<PropertyTypeId, Array<StructFieldLogicRuleValueMappingModification>>;
}
