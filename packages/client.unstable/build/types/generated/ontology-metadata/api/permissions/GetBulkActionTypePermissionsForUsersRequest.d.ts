import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { GetBulkActionTypePermissionsForUsersQuery } from "./GetBulkActionTypePermissionsForUsersQuery.js";
/**
* Bulk request for checking permissions for multiple users and action types.
*/
export interface GetBulkActionTypePermissionsForUsersRequest {
	queries: Array<GetBulkActionTypePermissionsForUsersQuery>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
