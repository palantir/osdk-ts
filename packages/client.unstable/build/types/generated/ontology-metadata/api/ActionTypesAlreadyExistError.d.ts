import type { ActionTypeRid } from "./ActionTypeRid.js";
/**
* There was an attempt to create ActionTypes that already exist.
*/
export interface ActionTypesAlreadyExistError {
	actionTypeRids: Array<ActionTypeRid>;
}
