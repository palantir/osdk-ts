import type { ActionTypeIdentifier } from "./ActionTypeIdentifier.js";
import type { ParameterId } from "./ParameterId.js";
/**
* Some ParameterIds are not matching between ActionType and ParameterOrdering
*/
export interface ParametersDoNotMatchParameterOrderingError {
	actionTypeIdentifier: ActionTypeIdentifier;
	mismatchedParameterIds: Array<ParameterId>;
}
