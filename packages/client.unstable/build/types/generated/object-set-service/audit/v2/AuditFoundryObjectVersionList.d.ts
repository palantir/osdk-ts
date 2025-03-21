import type { ObjectVersion } from "../../api/ObjectVersion.js";
import type { AuditFoundryObject } from "./AuditFoundryObject.js";
/**
* A list of {@link AuditFoundryObject}s together with their associated object type.
*/
export interface AuditFoundryObjectVersionList {
	version: ObjectVersion;
	objects: Array<AuditFoundryObject>;
}
