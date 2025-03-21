import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { ActionTypeVersion } from "../ActionTypeVersion.js";
export interface LoadActionTypeAuditRecord {
	actionTypeRid: ActionTypeRid;
	version: ActionTypeVersion;
}
