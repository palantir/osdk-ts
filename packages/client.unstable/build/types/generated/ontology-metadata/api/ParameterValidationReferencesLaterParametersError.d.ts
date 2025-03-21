import type { ActionTypeIdentifier } from "./ActionTypeIdentifier.js";
import type { ParameterId } from "./ParameterId.js";
export interface ParameterValidationReferencesLaterParametersError {
	actionTypeIdentifier: ActionTypeIdentifier;
	idsToIdsReferencedTooEarly: Record<ParameterId, Array<ParameterId>>;
}
