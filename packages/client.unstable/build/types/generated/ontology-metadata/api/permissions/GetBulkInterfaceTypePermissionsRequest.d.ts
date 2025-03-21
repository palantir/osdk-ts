import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
/**
* Bulk request to get the operations the user has on the provided InterfaceTypes. Limited to 500 entries
* per request.
*/
export interface GetBulkInterfaceTypePermissionsRequest {
	interfaceTypeRids: Array<InterfaceTypeRid>;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
