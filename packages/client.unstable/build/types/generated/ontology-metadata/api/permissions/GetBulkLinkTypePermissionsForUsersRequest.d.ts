import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { GetBulkLinkTypePermissionsForUsersQuery } from "./GetBulkLinkTypePermissionsForUsersQuery.js";
/**
* Bulk request for checking permissions for multiple users and link types.
*/
export interface GetBulkLinkTypePermissionsForUsersRequest {
	queries: Array<GetBulkLinkTypePermissionsForUsersQuery>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
