import type { OntologyVersion } from "../OntologyVersion.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
export interface SharedPropertyTypeLoadAuditRecord {
	sharedPropertyTypeRid: SharedPropertyTypeRid;
	ontologyVersion: OntologyVersion;
}
