import type { ActionType } from "./ActionType.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
export interface ActionTypeModifyResponse {
	createdActionTypes: Array<ActionType>;
	updatedActionTypes: Record<ActionTypeRid, ActionType>;
}
