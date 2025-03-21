import type { ValidationRuleIdInRequest } from "../ValidationRuleIdInRequest.js";
import type { ValidationRuleModification } from "../ValidationRuleModification.js";
/**
* Internal version of ValidationRuleModification.
*/
export interface ValidationRuleModificationWithIdInRequest {
	idInRequest: ValidationRuleIdInRequest;
	validationRuleModification: ValidationRuleModification;
}
