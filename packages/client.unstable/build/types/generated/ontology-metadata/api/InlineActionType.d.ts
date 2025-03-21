import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { InlineActionDisplayOptions } from "./InlineActionDisplayOptions.js";
import type { ParameterId } from "./ParameterId.js";
export interface InlineActionType {
	rid: ActionTypeRid;
	displayOptions: InlineActionDisplayOptions;
	parameterId: ParameterId | undefined;
}
