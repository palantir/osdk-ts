import type { ActionTypeIdentifier } from "./ActionTypeIdentifier.js";
import type { ParameterId } from "./ParameterId.js";
/**
* Some ParameterPrefill(s) are referencing ParameterId(s) that do not exist on the ActionType.
*/
export interface NonExistentParametersUsedInParameterPrefillError {
	actionTypeIdentifier: ActionTypeIdentifier;
	parameterIds: Array<ParameterId>;
}
