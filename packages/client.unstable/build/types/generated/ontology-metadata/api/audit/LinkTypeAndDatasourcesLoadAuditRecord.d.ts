import type { DatasourceRid } from "../DatasourceRid.js";
import type { LinkTypeId } from "../LinkTypeId.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface LinkTypeAndDatasourcesLoadAuditRecord {
	linkTypeRid: LinkTypeRid;
	linkTypeId: LinkTypeId;
	ontologyVersion: OntologyVersion;
	datasourceRids: Array<DatasourceRid>;
}
