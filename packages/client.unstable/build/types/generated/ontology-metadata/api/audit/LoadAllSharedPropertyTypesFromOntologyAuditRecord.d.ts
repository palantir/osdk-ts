import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
export interface LoadAllSharedPropertyTypesFromOntologyAuditRecord {
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
	sharedPropertyTypeRids: Array<SharedPropertyTypeRid>;
}
