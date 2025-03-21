import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Request to load LinkTypeEntityMetadata of a LinkType.
*/
export interface LinkTypeEntityMetadataLoadRequest {
	linkTypeRid: LinkTypeRid;
	ontologyVersion: OntologyVersion | undefined;
	branch: OntologyBranchRid | undefined;
}
