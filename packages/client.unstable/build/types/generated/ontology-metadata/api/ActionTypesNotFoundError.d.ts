import type { ActionTypeRid } from "./ActionTypeRid.js";
/**
* ActionTypes were not found.
*/
export interface ActionTypesNotFoundError {
	actionTypeRids: Array<ActionTypeRid>;
}
