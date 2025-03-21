import type { OntologyPackageRid } from "../OntologyPackageRid.js";
import type { OntologyPackageMetadata } from "./OntologyPackageMetadata.js";
/**
* Response to a request to get packages for the specified package Rids.
*/
export interface BatchGetPackagesResponse {
	ontologyPackageMetadata: Record<OntologyPackageRid, OntologyPackageMetadata>;
}
