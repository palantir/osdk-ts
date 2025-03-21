import type { LinkTypeId } from "../LinkTypeId.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface LinkTypeLoadAuditRecord {
	linkTypeRid: LinkTypeRid;
	linkTypeId: LinkTypeId;
	ontologyVersion: OntologyVersion;
}
