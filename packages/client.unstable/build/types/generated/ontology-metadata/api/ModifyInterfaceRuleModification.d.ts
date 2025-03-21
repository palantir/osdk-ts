import type { ParameterId } from "./ParameterId.js";
import type { SharedPropertyTypeLogicRuleValueModification } from "./SharedPropertyTypeLogicRuleValueModification.js";
import type { SharedPropertyTypeStructFieldLogicRuleValueModification } from "./SharedPropertyTypeStructFieldLogicRuleValueModification.js";
export interface ModifyInterfaceRuleModification {
	interfaceObjectToModify: ParameterId;
	sharedPropertyTypeLogicRuleValueModifications: Array<SharedPropertyTypeLogicRuleValueModification>;
	sharedPropertyTypeStructFieldLogicRuleValueModifications: Array<SharedPropertyTypeStructFieldLogicRuleValueModification>;
}
