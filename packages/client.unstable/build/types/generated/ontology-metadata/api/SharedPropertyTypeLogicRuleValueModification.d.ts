import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { SharedPropertyTypeRidOrIdInRequest } from "./SharedPropertyTypeRidOrIdInRequest.js";
/**
* A pair of SharedPropertyTypeRidOrIdInRequest and the associated LogicRuleValueModification.
*/
export interface SharedPropertyTypeLogicRuleValueModification {
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	logicRuleValueModification: LogicRuleValueModification;
}
