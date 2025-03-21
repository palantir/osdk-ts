import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface ObjectTypeSearchHitAuditRecord {
	objectTypeRid: ObjectTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
