import type { ActionTypeIdentifier } from "./ActionTypeIdentifier.js";
import type { ParameterId } from "./ParameterId.js";
/**
* Parameter validation not found for the specified ParameterId
*/
export interface ParameterValidationNotFoundError {
	actionTypeIdentifier: ActionTypeIdentifier;
	parameterId: ParameterId;
}
