import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { OwningRid } from "./OwningRid.js";
export interface GetActionTypeUsageRequest {
	actionTypeRid: ActionTypeRid;
	owningRid: OwningRid | undefined;
	startDay: string | undefined;
	endDay: string | undefined;
}
