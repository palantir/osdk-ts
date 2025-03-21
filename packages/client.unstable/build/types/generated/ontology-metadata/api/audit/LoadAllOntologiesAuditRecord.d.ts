import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface LoadAllOntologiesAuditRecord {
	ontologies: Record<OntologyRid, OntologyVersion>;
}
