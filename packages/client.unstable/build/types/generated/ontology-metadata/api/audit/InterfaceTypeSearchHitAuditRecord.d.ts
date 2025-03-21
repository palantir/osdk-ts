import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface InterfaceTypeSearchHitAuditRecord {
	interfaceTypeRid: InterfaceTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
