import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
/**
* Bulk request to get the operations the user has on the provided LinkTypes. Limited to 500 entries per
* request.
*/
export interface GetBulkLinkTypePermissionsRequest {
	linkTypeRids: Array<LinkTypeRid>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
