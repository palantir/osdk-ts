import type { ActionTypeIdentifier } from "../ActionTypeIdentifier.js";
import type { InlineActionDisplayOptions } from "../InlineActionDisplayOptions.js";
import type { ParameterId } from "../ParameterId.js";
export interface InlineActionTypeModification {
	actionTypeIdentifier: ActionTypeIdentifier;
	displayOptions: InlineActionDisplayOptions;
	parameterId: ParameterId | undefined;
}
