import { type ConjureContext } from "conjure-lite";
import type { ObjectTypeRid } from "../../ObjectTypeRid.js";
import type { GetSuggestedRolesResponse } from "../GetSuggestedRolesResponse.js";
/**
* Returns the ids of the users that are suggested to have the editor or owner role on the ObjectType.
*
* The suggestions are based on what operations each user has on the ObjectType and its backing dataset(s).
*
* If the requested object type already has roles applied, `RolesAreAlreadyAppliedToEntity` will be thrown.
*
* This endpoint requires the `ontology:update-entity-roles` operation on the ObjectTypeRid and
* `ontology:unrestrict-from-datasource` operation on each dataset rid backing the ObjectType.
*/
export declare function getSuggestedRolesForObjectType(ctx: ConjureContext, objectTypeRid: ObjectTypeRid): Promise<GetSuggestedRolesResponse>;
