import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyRid } from "../OntologyRid.js";
export interface OntologyPermissionServiceGetOntologyPermissionsRequestParams {
	request: OntologyRid;
	branchRid: OntologyBranchRid | undefined;
}
