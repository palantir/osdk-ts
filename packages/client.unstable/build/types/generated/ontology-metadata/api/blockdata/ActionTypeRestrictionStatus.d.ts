import type { OntologyPackageRid } from "../OntologyPackageRid.js";
export interface ActionTypeRestrictionStatus {
	hasRolesApplied: boolean;
	ontologyPackageRid: OntologyPackageRid | undefined;
}
