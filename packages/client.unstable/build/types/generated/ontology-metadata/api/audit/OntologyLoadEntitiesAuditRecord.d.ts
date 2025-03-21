import type { LinkTypeLoadAuditRecord } from "./LinkTypeLoadAuditRecord.js";
import type { ObjectTypeLoadAuditRecord } from "./ObjectTypeLoadAuditRecord.js";
export interface OntologyLoadEntitiesAuditRecord {
	objectTypes: Array<ObjectTypeLoadAuditRecord>;
	linkTypes: Array<LinkTypeLoadAuditRecord>;
}
