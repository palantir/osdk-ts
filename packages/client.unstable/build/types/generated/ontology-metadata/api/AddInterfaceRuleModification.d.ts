import type { InterfaceTypeRidOrIdInRequest } from "./InterfaceTypeRidOrIdInRequest.js";
import type { ParameterId } from "./ParameterId.js";
import type { SharedPropertyTypeLogicRuleValueModification } from "./SharedPropertyTypeLogicRuleValueModification.js";
import type { SharedPropertyTypeStructFieldLogicRuleValueModification } from "./SharedPropertyTypeStructFieldLogicRuleValueModification.js";
export interface AddInterfaceRuleModification {
	interfaceTypeRidOrIdInRequest: InterfaceTypeRidOrIdInRequest;
	objectType: ParameterId;
	sharedPropertyTypeLogicRuleValueModifications: Array<SharedPropertyTypeLogicRuleValueModification>;
	sharedPropertyTypeStructFieldLogicRuleValueModifications: Array<SharedPropertyTypeStructFieldLogicRuleValueModification>;
}
