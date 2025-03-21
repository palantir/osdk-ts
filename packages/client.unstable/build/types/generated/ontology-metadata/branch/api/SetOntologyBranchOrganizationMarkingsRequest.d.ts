import type { OntologyBranchRid } from "../../api/OntologyBranchRid.js";
import type { OrganizationRid } from "../../api/OrganizationRid.js";
/**
* Request to associate given set of OrganizationRids with the specified OntologyBranchRid(s).
* Users should have permissions to modify the specified OntologyBranchRid(s) and also have
* relevant permissions to apply the specified organizations' markings.
* An empty set of organizations is not permissible.
*/
export interface SetOntologyBranchOrganizationMarkingsRequest {
	organizationRidByOntologyBranchRid: Record<OntologyBranchRid, Array<OrganizationRid>>;
}
