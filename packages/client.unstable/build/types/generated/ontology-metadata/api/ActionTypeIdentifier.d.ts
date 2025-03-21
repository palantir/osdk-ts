import type { ActionTypeIdInRequest } from "./ActionTypeIdInRequest.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
export interface ActionTypeIdentifier_rid {
	type: "rid";
	rid: ActionTypeRid;
}
export interface ActionTypeIdentifier_actionTypeIdInRequest {
	type: "actionTypeIdInRequest";
	actionTypeIdInRequest: ActionTypeIdInRequest;
}
/**
* A type to uniquely identify an ActionType.
*/
export type ActionTypeIdentifier = ActionTypeIdentifier_rid | ActionTypeIdentifier_actionTypeIdInRequest;
