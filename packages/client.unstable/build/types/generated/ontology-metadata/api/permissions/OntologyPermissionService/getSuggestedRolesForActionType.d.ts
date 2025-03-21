import { type ConjureContext } from "conjure-lite";
import type { ActionTypeRid } from "../../ActionTypeRid.js";
import type { GetSuggestedRolesResponse } from "../GetSuggestedRolesResponse.js";
/**
* Returns the ids of the users that are suggested to have the editor or owner role on the ActionType.
*
* The suggestions are based on what operations each user has on the ActionType and its referenced ObjectTypes.
*
* If the requested object type already has roles applied, `RolesAreAlreadyAppliedToEntity` will be thrown.
*
* This endpoint requires the `ontology:update-entity-roles` operation on the ActionTypeRid and
* full editor capabilities on each ObjectType referenced in the ActionType.
*/
export declare function getSuggestedRolesForActionType(ctx: ConjureContext, actionTypeRid: ActionTypeRid): Promise<GetSuggestedRolesResponse>;
