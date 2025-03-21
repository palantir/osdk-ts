import { type ConjureContext } from "conjure-lite";
import type { LinkTypeRid } from "../../LinkTypeRid.js";
import type { GetSuggestedRolesResponse } from "../GetSuggestedRolesResponse.js";
/**
* Returns the ids of the users that are suggested to have the editor or owner role on the LinkType.
*
* The suggestions are based on what operations each user has on the LinkType and its backing dataset(s).
*
* If the requested object type already has roles applied, `RolesAreAlreadyAppliedToEntity` will be thrown.
*
* This endpoint requires the `ontology:update-entity-roles` operation on the LinkTypeRid and
* `ontology:unrestrict-from-datasource` operation on each dataset rid backing the LinkTypeRid.
*/
export declare function getSuggestedRolesForLinkType(ctx: ConjureContext, linkTypeRid: LinkTypeRid): Promise<GetSuggestedRolesResponse>;
