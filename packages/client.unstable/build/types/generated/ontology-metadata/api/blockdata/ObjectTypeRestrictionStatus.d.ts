import type { OntologyPackageRid } from "../OntologyPackageRid.js";
export interface ObjectTypeRestrictionStatus {
	restrictedByDatasources: boolean;
	editRestrictedByDatasources: boolean;
	ontologyPackageRid: OntologyPackageRid | undefined;
}
