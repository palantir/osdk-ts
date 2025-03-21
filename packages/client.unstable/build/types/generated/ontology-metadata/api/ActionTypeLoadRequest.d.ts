import type { ActionTypeRid } from "./ActionTypeRid.js";
/**
* Request to batch load ActionTypes.
*/
export interface ActionTypeLoadRequest {
	actionTypes: Array<ActionTypeRid>;
}
