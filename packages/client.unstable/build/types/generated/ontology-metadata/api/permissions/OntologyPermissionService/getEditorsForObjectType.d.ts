import { type ConjureContext } from "conjure-lite";
import type { GetEditorsForObjectTypeRequest } from "../GetEditorsForObjectTypeRequest.js";
import type { GetEditorsForObjectTypeResponse } from "../GetEditorsForObjectTypeResponse.js";
/**
* Returns the ids of the users who have the editor or owner role on the given ObjectType. Or, in the case of
* restricted ObjectTypes, the users who additionally are editors or owners of the backing dataset(E).
*
* If the requested object type does not exist, an `ObjectTypeRidsNotFound` exception will be thrown.
*
* This endpoint requires the `ontology:admin-get-ontology-entity-editors` permission on OMS's root node.
*/
export declare function getEditorsForObjectType(ctx: ConjureContext, request: GetEditorsForObjectTypeRequest): Promise<GetEditorsForObjectTypeResponse>;
