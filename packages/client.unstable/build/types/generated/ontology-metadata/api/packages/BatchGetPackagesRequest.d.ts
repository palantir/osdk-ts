import type { OntologyPackageRid } from "../OntologyPackageRid.js";
/**
* Request to get packages for the specified packageRids. At most 100 packageRids can be requested per
* call.
*/
export interface BatchGetPackagesRequest {
	packageRids: Array<OntologyPackageRid>;
}
