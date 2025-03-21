import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { ActionTypeVersion } from "../ActionTypeVersion.js";
export interface CreatedActionTypeAuditRecord {
	actionTypeRid: ActionTypeRid;
	version: ActionTypeVersion;
}
