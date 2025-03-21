import type { InterfaceTypeLoadAuditRecord } from "./InterfaceTypeLoadAuditRecord.js";
import type { LinkTypeAndDatasourcesLoadAuditRecord } from "./LinkTypeAndDatasourcesLoadAuditRecord.js";
import type { ObjectTypeAndDatasourcesLoadAuditRecord } from "./ObjectTypeAndDatasourcesLoadAuditRecord.js";
import type { SharedPropertyTypeLoadAuditRecord } from "./SharedPropertyTypeLoadAuditRecord.js";
import type { TypeGroupLoadAuditRecord } from "./TypeGroupLoadAuditRecord.js";
export interface OntologyBulkLoadEntitiesAuditRecord {
	objectTypes: Array<ObjectTypeAndDatasourcesLoadAuditRecord>;
	linkTypes: Array<LinkTypeAndDatasourcesLoadAuditRecord>;
	sharedPropertyTypes: Array<SharedPropertyTypeLoadAuditRecord>;
	interfaceTypes: Array<InterfaceTypeLoadAuditRecord>;
	typeGroups: Array<TypeGroupLoadAuditRecord>;
}
