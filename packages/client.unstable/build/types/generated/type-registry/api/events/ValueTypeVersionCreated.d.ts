import type { PermissioningRid } from "../PermissioningRid.js";
import type { ValueTypeRid } from "../ValueTypeRid.js";
import type { ValueTypeVersionId } from "../ValueTypeVersionId.js";
export interface ValueTypeVersionCreated {
	permissioningRid: PermissioningRid;
	valueTypeRid: ValueTypeRid;
	valueTypeVersionId: ValueTypeVersionId;
}
