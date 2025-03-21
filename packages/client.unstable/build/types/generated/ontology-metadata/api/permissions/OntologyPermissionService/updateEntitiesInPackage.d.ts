import { type ConjureContext } from "conjure-lite";
import type { OntologyPackageRid } from "../../OntologyPackageRid.js";
import type { UpdateEntitiesInPackageRequest } from "../UpdateEntitiesInPackageRequest.js";
import type { UpdateEntitiesInPackageResponse } from "../UpdateEntitiesInPackageResponse.js";
/**
* Adds or removes entities to/from the specified package.
*
* Note that for ObjectTypes, LinkTypes and ActionTypes that are not yet using roles, this will throw an error.
*
* All entities must belong to the same ontology.
*
* The requested package must have been created in the same ontology as the entities to add/remove.
*
* Requires `ontology:move-into-package` on the owning rid corresponding to the package.
* Requires `ontology:update-entity-roles` on the entity rid.
*/
export declare function updateEntitiesInPackage(ctx: ConjureContext, packageRid: OntologyPackageRid, request: UpdateEntitiesInPackageRequest): Promise<UpdateEntitiesInPackageResponse>;
