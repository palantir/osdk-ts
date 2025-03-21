import type { ActionType } from "./ActionType.js";
/**
* Response to ActionTypeLoadVersionedRequest.
*/
export interface ActionTypeLoadVersionedResponse {
	actionTypes: Array<ActionType>;
}
