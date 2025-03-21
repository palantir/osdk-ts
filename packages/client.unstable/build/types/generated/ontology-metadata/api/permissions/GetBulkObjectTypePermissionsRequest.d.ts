import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
/**
* Bulk request to get the operations the user has on the provided ObjectTypes. Limited to 500 entries per
* request.
*/
export interface GetBulkObjectTypePermissionsRequest {
	objectTypeRids: Array<ObjectTypeRid>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
