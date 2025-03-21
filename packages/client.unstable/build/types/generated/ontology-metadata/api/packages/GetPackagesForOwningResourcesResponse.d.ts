import type { OntologyPackageMetadata } from "./OntologyPackageMetadata.js";
/**
* Response to a request to get packages for the specified owning resources.
*/
export interface GetPackagesForOwningResourcesResponse {
	ontologyPackageMetadata: Array<OntologyPackageMetadata>;
}
