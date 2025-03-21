import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { ActionTypeVersion } from "../ActionTypeVersion.js";
export interface UpdatedActionTypeAuditRecord {
	actionTypeRid: ActionTypeRid;
	version: ActionTypeVersion;
}
