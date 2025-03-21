import type { OntologyPackageRid } from "../OntologyPackageRid.js";
export interface LinkTypeRestrictionStatus {
	restrictedByDatasources: boolean;
	ontologyPackageRid: OntologyPackageRid | undefined;
	editRestrictedByDatasources: boolean;
}
