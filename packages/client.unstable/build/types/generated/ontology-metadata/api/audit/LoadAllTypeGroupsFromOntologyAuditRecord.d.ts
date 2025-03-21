import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
export interface LoadAllTypeGroupsFromOntologyAuditRecord {
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
	typeGroupRids: Array<TypeGroupRid>;
}
