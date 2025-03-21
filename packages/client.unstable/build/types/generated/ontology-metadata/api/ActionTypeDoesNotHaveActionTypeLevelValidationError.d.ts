import type { ActionTypeIdentifier } from "./ActionTypeIdentifier.js";
/**
* Every ActionType must contain at least one ActionType level validation in order to ensure that they are being
* secured.
*/
export interface ActionTypeDoesNotHaveActionTypeLevelValidationError {
	actionTypeIdentifier: ActionTypeIdentifier;
}
