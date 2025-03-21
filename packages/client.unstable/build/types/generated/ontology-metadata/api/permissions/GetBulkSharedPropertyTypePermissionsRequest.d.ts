import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
/**
* Bulk request to get the operations the user has on the provided SharedPropertyTypes. Limited to 500 entries
* per request.
*/
export interface GetBulkSharedPropertyTypePermissionsRequest {
	sharedPropertyTypeRids: Array<SharedPropertyTypeRid>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
