import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { AuditFoundryObjectVersionList } from "./AuditFoundryObjectVersionList.js";
/**
* A list of {@link AuditFoundryObjectVersionList}s together with their associated object type.
*/
export interface AuditFoundryObjectList {
	objectTypeRid: ObjectTypeRid;
	objectVersions: Array<AuditFoundryObjectVersionList>;
}
