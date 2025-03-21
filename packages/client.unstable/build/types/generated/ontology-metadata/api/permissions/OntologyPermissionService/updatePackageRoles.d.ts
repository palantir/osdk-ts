import { type ConjureContext } from "conjure-lite";
import type { OntologyPackageRid } from "../../OntologyPackageRid.js";
import type { UpdatePackageRolesRequest } from "../UpdatePackageRolesRequest.js";
import type { UpdatePackageRolesResponse } from "../UpdatePackageRolesResponse.js";
/**
* Updates the roles on the specified package.
*
* Must be a package owned by a compass project.
*
* Requires `ontology:discover-package` on the package rid.
* Requires `ontology:update-ontology-package-roles` on the owning rid corresponding to the package.
*/
export declare function updatePackageRoles(ctx: ConjureContext, packageRid: OntologyPackageRid, request: UpdatePackageRolesRequest): Promise<UpdatePackageRolesResponse>;
