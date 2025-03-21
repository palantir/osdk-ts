import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
export interface SharedPropertyTypeSearchHitAuditRecord {
	sharedPropertyTypeRid: SharedPropertyTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
