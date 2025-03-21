import type { ObjectTypeLoadAuditRecord } from "./ObjectTypeLoadAuditRecord.js";
import type { RelationLoadAuditRecord } from "./RelationLoadAuditRecord.js";
export interface OntologyLoadAuditRecord {
	objectTypes: Array<ObjectTypeLoadAuditRecord>;
	relations: Array<RelationLoadAuditRecord>;
}
