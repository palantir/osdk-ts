import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
export interface TypeGroupSearchHitAuditRecord {
	typeGroupRid: TypeGroupRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
