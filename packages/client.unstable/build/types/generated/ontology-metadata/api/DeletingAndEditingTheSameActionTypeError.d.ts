import type { ActionTypeRid } from "./ActionTypeRid.js";
/**
* Trying to simultaneously delete and edit an ActionType
*/
export interface DeletingAndEditingTheSameActionTypeError {
	actionTypeRid: ActionTypeRid;
}
