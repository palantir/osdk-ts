import type { LinkTypeEntityMetadataLoadAuditRecord } from "./LinkTypeEntityMetadataLoadAuditRecord.js";
import type { ObjectTypeEntityMetadataLoadAuditRecord } from "./ObjectTypeEntityMetadataLoadAuditRecord.js";
export interface LoadEntityMetadataAuditRecord {
	objectTypes: Array<ObjectTypeEntityMetadataLoadAuditRecord>;
	linkTypes: Array<LinkTypeEntityMetadataLoadAuditRecord>;
}
