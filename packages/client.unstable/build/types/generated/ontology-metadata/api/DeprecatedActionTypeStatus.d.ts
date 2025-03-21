import type { ActionTypeRid } from "./ActionTypeRid.js";
/**
* This status indicates that the ActionType is reaching the end of its life and will be removed as per the deadline specified.
*/
export interface DeprecatedActionTypeStatus {
	message: string;
	deadline: string;
	replacedBy: ActionTypeRid | undefined;
}
