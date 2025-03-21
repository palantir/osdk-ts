import type { LinkTypeAndDatasourcesLoadAuditRecord } from "./LinkTypeAndDatasourcesLoadAuditRecord.js";
import type { ObjectTypeAndDatasourcesLoadAuditRecord } from "./ObjectTypeAndDatasourcesLoadAuditRecord.js";
export interface EntityLoadByDatasourceRecord_objectTypeAndDatasources {
	type: "objectTypeAndDatasources";
	objectTypeAndDatasources: ObjectTypeAndDatasourcesLoadAuditRecord;
}
export interface EntityLoadByDatasourceRecord_linkTypeAndDatasources {
	type: "linkTypeAndDatasources";
	linkTypeAndDatasources: LinkTypeAndDatasourcesLoadAuditRecord;
}
export type EntityLoadByDatasourceRecord = EntityLoadByDatasourceRecord_objectTypeAndDatasources | EntityLoadByDatasourceRecord_linkTypeAndDatasources;
