import { type ConjureContext } from "conjure-lite";
import type { LinkTypeRid } from "../../LinkTypeRid.js";
import type { GetSuggestedRolesDatasourceResponse } from "../GetSuggestedRolesDatasourceResponse.js";
/**
* Returns the ids of the principals that are suggested to have the editor or owner role on the many to many link type.
*
* The suggestions are based on what operations each principal has on the the backing dataset.
*
* If the requested link type already has roles applied, `RolesAreAlreadyAppliedToEntity` will be thrown.
*
* This endpoint requires the `ontology:update-entity-roles` operation on the LinkTypeRid and
* `ontology:unrestrict-from-datasource` operation on the dataset rid backing the LinkTypeRid.
*/
export declare function getSuggestedRolesForManyToManyLinkTypeDatasource(ctx: ConjureContext, linkTypeRid: LinkTypeRid): Promise<GetSuggestedRolesDatasourceResponse>;
