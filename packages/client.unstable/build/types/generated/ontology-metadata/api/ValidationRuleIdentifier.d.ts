import type { ValidationRuleIdInRequest } from "./ValidationRuleIdInRequest.js";
import type { ValidationRuleRid } from "./ValidationRuleRid.js";
export interface ValidationRuleIdentifier_rid {
	type: "rid";
	rid: ValidationRuleRid;
}
export interface ValidationRuleIdentifier_validationRuleIdInRequest {
	type: "validationRuleIdInRequest";
	validationRuleIdInRequest: ValidationRuleIdInRequest;
}
/**
* A type to uniquely identify a validation rule in an ActionType.
*/
export type ValidationRuleIdentifier = ValidationRuleIdentifier_rid | ValidationRuleIdentifier_validationRuleIdInRequest;
