import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
/**
* Bulk request to get the operations the user has on the provided ActionTypes. Limited to 500 entries per
* request.
*/
export interface GetBulkActionTypePermissionsRequest {
	actionTypeRids: Array<ActionTypeRid>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
