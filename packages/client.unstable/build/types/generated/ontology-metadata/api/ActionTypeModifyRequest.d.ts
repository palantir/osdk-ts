import type { ActionsVersion } from "./ActionsVersion.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { EditActionTypeRequest } from "./EditActionTypeRequest.js";
import type { PutActionTypeRequest } from "./PutActionTypeRequest.js";
/**
* Request used to modify ActionTypes.
*/
export interface ActionTypeModifyRequest {
	createActionTypes: Array<PutActionTypeRequest>;
	deleteActionTypes: Array<ActionTypeRid>;
	editActionTypes: Record<ActionTypeRid, EditActionTypeRequest>;
	actionsVersion: ActionsVersion | undefined;
}
