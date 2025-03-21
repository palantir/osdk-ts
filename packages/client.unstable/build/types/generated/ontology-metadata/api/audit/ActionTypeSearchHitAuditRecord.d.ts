import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface ActionTypeSearchHitAuditRecord {
	actionTypeRid: ActionTypeRid;
	ontologyVersion: OntologyVersion;
	ontologyRid: OntologyRid;
}
