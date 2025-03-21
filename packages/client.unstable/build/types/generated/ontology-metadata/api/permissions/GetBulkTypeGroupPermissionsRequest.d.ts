import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
/**
* Bulk request to get the operations the user has on the provided TypeGroups. Limited to 500 entries
* per request.
*/
export interface GetBulkTypeGroupPermissionsRequest {
	typeGroupRids: Array<TypeGroupRid>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
