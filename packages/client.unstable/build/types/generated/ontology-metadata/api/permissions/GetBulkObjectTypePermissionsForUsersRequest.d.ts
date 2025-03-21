import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { GetBulkObjectTypePermissionsForUsersQuery } from "./GetBulkObjectTypePermissionsForUsersQuery.js";
/**
* Bulk request for checking permissions for multiple users and object types.
*/
export interface GetBulkObjectTypePermissionsForUsersRequest {
	queries: Array<GetBulkObjectTypePermissionsForUsersQuery>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
