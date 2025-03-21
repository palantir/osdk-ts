import type { OntologyVersion } from "../OntologyVersion.js";
import type { RelationId } from "../RelationId.js";
import type { RelationRid } from "../RelationRid.js";
export interface RelationLoadAuditRecord {
	relationRid: RelationRid;
	relationId: RelationId;
	ontologyVersion: OntologyVersion;
}
