import type { ActionType } from "./ActionType.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
/**
* Response to ActionTypeLoadRequest and ActionTypeLoadAllRequest.
*/
export interface ActionTypeLoadResponse {
	actionTypes: Record<ActionTypeRid, ActionType>;
}
