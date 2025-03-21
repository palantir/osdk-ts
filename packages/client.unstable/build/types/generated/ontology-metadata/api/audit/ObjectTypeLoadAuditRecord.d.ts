import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface ObjectTypeLoadAuditRecord {
	objectTypeRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId;
	ontologyVersion: OntologyVersion;
}
