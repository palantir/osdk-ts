import type { DatasourceRid } from "../DatasourceRid.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface ObjectTypeAndDatasourcesLoadAuditRecord {
	objectTypeRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId;
	ontologyVersion: OntologyVersion;
	datasourceRids: Array<DatasourceRid>;
}
