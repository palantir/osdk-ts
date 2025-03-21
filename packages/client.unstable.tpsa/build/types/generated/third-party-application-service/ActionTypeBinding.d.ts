import type { ActionTypeApiName } from "./ActionTypeApiName.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
export interface ActionTypeBinding {
	localRid: ActionTypeRid;
	boundApiName: ActionTypeApiName;
}
