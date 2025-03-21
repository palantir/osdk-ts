import type { OntologyVersion } from "../OntologyVersion.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
export interface TypeGroupLoadAuditRecord {
	typeGroupRid: TypeGroupRid;
	ontologyVersion: OntologyVersion;
}
