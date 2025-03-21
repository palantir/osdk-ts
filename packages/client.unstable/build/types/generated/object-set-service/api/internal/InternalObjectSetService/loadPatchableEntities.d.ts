import { type ConjureContext } from "conjure-lite";
import type { LoadPatchableEntitiesRequest } from "../LoadPatchableEntitiesRequest.js";
import type { LoadPatchableEntitiesResponse } from "../LoadPatchableEntitiesResponse.js";
/**
* Executes a "full" load of objects and many-to-many links for patching workflows.
*
* Entities will be loaded in "full", with both visible and invisible to the onBehalfOf user properties, as well
* as all necessary metadata properties necessary for patching workflows in Funnel. Thus, care must be taken
* to never show this entity to the user, as it is loaded without any permission checks. Only the 'actions'
* service user is allowed to use this API.
*
* The API can result in the following errors:
* - NonHighburyEntitiesNotPatchable
* - UnknownEntityTypeRids
* - UnknownPropertyTypeRids
* - PropertyTypeRidsNotPrimaryKey
* - MaxRequestLocatorsExceeded
* - CallerUnauthorized
*/
export declare function loadPatchableEntities(ctx: ConjureContext, onBehalfOf: string, request: LoadPatchableEntitiesRequest): Promise<LoadPatchableEntitiesResponse>;
